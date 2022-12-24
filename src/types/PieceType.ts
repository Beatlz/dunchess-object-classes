import CoordsType from "./CoordsType"

export enum pieceNames {
  PAWN,
  ROOK,
  KNIGHT,
  BISHOP,
  QUEEN,
  KING,
}

export enum moveNames {
  // Register here all move names that are not 
  // default for a piece.
  CHANCELLOR,
  ARCBISHOP
}

export type PieceNameType = keyof typeof pieceNames

export type MoveNameType = keyof typeof moveNames | PieceNameType

export type MoveType = (CoordsType | MoveNameType)[]

export type GetMovesType = (initialSquare: CoordsType) => MoveType

export interface PieceInitOptionsType {
  lives: number
  name: PieceNameType
}

export interface PieceDescriptionType {
  lives: number
  moves: (GetMovesType | string)[]
  inventory?: ItemType[]
  buffs?: BuffType[]
}

export type PieceType = PieceDescriptionType | PieceNameType
