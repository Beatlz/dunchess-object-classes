import type { PieceNameType, PiecePresetDescriptionType } from "../../.."

import { Piece } from "../../.."
import { pawnMove } from "../../.."
import { PIECE_NAMES } from "../../.."

export class Pawn extends Piece {
	readonly name: PieceNameType = PIECE_NAMES.PAWN

	constructor (pieceDescription: PiecePresetDescriptionType) {
		super({ ...pieceDescription, moves: [pawnMove] })
	}
}
