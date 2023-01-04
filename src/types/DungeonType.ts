import { CoordsType } from ".."

export enum colorsList {
  LIGHT,
  DARK,
}

export enum dungeonList {
  TUTORIAL_1,
  TUTORIAL_2,
  TUTORIAL_3,
  EIXAMPCHESS,
  SACRILEGE,
  LASTLEVEL,
}

export enum featuresList {
  TELEPORT,
  FREEZE,
  LADDER,
  SPAWNER,
  ARMOR,
  ADD_MOVE
}

export type ColorType = keyof typeof colorsList

export type DungeonNameType = keyof typeof dungeonList

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

export const DUNGEON_SIZE = 16

export interface DungeonSquareType extends CoordsType {
  color: ColorType
  isActive: boolean
  tile?: TileType
}

export interface DungeonLayoutType { [key: string]: DungeonSquareType }
