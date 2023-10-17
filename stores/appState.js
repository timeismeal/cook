import { defineStore } from 'pinia'

export const useAppStateStore = defineStore('appState', {
	state: () => ({
		isDarkMode: false,
	}),
	actions: {
		toggleDarkMode() {
			this.isDarkMode = !this.isDarkMode
		},
	}
})