<script setup lang="ts">
import { ref } from 'vue'


// Define la interfaz para los productos, debe coincidir con la definida en content.config.ts
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

const products = ref<Product[]>([])

async function loadProducts() {
  // Forzamos la búsqueda en la colección "productos" para la categoría "adhesivos"
  const result = await queryContent<Product>('productos')
    .where('category', '=', 'adhesivos')
    .find()
  console.log('Productos encontrados:', result)
  products.value = result || []
}

loadProducts()
</script>

<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">Productos en "adhesivos"</h2>
    <ul v-if="products && products.length" class="space-y-2">
      <li v-for="product in products" :key="product.path" class="border p-2 rounded">
        <p class="font-semibold">{{ product.title }}</p>
        <p class="text-sm text-gray-600">{{ product.description }}</p>
      </li>
    </ul>
    <div v-else class="text-gray-500">
      No se encontraron productos en esta categoría.
    </div>
  </div>
</template>
