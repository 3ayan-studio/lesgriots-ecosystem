<script setup lang="ts">
</script>

<template>
    <header class="header">
        <NuxtLink to="/" class="logo">
            <img src="/images/logo.png" alt="" class="logo">
        </NuxtLink>
    </header>
</template>

<style>
.header {
    position: fixed;
    z-index: 1000;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    height: 100px;
    padding: 20px 16px;
    background-color: white;
}

.logo,
.logo>img {
    width: auto;
    height: 100%;
}

.nav-list {
    margin: 0;
    padding: 0;
    height: 100%;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 20px;
}

.nav-item {
    padding: 12px 24px;
    color: black;
    font-weight: 600;
    font-size: 1.5rem;

}

.nav-item:hover {
    text-decoration: underline 4px solid black;
}
</style>