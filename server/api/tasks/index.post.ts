export default defineEventHandler(async (event) => {
  const { title } = await readBody<{ title: string }>(event)
  const [task] = await useDrizzle().insert(table.tasks).values({ title }).returning()
  setResponseStatus(event, 201)
  return task
})
