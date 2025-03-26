<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData('page-' + route.path, () =>
  queryCollection('content').path(route.path).first()
)


if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const { data } = await useAsyncData('navigation', async () => {
  return queryCollectionNavigation('categorias')
    .where('navigation', '=', true)
})


</script>

<template>
  <main class="container mx-auto">
    <h2 class="text-3xl font-bold mb-6">Categorías menú</h2>
    <nav v-if="data && data.length && data[0]?.children">
      <ul>
        <li v-for="item in data[0]?.children" :key="item.path">
          <NuxtLink :to="item.path">{{ item.nav || item.title }}</NuxtLink>
        </li>
      </ul>
    </nav>
    <ContentRenderer v-if="page" :value="page" />
  </main>
</template>


