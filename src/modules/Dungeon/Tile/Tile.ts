import type { FeatureNameType, TileFeatureType, TileFeaturesListType } from "@/types/TileType"

class Tile {
	isActive: boolean

	tileFeaturesList: TileFeaturesListType

	constructor(tileFeaturesList?: TileFeaturesListType, isActive?: boolean) {
		this.tileFeaturesList = tileFeaturesList || []

		this.isActive = isActive ?? true
	}

	setIsActive(isActive: boolean) {
		this.isActive = isActive
	}

	setFeatures(tileFeaturesList: TileFeaturesListType): void {
		this.tileFeaturesList = tileFeaturesList
	}

	getFeatures(): TileFeaturesListType {
		return this.tileFeaturesList
	}

	addFeature(tileFeature: TileFeatureType): void {
		this.tileFeaturesList.push(tileFeature)
	}

	removeAllFeatures(): void {
		this.setFeatures([])
	}

	activateFeature(featureName: FeatureNameType, isActive?: boolean): void {
		const index = this.tileFeaturesList.findIndex((feature) => feature.name === featureName)
    
		this.tileFeaturesList[index].isActive = isActive ?? !this.tileFeaturesList[index].isActive
	}
  
	toggleAllFeatures(isActive: boolean): void {
		this.tileFeaturesList.forEach((feature): void => {
			feature.isActive = isActive
		})
	}

	isNormalTile(): boolean {
		return !!this.getFeatures().length
	}
}

export default Tile

export type TileType = typeof Tile
