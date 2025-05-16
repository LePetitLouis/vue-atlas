import type { IGithubApiResponse } from "~/lib/package";

export const useGithubRepo = (repo: string) => {
  return useFetch<IGithubApiResponse>(`/api/github/${repo}`);
}