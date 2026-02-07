import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

console.log('Sanity project ID:', process.env.AGENCY_SANITY_PROJECT_ID)

export default defineConfig({
    name: 'default',
    title: 'lesgriots-agency',

    projectId: process.env.SANITY_STUDIO_AGENCY_PROJECT_ID!,
    dataset: process.env.SANITY_STUDIO_AGENCY_DATASET!,

    plugins: [structureTool(), visionTool()],

    schema: {
        types: schemaTypes,
    },
})
