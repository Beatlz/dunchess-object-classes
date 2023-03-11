import { filterMap } from "@/utility/filterMap"
import { DungeonLayoutType, DungeonSimplifiedSquareType } from "@/types/DungeonTypes"
import { serializeKey } from "@/utility/serializeKey"
import { Square } from "./Square/Square"
import { Tile } from "./Tile/Tile"
import { Piece } from "../Piece/Piece"

export const serializeLayout = (layout: DungeonLayoutType, optimize = true): DungeonSimplifiedSquareType[] => {
	if (!optimize) {
		return Object.values(layout).map((square) => {
			const simplifiedSquare: DungeonSimplifiedSquareType = {
				x: square.getProp(`x`),
				y: square.getProp(`y`),
				color: square.getProp(`color`),
				isActive: square.getProp(`isActive`),
			}

			if (square.getProp(`piece`)) simplifiedSquare.piece = square.getProp(`piece`)?.description
			if (square.getProp(`tile`)) simplifiedSquare.tile = square.getProp(`tile`)?.name

			return simplifiedSquare
		})
	}

	return filterMap(
		Object.values(layout),
		square => square.getProp(`isActive`),
		square => {
			const simplifiedSquare: DungeonSimplifiedSquareType = {
				x: square.getProp(`x`),
				y: square.getProp(`y`),
				color: square.getProp(`color`),
				isActive: square.getProp(`isActive`),
			}

			if (square.getProp(`piece`)) simplifiedSquare.piece = square.getProp(`piece`)?.description
			if (square.getProp(`tile`)) simplifiedSquare.tile = square.getProp(`tile`)?.name

			return simplifiedSquare
		}
	)
}

export const deserializeLayout = (simplifiedLayout: DungeonSimplifiedSquareType[]): DungeonLayoutType => {
	const layout: DungeonLayoutType = {}
  
	simplifiedLayout.forEach(simplifiedSquare => {
		const { x, y, isActive, color } = simplifiedSquare
		const key = serializeKey({ x, y })
    
		layout[key] = new Square({
			x,
			y,
			isActive,
			color,
		})

		if (simplifiedSquare.tile) layout[key].description.tile = new Tile(simplifiedSquare.tile)
		if (simplifiedSquare.piece) {
			const piece = simplifiedSquare.piece
			layout[key].description.piece = new Piece(piece)
		}
	})

	return layout
}

export const layoutToJSON = (layout: DungeonLayoutType, optimize = true): string => {
	return JSON.stringify(serializeLayout(layout, optimize))
}
