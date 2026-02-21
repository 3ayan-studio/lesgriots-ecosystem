<template>
  <section class="hero-banner">
    <video  autoplay muted loop class="hero-video">
      <source src="/videos/hero_banner_video.mp4" type="video/mp4">
      Votre navigateur ne supporte pas la vidéo.
    </video>
    <div class="hero-overlay">
      <h1>Créativité</h1>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
.hero-banner {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}


.hero-video .hero-img{
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
  justify-content:center ;
  align-items: end;
}
</style>
