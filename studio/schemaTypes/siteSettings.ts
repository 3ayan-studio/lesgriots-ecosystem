import { defineType, defineField } from 'sanity'
import { getObjectTitlePreview } from '../utils/preview'

export const siteSettings = defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        // 🌍 Global SEO
        defineField({
            name: 'seoTitle',
            title: 'Global SEO Title',
            description: 'The default title for the site (e.g., Les Griots Studio)',
            type: 'localeString',
        }),
        defineField({
            name: 'seoDescription',
            title: 'Global SEO Description',
            type: 'localeText',
        }),
        defineField({
            name: 'ogImage',
            title: 'Global Share Image (OG Image)',
            description: 'The image shown when the site is shared on social media',
            type: 'image',
            options: { hotspot: true },
        }),

        // 📱 Social Links
        defineField({
            name: 'socials',
            title: 'Social Media Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'platform', title: 'Platform', type: 'string', options: { list: ['Instagram', 'Twitter', 'LinkedIn'] } },
                        { name: 'url', title: 'URL', type: 'url' }
                    ]
                }
            ]
        }),

        // ⚙️ Other Settings
        defineField({
            name: 'copyrightText',
            title: 'Copyright Text',
            type: 'localeText',
        })
    ],
    preview: {
        select: {
            title: 'seoTitle'
        },
        prepare(selection) {
            return {
                title: getObjectTitlePreview(selection.title)
            }
        }
    }
})