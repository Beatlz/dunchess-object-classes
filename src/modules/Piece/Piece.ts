import type { ColorType } from "@/types/DungeonType"

class Piece {
	public color: ColorType
	
	public lives = 1

	constructor(color: ColorType, lives?: number) {
		this.color = color

		if (lives) this.setLives(lives)
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
