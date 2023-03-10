
import type { PiecePresetType } from "@/types/PieceTypes"
import { PIECE_NAMES } from "../../../types/constants"
import { bishopMove } from "../Moves/BishopMove"
import { kingMove } from "../Moves/KingMove"
import { knightMove } from "../Moves/KnightMove"
import { pawnMove } from "../Moves/PawnMove"
import { queenMove } from "../Moves/QueenMove"


export const ROOK: PiecePresetType = {
	name: PIECE_NAMES.ROOK,
	moves: [queenMove],
}

export const KNIGHT: PiecePresetType = {
	name: PIECE_NAMES.KNIGHT,
	moves: [knightMove],
}

export const BISHOP: PiecePresetType = {
	name: PIECE_NAMES.BISHOP,
	moves: [bishopMove],
}

export const QUEEN: PiecePresetType = {
	name: PIECE_NAMES.QUEEN,
	moves: [queenMove],
}

export const KING: PiecePresetType = {
	name: PIECE_NAMES.KING,
	moves: [kingMove],
}

export const PAWN: PiecePresetType = {
	name: PIECE_NAMES.PAWN,
	moves: [pawnMove],
}

export const piecePresets: { [key: string]: PiecePresetType } = {
	ROOK,
	KNIGHT,
	BISHOP,
	QUEEN,
	KING,
	PAWN,
}
