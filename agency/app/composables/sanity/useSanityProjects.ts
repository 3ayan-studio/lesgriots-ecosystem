import { groq } from '#imports'

export const useSanityProjects = async () => {
    const { locale, defaultLocale } = useI18n()

    const query = groq`*[_type == "project"] | order(_createdAt desc) {
        _id,
        "title": coalesce(
            title[_key == $locale][0].value,
            title[_key == $defaultLocale][0].value
        )
    }`

    return await useSanityQuery(query, {
        locale: locale.value,
        defaultLocale
    })
}