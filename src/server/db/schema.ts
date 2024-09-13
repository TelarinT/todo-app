// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import { int, sqliteTableCreator, text } from "drizzle-orm/sqlite-core";

export const createTable = sqliteTableCreator((name) => `todo-app_${name}`);

export const project = createTable("projects", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name", { length: 64 }),
  description: text("description", { length: 512 }),
  createdAt: int("created_at", { mode: "timestamp" })
    .default(sql`(unixepoch())`)
    .notNull(),
  color: int("color", { mode: "number" }).notNull().default(0),
});

export const tasks = createTable("tasks", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name", { length: 128 }).notNull(),
  isDone: int("is_done", { mode: "boolean" }).default(false).notNull(),
  createdAt: int("created_at", { mode: "timestamp" })
    .default(sql`(unixepoch())`)
    .notNull(),
  projectId: int("project_id", { mode: "number" }).references(() => project.id),
  color: int("color", { mode: "number" }).notNull().default(0),
});
