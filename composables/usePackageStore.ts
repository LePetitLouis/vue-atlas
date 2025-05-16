import type { IPackageInfo } from "~/lib/package"


export const usePackageStore = () => {
  const packages = useState<IPackageInfo[]>('packages', () => [])
  const search = useState<string>('search', () => '')

  const getPackages = (slug: string) => {
    return packages.value.find(p => p.meta.name === slug)
  }

  const getFilteredPackages = () => {
    return packages.value.filter(pkg => pkg.meta.name.toLowerCase().includes(search.value.toLowerCase()))
  }

  const getPackagesInCategory = (category: string) => {
    return packages.value.filter(pkg => pkg.meta.category.replace(' ', '-').toLocaleLowerCase() === category)
  }

  const initPackages = async() => {
    const packagesList = await usePackageMetadata()
    if (!packagesList) return

    const results = await Promise.all(
      packagesList.map(async (pkg) => {
        const { data: github } = await useGithubRepo(pkg.github)
        const { data: npm } = await useNpmPackage(encodeURIComponent(pkg.npm))

        return {
          meta: pkg,
          github: github.value,
          npm: npm.value,
        }
      })
    )
    packages.value = results
  }

  return {
    packages,
    search,
    getPackages,
    initPackages,
    getFilteredPackages,
    getPackagesInCategory,
  }
}