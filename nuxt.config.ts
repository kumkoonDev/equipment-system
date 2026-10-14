export default defineNuxtConfig({
  // ระบุโฟลเดอร์โค้ดให้ชัดเจน ให้ ~ ชี้ไปที่ app/ เสมอ ไม่ว่าจะเป็น Nuxt เวอร์ชันไหน
  srcDir: 'app',
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'th' },
      title: 'ระบบบริหารงานอุปกรณ์',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@400;500;600;700&display=swap' }
      ]
    }
  }
})
