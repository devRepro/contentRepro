import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**',
    }),
    categorias: defineCollection({
      type: 'page',
      source: 'categorias/**/*.md',
      schema: z.object({
        title: z.string(),
        navigation: z.boolean(), // Se utiliza para controlar si se muestra en el menú
        nav: z.string(),         // Texto a mostrar en el menú
        slug: z.string()         // Útil si lo empleas en hoveredCategory u otras funcionalidades
      })
    })
  },
})
