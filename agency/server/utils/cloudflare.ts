export const purgeCloudflare = async (routes: string[]) => {
    const config = useRuntimeConfig();
    const zoneId = config.cloudflareZoneId;
    const purgeToken = config.cloudflareCachePurgeToken;
    const baseUrl = config.baseUrl;

    if (!zoneId || !purgeToken) {
        console.warn("⚠️ Cloudflare credentials not set, skipping CDN purge");
        return;
    }

    if (!baseUrl) {
        console.warn("⚠️ Base URL not set, skipping CDN purge");
        return;
    }

    const urls = routes.map((r) => `${baseUrl}${r}`);

    await $fetch(
        `https://api.cloudflare.com/client/v4/zones/${zoneId}/purge_cache`,
        {
            method: "POST",
            headers: {
                // "Content-Type": "application/json",
                Authorization: `Bearer ${purgeToken}`,
            },
            body: { files: urls },
        }
    ).catch((err) => console.error("❌ Cloudflare purge failed:", err));

    console.log(`☁️ Cloudflare purged: ${urls.join(", ")}`);
};
