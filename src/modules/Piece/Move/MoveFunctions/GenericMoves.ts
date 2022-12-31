import type CoordsType from "@/types/CoordsType"
import type { GetMovesType } from "@/types/PieceType"

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
