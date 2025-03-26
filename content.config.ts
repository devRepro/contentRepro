import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**',
    }),
    categorias: defineCollection({ // 👈 esta línea es crítica
      type: 'page',
      source: 'categorias/**',
    }),
  },
})
