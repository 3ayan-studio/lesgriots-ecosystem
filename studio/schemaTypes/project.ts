import { defineField, defineType } from 'sanity'
import { getObjectTitlePreview } from '../utils/preview'

export const project = defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            title: 'Title',
            name: 'title',
            type: 'localeString',
            validation: (rule) => rule.required(),
        }),
        // defineField({
        //     name: 'title',
        //     type: 'internationalizedArrayString',
        //     validation: (rule) => rule.required(),
        // }),
        defineField({
            name: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                slugify: (value: any) => value.en
                    .toLowerCase()
                    // remove spaces, hyphens and replace with hyphens
                    .replace(/-/g, '')
                    .replace(/\s+/g, '-')
            },
            validation: (rule) => rule.required(),
        }),
        // defineField({
        //     name: 'coverImage',
        //     type: 'image',
        //     options: { hotspot: true }, // Important for cropping!
        //     fields: [
        //         {
        //             name: 'alt',
        //             type: 'string',
        //             title: 'Alternative text',
        //         }
        //     ]
        // }),
        // defineField({
        //     name: 'videoUrl', // Simple MP4 link or YouTube
        //     type: 'url',
        //     title: 'Video URL (Optional)',
        // }),
        // defineField({
        //     name: 'description',
        //     type: 'localeText',
        //     validation: (rule) => rule.required()
        // })
    ],
    preview: {
        select: {
            title: 'title'
        },
        prepare(selection) {
            return {
                title: getObjectTitlePreview(selection.title)
            }
        }
    }
})