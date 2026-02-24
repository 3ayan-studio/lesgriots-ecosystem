<template>
    <div>
        <p v-for="locale in locales">
            <button @click="setLocale(locale.code)">{{ locale.name }}</button>
        </p>
        <p>{{ $t('pages.home.description') }}</p>
        <NuxtLinkLocale to="/">{{ $t('pages.home.title') }}</NuxtLinkLocale>
    </div>
</template>

<script lang="ts" setup>
const { locales, setLocale } = useI18n()
</script>

<style></style>