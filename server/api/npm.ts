interface NpmApiResponse {
  readme?: string
  time?: Record<string, string>
  'dist-tags': {
    latest: string
  }
}

export default defineEventHandler(async (event) => {
  const { name } = getQuery(event);
  if (!name || typeof name !== 'string') throw createError({ statusCode: 400, statusMessage: 'Invalid package name' });

  const res = await $fetch<NpmApiResponse>(`https://registry.npmjs.org/${name}`);

  return {
    downloads: res.time ? Object.keys(res.time).length : 0,
    version: res['dist-tags'].latest,
    readme: res.readme || ''
  }
});