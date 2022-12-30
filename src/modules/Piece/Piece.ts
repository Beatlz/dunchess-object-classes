import { INIT_LIVES } from "@/types/constants"
import type { ColorType } from "@/types/DungeonType"
import { PieceDescriptionType, GetMovesType } from "@/types/PieceType"

class Piece {
	public color: ColorType

	public moves: GetMovesType[] = []

	public lives: number

	constructor(pieceDescription: PieceDescriptionType) {
		this.color = pieceDescription.color
		this.lives = pieceDescription.lives || INIT_LIVES

		if (pieceDescription.lives) this.setLives(pieceDescription.lives)
	}

	getColor(): ColorType {
		return this.color
	}

	setLives(lives: number): void {
		this.lives = lives
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
