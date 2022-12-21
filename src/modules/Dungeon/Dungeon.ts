import type CoordsType from "@/types/CoordsType"
import type { DungeonSquareType, DungeonLayoutType } from "@/types/DungeonType"

import type { TileType } from "@/types/TileType"
import { squareColors, DUNGEON_SIZE } from "@/types/DungeonType"

const isEven = (num: number): boolean => !(num % 2)

class Dungeon {
	#layout: DungeonLayoutType = new Map()

	constructor (layout?: DungeonLayoutType | number) {
		if (!layout) {
			this.#layout = this.createLayout(DUNGEON_SIZE)
		} else if (typeof layout === `number`) {
			this.#layout = this.createLayout(layout)
		} else {
			this.#layout = layout
		}
	}

	createLayout(layoutSize: number): DungeonLayoutType {
		const layout: DungeonLayoutType = new Map()

		const totalTiles = Math.pow(layoutSize, 2)
		const { LIGHT, DARK } = squareColors
		const layoutIterator = new Array(totalTiles).fill({ x: null, y: null })
		
		let isRightSquareLight = true

		for (const key of layoutIterator.keys()) {
			const x = key % layoutSize
			const y = layoutSize - Math.floor(key / layoutSize) - 1

			layoutIterator[key] = { x, y }

			if (isEven(layoutSize)) {
				if (key % layoutSize) isRightSquareLight = !isRightSquareLight

				layout.set(layoutIterator[key], {
					x, y,
					color: isRightSquareLight ? LIGHT : DARK,
					isActive: false,
				})
			} else {
				layout.set(layoutIterator[key], {
					x, y,
					color: isRightSquareLight ? LIGHT : DARK,
					isActive: false,
				})
			}
		}

		return layout
	}

	clear() {
		this.#layout = new Map()
	}
	delete(coords: CoordsType) {
		return this.#layout.delete(coords)
	}
	get(coords: CoordsType) {
		return this.#layout.get(coords)
	}
	has(coords: CoordsType) {
		return this.#layout.has(coords)
	}
	set(coords: CoordsType, square: DungeonSquareType): DungeonLayoutType {
		this.#layout.set(coords, square)

		return this
	}


}

// class Dungeon {
// 	#layout: DungeonLayoutType = []

// 	constructor(layout?: DungeonLayoutType | number) {
// 		if (!layout) {
// 			this.#layout = this.createLayout(DUNGEON_SIZE)
// 		} else if (typeof layout === `number`) {
// 			this.#layout = this.createLayout(layout)
// 		} else {
// 			this.#layout = layout
// 		}
// 	}

// 	createLayout(layoutSize: number): DungeonLayoutType {
// 		const layout: DungeonLayoutType = []
// 		const totalTiles = Math.pow(layoutSize, 2)
// 		const { LIGHT, DARK } = squareColors
  
// 		let isRightSquareLight = true
		
// 		for (let tile = 0; tile < totalTiles; tile++) {
// 			const x = tile % layoutSize
// 			const y = layoutSize - Math.floor(tile / layoutSize) - 1

// 			if (isEven(layoutSize)) {
// 				if (tile % layoutSize) isRightSquareLight = !isRightSquareLight

// 				layout.push({
// 					x, y,
// 					color: isRightSquareLight ? LIGHT : DARK,
// 					isActive: false,
// 				})
// 			} else {
// 				layout.push({
// 					x, y,
// 					color: isEven(tile) ? LIGHT : DARK,
// 					isActive: false,
// 				})
// 			}
// 		}

// 		return layout
// 	}
// }

export default Dungeon
