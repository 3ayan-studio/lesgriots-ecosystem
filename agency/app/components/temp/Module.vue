<script setup lang='ts'>
import { type Module } from '../../../types/formation'
import { Transition } from 'vue'
defineProps<{
    module: Module;
}>()
const isActive = ref(false)
</script>
<template>
    <div @click="isActive = !isActive" class="module">
        <div class="module-title">
            <p> {{ module.titre }}</p>
            <TempChevron :class="{ rotate: isActive }" />
        </div>
        <Transition>
            <div v-if="isActive" class="module-content">
                <p>{{ module.description }}</p>
            </div>
        </Transition>
    </div>
</template>
<style scoped>
.module {
    padding: 20px;
    border: 1px solid black;
}

.module-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
}

.module-content {
    height: auto;
    overflow: hidden;
}

.rotate {
    transform: rotate(180deg);
}

.v-enter-from,
.v-leave-to {
    max-height: 0;
}

.v-enter-to,
.v-leave-from {
    max-height: 500px;
    /* Ajustez cette valeur selon la hauteur maximale de votre contenu */
}

.v-enter-active {
    transition: max-height 0.5s ease-out;
}

.v-leave-active {
    transition: max-height 0.5s ease;
}
</style>