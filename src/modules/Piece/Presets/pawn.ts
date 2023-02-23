import type { PieceNameType, PiecePresetDescriptionType } from "../../../types/PieceTypes"

import { Piece } from "../../Piece/Piece"
import { pawnMove } from "../Moves/PawnMove"
import { PIECE_NAMES } from "../../../types/constants"

export class Pawn extends Piece {
	readonly name: PieceNameType = PIECE_NAMES.PAWN

	constructor (pieceDescription: PiecePresetDescriptionType) {
		super({ ...pieceDescription, name: PIECE_NAMES.PAWN, moves: [pawnMove] })
	}
}
