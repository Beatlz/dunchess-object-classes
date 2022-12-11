import CoordsType from "./CoordsType"

export interface DungeonSquareType extends CoordsType {
  color: `LIGHT` | `DARK`
  isActive: boolean
}

export type DungeonType = DungeonSquareType[]
