import { defineStore } from 'pinia'

export const useDbStore = defineStore('db', () => {
	const products = ref([])
	const productTypes = ref([])
	const productGroups = ref([])

	function setProducts(data) {
		products.value = data
	}

	function setProductTypes(data) {
		productTypes.value = data
	}

	return {
		products,
		productTypes,
		productGroups,
		setProducts,
		setProductTypes,
	}
})