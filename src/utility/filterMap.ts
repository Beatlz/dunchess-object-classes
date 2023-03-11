type FilterFnType<T, U> = (value: T, index?: number, array?: T[]) => U | boolean;
type MapFnType<T, U> = (value: T, index: number, array: T[]) => U;

export const filterMap = <T, U>(
	array: T[],
	filterFn: FilterFnType<T, U>,
	mapFn: MapFnType<T, U>
): U[] => {
	return array.reduce((accumulator: U[], currentValue, currentIndex) => {
		if (!filterFn(currentValue, currentIndex, array)) return accumulator
		
		return [
			...accumulator,
			mapFn(currentValue, currentIndex, array),
		]
	}, [])
}

