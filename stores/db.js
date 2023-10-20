import { defineStore } from 'pinia'

export const useDbStore = defineStore('db', () => {
	const record = ref({
		products: [],
		productTypes: [],
		productGroups: [],
	})

	function set(key, payload) {
		if (record.value[key] === undefined) return
		record.value[key] = payload
	}

	return {
		record,
		set,
	}
})