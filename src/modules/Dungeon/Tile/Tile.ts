import type { FeatureNameType, TileFeatureType, TileFeaturesListType } from "@/types/TileType"

class Tile {
	tileFeaturesList: TileFeaturesListType

	constructor(tileFeaturesList?: TileFeaturesListType) {
		this.tileFeaturesList = tileFeaturesList || []
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
		return !!this.tileFeaturesList.length
	}
}

export default Tile
