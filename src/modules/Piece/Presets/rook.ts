import type { PieceNameType, PiecePresetDescriptionType } from "../../../types/PieceTypes"

import { Piece } from "../../Piece/Piece"
import { rookMove } from "../Moves/RookMove"
import { PIECE_NAMES } from "../../../types/constants"

export class Rook extends Piece {
	readonly name: PieceNameType = PIECE_NAMES.ROOK

	constructor (pieceDescription: PiecePresetDescriptionType) {
		super({ ...pieceDescription, name: PIECE_NAMES.ROOK, moves: [rookMove] })
	}
}
