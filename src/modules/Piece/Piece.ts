import type { PieceDescriptionType, GetMovesType } from "../../types/PieceTypes"

export class Piece {
	private _description: PieceDescriptionType

	constructor(description: PieceDescriptionType) {
		this._description = description
	}

	get description(): PieceDescriptionType {
		return this._description
	}
	set description(description: PieceDescriptionType) {
		this._description = description
	}

	addMove(move: GetMovesType): void {
		this.description.moves.push(move)
	}

	kill(): void {
		this.description.lives = 0
	}

	revive(lives = 1): void {
		this.description.lives = lives
	}

	isAlive(): boolean {
		return !!this.description.lives
	}
}
