import type { CoordsType } from "../../../types/CoordsType"
import type { GetMovesType } from "../../../types/PieceTypes"
import { verticalMove, horizontalMove } from "../Moves/GenericMoves"

export const rookMove: GetMovesType = (initialSquare: CoordsType, layoutSize: number): CoordsType[] => {
	return [...verticalMove(initialSquare, layoutSize), ...horizontalMove(initialSquare, layoutSize)]
} 
