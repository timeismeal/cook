import { orderBy, sortBy as _sortBy } from 'lodash'

export const useAppFunctions = () => {

	const isEmpty = (data) => {
		if (typeof data === 'number' || typeof data === 'boolean') {
			return false
		}
		if (typeof data === 'undefined' || data === null) {
			return true
		}
		if (typeof data === 'string') {
			data = data.trim()
		}
		if (typeof data.length !== 'undefined') {
			return data.length === 0
		}
		let count = 0
		for (const i in data) {
			if (Object.prototype.hasOwnProperty.call(data, i)) {
				count++
			}
		}
		return count === 0
	}

	const sortBy = (items, sorter, orders = null) => {
		console.log('sortby called...', items, sorter)
		if (!isEmpty(orders)) return orderBy(items, sorter, orders)
		return _sortBy(items, sorter)
	}

	return {
		isEmpty,
		sortBy,
	}
}