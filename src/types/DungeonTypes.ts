import type { CoordsType } from "./CoordsType"
import type { PieceDescriptionType } from "./PieceTypes"
import type { Piece } from "../modules/Piece/Piece"
import type { Tile } from "../modules/Dungeon/Tile/Tile"
import { Square } from "../modules/Dungeon/Square/Square"

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

export interface SquareDescriptionType extends CoordsType {
  color: ColorType
  isActive: boolean
  tile?: Tile
  piece?: Piece
}

export interface DungeonSimplifiedSquareType extends CoordsType {
  color: ColorType
  isActive: boolean
  tile?: string
  piece?: PieceDescriptionType
}

export interface DungeonLayoutType { [key: string]: Square }
