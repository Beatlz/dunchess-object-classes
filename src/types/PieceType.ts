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
  ARCHBISHOP
}

export enum itemNames {
  TELEPORTER,
  COSTUME,
}

export enum buffNames {
  HUNGER,
  SPEED,
  ARMOR,
}

export enum debuffNames {
  SLEEP,
  STUN,
  ROOT,
}

export type PieceNameType = keyof typeof pieceNames

export type MoveNameType = keyof typeof moveNames | PieceNameType

export type itemNameType = keyof typeof itemNames

export type buffNameType = keyof typeof buffNames

export type debuffNameType = keyof typeof debuffNames

export type MoveType = CoordsType[]

export type GetMovesType = (initialSquare: CoordsType) => MoveType

export interface PieceInitOptionsType {
  lives: number
  name: PieceNameType
}

export interface PieceDescriptionType {
  lives: number
  moves: GetMovesType[]
  inventory?: ItemType[]
  buffs?: BuffType[]
}

export type PieceType = PieceDescriptionType
