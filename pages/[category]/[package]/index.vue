<template>
  <div class="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col py-6">
    <UBreadcrumb :items="items" class="text-sm font-semibold text-info flex items-center gap-1.5 mb-8">
      <template #separator>
        <span class="mx-2 text-muted">/</span>
      </template>
    </UBreadcrumb>
    <h1 class="text-3xl sm:text-4xl text-pretty font-bold text-highlighted">{{ packageInfo?.meta.npm }}</h1>
    <p class="text-lg text-pretty text-muted mt-4">{{ packageInfo?.meta.description }}</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

import type { BreadcrumbItem } from '@nuxt/ui'

const route = useRoute()

const { getPackages } = usePackageStore()
const packageInfo = getPackages(route.params.package as string)

const items = ref<BreadcrumbItem[]>([
  {
    label: 'Packages',
    to: '/'
  },
  {
    label: packageInfo?.meta.category,
    to: `/${route.params.category}`,
  },
  {
    label: 'Breadcrumb',
  }
])
</script>