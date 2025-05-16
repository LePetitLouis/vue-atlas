<template>
  <div class="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col py-6">
    <UBreadcrumb :items="items" class="text-sm font-semibold text-primary flex items-center gap-1.5 mb-8">
      <template #separator>
        <span class="mx-2 text-muted">/</span>
      </template>
    </UBreadcrumb>
    <PackagesList :packages="getPackagesInCategory(route.params.category as string)" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

import type { BreadcrumbItem } from '@nuxt/ui'

const route = useRoute()
const { getPackagesInCategory } = usePackageStore()

const formatCategory = (category: string) => {
  return category.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())
}

const items = ref<BreadcrumbItem[]>([
  {
    label: 'Packages',
    to: '/'
  },
  {
    label: formatCategory(route.params.category as string),
  },
])
</script>