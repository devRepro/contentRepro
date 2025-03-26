<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData('page-' + route.path, () =>
  queryCollection('content').path(route.path).first()
)


if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const { data: navigation } = await useAsyncData('navigation', () =>
  queryContent('/categorias').where({ navigation: true }).find()
)


</script>

<template>
  <main class="container mx-auto">
    <h2 class="text-3xl font-bold mb-6">Categorías menú</h2> 
    <nav>
    <ul>
      <li v-for="item in navigation" :key="item._path">
        <NuxtLink :to="item._path">{{ item.title }}</NuxtLink>
      </li>
    </ul>
  </nav>

    <ContentRenderer v-if="page" :value="page" />
  </main>
</template>

