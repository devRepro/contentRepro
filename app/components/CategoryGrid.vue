<script setup lang="ts">
const { data: docs } = await useAsyncData('documents-list', () => {
  return queryCollection('categorias')
    .select('title', 'slug', 'description')
    .all()
})    
</script>
<template>
    <NuxtLink v-for="doc in docs" :key="doc.slug" :to="`/categorias/${doc.slug}`">
        <h3>{{ doc.title }}</h3>
    </NuxtLink>
</template>