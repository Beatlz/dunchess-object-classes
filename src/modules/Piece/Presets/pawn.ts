import type { PieceNameType, PiecePresetDescriptionType } from "../../.."

import { Piece } from "../../.."
import { pawnMove } from "../../.."
import { PIECE_PAWN } from "../../.."

export class Pawn extends Piece {
	readonly name: PieceNameType = PIECE_PAWN

	constructor (pieceDescription: PiecePresetDescriptionType) {
		super({ ...pieceDescription, moves: [pawnMove] })
	}
}
