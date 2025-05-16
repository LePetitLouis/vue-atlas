<template>
  <section class="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <template v-for="(pkg, index) in packages" :key="index">
      <Transition name="fade" mode="out-in">
          <PackagesCard :package-info="pkg" />
      </Transition>
    </template>
  </section>
</template>

<script setup lang="ts">
import type { IPackageInfo } from '~/lib/package';

defineProps({
  packages: {
    type: Array as PropType<IPackageInfo[]>,
    required: true,
  },
})
</script>