export const purgeCloudflare = async (routes: string[]) => {
    const config = useRuntimeConfig();
    const zoneId = config.cloudflareZoneId;
    const purgeToken = config.cloudflareCachePurgeToken;

    if (!zoneId || !purgeToken) {
        console.warn("⚠️ Cloudflare credentials not set, skipping CDN purge");
        return;
    }

    const baseUrl = process.env.NUXT_BASE_URL || "https://lesgriotsxstudio.com";
    const urls = routes.map((r) => `${baseUrl}${r}`);

    await $fetch(
        `https://api.cloudflare.com/client/v4/zones/${zoneId}/purge_cache`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${purgeToken}`,
            },
            body: { files: urls },
        }
    ).catch((err) => console.error("❌ Cloudflare purge failed:", err));

    console.log(`☁️ Cloudflare purged: ${urls.join(", ")}`);
};
