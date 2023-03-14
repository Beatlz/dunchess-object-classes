import { CoordsType } from "../types/CoordsType"

export const serializeKey = ({ x, y }: CoordsType): string => {
	return `x${x}y${y}`
}

export const deserializeKey = (serializedKey: string): CoordsType | null => {
	const regex = /x(\d+)y(\d+)/
	const match = serializedKey.match(regex)

	if (match) {
		const x = parseInt(match[1], 10)
		const y = parseInt(match[2], 10)
		
		return { x, y }
	}

	return null
}
