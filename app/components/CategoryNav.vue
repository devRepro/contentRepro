<script setup lang="ts">
const { data: navTree } = await useAsyncData('categoriesNav', () => 
  queryCollectionNavigation('categorias', ['title', 'navigation'])
)
</script>

<template>
  <nav aria-label="Categorías del sitio">
    <ul class="flex space-x-4">
      <li v-for="categoria in navTree" :key="categoria.path" 
          class="relative group">
        <!-- Solo mostramos categorías con navigation !== false -->
        <template v-if="categoria.navigation !== false">
          <NuxtLink :to="categoria.path" class="px-4 py-2 hover:underline">
            {{ categoria.title }}
          </NuxtLink>
          <!-- Submenú de productos -->
          <ul class="absolute left-0 mt-1 hidden bg-white shadow-lg group-hover:block group-focus-within:block">
            <li v-for="producto in categoria.children" :key="producto.path">
              <NuxtLink :to="producto.path" class="block px-4 py-2 hover:bg-gray-100">
                {{ producto.title }}
              </NuxtLink>
            </li>
          </ul>
        </template>
      </li>
    </ul>
  </nav>
</template>
