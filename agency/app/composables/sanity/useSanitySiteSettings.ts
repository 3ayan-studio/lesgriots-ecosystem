import { groq } from '#imports'

export const useSanitySiteSettings = () => {
    const { locale, defaultLocale } = useI18n()

    const query = groq`*[_type == "siteSettings"][0]{
        seoTitle,
        seoDescription,
        ogImage,
        socials,
        copyrightText
    }`

    return useSanityQuery(query, {
        locale: locale.value,
        defaultLocale
    })
}