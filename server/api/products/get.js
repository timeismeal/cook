import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event)

  const { data, error } = await client
    .from('products')
    .select(`
      id,
      label,
      is_perishable,
      desc,
      product_type_ids,
      product_groups (id, label)
    `)
    // .select('id, label')
    // .eq('user', user.id)
    // .order('created_at', { ascending: false })

  if (error) throw error
  return data
})