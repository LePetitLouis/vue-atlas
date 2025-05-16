<template>
  <NuxtLink :to="packageUrl">
    <UCard variant="subtle" class="h-full">
      <UBadge variant="outline">{{ packageInfo.meta.category }}</UBadge>
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
        {{ packageInfo.meta.name }}
      </h2>
      <p>{{ packageInfo.meta.description }}</p>
    </UCard>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { IPackageInfo } from '~/lib/package';

const props = defineProps({
  packageInfo: {
    type: Object as PropType<IPackageInfo>,
    required: true,
  },
})

const packageUrl = computed(() => {
  return `/${props.packageInfo.meta.category.replace(' ', '-').toLocaleLowerCase()}/${props.packageInfo.meta.name}`;
});
</script>