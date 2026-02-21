export default defineEventHandler(async (event) => {
    // 1. SECURITY: We reuse your Sanity secret or a dedicated deploy secret
    const authHeader = getHeader(event, 'authorization')
    const secret = process.env.DEPLOY_SECRET || process.env.SANITY_WEBHOOK_SECRET
    if (!secret) throw createError({ statusCode: 500, statusMessage: 'No secret' })

    if (authHeader !== `Bearer ${secret}`) {
        throw createError({ statusCode: 401, statusMessage: 'Unauthorized Deployment Request' })
    }

    // 2. CLEAR THE CACHE
    const storage = useStorage('cache')
    await storage.clear()
    console.log('🧹 Cache fully cleared for new deployment.')

    // 3. IDENTIFY ALL ROUTES TO WARM
    // Core static routes:
    const baseRoutes = [
        '/home', '/fr/home',
        '/work', '/fr/work',
        '/about', '/fr/about'
    ]

    // Optional: Fetch your dynamic project slugs from Sanity to warm them too!
    // (You would replace this with your actual Sanity client fetch if you want 100% coverage)
    const dynamicRoutes: string[] = []
    /* Example:
       const projects = await sanityClient.fetch(`*[_type == "project"].slug.current`)
       projects.forEach(slug => {
           dynamicRoutes.push(`/projects/${slug}`, `/fr/projects/${slug}`)
       })
    */

    const allRoutesToWarm = [...baseRoutes, ...dynamicRoutes]

    // 4. TRIGGER BACKGROUND REBUILDS
    // We do NOT await these. We fire them into the Nitro engine so they build in the background,
    // allowing the API to respond instantly to your GitHub Action.
    Promise.all(
        allRoutesToWarm.map(url =>
            $fetch(url).catch(err => console.error(`⚠️ Failed to warm ${url}:`, err))
        )
    )

    return {
        success: true,
        message: 'Cache wiped. Background rebuild initiated for new release.',
        warmed_routes_count: allRoutesToWarm.length
    }
})