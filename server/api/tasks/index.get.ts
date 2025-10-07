export default defineEventHandler(async () => {
  return useDrizzle().select().from(table.tasks).all()
})
