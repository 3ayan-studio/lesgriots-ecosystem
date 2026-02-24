import { groq } from '#imports'

export const useSanityProjectById = (id: string) => {
    const { locale, defaultLocale } = useI18n()

    const query = groq`*[_type == "project" && _id == $id][0]{
        _id,
        "title": coalesce(
            title[$locale]
            title[$defaultLocale]
        )
    }`
    // "description": coalesce(description[$locale], description[$defaultLocale]),
    // coverImage,
    // videoUrl

    return useSanityQuery(query, {
        id,
        locale: locale.value,
        defaultLocale
    })
}