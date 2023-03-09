import { Piece } from "../../Piece/Piece"
import { queenMove } from "../Moves/QueenMove"
import { PIECE_NAMES } from "../../../types/constants"
import { ColorType } from "@/types/DungeonTypes"

export class Queen extends Piece {
	constructor (color: ColorType) {
		super({
			color,
			name: PIECE_NAMES.KNIGHT,
			moves: [queenMove],
		})
	}
}
