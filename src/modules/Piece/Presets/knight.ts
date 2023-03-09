import { Piece } from "../../Piece/Piece"
import { knightMove } from "../Moves/KnightMove"
import { PIECE_NAMES } from "../../../types/constants"
import { ColorType } from "@/types/DungeonTypes"

export class Knight extends Piece {
	constructor (color: ColorType) {
		super({
			color,
			name: PIECE_NAMES.KNIGHT,
			moves: [knightMove],
		})
	}
}
