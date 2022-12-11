import CoordsType from "./CoordsType"

export type MovesType = CoordsType[]

export type GetMovesType = (initialSquare: CoordsType) => MovesType
