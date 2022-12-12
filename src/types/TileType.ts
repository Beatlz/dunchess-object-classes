export enum tileColor {
  LIGHT,
  DARK
}

export enum featuresList {
  TELEPORT,
  FREEZE,
  LADDER,
  SPAWNER,
  ARMOR,
  ADD_MOVE
}

export type TileColorType = keyof typeof tileColor

export type FeatureNameType = keyof typeof featuresList

export interface TileFeatureType {
  name: FeatureNameType
  isActive: boolean
  action: (params: any) => any // To do: rework
}

export type TileFeaturesListType = TileFeatureType[]

export interface TileType {
  isActive: boolean
  features: TileFeaturesListType 
}
