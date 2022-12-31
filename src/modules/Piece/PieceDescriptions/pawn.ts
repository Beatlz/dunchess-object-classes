import type { PieceNameType } from "@/types/PieceType"

import Piece from "../Piece"
import pawnMove from "../Move/PawnMove.ts"
import { PIECE_PAWN } from "@/types/constants"

class Pawn extends Piece {
	readonly name: PieceNameType = PIECE_PAWN

	constructor (pieceDescription: PiecePresetDescriptionType) {
		super({ ...pieceDescription, moves: [pawnMove] })
	}
}

export default Pawn
