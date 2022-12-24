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

export enum pieceModifiablesValueList {
  LIVES = `lives`,
  MOVES = `moves`,
}

export enum statusModifierName {
  HUNGER,
  SPEED,
  ARMOR,
  SLEEP,
  STUN,
  ROOT,
}

export type PieceNameType = keyof typeof pieceNames

export type MoveNameType = keyof typeof moveNames | PieceNameType

export type itemNameType = keyof typeof itemNames

export type statusModifierNameType = keyof typeof statusModifierName

export type MoveType = CoordsType[]

export type GetMovesType = (initialSquare: CoordsType) => MoveType

export interface PieceInitOptionsType {
  lives: number
  name: PieceNameType
}

export type PieceModifyingFunctionType = <
  ModifiableValueType extends pieceModifiablesValueList,
  ParamsType
>(modifiableValue: ModifiableValueType, params?: ParamsType) => PieceDescriptionType[ModifiableValueType]

export interface PieceStatusModifierType {
  isBuff: boolean,
  modifyingFunction: PieceModifyingFunctionType
}

export interface PieceDescriptionType {
  lives: number
  moves: GetMovesType[]
  // inventory?: ItemType[]
  statusModifiers?: PieceModifyingFunctionType[]
}

export type ItemFunctionReturnType = PieceDescriptionType[keyof PieceDescriptionType];

export type PieceType = PieceDescriptionType
