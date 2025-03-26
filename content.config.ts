import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**',
    }),
    categorias: defineCollection({
      type: 'page',
      source: 'categorias/**/*.md', // Incluye archivos en subdirectorios (por ejemplo, index.md de la categoría)
      schema: z.object({
        title: z.string(),
        nav: z.string(),             // Texto que se usará en el menú
        navigation: z.boolean(),     // Controla si se muestra en la navegación
        slug: z.string(),
        description: z.string().optional(),
        keywords: z.array(z.string()).optional(),
        image: z.string().optional(),
        alt: z.string().optional()
      })
    }),
    // Colección para los productos
    productos: defineCollection({
      type: 'page',
      // Aquí se asume que los productos están en una carpeta dentro de cada categoría
      // Por ejemplo: categorias/adhesivos/doming/index.md
      source: 'categorias/*/*/index.md',
      schema: z.object({
        title: z.string(),
        slug: z.string(),
        category: z.string(),        // Campo para relacionar con la categoría
        description: z.string(),
        keywords: z.array(z.string()).optional(),
        image: z.string().optional(),
        alt: z.string().optional()
      })
    }),
       // Colección para el blog
       blog: defineCollection({
        type: 'page',
        source: 'blog/**/*.md',
        schema: z.object({
          title: z.string(),
          description: z.string().optional(),
          date: z.date(),
          keywords: z.array(z.string()).optional(),
          image: z.string().optional(),
          alt: z.string().optional()
        })
      })
  },
})
