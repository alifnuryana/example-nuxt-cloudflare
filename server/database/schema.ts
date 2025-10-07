import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const tasks = sqliteTable('tasks', {
  id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  title: text('title').notNull(),
  completed: integer('completed').notNull().default(0),
})
