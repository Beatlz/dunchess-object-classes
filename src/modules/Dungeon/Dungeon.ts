import type CoordsType from "@/types/CoordsType"
import type { DungeonSquareType, DungeonLayoutType } from "@/types/DungeonType"

import Tile from "./Tile/Tile"
import { squareColors, DUNGEON_SIZE } from "@/types/DungeonType"

const isEven = (num: number): boolean => !(num % 2)

class Dungeon {
	dungeonLayout: DungeonLayoutType

	constructor(dungeonLayout?: DungeonLayoutType | number) {
		if (!dungeonLayout) {
			this.dungeonLayout = this.createLayout(DUNGEON_SIZE)
		} else if (typeof dungeonLayout === `number`) {
			this.dungeonLayout = this.createLayout(dungeonLayout)
		} else {
			this.dungeonLayout = dungeonLayout
		}
	}

	createLayout(dungeonSize: number): DungeonLayoutType {
		const layout: DungeonLayoutType = []
		const totalTiles = Math.pow(dungeonSize, 2)
		const { LIGHT, DARK } = squareColors
  
		let isRightSquareLight = true
		
		for (let tile = 0; tile < totalTiles; tile++) {
			const x = tile % dungeonSize
			const y = dungeonSize - Math.floor(tile / dungeonSize) - 1

			if (isEven(dungeonSize)) {
				if (tile % dungeonSize) isRightSquareLight = !isRightSquareLight

				layout.push({
					x, y,
					color: isRightSquareLight ? LIGHT : DARK,
					isActive: false,
				})
			} else {
				layout.push({
					x, y,
					color: isEven(tile) ? LIGHT : DARK,
					isActive: false,
				})
			}
		}

		return layout
	}

	getDungeonSize(): number {
		return Math.sqrt(this.dungeonLayout.length)
	}
}

export default Dungeon
