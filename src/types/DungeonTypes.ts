import { CoordsType, PieceNameType, PieceType, TileType } from ".."

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action: (params: any) => any // To do: rework
}

export type TileFeaturesListType = TileFeatureType[]

export const DUNGEON_SIZE = 16

export interface DungeonSquareType extends CoordsType {
  color: ColorType
  isActive: boolean
  tile?: TileType
  piece?: PieceType
}

export interface DungeonSimplifiedSquareType extends CoordsType {
  color: ColorType
  isActive: boolean
  tile?: string
  piece?: PieceNameType
}

export type DungeonSimplifiedLayoutType = DungeonSimplifiedSquareType[]

export interface DungeonLayoutType { [key: string]: DungeonSquareType }
