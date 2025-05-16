<template>
  <div class="hidden sm:flex flex-wrap gap-1.5 justify-center">
    <NuxtLink
      v-for="category in categoriesWithIcons"
      :key="category.name"
      :to="`/${category.name.replace(' ', '-').toLocaleLowerCase()}`"
      class="group inline-block rounded-md transition-colors"
    >
      <UBadge 
        :icon="`i-lucide:${category.icon}`" 
        color="neutral" 
        variant="outline" 
        size="xl" 
        class="transition-colors group-hover:bg-gray-100 dark:group-hover:bg-gray-800"
      >
        {{ category.name }}
      </UBadge>
    </NuxtLink> 
  </div>
</template>

<script setup lang="ts">
import { categoriesWithIcons } from '~/lib/categories';
</script>