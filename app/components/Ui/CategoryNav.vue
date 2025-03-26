<script setup lang="ts">
//cargamos iterfices
interface NavItem {
  path: string
  slug: string
  nav: string
  title: string
  children?: NavItem[]
}

//consultamos la fuente
const { data: navData } = await useAsyncData('navigation', async () => {
  return queryCollectionNavigation('categorias')
    .where('navigation', '=', true)
})

</script>
<template>
    <nav>
        <ul v-if="navData">
            <li v-for="item in navData[0]?.children" :key="item.path">
            <NuxtLink :to="item.path">
                {{ item.title }}
                <span v-if="item.badge" class="badge">{{ item.badge }}</span>
            </NuxtLink>
            <p v-if="item.description">{{ item.description }}</p>
            </li>
        </ul>
  </nav>
</template>