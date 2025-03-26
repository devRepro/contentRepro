<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData('page-' + route.path, () =>
  queryCollection('content').path(route.path).first()
)

import { queryContentNavigation } from '#content/navigation'
const { data: navigation } = await useAsyncData('categories-nav', () =>
  queryContentNavigation('/categorias')
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <main class="container mx-auto">
    <h2 class="text-3xl font-bold mb-6">Categorías menú</h2>

    <nav v-if="navigation?.length">
      <ul>
        <li v-for="cat in navigation" :key="cat._path">
          <NuxtLink :to="cat._path">{{ cat.title }}</NuxtLink>

          <ul v-if="cat.children?.length">
            <li v-for="prod in cat.children" :key="prod._path">
              <NuxtLink :to="prod._path">{{ prod.title }}</NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>

    <ContentRenderer v-if="page" :value="page" />
  </main>
</template>

