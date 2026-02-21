<script setup lang="ts">
import { type Participants } from '../../../types/formation'
defineProps<{
    prix: number,
    lieu: string,
    duree: number,
    participants: Participants,
    contact?: string,
    pdf: string
    inscription: string
}>()
</script>
<template>
    <div class="card">
        <div class="info">
            <p class="label">Prix</p>
            <p>{{ prix }} HT</p>
        </div>
        <div class="info">
            <p class="label">Durée</p>
            <p>{{ duree }} heures</p>
        </div>
        <div class="info">
            <p class="label">Participants</p>
            <p>{{ participants.min }} à {{ participants.max }} personnes</p>
        </div>
        <div class="info">
            <p class="label">Lieu</p>
            <p>{{ lieu }} </p>
        </div>
        <div class="btn-list">
            <TempButtonLink label="Télécharger le Programme" class="dark" :link="pdf" />
            <TempButtonLink label="Je m'inscris" class="light" :link="inscription" />
        </div>
    </div>
</template>
<style scoped>
.card {
    position: sticky;
    top: 150px;
    width: 100%;
    background-color: white;
    box-shadow: 5px black;
}

.info {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid black;
}

.label {
    font-weight: 600;
}

.btn-list {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
}
</style>