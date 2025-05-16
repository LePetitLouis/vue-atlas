export default defineNuxtPlugin(async () => {
  const { initPackages } = usePackageStore();
  await initPackages();
})