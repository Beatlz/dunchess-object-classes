export enum pieceNames {
  PAWN,
  ROOK,
  KNIGHT,
  BISHOP,
  QUEEN,
  KING,
}

export type PieceNameType = keyof typeof pieceNames

export interface PieceInitOptionsType {
  lives: number
  name: PieceNameType
}
