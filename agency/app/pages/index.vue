<script setup lang="ts">
definePageMeta({
    middleware: [
        function (to, from) {
            const localePath = useLocalePath()

            // 1. Read the user's saved language preference directly
            const savedLang = useCookie('i18n_redirected').value

            // 2. If no cookie exists yet, fallback to the default 'en'
            const targetLang: 'en' | 'fr' | undefined = savedLang as 'en' | 'fr' | undefined || 'en'

            // 3. FORCE localePath to generate the URL for that specific language
            return navigateTo(localePath('home', targetLang))
        }
    ]
})
</script>

<template>
    <div>Redirecting...</div>
</template>