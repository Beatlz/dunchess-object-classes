import { ColorType } from ".."
import { PieceNameType } from ".."

// Game
export const COLORS: { [key: string]: ColorType } = { LIGHT: `LIGHT`, DARK: `DARK` }

// PIECE
// Names
export const PIECE_NAMES: { [key: string]: PieceNameType } = {
	ROOK: `ROOK`,
	KNIGHT: `KNIGHT`,
	BISHOP: `BISHOP`,
	QUEEN: `QUEEN`,
	KING: `KING`,
	PAWN: `PAWN`,
}
// Initiation
export const INIT_LIVES = 1
