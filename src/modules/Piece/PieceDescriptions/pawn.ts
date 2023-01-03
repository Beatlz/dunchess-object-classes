import type { PieceNameType, PiecePresetDescriptionType } from "@/types/PieceType"

import Piece from "../Piece"
import pawnMove from "../Moves/PawnMove"
import { PIECE_PAWN } from "@/types/constants"

class Pawn extends Piece {
	readonly name: PieceNameType = PIECE_PAWN

	constructor (pieceDescription: PiecePresetDescriptionType) {
		super({ ...pieceDescription, moves: [pawnMove] })
	}
}

export default Pawn
