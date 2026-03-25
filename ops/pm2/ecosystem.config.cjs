// PM2 ecosystem configuration file
module.exports = {
    apps: [
        {
            name: "agency-production",
            cwd: "/var/www/ecosystem/production/current/agency",
            script: ".output/server/index.mjs",
            instances: 1,
            exec_mode: "fork",
            autorestart: true,
            max_restarts: 10,
            time: true,
            port: 3000,
            env: {
                NODE_ENV: "production",
                PORT: "3000",
                HOST: "127.0.0.1"
            },
        },
        {
            name: "agency-staging",
            cwd: "/var/www/ecosystem/staging/current/agency",
            script: ".output/server/index.mjs",
            instances: 1,
            exec_mode: "fork",
            autorestart: true,
            max_restarts: 10,
            time: true,
            port: 3001,
            env: {
                // Nuxt standardizes "production" as the build environment name,
                // but we run it on a separate port for staging
                NODE_ENV: "production",
                PORT: "3001",
                HOST: "127.0.0.1"
            },
        },
    ],
}
