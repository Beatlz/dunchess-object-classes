import type { PieceNameType, PiecePresetDescriptionType } from "../../../types/PieceTypes"
import { Piece } from "../../Piece/Piece"
import { PIECE_NAMES } from "../../../types/constants"
import { bishopMove } from "../Moves/BishopMove"

export class Bishop extends Piece {
	readonly name: PieceNameType = PIECE_NAMES.BISHOP

	constructor (pieceDescription: PiecePresetDescriptionType) {
		super({ ...pieceDescription, name: PIECE_NAMES.BISHOP, moves: [bishopMove] })
	}
}
