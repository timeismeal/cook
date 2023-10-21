import { useDbStore } from "@/stores/db";
import { snakeCase } from "lodash";

export const useDbFunctions = () => {
	const db = useDbStore()

	const fetchAndStore = async (options) => {
		const record = db.record[options.table]
		if (record?.length) return record
		const data = await $fetch('/api/db/fetch', {
			method: 'POST',
			body: JSON.stringify({
				table: snakeCase(options.table),
				select: options.select,
			}),
		})
		db.set(options.table, data)
		return data
	}

	return {
		fetchAndStore,
	}
}