/** @type {import('next').NextConfig} */ 
const withPWA = require("next-pwa")({
    dest: 'public'
})


module.exports =  withPWA({
    register: true,
    skipWaiting: true,
    output: 'standalone'
})



