<template>
  <UInput 
    v-model="search" 
    icon="i-lucide-search"
    size="xl" 
    variant="outline" 
    placeholder="Search a package..." 
    class="w-full"
  />
</template>

<script setup lang="ts">
const { search } = usePackageStore()
</script>