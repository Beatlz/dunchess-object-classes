import type { CoordsType } from "./CoordsType"
import type { SquareDescriptionType } from "./DungeonTypes"
import { Piece } from "../modules/Piece/Piece"
export interface GameStateType extends SquareDescriptionType {
  piece: Piece
}
export interface GameActionType {
  piece: Piece
  moves: CoordsType[]
  attacks: [] // Some function that debuffs another piece
  buffs: [] // Some function that describes what a buff does
}

// GameActions alter the GameState. This means that if we take the initial state and apply a list of GameActions, we eventually
// end with the final GameState.
