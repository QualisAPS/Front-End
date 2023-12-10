/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

/** @type {import('next').NextConfig} */

// Remove this if you're not using Fullcalendar features
const isProd = process.env.ENV === 'production'

module.exports = {
  trailingSlash: true,
  reactStrictMode: false,
  assetPrefix: isProd ? 'http://homologa2.qualisaps.unb.br/admin' : undefined,
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      apexcharts: path.resolve(__dirname, './node_modules/apexcharts-clevision')
    }

    return config
  }
}
