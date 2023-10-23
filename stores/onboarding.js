import { defineStore } from 'pinia'

export const useOnboardingStore = defineStore('onboarding', () => {
	const data = ref({
		dietaryRestrictionId: null,
		foodSensitivityIds: [],
		dislikeIds: [],
	})

	// function set(key, payload) {
	// 	if (record.value[key] === undefined) return
	// 	record.value[key] = payload
	// }

	return {
		data,
		// set,
	}
})