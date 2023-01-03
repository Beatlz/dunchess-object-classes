import type { PieceDescriptionType } from "@/types/PieceType"

import Piece from "../Piece"

class CustomPiece extends Piece {
	constructor (pieceDescription: PieceDescriptionType) {
		super(pieceDescription)
	}
}

export default CustomPiece
