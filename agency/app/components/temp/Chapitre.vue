<script setup lang='ts'>
import { type Chapitre } from '../../../types/formation'

defineProps<{
    chapitre: Chapitre;
}>()

</script>
<template>
    <p class="chapitre-title"> {{ chapitre.titre }}</p>
    <TempModule v-for="module in chapitre.modules" :module=module />
</template>
<style scoped>
.chapitre-title {
    font-weight: 600;
}
</style>