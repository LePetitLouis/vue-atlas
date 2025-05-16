import type { IGithubApiResponse } from "~/lib/package";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const { owner, repo } = event.context.params!;

  const data = await $fetch<IGithubApiResponse>(`${config.public.githubApiUrl}/${owner}/${repo}`, {
    headers: {
      Authorization: `Bearer ${config.githubToken}`,
    },
  });

  return data;
})