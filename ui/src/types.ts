export interface InventorySetup {
	inventory: Item[]
	equipment: Item[]
	additionalFilteredItems: Item[]
	name: string
	notes: string
	highlightColor: string
	highlightDifference: boolean
	filterBank: boolean
	unorderedHighlight: boolean
	spellBook: number
	favorite: boolean
	iconID: number
}

export interface Item {
	id: number
	name: string
	quantity: number
	fuzzy: boolean
	stackCompare: string
}
