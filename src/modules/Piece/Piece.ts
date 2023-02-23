import { INIT_LIVES } from "../../types/constants"

import type { CoordsType } from "../../types/CoordsType"
import type { ColorType } from "../../types/DungeonTypes"
import type { PieceDescriptionType, GetMovesType, PieceModifyingFunctionType } from "../../types/PieceTypes"

export class Piece {
	public color: ColorType
	public moves: GetMovesType[]
	public lives: number
	public statusModifiers: PieceModifyingFunctionType[] // TODO: might not be needed. It seems pretty stateless.
	readonly name: string

	constructor(pieceDescription: PieceDescriptionType) {
		this.color = pieceDescription.color
		this.moves = pieceDescription.moves
		this.name = pieceDescription.name
		this.lives = pieceDescription.lives || INIT_LIVES
		this.statusModifiers = pieceDescription.statusModifiers || []

		if (pieceDescription.lives) this.setLives(pieceDescription.lives)
	}

	getColor(): ColorType {
		return this.color
	}

	getMoves(): GetMovesType[] {
		return this.moves
	}

	getPossibleMoves(initialSquare: CoordsType, layoutSize: number): CoordsType[] {
		return this.moves.map((move: GetMovesType) => {
			return move(initialSquare, layoutSize)
		}).flat()
	}

	setLives(lives: number): void {
		this.lives = lives
	}

	addMove(move: GetMovesType): void {
		this.moves.push(move)
	}

	kill(): void {
		this.setLives(0)
	}

	revive(remainingLives = 1): void {
		this.setLives(remainingLives)
	}

	isAlive(): boolean {
		return !!this.lives
	}
}

export type PieceType = Piece
