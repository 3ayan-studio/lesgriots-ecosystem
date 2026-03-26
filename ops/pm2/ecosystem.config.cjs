// PM2 ecosystem configuration file
const fs = require("fs")
function loadEnv(filePath) {
    try {
        const content = fs.readFileSync(filePath, "utf8")
        const env = {}
        for (const line of content.split("\n")) {
            const trimmed = line.trim()
            if (!trimmed || trimmed.startsWith("#")) continue
            const [key, ...rest] = trimmed.split("=")
            env[key.trim()] = rest.join("=").trim()
        }
        return env
    } catch {
        return {}
    }
}

const prodEnv = loadEnv("/var/www/ecosystem/shared/production.env")
const stagingEnv = loadEnv("/var/www/ecosystem/shared/staging.env")

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
                ...prodEnv,
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
                ...stagingEnv,
                NODE_ENV: "production",
                PORT: "3001",
                HOST: "127.0.0.1"
            },
        },
    ],
}
