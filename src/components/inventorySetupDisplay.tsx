import mockSetup from 'mocks/mockInventorySetup'
import type { ReactElement } from 'react'
import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

export default function InventorySetupDisplay(): ReactElement {
	const [inventoryVisible, setInventoryVisible] = useState(false)

	const onToggleInventoryVisible = (): void =>
		setInventoryVisible(previousInventoryVisible => !previousInventoryVisible)

	const displayInventory = (): ReactElement[] =>
		mockSetup.inventory
			.filter(item => item.name !== 'null')
			.map(item => (
				<li key={item.id}>
					<div>
						<p>{item.name}</p>
						<p>{item.quantity}</p>
					</div>
				</li>
			))

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
			<ul>{inventoryVisible ? displayInventory() : undefined}</ul>
		</div>
	)
}
