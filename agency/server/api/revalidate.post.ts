import { createClient } from "@nuxtjs/sanity/runtime/client.js";

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event);

    const secret = config.deploySecret;
    const authHeader = getHeader(event, "authorization");
    if (!secret) {
        console.error("🚨 DEPLOY_SECRET is not set in environment variables!");
        throw createError({ statusCode: 500, statusMessage: "No secret" });
    }

    if (authHeader !== `Bearer ${secret}`) {
        console.warn(
            "🚨 Unauthorized deployment attempt detected. Invalid or missing secret."
        );
        throw createError({
            statusCode: 401,
            statusMessage: "Unauthorized Deployment Request",
        });
    }

    const sanity = createClient({
        projectId: config.sanityAgencyProjectId,
        dataset: config.sanityAgencyDataset,
        apiVersion: config.sanityAgencyApiVersion,
        useCdn: false,
    })

    const storage = useStorage('cache')
    await storage.clear()
    console.log("🧹 Cache fully cleared for new deployment.");

    const baseRoutes = [
        '/', '/fr',
        // '/work', '/fr/work',
        // '/about', '/fr/about'
    ]

    const projects = await sanity.fetch(
        `*[_type == "project"]{ "slug": Slug.current }`
    )

    const dynamicRoutes: string[] = []
    projects.forEach((p: { slug: string }) => {
        dynamicRoutes.push(`/work/${p.slug}`, `/fr/work/${p.slug}`)
    })

    console.log(dynamicRoutes)

    const allRoutesToWarm = [...baseRoutes, ...dynamicRoutes]

    await purgeCloudflare(allRoutesToWarm)

    // We do NOT await these. We fire them into the Nitro engine so they build in the background,
    // allowing the API to respond instantly to your GitHub Action.
    // Promise.all(
    //     allRoutesToWarm.map(url =>
    //         $fetch(`${config.baseUrl}${url}`).catch(err => console.error(`⚠️ Failed to warm ${url}:`, err))
    //     )
    // )

    return {
        success: true,
        message: "Cache wiped. Background rebuild initiated for new release.",
        warmed_routes_count: allRoutesToWarm.length
    };
});
