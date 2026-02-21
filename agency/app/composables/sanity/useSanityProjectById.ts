import { groq } from '#imports'

export const useSanityProjectById = async (id: string) => {
    const { locale, defaultLocale } = useI18n()

    const query = groq`*[_type == "project" && _id == $id][0]{
        _id,
        "title": coalesce(
            title[_key == $locale][0].value,
            title[_key == $defaultLocale][0].value
        ),
    }`
    // "description": coalesce(description[$locale], description[$defaultLocale]),
    // coverImage,
    // videoUrl

    return await useSanityQuery(query, {
        id,
        locale: locale.value,
        defaultLocale
    })
}