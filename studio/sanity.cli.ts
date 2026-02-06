import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
    api: {
        projectId: process.env.AGENCY_SANITY_PROJECT_ID,
        dataset: process.env.AGENCY_SANITY_DATASET
    },
    deployment: {
        /**
         * Enable auto-updates for studios.
         * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
         */
        autoUpdates: true,
        appId: process.env.AGENCY_SANITY_STUDIO_APP_ID
    }
})