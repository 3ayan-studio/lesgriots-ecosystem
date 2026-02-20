import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
    api: {
        projectId: process.env.SANITY_STUDIO_AGENCY_PROJECT_ID,
        dataset: process.env.SANITY_STUDIO_AGENCY_DATASET
    },
    deployment: {
        /**
         * Enable auto-updates for studios.
         * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
         */
        autoUpdates: true,
        appId: process.env.SANITY_STUDIO_AGENCY_STUDIO_APP_ID
    },
    typegen: {
        path: '../agency/composables/sanity/*.{ts,tsx,js,jsx}',
        schema: '../agency/app/utils/sanity-schemas.json',
        generates: '../agency/types/sanity.types.ts',
    }
})