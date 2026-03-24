export default defineEventHandler(async (_) => {
    const storage = useStorage("cache");
    const keys = await storage.getKeys();

    return {
        keys,
    };
});
