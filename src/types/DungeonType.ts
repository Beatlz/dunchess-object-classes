import CoordsType from "./CoordsType"
import { TileType } from "./TileType"

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

export type DungeonLayoutType = DungeonSquareType[]
