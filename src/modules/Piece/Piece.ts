class Piece {
	public lives = 1

	constructor(lives?: number) {
		if (lives) this.setLives(lives)
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
