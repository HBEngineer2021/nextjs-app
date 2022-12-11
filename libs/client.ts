import { createClient } from 'microcms-js-sdk'
export const client = createClient({
  serviceDomain: 'g6u98jkmxd',
  apiKey: process.env.API_KEY || '',
})