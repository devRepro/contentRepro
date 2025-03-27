<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const slug = route.params.slug;

// Cargar la página actual
const { data: page } = await useAsyncData('page-' + route.path, () =>
  queryCollection('content').path(route.path).first()
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <main class="container mx-auto">
    <ContentRenderer v-if="page" :value="page" />
  
  </main>
</template>
<style scope>

</style>