import type { CoordsType } from "../../types/CoordsType"
import type {
	SquareDescriptionType,
	DungeonLayoutType,
} from "../../types/DungeonTypes"
import { COLORS, DUNGEON_SIZE } from "../../types/constants"
import { isEven } from "../../utility/isEven"
import { Square } from "./Square/Square"
import { serializeKey } from "@/utility/serializeKey"

export class Dungeon {
	private _layout = this.createLayout(DUNGEON_SIZE)

	constructor (layout?: DungeonLayoutType) {
		if (layout) this._layout = layout
	}

	set layout(layout: DungeonLayoutType) {
		this._layout = layout
	}
	get layout(): DungeonLayoutType {
		return this._layout
	}

	createLayout(layoutSize: number): DungeonLayoutType {
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

	clearLayout(): void {
		this.layout = {}
	}

	layoutSize(as2D?: `2D`): number {
		const totalSquares = Object.keys(this.layout).length

		return as2D === `2D`
			? Math.sqrt(totalSquares)
			: totalSquares
	}

	getSquare({ x, y }: CoordsType): Square {
		return this.layout[serializeKey({ x, y })]
	}
	setSquare({ x, y }: CoordsType, square: SquareDescriptionType) {
		this.layout[serializeKey({ x, y })] = new Square(square)
	}
	hasSquare(coords: CoordsType): boolean {
		return !!this.getSquare(coords)
	}
}
