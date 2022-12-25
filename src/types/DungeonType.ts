import CoordsType from "./CoordsType"

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

export interface DungeonLayoutMapType <K extends CoordsType, V extends DungeonSquareType> {
  delete(key: K): boolean
  get(key: K): V | undefined
  has(key: K): boolean
  set(key: K, value: V): this
  readonly size: number;
  forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
}

export type DungeonLayoutType = DungeonLayoutMapType<CoordsType, DungeonSquareType>
