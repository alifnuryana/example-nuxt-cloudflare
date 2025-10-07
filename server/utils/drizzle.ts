import * as schema from '../database/schema'
import { drizzle } from 'db0/integrations/drizzle'

export const table = schema

export function useDrizzle() {
  return drizzle(useDatabase())
}
