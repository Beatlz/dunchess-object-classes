import { rookMove } from "./RookMove"
import { bishopMove } from "./BishopMove"
import { kingMove } from "./KingMove"
import { knightMove } from "./KnightMove"
import { pawnMove } from "./PawnMove"
import { queenMove } from "./QueenMove"

export default {
	ROOK: rookMove,
	BISHOP: bishopMove,
	KNIGHT: knightMove,
	QUEEN: queenMove,
	KING: kingMove,
	PAWN: pawnMove,
}
