export enum pieceNames {
  PAWN,
  ROOK,
  KNIGHT,
  BISHOP,
  QUEEN,
  KING,
}

import CoordsType from "./CoordsType"

export type MovesType = CoordsType[]

export type GetMovesType = (initialSquare: CoordsType) => MovesType

export type PieceNameType = keyof typeof pieceNames

export interface PieceInitOptionsType {
  lives: number
  name: PieceNameType
}

export interface PieceDescriptionType {
  lives: number
  moves: (GetMovesType | string)[]
  inventory?: ItemsType[]
  buffs?: BuffType[]
}
