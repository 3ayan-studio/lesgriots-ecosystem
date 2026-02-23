// PM2 ecosystem configuration file
module.exports = {
    apps: [
        {
            name: "agency",
            cwd: "/var/www/ecosystem/current/agency",
            // script: ".output/server/index.mjs",
            script: "node",
            args: ".output/server/index.mjs",
            node_args: "--env-file=.env",
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
    ],
}
