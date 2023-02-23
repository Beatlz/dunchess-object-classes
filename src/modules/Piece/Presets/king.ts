import type { PieceNameType, PiecePresetDescriptionType } from "../../../types/PieceTypes"
import { Piece } from "../../Piece/Piece"
import { kingMove } from "../Moves/KingMove"
import { PIECE_NAMES } from "../../../types/constants"

export class King extends Piece {
	readonly name: PieceNameType = PIECE_NAMES.KING

	constructor (pieceDescription: PiecePresetDescriptionType) {
		super({ ...pieceDescription, name: PIECE_NAMES.KING, moves: [kingMove] })
	}
}
