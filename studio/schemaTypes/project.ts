import { defineField, defineType } from 'sanity'

export const projectType = defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: { source: 'title' },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'coverImage',
            type: 'image',
            options: { hotspot: true }, // Important for cropping!
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                }
            ]
        }),
        defineField({
            name: 'videoUrl', // Simple MP4 link or YouTube
            type: 'url',
            title: 'Video URL (Optional)',
        }),
    ],
})