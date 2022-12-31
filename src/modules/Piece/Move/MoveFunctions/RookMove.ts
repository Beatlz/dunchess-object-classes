import type CoordsType from "@/types/CoordsType"
import type { GetMovesType } from "@/types/PieceType"

import { verticalMove, horizontalMove } from "./GenericMoves"

const rookMove: GetMovesType = (initialSquare: CoordsType, layoutSize: number): CoordsType[] => {
	return [...verticalMove(initialSquare, layoutSize), ...horizontalMove(initialSquare, layoutSize)]
} 

export default rookMove
