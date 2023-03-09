import type { FeatureNameType, TileFeatureType,TileFeaturesListType } from "../../../types/DungeonTypes"

export class Tile {
	// isActive: boolean
	name: string

	tileFeaturesList: TileFeaturesListType

	constructor(name: string, tileFeaturesList?: TileFeaturesListType) {
		this.tileFeaturesList = tileFeaturesList || []
		
		this.name = name
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
		const index = this.tileFeaturesList.findIndex((feature: TileFeatureType) => feature.name === featureName)
    
		this.tileFeaturesList[index].isActive = isActive ?? !this.tileFeaturesList[index].isActive
	}
  
	toggleAllFeatures(isActive: boolean): void {
		this.tileFeaturesList.forEach((feature: TileFeatureType): void => {
			feature.isActive = isActive
		})
	}

	isNormalTile(): boolean {
		return !!this.getFeatures().length
	}
}
