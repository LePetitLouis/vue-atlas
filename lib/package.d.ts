export interface IMetadataPackage {
  name: string
  description: string
  npm: string
  github: string
  website: string
  compatibility: string
  category: string
}

export interface IGithubApiResponse {
  stargazers_count: number
  forks_count: number
  created_at: string
  contributors_url: string
}

export interface INpmApiResponse {
  readme: string
}

export interface IPackageInfo {
  github: IGithubApiResponse | null
  npm: INpmApiResponse | null
  meta: IMetadataPackage
}