import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event)

  const { data, error } = await client
    .from('collections')
    .select(`
      id,
      label,
      desc,
      servings,
      is_one_off,
      collection_products (id, collection_id, product_id)
    `)
    .eq('is_one_off', false)
    // .order('created_at', { ascending: false })

  if (error) throw error
  return data
})