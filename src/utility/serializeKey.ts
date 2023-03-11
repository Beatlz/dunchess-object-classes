import { CoordsType } from "../types/CoordsType"

export const serializeKey = ({ x, y }: CoordsType): string => {
	return `x${x}y${y}`
}
