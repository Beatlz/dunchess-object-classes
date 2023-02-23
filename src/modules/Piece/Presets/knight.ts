import type { PieceNameType, PiecePresetDescriptionType } from "../../../types/PieceTypes"

import { Piece } from "../../Piece/Piece"
import { knightMove } from "../Moves/KnightMove"
import { PIECE_NAMES } from "../../../types/constants"

export class Knight extends Piece {
	readonly name: PieceNameType = PIECE_NAMES.KNIGHT

	constructor (pieceDescription: PiecePresetDescriptionType) {
		super({ ...pieceDescription, name: PIECE_NAMES.KNIGHT, moves: [knightMove] })
	}
}
