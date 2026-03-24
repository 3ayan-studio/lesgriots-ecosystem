<script setup lang="ts">
const { locale, t } = useI18n()

const i18nHead = useLocaleHead({
    dir: true,
    lang: true,
    seo: true,
})

useHead(() => ({
    htmlAttrs: {
        lang: i18nHead.value.htmlAttrs.lang,
        dir: "ltr"
    },
    link: i18nHead.value.link,
    meta: i18nHead.value.meta
}))

const { data: siteSettings } = useSanitySiteSettings()
provide('siteSettings', siteSettings)

useSeoMeta({
    titleTemplate: (titleChunk) => {
        const seoTitle = siteSettings.value?.seoTitle?.[locale.value] || t('site.title')
        return titleChunk ? `${titleChunk} - ${seoTitle}` : seoTitle
    },
    ogTitle: siteSettings.value?.seoTitle?.[locale.value] || t('site.ogTitle'),
    description: siteSettings.value?.seoDescription?.[locale.value] || t('site.description'),
    ogDescription: siteSettings.value?.seoDescription?.[locale.value] || t('site.ogDescription'),
    // ogImage
})
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>