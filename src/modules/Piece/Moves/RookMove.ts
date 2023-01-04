import type { CoordsType } from "../../.."
import type { GetMovesType } from "../../.."

import { verticalMove, horizontalMove } from "../../.."

export const rookMove: GetMovesType = (initialSquare: CoordsType, layoutSize: number): CoordsType[] => {
	return [...verticalMove(initialSquare, layoutSize), ...horizontalMove(initialSquare, layoutSize)]
} 
