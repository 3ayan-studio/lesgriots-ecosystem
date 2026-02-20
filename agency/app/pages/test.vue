<template>
    <div>
        <button v-for="locale in locales" @click="setLocale(locale.code)">
            {{ locale.name }}
        </button>
        <h1>{{ $t('title') }}</h1>
        <NuxtLinkLocale to="/">{{ $t('home') }}</NuxtLinkLocale>
    </div>
</template>

<script lang="ts" setup>
const { locales, setLocale } = useI18n()
</script>

<style></style>