module.exports = {
  apps: [
    {
      name: 'vueT',
      script: 'npm',
      args: 'run preview -- --port 8201',
      cwd: __dirname,
      env: { NODE_ENV: 'production' },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '300M'
    }
  ]
}