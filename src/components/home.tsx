/* eslint-disable react/button-has-type */
import type { ReactElement } from 'react'
import { useState } from 'react'
import InventorySetupDisplay from './inventorySetupDisplay'

export default function Home(): ReactElement {
	const [setupVisible, setSetupVisible] = useState(false)

	const onToggleSetupVisible = (): void => {
		setSetupVisible(previousSetupVisible => !previousSetupVisible)
	}

	return (
		<div className='text-center'>
			<h1 className='mb-4 text-2xl'>Welcome to Inventory Setups Mobile!</h1>
			<button
				className='mt-2 rounded-lg border-2 border-gray-50 px-2'
				onClick={onToggleSetupVisible}
			>
				{`${setupVisible ? 'Hide' : 'Show'} Inventory Setup`}
			</button>
			{setupVisible ? <InventorySetupDisplay /> : undefined}
		</div>
	)
}
