import { INIT_LIVES } from "@/types/constants"
import CoordsType from "@/types/CoordsType"
import type { ColorType } from "@/types/DungeonType"
import { PieceDescriptionType, GetMovesType, PieceModifyingFunctionType } from "@/types/PieceType"

class Piece {
	public color: ColorType

	public moves: GetMovesType[]

	public lives: number

	public statusModifiers: PieceModifyingFunctionType[]

	constructor(pieceDescription: PieceDescriptionType) {
		this.color = pieceDescription.color
		this.moves = pieceDescription.moves
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

export default Piece
