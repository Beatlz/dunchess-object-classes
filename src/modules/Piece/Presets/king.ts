import { Piece } from "../../Piece/Piece"
import { kingMove } from "../Moves/KingMove"
import { PIECE_NAMES } from "../../../types/constants"
import type { ColorType } from "@/types/DungeonTypes"

export class King extends Piece {
	constructor (color: ColorType) {
		super({
			color,
			name: PIECE_NAMES.KING,
			moves: [kingMove],
		})
	}
}
