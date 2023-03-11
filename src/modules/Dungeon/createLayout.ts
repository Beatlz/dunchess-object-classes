import { COLORS } from "@/types/constants"
import { DungeonLayoutType } from "@/types/DungeonTypes"
import { isEven } from "@/utility/isEven"
import { Square } from "./Square/Square"

export const createLayout = (layoutSize: number): DungeonLayoutType => {
	const layout: DungeonLayoutType = {}

	const totalTiles = Math.pow(layoutSize, 2)
	const { LIGHT, DARK } = COLORS
  
	let isRightSquareLight = true

	for (let square = 0; square < totalTiles; square++) {
		const x = square % layoutSize
		const y = Math.floor(square / layoutSize)

		if (isEven(layoutSize)) {
			if (square % layoutSize) isRightSquareLight = !isRightSquareLight

			layout[`x${x}y${y}`] = new Square({
				x, y,
				color: !isRightSquareLight ? LIGHT : DARK,
				isActive: false,
			})
		} else {
			layout[`x${x}y${y}`] = new Square({
				x, y,
				color: isEven(square) ? LIGHT : DARK,
				isActive: false,
			})
		}
	}

	return layout
}
