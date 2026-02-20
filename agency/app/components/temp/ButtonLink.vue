<script setup lang="ts">
defineProps<{
    label: string,
    class:string,
    link:string
}>()
</script>
<template>
    <a :href="link" :class="class"  target="_blank">
        {{ label }}
    </a>
</template>
<style scoped>
    a{
        padding: 16px 20px;
        text-align: center;
    }

    .light{
        border: 1px solid black;
    }
    .dark{
        background-color: black;
        color: white;
    }
</style>