import { PIECE_NAMES } from "../../types/constants"
import { bishopMove } from "./Moves/BishopMove"
import { kingMove } from "./Moves/KingMove"
import { knightMove } from "./Moves/KnightMove"
import { pawnMove } from "./Moves/PawnMove"
import { queenMove } from "./Moves/QueenMove"
import type { PiecePresetType } from "@/types/PieceTypes"

export const rook = {
	name: PIECE_NAMES.ROOK,
	moves: [queenMove],
}

export const knight = {
	name: PIECE_NAMES.KNIGHT,
	moves: [knightMove],
}

export const bishop = {
	name: PIECE_NAMES.BISHOP,
	moves: [bishopMove],
}

export const queen = {
	name: PIECE_NAMES.QUEEN,
	moves: [queenMove],
}

export const king = {
	name: PIECE_NAMES.KING,
	moves: [kingMove],
}

export const pawn = {
	name: PIECE_NAMES.PAWN,
	moves: [pawnMove],
}

const presets: { [key: string]: PiecePresetType } = {
	rook,
	knight,
	bishop,
	queen,
	king,
	pawn,
}

export default presets
