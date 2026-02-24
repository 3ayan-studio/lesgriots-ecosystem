<script setup lang="ts">
import { type SiteSettings } from '../types/sanity.types'

const { locale } = useI18n()
// const { data: siteSettings } = await useSanitySiteSettings()
// provide('siteSettings', siteSettings)

// console.log(siteSettings.value)
const { data: projects } = await useSanityProjects()
console.log(projects.value)

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
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>