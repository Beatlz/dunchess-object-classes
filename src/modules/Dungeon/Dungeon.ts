import type { CoordsType } from "../../types/CoordsType"
import type {
	DungeonSimplifiedSquareType,
	DungeonSquareType,
	DungeonLayoutType,
} from "../../types/DungeonTypes"
import { Tile } from "./Tile/Tile"
import { Piece } from "../Piece/Piece"
import { COLORS, DUNGEON_SIZE } from "../../types/constants"
import filterMap from "../../utility/filterMap"
import isEven from "../../utility/isEven"

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

	coordsToSquareKey({ x, y }: CoordsType): string {
		return `x${x}y${y}`
	}

	getSquare({ x, y }: CoordsType): DungeonSquareType {
		return this.layout[this.coordsToSquareKey({ x, y })]
	}
	setSquare({ x, y }: CoordsType, square: DungeonSquareType) {
		this.layout[this.coordsToSquareKey({ x, y })] = square
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

				layout[`x${x}y${y}`] = {
					x, y,
					color: !isRightSquareLight ? LIGHT : DARK,
					isActive: false,
				}
			} else {
				layout[`x${x}y${y}`] = {
					x, y,
					color: isEven(square) ? LIGHT : DARK,
					isActive: false,
				}
			}
		}

		return layout
	}

	clearLayout(): void {
		this.layout = {}
	}

	deleteSquare(coords: string): void {
		const descriptor = Object.getOwnPropertyDescriptor(this.layout, coords)

		if (descriptor) {
			delete descriptor.value
		}
	}

	hasSquare(coords: CoordsType): boolean {
		return !!this.getSquare(coords)
	}

	activateSquare(coords: CoordsType): void {
		this.getSquare(coords).isActive = true
	}

	deactivateSquare(coords: CoordsType): void {
		this.getSquare(coords).isActive = false
	}
	
	toggleSquare(coords: CoordsType): boolean {
		this.getSquare(coords).isActive = !this.getSquare(coords).isActive

		return this.getSquare(coords).isActive
	}

	layoutSize(as2D?: `2D`): number {
		const totalSquares = Object.keys(this.layout).length

		return as2D === `2D`
			? Math.sqrt(totalSquares)
			: totalSquares
	}

	addPiece(piece: Piece, coords: CoordsType) {
		this.getSquare(coords).piece = piece
	}

	removePiece(coords: CoordsType) {
		delete this.getSquare(coords).piece
	}

	addTile(tile: Tile, coords: CoordsType) {
		this.getSquare(coords).tile = tile
	}
	
	removeTile(coords: CoordsType) {
		delete this.getSquare(coords).tile
	}

	createSimplifiedLayout(optimize = true): DungeonSimplifiedSquareType[] {
		const layout = { ...this.layout }

		if (!optimize) {
			return Object.values(layout).map((square) => {
				const simplifiedSquare: DungeonSimplifiedSquareType = {
					x: square.x,
					y: square.y,
					color: square.color,
					isActive: square.isActive,
				}

				if (square.piece) simplifiedSquare.piece = square.piece.description
				if (square.tile) simplifiedSquare.tile = square.tile.name

				return simplifiedSquare
			})
		}

		return filterMap(
			Object.values(layout),
			square => square.isActive,
			square => {
				const simplifiedSquare: DungeonSimplifiedSquareType = {
					x: square.x,
					y: square.y,
					color: square.color,
					isActive: square.isActive,
				}

				if (square.piece) simplifiedSquare.piece = square.piece.description
				if (square.tile) simplifiedSquare.tile = square.tile.name

				return simplifiedSquare
			}
		)
	}

	unpackSimplifiedLayout(simplifiedLayout: DungeonSimplifiedSquareType[]): DungeonLayoutType {
		const layout: DungeonLayoutType = {}
		
		simplifiedLayout.forEach(simplifiedSquare => {
			const { x, y, isActive, color } = simplifiedSquare
			const key = this.coordsToSquareKey({ x, y })
			layout[key] = {
				x,
				y,
				isActive,
				color,
			}

			if (simplifiedSquare.tile) layout[key].tile = new Tile(simplifiedSquare.tile)
			if (simplifiedSquare.piece) {
				const piece = simplifiedSquare.piece
				layout[key].piece = new Piece(piece)
			}
		})

		return layout
	}
	
	exportLayoutToJSONStandard(optimize = true): string {
		return JSON.stringify(this.createSimplifiedLayout(optimize))
	}
}
