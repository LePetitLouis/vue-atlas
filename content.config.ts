import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    packages: defineCollection({
      type: 'data',
      source: 'packages/**.yml',
      schema: z.object({
        name: z.string(),
        description: z.string(),
        npm: z.string(),
        github: z.string(),
        icon: z.string(),
        website: z.string(),
        compatibility: z.string(),
        category: z.string(),
      })
    })
  }
})