module.exports = {
    apps: [
        {
            name: 'wnnextjs',
            script: 'yarn',
            args: 'start',
            interpreter: '/bin/bash',
            instances: 1,
            max_memory_restart: '1G',
            watch: false,
            env: {
                NODE_ENV: 'development',
                PORT: 9020,
            },
            env_production: {
                NODE_ENV: 'production',
                //API_URL: 'YOUR ENV URL',
                PORT: 9020,
            },
        },
    ],

    deploy: {
        production: {
            user: 'SSH_USERNAME',
            host: 'SSH_HOSTMACHINE',
            ref: 'origin/master',
            repo: 'GIT_REPOSITORY',
            path: 'DESTINATION_PATH',
            'pre-deploy-local': '',
            'post-deploy':
                'npm install && pm2 reload ecosystem.config.js --env production',
            'pre-setup': '',
        },
    },
};