<template>
  <div class="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:grid gap-16 sm:gap-y-24 py-10 sm:py-20 lg:py-20">
    <HeroBanner />
    <PackagesList :packages="getFilteredPackages()" />
  </div>
</template>

<script setup lang="ts">
const { getFilteredPackages } = usePackageStore()
</script>