import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { internationalizedArray } from 'sanity-plugin-internationalized-array'

export default defineConfig({
    name: 'default',
    title: 'lesgriots-agency',

    projectId: process.env.SANITY_STUDIO_AGENCY_PROJECT_ID!,
    dataset: process.env.SANITY_STUDIO_AGENCY_DATASET!,

    plugins: [
        structureTool(),
        visionTool(),
        internationalizedArray({
            languages: [
                { id: 'en', title: 'English' },
                { id: 'fr', title: 'Français' }
            ],
            defaultLanguages: ['en'],
            fieldTypes: ['string', 'text'],
            buttonAddAll: false
        })
    ],

    schema: {
        types: schemaTypes,
    },
})
