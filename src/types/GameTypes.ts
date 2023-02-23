import type { CoordsType } from "./CoordsType"
import type { PieceType } from "../modules/Piece/Piece"
import type { DungeonSquareType } from "./DungeonTypes"
export interface GameStateType extends DungeonSquareType {
  piece: PieceType
}
export interface GameActionType {
  piece: PieceType
  moves: CoordsType[]
  attacks: [] // Some function that debuffs another piece
  buffs: [] // Some function that describes what a buff does
}

// GameActions alter the GameState. This means that if we take the initial state and apply a list of GameActions, we eventually
// end with the final GameState.
