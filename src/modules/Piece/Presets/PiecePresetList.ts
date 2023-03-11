
import type { PiecePresetType } from "../../../types/PieceTypes"
import { PIECE_NAMES } from "../../../types/constants"
import { bishopMove } from "../Moves/BishopMove"
import { kingMove } from "../Moves/KingMove"
import { knightMove } from "../Moves/KnightMove"
import { pawnMove } from "../Moves/PawnMove"
import { queenMove } from "../Moves/QueenMove"


export const rookPreset: PiecePresetType = {
	name: PIECE_NAMES.ROOK,
	moves: [queenMove],
}

export const knightPreset: PiecePresetType = {
	name: PIECE_NAMES.KNIGHT,
	moves: [knightMove],
}

export const bishopPreset: PiecePresetType = {
	name: PIECE_NAMES.BISHOP,
	moves: [bishopMove],
}

export const queenPreset: PiecePresetType = {
	name: PIECE_NAMES.QUEEN,
	moves: [queenMove],
}

export const kingPreset: PiecePresetType = {
	name: PIECE_NAMES.KING,
	moves: [kingMove],
}

export const pawnPreset: PiecePresetType = {
	name: PIECE_NAMES.PAWN,
	moves: [pawnMove],
}

export const piecePresets: { [key: string]: PiecePresetType } = {
	rookPreset,
	knightPreset,
	bishopPreset,
	queenPreset,
	kingPreset,
	pawnPreset,
}
