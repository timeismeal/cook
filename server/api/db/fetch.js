import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event)
  const body = await readBody(event)

  const { data, error } = await client
    .from(body.table)
    .select(body.select)
  //   // .eq('is_one_off', false)
  //   // .order('created_at', { ascending: false })
  return data
})