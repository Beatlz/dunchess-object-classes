class Piece {
	public remainingLives = 1

	setRemainingLives(remainingLives: number) {
		this.remainingLives = remainingLives
	}

	kill() {
		this.setRemainingLives(0)
	}

	revive(remainingLives = 1) {
		this.setRemainingLives(remainingLives)
	}

	isAlive(): boolean {
		return !!this.remainingLives
	}
}

export default Piece
