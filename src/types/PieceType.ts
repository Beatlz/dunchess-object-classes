export enum pieceNames {
  PAWN = `PAWN`,
  ROOK =`ROOK`,
  KNIGHT = `KNIGHT`,
  BISHOP = `BISHOP`,
  QUEEN = `QUEEN`,
  KING = `KING`
}

export type PieceNameType = keyof typeof pieceNames

export interface PieceInitOptionsType {
  remainingLives: number
  pieceType: PieceNameType
}
