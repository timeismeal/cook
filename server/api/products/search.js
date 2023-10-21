import { serverSupabaseClient } from '#supabase/server'
// import { useDbStore } from '@/stores/db'

export default defineEventHandler(async (event) => {
  console.log('api/products/search.js')
  const client = await serverSupabaseClient(event)
  const query = getQuery(event).q

  console.log('query', query)

  const response = await client
    .rpc('search_products', { query })

  console.log('response', response)
  // if (error) throw error
  // return data
  return response
})