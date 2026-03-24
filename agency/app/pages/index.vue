<!-- <script setup lang="ts">
definePageMeta({
    middleware: [
        function (_, __) {
            const localePath = useLocalePath()

            // 1. Read the user's saved language preference directly
            const savedLang = useCookie('i18n_redirected').value

            // 2. If no cookie exists yet, fallback to the default 'en'
            const targetLang: 'en' | 'fr' | undefined = savedLang as 'en' | 'fr' | undefined || 'en'

            // 3. FORCE localePath to generate the URL for that specific language
            return navigateTo(localePath('/', targetLang))
        }
    ]
})
</script>

<template>
    <div>Redirecting...</div>
</template> -->

<template>
    <div>
        <button v-for="(locale, index) in locales" :key="index" class="mx-5" :disabled="locale.code === $i18n.locale"
            @click="setLocale(locale.code)">
            {{ locale.name }}
        </button>
        <p>
            <NuxtLinkLocale class="mx-5" to="index">{{ $t('pages.home.title') }}</NuxtLinkLocale>
            <NuxtLinkLocale class="mx-5" to="formation">{{ $t('pages.course.title') }}</NuxtLinkLocale>
        </p>
    </div>
</template>

<script lang="ts" setup>
const { locales, setLocale } = useI18n()
</script>