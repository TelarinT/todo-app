// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  boolean,
  integer,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `todo-app_${name}`);

export const project = createTable("projects", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 64 }).notNull(),
  description: varchar("description", { length: 512 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  color: integer("color").notNull().default(0),
});

export const tasks = createTable("tasks", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 128 }).notNull(),
  isDone: boolean("is_done").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  projectId: integer("project_id")
    .notNull()
    .references(() => project.id),
  color: integer("color").notNull().default(0),
});
