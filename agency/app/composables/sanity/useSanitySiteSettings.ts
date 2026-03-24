import groq, { defineQuery } from 'groq'
import type { SiteSettingsQueryResult } from '../../../types/sanity.types'

export const useSanitySiteSettings = () => {
    const { locale, defaultLocale } = useI18n()

    const siteSettingsQuery = defineQuery(groq`*[_type == "siteSettings"][0]{
        seoTitle,
        seoDescription,
        ogImage,
        socials,
        copyrightText
    }`)

    return useSanityQuery<SiteSettingsQueryResult>(siteSettingsQuery, {
        locale: locale.value,
        defaultLocale
    })
}