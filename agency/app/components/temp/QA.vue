<script setup lang='ts'>
import { type QA } from '../../../types/formation'
import { Transition } from 'vue'
defineProps<{
    qa: QA;
}>()
const isActive = ref(false)
</script>
<template>
    <div @click="isActive = !isActive" class="question">
        <div class="question-title">
            <p> {{ qa.question }}</p>
            <TempChevron :class="{ rotate: isActive }" />
        </div>
        <Transition>
            <div v-if="isActive" class="question-content">
                <p>{{ qa.reponse }}</p>
                <ul v-if="qa.list" class="list">
                    <li v-for="el in qa.list"> {{ el }}</li>
                </ul>
                <ol v-if="qa.steps">
                    <li v-for="step in qa.steps"> {{ step }}</li>
                </ol>
            </div>
        </Transition>
    </div>
</template>
<style scoped>
.question {
    padding: 20px;
    border: 1px solid black;
}

.question-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
}

.question-content {
    height: auto;
    overflow: hidden;
}

ul {
    list-style-type: disc;
    list-style-position: outside;
    padding: 0 0 23px 1em;
}

ol {
    list-style-type: decimal;
    list-style-position: inside;

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