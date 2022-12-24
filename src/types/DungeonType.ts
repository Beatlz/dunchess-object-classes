import CoordsType from "./CoordsType"

export enum dungeonList {
  TUTORIAL_1,
  TUTORIAL_2,
  TUTORIAL_3,
  EIXAMPCHESS,
  SACRILEGE,
  LASTLEVEL,
}

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

export type DungeonNameType = keyof typeof dungeonList

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


export const squareColors: { [key: string]: string } = {
	LIGHT: `LIGHT`,
	DARK: `DARK`,
}

export const DUNGEON_SIZE = 16

export type SquareColorType = keyof typeof squareColors

export interface DungeonSquareType extends CoordsType {
  color: SquareColorType
  isActive: boolean
  tile?: TileType
}

export interface DungeonLayoutMapType <K extends CoordsType, V extends DungeonSquareType> {
  delete(key: K): boolean
  get(key: K): V | undefined
  has(key: K): boolean
  set(key: K, value: V): this
  readonly size: number;
  forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
}

export type DungeonLayoutType = DungeonLayoutMapType<CoordsType, DungeonSquareType>
