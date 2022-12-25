import type CoordsType from "@/types/CoordsType"
import type { DungeonSquareType, DungeonLayoutType } from "@/types/DungeonType"

import { COLORS } from "@/types/constants"
import { DUNGEON_SIZE } from "@/types/DungeonType"

const isEven = (num: number): boolean => !(num % 2)

class Dungeon {
	#layout: DungeonLayoutType = new Map()

	constructor (layout?: DungeonLayoutType | number) {
		this.setLayout(layout)
	}

	createLayout(layoutSize: number): DungeonLayoutType {
		const layout: DungeonLayoutType = new Map()

		const totalTiles = Math.pow(layoutSize, 2)
		const { LIGHT, DARK } = COLORS
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

	clearLayout(): void {
		this.#layout = this.createLayout(<number>this.getLayoutSize())
	}
	deleteSquare(coords: CoordsType): boolean {
		return this.#layout.delete(coords)
	}
	getSquare(coords: CoordsType): DungeonSquareType | undefined {
		return this.#layout.get(coords)
	}
	hasSquare(coords: CoordsType): boolean {
		return this.#layout.has(coords)
	}
	setSquare(coords: CoordsType, square: DungeonSquareType): void {
		this.#layout.set(coords, square)
	}
	activateSquare(coords: CoordsType): void {
		if (!this.getSquare(coords)) return

		this.setSquare(coords, { ...this.getSquare(coords)!, isActive: true })
	}
	getLayoutSize(as2D?: `2D`): number | string {
		return as2D === `2D`
			? `${Math.sqrt(this.#layout.size)} x ${Math.sqrt(this.#layout.size)}` 
			: this.#layout.size
	}
	getLayout() {
		return this.#layout
	}
	setLayout(layout?: DungeonLayoutType | number) {
		if (!layout) {
			this.#layout = this.createLayout(DUNGEON_SIZE)
		} else if (typeof layout === `number`) {
			this.#layout = this.createLayout(layout)
		} else {
			this.#layout = layout
		}
	}
}

export default Dungeon
