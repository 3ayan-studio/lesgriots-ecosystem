import { createClient } from '@sanity/client';

export const client = createClient({
    projectId: process.env.NUXT_SANITY_AGENCY_PROJECT_ID!,
    dataset: process.env.NUXT_SANITY_AGENCY_DATASET!,
    apiVersion: process.env.NUXT_SANITY_AGENCY_API_VERSION || '2024-06-01',
    // usage: false = Fresh data (good for ISR updates)
    // usage: true = Fast cached data (good for pure static sites)
    useCdn: false,
});