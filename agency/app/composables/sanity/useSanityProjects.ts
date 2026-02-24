import { groq } from '#imports'

export const useSanityProjects = () => {
    const { locale, defaultLocale } = useI18n()

    // Array
    // const query = groq`*[_type == "project"] | order(_createdAt desc) {
    //     _id,
    //     "title": coalesce(
    //         title[_key == $locale][0].value,
    //         title[_key == $defaultLocale][0].value
    //     )
    // }`

    // Object
    const query = groq`*[_type == "project"] | order(_createdAt desc) {
        _id,
        "title": coalesce(
            title[$locale],
            title[$defaultLocale]
        )
    }`

    return useSanityQuery(query, {
        locale: locale.value,
        defaultLocale
    })
}