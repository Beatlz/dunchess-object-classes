import type { CoordsType } from "../../../index"
import type { GetMovesType } from "../../../index"

import { verticalMove, horizontalMove } from "../../../index"

export const rookMove: GetMovesType = (initialSquare: CoordsType, layoutSize: number): CoordsType[] => {
	return [...verticalMove(initialSquare, layoutSize), ...horizontalMove(initialSquare, layoutSize)]
} 
