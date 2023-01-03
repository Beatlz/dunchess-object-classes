import type { PiecePresetDescriptionType, PieceNameType } from "@/types/PieceType"

import Piece from "../Piece"
import rookMove from "../Move/MoveFunctions/RookMove"
import { PIECE_ROOK } from "@/types/constants"

class Rook extends Piece {
	readonly name: PieceNameType = PIECE_ROOK

	constructor (pieceDescription: PiecePresetDescriptionType) {
		super({ ...pieceDescription, moves: [rookMove] })
	}
}

export default Rook
