<script setup lang="ts">

const { data: navigation } = await useAsyncData('category-navigation', () =>
  queryContentNavigation('/categorias')

)
</script>

<template>
  <nav class="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
    <NuxtLink
      v-for="category in navigation"
      :key="category._path"
      :to="category._path"
      class="p-4 text-bg-gray-800 bg-white shadow hover:shadow-lg rounded-xl transition"
    >
      {{ category.title }}
    </NuxtLink>
  </nav>
</template>
