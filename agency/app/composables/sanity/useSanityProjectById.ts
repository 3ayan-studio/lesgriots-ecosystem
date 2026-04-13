import groq, { defineQuery } from 'groq'
import type { ProjectByIdQueryResult } from '../../../shared/types/sanity.types'

export const useSanityProjectById = (id: string) => {
    const { locale, defaultLocale } = useI18n()

    const projectByIdQuery = defineQuery(groq`*[_type == "project" && _id == $id][0]{
        _id,
        "title": coalesce(
            title[$locale],
            title[$defaultLocale]
        )
    }`)

    // "description": coalesce(description[$locale], description[$defaultLocale]),
    // coverImage,
    // videoUrl

    return useSanityQuery<ProjectByIdQueryResult>(projectByIdQuery, {
        id,
        locale: locale.value,
        defaultLocale
    })
}