// PM2 ecosystem configuration file
module.exports = {
    apps: [
        {
            name: "agency",
            cwd: "/var/www/ecosystem/agency", // LIVE symlink path
            // script: "node",
            // args: ".output/server/index.mjs",
            script: ".output/server/index.mjs",
            instances: 1,
            exec_mode: "fork",
            autorestart: true,
            max_restarts: 10,
            time: true,
            port: 3000,
            env: {
                NODE_ENV: "production",
                PORT: "3000"
            },
        },
    ],
}
