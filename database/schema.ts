import { pgTable, serial, text, varchar, timestamp } from "drizzle-orm/pg-core";

export const Organizations = pgTable('organizations', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})
