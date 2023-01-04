import type { CoordsType } from "../../../index"
import type { GetMovesType } from "../../../index"

export const horizontalMove: GetMovesType = (
	initialSquare: CoordsType,
	layoutSize: number
): CoordsType[] => {
	const { x } = initialSquare
	const legalMoves = new Array(layoutSize).map((i, index) => {
		return { x: index, y: x }
	})

	return legalMoves
}

export const verticalMove: GetMovesType = (
	initialSquare: CoordsType,
	layoutSize: number
): CoordsType[] => {
	const { y } = initialSquare
	const legalMoves = new Array(layoutSize - 1).map((i, index) => {
		return { x: y, y: index }
	})

	return legalMoves
}

export const diagonalMove: GetMovesType = (initCoords: CoordsType, layoutSize: number): CoordsType[] => {
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
