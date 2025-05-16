interface GithubApiResponse {
  stargazers_count: number
  forks_count: number
  created_at: string
  contributors_url: string
}

export default defineEventHandler(async (event) => {
  const { repo } = getQuery(event);
  if (!repo || typeof repo !== 'string') throw createError({ statusCode: 400, statusMessage: 'Invalid repository name' });

  const res = await $fetch<GithubApiResponse>(`https://api.github.com/repos/${repo}`);
  const contributors = await $fetch<{ login: string }[]>(res.contributors_url);

  return {
    stars: res.stargazers_count,
    forks: res.forks_count,
    createdAt: res.created_at,
    contributors: contributors.map((contributor) => contributor.login)
  }

});