import CoordsType from "./CoordsType"
import { ColorType } from "./DungeonType"

export enum pieceNames {
  PAWN,
  KNIGHT,
  BISHOP,
  QUEEN,
  KING,
  ROOK,
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
  WOLOLO,
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
  color: ColorType
  lives?: number
  moves?: GetMovesType[]
  // inventory?: ItemType[] ==> Not MVP
  statusModifiers?: PieceModifyingFunctionType[]
}
