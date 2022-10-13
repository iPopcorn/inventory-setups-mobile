/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable unicorn/prevent-abbreviations */
import mockSetup from 'mocks/mockInventorySetup'
import type { ReactElement } from 'react'
import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import type { Item } from 'types'

interface ItemDisplayProps {
	item: Item
}

function ItemDisplay({ item }: ItemDisplayProps): ReactElement {
	const [isSelected, setIsSelected] = useState(false)

	const onItemSelected = (): void => {
		setIsSelected(prevIsSelected => !prevIsSelected)
	}

	return (
		<button
			type='button'
			className={`my-2 rounded-lg border-2 border-gray-50 py-2 px-2 ${
				isSelected ? 'bg-lime-700' : ''
			}`}
			onClick={onItemSelected}
		>
			<div className='flex flex-row justify-center'>
				{item.quantity > 1 ? (
					<p className='mr-2'>{item.quantity}</p>
				) : undefined}
				<p>{item.name}</p>
			</div>
		</button>
	)
}

const displayItems = (items: Item[]): ReactElement[] =>
	items
		.filter(item => item.name !== 'null')
		.map(item => (
			<li key={item.id}>
				<ItemDisplay item={item} />
			</li>
		))

interface ItemListProps {
	items: Item[]
}

function ItemList({ items }: ItemListProps): ReactElement {
	return <ul>{displayItems(items)}</ul>
}

export default function InventorySetupDisplay(): ReactElement {
	const [inventoryVisible, setInventoryVisible] = useState(false)
	const [equipmentVisible, setEquipmentVisible] = useState(false)
	const [additionalItemsVisible, setAdditionalItemsVisible] = useState(false)

	const onToggleInventoryVisible = (): void =>
		setInventoryVisible(previousInventoryVisible => !previousInventoryVisible)

	const onToggleEquipmentVisible = (): void =>
		setEquipmentVisible(previousEquipmentVisible => !previousEquipmentVisible)

	const onToggleAdditionalItemsVisible = (): void =>
		setAdditionalItemsVisible(
			previousAdditionalItemsVisible => !previousAdditionalItemsVisible
		)

	return (
		<div className='mt-2'>
			<h1>Name: {mockSetup.name}</h1>
			<button type='button' onClick={onToggleInventoryVisible}>
				<h2>
					Inventory{' '}
					{inventoryVisible ? (
						<FiChevronUp className='inline-block' />
					) : (
						<FiChevronDown className='inline-block' />
					)}
				</h2>
			</button>
			<div className='m-auto w-1/2'>
				{inventoryVisible ? (
					<ItemList items={mockSetup.inventory} />
				) : undefined}
			</div>
			<button type='button' onClick={onToggleEquipmentVisible}>
				<h2>
					Equipment{' '}
					{equipmentVisible ? (
						<FiChevronUp className='inline-block' />
					) : (
						<FiChevronDown className='inline-block' />
					)}
				</h2>
			</button>
			<div className='m-auto w-1/2'>
				{equipmentVisible ? (
					<ItemList items={mockSetup.equipment} />
				) : undefined}
			</div>
			<button type='button' onClick={onToggleAdditionalItemsVisible}>
				<h2>
					Additional Items{' '}
					{additionalItemsVisible ? (
						<FiChevronUp className='inline-block' />
					) : (
						<FiChevronDown className='inline-block' />
					)}
				</h2>
			</button>
			<div className='m-auto w-1/2'>
				{additionalItemsVisible ? (
					<ItemList items={mockSetup.additionalFilteredItems} />
				) : undefined}
			</div>
		</div>
	)
}
