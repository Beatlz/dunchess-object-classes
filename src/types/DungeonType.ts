import CoordsType from "./CoordsType"
import { TileType, TileColorType } from "./TileType"

export interface DungeonSquareType extends CoordsType {
  color: TileColorType
  isActive: boolean
  tile?: TileType
}

export type DungeonLayoutType = DungeonSquareType[]
