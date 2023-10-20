import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event)

  const { data, error } = await client
    .from('product_groups')
    .select(`
      id,
      label,
      is_perishable,
      examples
    `)
    // .eq('is_one_off', false)
    // .order('created_at', { ascending: false })

  if (error) throw error
  return data
})