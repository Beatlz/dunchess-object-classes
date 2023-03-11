import { Piece } from "@/modules/Piece/Piece"
import { SquareDescriptionType } from "@/types/DungeonTypes"
import { Tile } from "../Tile/Tile"

export class Square {
	private _description: SquareDescriptionType

	constructor(description: SquareDescriptionType) {
		this._description = description
	}

	get description(): SquareDescriptionType {
		return this._description
	}
	set description(square: SquareDescriptionType) {
		this._description = square
	}

	getProp<K extends keyof SquareDescriptionType>(prop: K): SquareDescriptionType[K] {
		return this.description[prop]
	}

	activateSquare(): void {
		this.description.isActive = true
	}

	deactivateSquare(): void {
		this.description.isActive = false
	}

	toggleSquare(): boolean {
		this.description.isActive = !this.description.isActive

		return this.description.isActive
	}
	addPiece(piece: Piece) {
		this.description.piece = piece
	}

	removePiece() {
		delete this.description.piece
	}

	addTile(tile: Tile) {
		this.description.tile = tile
	}

	removeTile() {
		delete this.description.tile
	}
}
