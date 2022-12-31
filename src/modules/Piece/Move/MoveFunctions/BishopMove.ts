import type CoordsType from "@/types/CoordsType"
import type { GetMovesType } from "@/types/PieceType"

const bishopMove: GetMovesType = (initCoords: CoordsType, layoutSize: number): CoordsType[] => {
	const c = initCoords.x - initCoords.y
	const max = layoutSize - 1
	const legalMoves = []

	for (let x = 0; x <= max; x++) {
		let y = x + c

		if (x < max && y < max) {
			legalMoves.push({ x, y })
		}

		y = x * -1 + c

		if (x < max && y >= 0) {
			legalMoves.push({ x, y })
		}
	}

	return legalMoves
}

export default bishopMove
