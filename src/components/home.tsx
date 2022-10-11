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
		<div>
			<h1>Home Works!</h1>
			<button onClick={onToggleSetupVisible}>Show Inventory Setup</button>
			{setupVisible ? <InventorySetupDisplay /> : undefined}
		</div>
	)
}
