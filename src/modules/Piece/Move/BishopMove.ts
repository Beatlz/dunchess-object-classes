import type CoordsType from "@/types/CoordsType"
import type { GetMovesType } from "@/types/PieceType"
import { diagonalMove } from "./GenericMoves"

const bishopMove: GetMovesType = (initCoords: CoordsType, layoutSize: number): CoordsType[] => {
	return diagonalMove(initCoords, layoutSize)
}

export default bishopMove
