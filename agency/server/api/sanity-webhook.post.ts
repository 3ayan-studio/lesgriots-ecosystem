import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";
import { purgeCloudflare } from "../utils/cloudflare";

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event);
    const secret = config.sanityAgencyRevalidateSecret;
    if (!secret)
        throw createError({
            statusCode: 500,
            statusMessage: "No secret configured",
        });

    const signature = getHeader(event, SIGNATURE_HEADER_NAME);
    const rawBody = await readRawBody(event);

    if (
        !signature ||
        !rawBody ||
        !isValidSignature(rawBody, signature, secret)
    ) {
        throw createError({
            statusCode: 401,
            statusMessage: "Invalid Sanity signature",
        });
    }

    const body = JSON.parse(rawBody);
    const type: string = body._type;
    const slug: string | undefined = body.slug?.current;

    const storage = useStorage("cache");
    const allCacheKeys = await storage.getKeys();

    const purgeKeysContaining = async (...keywords: string[]) => {
        const keysToPurge = allCacheKeys.filter((key) =>
            keywords.some((kw) => key.includes(kw))
        );
        await Promise.all(keysToPurge.map((key) => storage.removeItem(key)));
        console.log(
            `🧹 Purged ${keysToPurge.length} Nitro cache keys for: ${keywords.join(", ")}`
        );
    };

    const purgeExactRoute = async (route: string) => {
        // transforme '/work' → 'work', '/' → 'index', '/fr' → 'fr'
        const keyword = route === "/" ? "index" : route.replace(/\//g, "");

        const keysToPurge = allCacheKeys.filter((key) => {
            // extrait le nom de fichier sans le hash : 'nitro:routes:_:work.xxxxx.json' → 'work'
            const filename = key.split(":").pop()?.split(".")[0];
            return filename === keyword;
        });

        await Promise.all(keysToPurge.map((key) => storage.removeItem(key)));
    };

    const urlsToRebuild: string[] = [];

    if (type === "work" && slug) {
        await purgeKeysContaining(slug, "work");
        urlsToRebuild.push(
            `/work/${slug}`,
            `/fr/work/${slug}`,
            "/work",
            "/fr/work"
        );


    } else if (type === "work") {
        await purgeKeysContaining("work");
        urlsToRebuild.push("/work", "/fr/work");


    } else if (type === "home") {
        await purgeKeysContaining("index");
        urlsToRebuild.push("/", "/fr");


    } else if (type === "about") {
        await purgeKeysContaining("about");
        urlsToRebuild.push("/about", "/fr/about");


    } else if (type === "settings") {
        await storage.clear();
        urlsToRebuild.push(
            "/",
            "/fr",
            "/about",
            "/fr/about",
            "/work",
            "/fr/work"
        );
    }

    if (urlsToRebuild.length > 0) {
        await purgeCloudflare(urlsToRebuild);
    }

    if (urlsToRebuild.length > 0) {
        const baseUrl =
            process.env.NODE_ENV === "development"
                ? "http://localhost:3000"
                : process.env.NUXT_BASE_URL || "";

        Promise.all(
            urlsToRebuild.map((url) =>
                $fetch(`${baseUrl}${url}`).catch((err) =>
                    console.error(`⚠️ Warm-up failed for ${url}:`, err)
                )
            )
        );
    }

    return {
        success: true,
        message: `Cache handled for type: ${type}`,
        rebuilding: urlsToRebuild,
    };
});
