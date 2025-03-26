<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()



// Cargar la página actual
const { data: page } = await useAsyncData('page-' + route.path, () =>
  queryCollection('content').path(route.path).first()
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

// Extraemos el slug de la categoría
// Suponiendo que la ruta es /categorias/{slug}, el slug estará en la posición 2
const categorySlug = computed(() => {
  const segments = route.path.split('/')
  return segments[2] || ''
})
</script>

<template>
  <main class="container mx-auto">
    <ContentRenderer v-if="page" :value="page" />
    <TestComponent></TestComponent>
  </main>
</template>
<style scope>

</style>