<script setup lang="ts">

// Definimos la interfaz para los productos
interface Product {
  path: string
  title: string
  slug: string
  category: string
  description: string
  keywords?: string[]
  image?: string
  alt?: string
}

// Definimos la prop que recibirá el componente (el slug de la categoría)
const props = defineProps<{ category: string }>()

// Consultamos la colección "productos" filtrando por el campo "category"
const { data: products } = await useAsyncData('products-' + props.category, () =>
  queryContent<Product>('productos')
    .where('category', '=', props.category)
    .find()
)
</script>

<template>
    <section class="p-4">
      <h2 class="text-2xl font-bold mb-4">
        Productos en la categoría {{ props.category }}
      </h2>
      <ul v-if="products && products.length" class="space-y-2">
        <li v-for="product in products" :key="product.path" class="border-b pb-2">
          <NuxtLink :to="product.path" class="text-blue-500 hover:underline">
            {{ product.title }}
          </NuxtLink>
          <p class="text-sm text-gray-600">{{ product.description }}</p>
        </li>
      </ul>
      <div v-else class="text-gray-500">
        No hay productos en esta categoría.
      </div>
    </section>
  </template>   