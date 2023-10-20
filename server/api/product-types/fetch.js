import { serverSupabaseClient } from '#supabase/server'
// import { useDbStore } from '@/stores/db'

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event)
  // const body = await readBody(event)
  // console.log('body', body)
  // console.log('getQuery', getQuery(event))

  const { data, error } = await client
    .from('product_types')
    .select(`
      id,
      label
    `)
    // .eq('is_one_off', false)
    // .order('created_at', { ascending: false })

  if (error) throw error
  // const db = useDbStore()
  // db.setProductTypes(data)
  return data
})