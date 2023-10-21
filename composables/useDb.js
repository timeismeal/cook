import { useDbStore } from "@/stores/db";

export const useDb = () => {
	const db = useDbStore()
	return db
}