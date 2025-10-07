// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint'],
  devtools: { enabled: true },
  compatibilityDate: '2025-07-15',
  nitro: {
    preset: 'cloudflare-pages',
    experimental: {
      database: true,
    },
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
    database: {
      default: {
        connector: 'cloudflare-d1',
        options: {
          bindingName: 'DB',
        },
      },
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
