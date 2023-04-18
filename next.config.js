const withPwa = require('next-pwa');

module.exports = withPwa({
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
    register: true,
    skipWaiting: true,
    sw: 'sw.js'
})