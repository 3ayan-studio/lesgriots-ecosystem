import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook'

export default defineEventHandler(async (event) => {
    const secret = process.env.NUXT_SANITY_REVALIDATE_SECRET
    if (!secret) throw createError({ statusCode: 500, statusMessage: 'No secret' })

    const signature = getHeader(event, SIGNATURE_HEADER_NAME)
    const rawBody = await readRawBody(event)

    if (!signature || !rawBody || !isValidSignature(rawBody, signature, secret)) {
        throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
    }

    const body = JSON.parse(rawBody)
    const type = body._type
    const slug = body.slug?.current

    const storage = useStorage('cache')
    const allCacheKeys = await storage.getKeys()
    const urlsToRebuild: string[] = []

    const purgeKeysContaining = async (keyword: string) => {
        const keysToPurge = allCacheKeys.filter(key => key.includes(keyword))
        for (const key of keysToPurge) {
            await storage.removeItem(key)
        }
    }

    if (type === 'work' && slug) {
        await purgeKeysContaining(slug)

        urlsToRebuild.push(`/work/${slug}`, `/fr/work/${slug}`)
        urlsToRebuild.push('/work', '/fr/work')
    }

    else if (type === 'work') {
        // no slug so just work gallery
    }

    else if (type === 'home') {
        await purgeKeysContaining('home')
        urlsToRebuild.push('/home', '/fr/home')
    }

    else if (type === 'about') {
        await purgeKeysContaining('about')
        urlsToRebuild.push('/about', '/fr/about')
    }

    else if (type === 'settings') {
        await storage.clear()


        urlsToRebuild.push(
            '/home', '/fr/home',
            '/about', '/fr/about',
            '/work', '/fr/work'
        )
    }

    if (urlsToRebuild.length > 0) {
        Promise.all(
            urlsToRebuild.map(url =>
                $fetch(url).catch(err => console.error(`Rebuild failed for ${url}:`, err))
            )
        )
    }

    return {
        success: true,
        message: `Cache handled for type: ${type}`,
        rebuilding: urlsToRebuild
    }
})