<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
const formation = {
    titre: "Filmer et éditer du contenu au téléphone portable",
    description: `Vous souhaitez créer du contenu vidéo professionnel avec votre téléphone portable en une seule journée ? Cette formation est faite pour vous.
Avec la formation « Filmer et éditer du contenu au téléphone portable », LES GRIOTS vous accompagne à chaque étape du processus de création, de la prise de vue au montage final, en passant par l’optimisation pour les réseaux sociaux.`,
    lieu: "Paris ou Le Havre (selon la demande)",
    tarif: 299,
    nbr_heure: 7,
    nbr_jour: 1,
    inscription: "https://tally.so/r/nPk9VV",
    pdf: "/pdfs/Programme.pdf",
    contact: "",
    méthodologie: {
        intro: `« Filmer et éditer du contenu au téléphone portable » est une formation basée sur une approche pratique et immersive.
                Nous encourageons une création de contenu accessible et performante, en nous concentrant sur les outils à disposition des participants (smartphone et applications gratuites).`,
        processus:
            [
                "Une méthode active et participative, avec des exercices concrets et des cas pratiques",
                "Une adaptation aux tendances actuelles des réseaux sociaux, en étudiant les formats les plus engageants",
                "Un apprentissage rapide et efficace, permettant aux participants de produire du contenu immédiatement après la formation",
                "Un accompagnement personnalisé, avec des retours et conseils adaptés aux projets de chacun"
            ],
        conclusion: "Cette formation est également un lieu d’échange et de partage d’expériences entre créateurs de contenu, entrepreneurs, communicants et professionnels souhaitant développer leur présence en ligne."
    },
    objectifs: {
        principal: 'Cette formation a pour but de vous donner les compétences essentielles pour créer du contenu numérique attractif et pertinent en utilisant uniquement un téléphone portable.',
        pédagogiques: [
            "Maîtriser les bases de la création de contenu vidéo",
            "Utiliser les fonctionnalités avancées du smartphone pour des prises de vue professionnelles",
            "Comprendre les principes du storytelling visuel et de la composition d’image",
            "Apprendre à monter et retoucher ses vidéos avec des applications mobiles adaptées",
            "Optimiser la publication et la diffusion de son contenu sur les réseaux sociaux",
            "Élaborer une stratégie pour capter l’attention et maximiser l’engagement de son audience"
        ]
    },
    programme: [
        {
            titre: "Jour 1",
            chapitres: [
                {
                    titre: "Introduction et prise de vue",
                    modules:
                        [
                            {
                                titre: 'Introduction à la création de contenu mobile',
                                description: 'Nam quibusdam, quos audio sapientes habitos in Graecia, placuisse opinor mirabilia quaedam (sed nihil est quod illi non persequantur argutiis): partim fugiendas esse nimias amicitias, ne necesse sit unum sollicitum esse pro pluribus; satis superque esse sibi suarum cuique rerum, alienis nimis implicari molestum esse; commodissimum esse quam laxissimas habenas habere amicitiae, quas vel adducas, cum velis, vel remittas; caput enim esse ad beate vivendum securitatem, qua frui non possit animus, si tamquam parturiat unus pro pluribus.'
                            },
                            {
                                titre: 'Techniques de prise de vue et cadrage',
                                description: 'Nam quibusdam, quos audio sapientes habitos in Graecia, placuisse opinor mirabilia quaedam (sed nihil est quod illi non persequantur argutiis): partim fugiendas esse nimias amicitias, ne necesse sit unum sollicitum esse pro pluribus; satis superque esse sibi suarum cuique rerum, alienis nimis implicari molestum esse; commodissimum esse quam laxissimas habenas habere amicitiae, quas vel adducas, cum velis, vel remittas; caput enim esse ad beate vivendum securitatem, qua frui non possit animus, si tamquam parturiat unus pro pluribus.'
                            },
                            {
                                titre: 'Storytelling et scénarisation d’une vidéo',
                                description: 'Nam quibusdam, quos audio sapientes habitos in Graecia, placuisse opinor mirabilia quaedam (sed nihil est quod illi non persequantur argutiis): partim fugiendas esse nimias amicitias, ne necesse sit unum sollicitum esse pro pluribus; satis superque esse sibi suarum cuique rerum, alienis nimis implicari molestum esse; commodissimum esse quam laxissimas habenas habere amicitiae, quas vel adducas, cum velis, vel remittas; caput enim esse ad beate vivendum securitatem, qua frui non possit animus, si tamquam parturiat unus pro pluribus.'
                            },
                            {
                                titre: 'Atelier pratique : réalisation d’une séquence vidéo',
                                description: 'Nam quibusdam, quos audio sapientes habitos in Graecia, placuisse opinor mirabilia quaedam (sed nihil est quod illi non persequantur argutiis): partim fugiendas esse nimias amicitias, ne necesse sit unum sollicitum esse pro pluribus; satis superque esse sibi suarum cuique rerum, alienis nimis implicari molestum esse; commodissimum esse quam laxissimas habenas habere amicitiae, quas vel adducas, cum velis, vel remittas; caput enim esse ad beate vivendum securitatem, qua frui non possit animus, si tamquam parturiat unus pro pluribus.'
                            },
                        ]
                },
                {
                    titre: "Montage et optimisation",
                    modules:
                        [
                            {
                                titre: "Montage vidéo sur mobile (InShot, CapCut, VN…)",
                                description: ''
                            },
                            {
                                titre: "Optimisation pour les réseaux sociaux",
                                description: ''
                            },
                            {
                                titre: "Atelier pratique : création et montage d’un projet vidéo",
                                description: ''
                            },
                            {
                                titre: "Conclusion et remise des attestations",
                                description: "",
                            },
                        ]
                }
            ]
        }
    ],
    participants: {
        min: 5,
        max: 7
    },
    informations_pratiques: {
        materiels: [
            "Un téléphone portable équipé d’une caméra",
            "Un chargeur et une batterie externe ",
            "Installation préalable des applications de montage (InShot, CapCut, VN…) "
        ],
        accessibilite: "Nous nous engageons à rendre notre formation accessible à tous. Contactez-nous pour toute adaptation spécifique. ",
    },
    faq: [
        {
            question: "À qui s’adresse la formation ?",
            reponse: "Cette formation s’adresse à toute personne souhaitant apprendre à filmer, monter et publier du contenu vidéo avec un téléphone portable : créateurs de contenu, entrepreneurs, communicants, journalistes, blogueurs et toute personne désirant optimiser sa production vidéo mobile."
        },
        {
            question: "Est-ce que la formation est en présentiel ou en distanciel ?",
            reponse: "La formation est proposée uniquement en présentiel, à Paris ou au Havre."
        },
        {
            question: "Quels sont les pré-requis pour participer ?",
            reponse: "Aucun prérequis technique ou expérience en vidéo n’est nécessaire. Il est recommandé d’avoir :",
            list: [
                "Un téléphone portable avec une caméra en bon état de fonctionnement",
                "Une connexion internet pour télécharger les applications de montage recommandées",
                "Une disponibilité totale pour suivre la formation sur une journée complète"
            ]
        },
        {
            question: "Comment se déroule l’inscription ?",
            reponse: "",
            steps: ["Remplir le formulaire d’inscription (disponible sur demande)",
                "Un échange avec notre équipe sera organisé pour valider votre inscription.",
                "Une confirmation vous sera envoyée avec toutes les informations pratiques."
            ]
        },
        {
            question: "Combien de participants sont acceptés par session ?",
            reponse: "Chaque session est limitée à 7 à 12 participants afin d’assurer un suivi personnalisé et une interaction optimale avec le formateur."
        },
        {
            question: "Quand se déroule la prochaine formation ?",
            reponse: "La prochaine session est prévue en février 2025. D’autres sessions seront organisées régulièrement dans l’année en fonction de la demande."
        },
        {
            question: "Quel est le coût de la formation ?",
            reponse: "Le tarif de la formation est de 299€ TTC."
        },
        {
            question: "Puis-je payer en plusieurs fois ?",
            reponse: "Oui, nous proposons une modalité de paiement en plusieurs fois pour les financements individuels."
        },
        {
            question: "Puis-je financer la formation sans passer par un OPCO ?",
            reponse: "Oui, il est possible de financer la formation en fonds propres."
        },
        {
            question: "La formation est-elle éligible au CPF ?",
            reponse: "Non, cette formation n’est pas éligible au financement via le Compte Personnel de Formation (CPF)."
        },
        {
            question: "Existe-t-il des aides ou subventions pour financer la formation ?",
            reponse: "Nous vous recommandons de contacter votre OPCO ou votre conseiller France Travail pour évaluer vos options de financement."
        },
        {
            question: "La formation est-elle accessible aux personnes en situation de handicap ?",
            reponse: "Nous nous engageons à rendre notre formation accessible à tous. Contactez-nous pour toute adaptation spécifique."
        },
        {
            question: "Quels matériels dois-je apporter ?",
            reponse: "Chaque participant doit venir avec :",
            list: [
                "Un téléphone portable équipé d’une caméra",
                "Un chargeur et une batterie externe",
                "Avoir installé à l’avance certaines applications de montage (InShot, CapCut, VN…)"
            ]

        }
    ]
};

const isSticky = ref(false);
onMounted(() => {
    const formationNav = document.querySelector('.formation-nav') as HTMLElement;
    const header = document.querySelector('.header') as HTMLElement;
    if (!formationNav) return;

    const formationNavTop = formationNav.offsetTop - header.clientHeight;
    const onScroll = () => {
        isSticky.value = window.scrollY >= formationNavTop;
    };

    window.addEventListener("scroll", onScroll);
    onBeforeUnmount(() => {
        window.removeEventListener("scroll", onScroll);
    });
});
</script>
<template>
    <div>
        <TempHeader />
        <div class="header-formation">
            <h1 class="formation-title">{{ formation.titre }}</h1>
            <ul :class="['formation-nav', { sticky: isSticky }]">
                <li><a href="#approche">Approche</a></li>
                <li><a href="#objectifs">Objectifs</a></li>
                <li><a href="#programme">Programme</a></li>
                <li><a href="#infos">Informations</a></li>
                <li><a href="#faq">F.A.Q</a></li>
            </ul>
        </div>

        <video autoplay muted playsinline loop class="hero-video">
            <source src="/videos/video_formation.mp4" type="video/mp4">
            Votre navigateur ne supporte pas la vidéo.
        </video>

        <div class="formation-description">
            <p>{{ formation.description }}</p>
        </div>
        <div class="layout">
            <div class="formation-contents">
                <div id="approche" class="formation-section">
                    <p class="formation-subtitle">Notre Approche</p>
                    <p class="formation-text">{{ formation.méthodologie.intro }}</p>
                    <strong>Nous mettons l’accent sur :</strong>
                    <ul class="list">
                        <li v-for="item in formation.méthodologie.processus">
                            {{ item }}
                        </li>
                    </ul>
                    <p class="formation-text">{{ formation.méthodologie.conclusion }}</p>
                </div>
                <div id="objectifs" class="formation-section">
                    <p class="formation-subtitle">Les objectifs de la formation</p>
                    <p class="formation-text">{{ formation.objectifs.principal }}</p>
                    <strong>Les objectifs pédagogiques :</strong>
                    <ul class="formation-list">
                        <li v-for="item in formation.objectifs.pédagogiques">
                            {{ item }}
                        </li>
                    </ul>
                    <p class="formation-text">{{ formation.méthodologie.conclusion }}</p>
                </div>
                <div id="programme" class="formation-section">
                    <p class="formation-subtitle">
                        Le programme - ({{ formation.nbr_jour }}
                        {{ formation.nbr_jour > 1 ? "Jours" : "Jour" }}
                        {{ formation.nbr_heure }}
                        {{ formation.nbr_heure > 1 ? "heures" : "heure" }})
                    </p>
                    <div v-for="jour in formation.programme" class="programme-list">
                        <p class="formation-subtitle">{{ jour.titre }}</p>
                        <TempChapitre v-for="chapitre in jour.chapitres" :chapitre="chapitre" />
                    </div>
                </div>
                <div id="infos" class="formation-section">
                    <p class="formation-subtitle">Informations pratiques</p>
                    <strong>Matériel requis :</strong>
                    <ul class="list">
                        <li v-for="materiel in formation.informations_pratiques.materiels"> {{ materiel }}</li>
                    </ul>
                    <strong>Accéssibilité aux personnes en situation de handicap</strong>
                    <p>{{ formation.informations_pratiques.accessibilite }}</p>
                </div>
            </div>
            <div id="infos" class="formation-infos">
                <TempInfos :duree="formation.nbr_heure" :lieu="formation.lieu" :prix="formation.tarif"
                    :participants="formation.participants" :pdf="formation.pdf" :inscription="formation.inscription" />
            </div>
        </div>
        <div class="formation-faq questions-list">
            <p id="faq" class="formation-subtitle"> Foire Aux questions</p>
            <TempQA v-for="qa in formation.faq" :qa=qa />
        </div>
        <TempFooter />
    </div>
</template>
<style scoped>
/* Structure de base */
.hero-video {
    margin: auto;
}

.header-formation {
    padding: 100px 80px 0 80px;
}

.formation-title {
    font-size: 50px;
}

.formation-subtitle {
    font-size: 40px;
    font-weight: 600;
}

.formation-description {
    padding: 20px 80px;
    background: white;
}

.formation-text {
    margin-bottom: 20px;
}

.formation-section {
    margin-bottom: 20px;
    width: 100%;
}

.formation-faq {
    width: 100%;
    padding: 0 80px 80px 80px;
}

/* Navigation sticky */
.formation-nav {
    display: flex;
    background-color: white;
    position: relative;
}

.formation-nav.sticky {
    position: fixed;
    z-index: 1000;
    top: 100px;
    left: 0;
    right: 0;
    padding: 0 80px;
}

.formation-nav li {
    padding: 10px 20px;
}

/* Layout principal */
.layout {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 0 80px 80px 80px;
}

.formation-contents {
    grid-column: span 2;
    display: flex;
    flex-direction: column;
    width: 100%;
}

.formation-infos {
    grid-column: 3;
    width: 100%;
    height: 100%;
}

.programme-list,
.questions-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.list {
    list-style: disc outside;
    padding-left: 1em;
}

/* Scroll anchor margin */
#programme,
#approche,
#objectifs,
#infos,
#faq {
    scroll-margin-top: 150px;
}

/* Responsive */
@media (max-width: 1024px) {
    .header-formation {
        padding: 100px 20px 0 20px;
    }

    .formation-nav {
        display: none;
    }

    .formation-title {
        font-size: 48px;
    }

    .formation-subtitle {
        font-size: 32px;
    }

    .layout {
        padding: 0 40px 60px 40px;
        grid-template-columns: 1fr 1fr;
    }

    .formation-contents {
        grid-column: span 2;
    }

    .formation-infos {
        grid-column: span 2;
    }

    .formation-description,
    .formation-faq {
        padding: 20px 40px;
    }

    .formation-nav.sticky {
        padding: 0 40px;
    }
}

@media (max-width: 768px) {
    .formation-title {
        font-size: 36px;
    }

    .formation-subtitle {
        font-size: 26px;
    }

    .layout {
        grid-template-columns: 1fr;
        padding: 0 20px 40px 20px;
    }

    .formation-contents,
    .formation-infos {
        grid-column: 1;
    }

    .formation-description,
    .formation-faq {
        padding: 20px;
    }

    .formation-nav {
        flex-direction: column;
        gap: 10px;
    }

    .formation-nav.sticky {
        padding: 0 20px;
    }
}

@media (max-width: 480px) {
    .formation-title {
        font-size: 28px;
    }

    .formation-subtitle {
        font-size: 22px;
    }

    .formation-nav li {
        padding: 8px 12px;
    }
}
</style>
