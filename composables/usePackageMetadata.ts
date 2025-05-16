import type { IMetadataPackage } from "~/lib/package"

export const usePackageMetadata = async (): Promise<IMetadataPackage[] | null> => {
  return await queryCollection('packages').all()
}