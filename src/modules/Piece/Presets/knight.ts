import type { PieceNameType, PiecePresetDescriptionType } from "../../.."

import { Piece } from "../../.."
import { knightMove } from "../../.."
import { PIECE_NAMES } from "../../.."

export class Knight extends Piece {
	readonly name: PieceNameType = PIECE_NAMES.KNIGHT

	constructor (pieceDescription: PiecePresetDescriptionType) {
		super({ ...pieceDescription, moves: [knightMove] })
	}
}
