import type { PieceNameType, PiecePresetDescriptionType } from "../../../types/PieceTypes"

import { Piece } from "../../Piece/Piece"
import { queenMove } from "../Moves/QueenMove"
import { PIECE_NAMES } from "../../../types/constants"

export class Queen extends Piece {
	readonly name: PieceNameType = PIECE_NAMES.QUEEN

	constructor (pieceDescription: PiecePresetDescriptionType) {
		super({ ...pieceDescription, name: PIECE_NAMES.QUEEN, moves: [queenMove] })
	}
}
