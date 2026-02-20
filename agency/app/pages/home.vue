<script setup lang="ts">
import { type Project } from '../../types/sanity.types'

const { data } = await useSanityProjects()
const projects = data.value as Array<Project>
console.log(projects[0]);

</script>

<template>
    <div class="layout">
        <div class="content">
            <div class="logo-container">
                <img src="/images/logo.png" alt="LES GRIOTSxSTUDIO logo" class="logo" />
            </div>

            <div class="content-sections">
                <div class="main-text">
                    <p>
                        LESGRIOTSxSTUDIO is a transdisciplinary creative studio.
                    </p>

                    <p>
                        We combine artistic direction, movement, and audiovisual production to design narratives that
                        resonate across image, story, and performance.
                    </p>

                    <p>
                        Our practice is rooted in Afro-diasporic perspectives and dedicated to building cultural
                        legacies through powerful visual storytelling.
                    </p>

                    <p>
                        We are driven by collaboration and thrive in creative environments where meaning and impact are
                        at the core.
                    </p>
                </div>

                <div class="content-text no-wrap">
                    <p class="section-title">Services</p>
                    <p>Brand Strategy</p>
                    <p>Creative Direction</p>
                    <p>Production</p>
                </div>

                <div class="content-text no-wrap">
                    <p class="section-title">Contacts</p>
                    <a href="mailto:studio@Lesgriots.com">studio@Lesgriots.com</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
a,
p {
    color: white;
    font-size: 16px;
    line-height: 1.6;
    text-transform: uppercase;
    font-family: 'AkkuratMono', monospace;
}

.layout {
    background-color: black;
    min-height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.content {
    display: flex;
    justify-content: start;
    align-items: flex-start;
    width: 80%;
    gap: 30px;
    padding: 24px;
}

.content-sections {
    display: flex;
    gap: 30px;
}

.main-text,
.content-text {
    display: flex;
    flex-direction: column;
}

.main-text {
    gap: 16px;
}

.logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
}

.logo {
    width: 100%;
    height: auto;
}

.section-title {
    text-decoration: underline;
}

.no-wrap {
    white-space: nowrap;
}

/* --- Responsive --- */

/* Tablette */
@media (max-width: 1024px) {
    .content {
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 40px;
        width: 90%;
    }

    .content-sections {
        flex-direction: column;
        gap: 40px;
    }

    .logo-container {
        width: 300px;
    }

    a,
    p {
        font-size: 14px;
    }
}

/* Mobile */
@media (max-width: 600px) {
    .layout {
        justify-content: center;
    }

    .content {
        padding: 16px;
        gap: 24px;
    }

    .logo-container {
        width: 220px;
    }

    .content-text {
        gap: 10px;
    }

    a,
    p {
        font-size: 13px;
        line-height: 1.4;
    }

    .section-title {
        margin-top: 8px;
    }
}
</style>
