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

export interface DungeonLayoutMapType <K extends CoordsType, V extends DungeonSquareType> {
  delete(key: K): boolean;
  get(key: K): V | undefined;
  has(key: K): boolean;
  set(key: K, value: V): this;
}

export type DungeonLayoutType = DungeonLayoutMapType<CoordsType, DungeonSquareType>
