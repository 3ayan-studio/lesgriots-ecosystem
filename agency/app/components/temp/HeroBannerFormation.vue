<template>
    <section ref="hero" class="hero-banner">
        <img v-if="isImg" class="hero-img" :src="heroSrc" alt="">
        <video v-else autoplay muted loop class="hero-video">
            <source :src="heroSrc" type="video/mp4">
            Votre navigateur ne supporte pas la vidéo.
        </video>
        <div class="hero-overlay">
            <h1>{{ title }}</h1>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'


const props = defineProps({
    isImg: {
        type: Boolean,
        required: true
    },
    heroSrc: {
        type: String,
        required: true
    },
    title: {
        type: String,
        default: 'Créativité'
    },
})

// Référence sur l'élément du hero pour l'animation
const hero = ref(null)

// Animation GSAP : Au montage, on fait apparaître le hero avec un effet fade & décalage vertical
onMounted(() => {
    gsap.from(hero.value, { opacity: 0, y: -50, duration: 1 })
})
</script>

<style scoped>
.hero-banner {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}


.hero-video .hero-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}


.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 80px;
    color: #fff;
    font-size: 3rem;
    font-weight: 900;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: start;
}
</style>
