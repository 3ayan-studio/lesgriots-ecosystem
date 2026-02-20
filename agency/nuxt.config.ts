// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    future: {
        compatibilityVersion: 4,
    },

    $development: {
        app: {
            head: {
                title: '(DEV) Lesgriotsxstudio',
            }
        },
        nitro: {
            storage: {
                'cache': {
                    base: './.data/cache-dev',
                }
            }
        },
        site: {
            url: 'http://localhost:3000',
        },
        i18n: {
            baseUrl: 'http://localhost:3000',
            detectBrowserLanguage: {
                // temporary
                redirectOn: 'all', // recommended
                alwaysRedirect: true
            }
        }
    },

    $production: {
        app: {
            head: {
                title: '(PROD) Lesgriotsxstudio',
            }
        },
        nitro: {
            storage: {
                'cache': {
                    base: process.env.NUXT_NITRO_CACHE_DIR
                }
            }
        },
        site: {
            url: process.env.NUXT_BASE_URL!
        },
        i18n: {
            baseUrl: process.env.NUXT_BASE_URL!,

            // detectBrowserLanguage: {
            //     redirectOn: 'root',
            //     alwaysRedirect: false,
            // }

            detectBrowserLanguage: {
                // temporary
                redirectOn: 'all', // recommended
                alwaysRedirect: true
            }
        }
    },

    nitro: {
        storage: {
            'cache': {
                driver: 'fs',
                // base: process.env.NITRO_CACHE_DIR || './.data/cache',
            }
        }
    },

    app: {
        head: {
            title: 'Lesgriotsxstudio',
            htmlAttrs: {
                lang: 'en',
            },
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/images/logo.png' },
            ],
        },
    },

    imports: {
        dirs: ['composables/**']
    },

    typescript: {
        typeCheck: true
    },

    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/seo',
        '@nuxtjs/i18n',
        '@nuxtjs/sanity',
        '@nuxt/image'
    ],

    sanity: {
        projectId: process.env.NUXT_SANITY_AGENCY_PROJECT_ID!,
        dataset: process.env.NUXT_SANITY_AGENCY_DATASET!,
        apiVersion: process.env.NUXT_SANITY_AGENCY_API_VERSION!,
        useCdn: false, // False = Fresh data for ISR
    },

    // SEO Config
    site: {
        // url: process.env.NUXT_BASE_URL! || 'http://localhost:3000',
        name: 'Lesgriotsxstudio',
        defaultLocale: 'en',
    },

    i18n: {
        // baseUrl: process.env.NUXT_BASE_URL! || 'http://localhost:3000',
        defaultLocale: 'en',
        locales: [
            { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
            { code: 'fr', iso: 'fr-FR', file: 'fr.json', name: 'Français' }
        ],
        strategy: 'prefix_except_default', // Default locale without prefix, others with prefix
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',

            // redirectOn: 'root',
            // alwaysRedirect: false,

            // // temporary
            // redirectOn: 'all', // recommended
            // alwaysRedirect: true
        }
    },

    // ISR & Caching (Nitro Engine)
    routeRules: {
        // '/': { redirect: { to: '/home', statusCode: 302 } },
    }
})