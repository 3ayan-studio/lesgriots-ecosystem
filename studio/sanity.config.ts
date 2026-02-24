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
        structureTool({
            structure: (S) =>
                S.list()
                    .title('Content')
                    .items([
                        S.listItem()
                            .title('⚙️ Website Settings')
                            .id('siteSettings')
                            .child(
                                S.document()
                                    .schemaType('siteSettings')
                                    .documentId('siteSettings')
                            ),
                        S.divider(),
                        ...S.documentTypeListItems().filter(
                            (listItem) => !['siteSettings'].includes(listItem.getId()!)
                        ),
                    ]),
        }),
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
