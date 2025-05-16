export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const { package: packageName } = event.context.params!;
  
  const data = await $fetch(`${config.public.npmApiUrl}/${packageName}`);
  return data;
})