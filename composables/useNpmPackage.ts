import type { INpmApiResponse } from "~/lib/package";

export const useNpmPackage = (packageName: string) => {
  return useFetch<INpmApiResponse>(`/api/npm/${packageName}`);
};