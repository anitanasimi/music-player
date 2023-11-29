import { users } from "./users"
import {
    timestamp,
    pgTable,
    text,
    primaryKey,
    integer,
    serial
} from "drizzle-orm/pg-core"

export const musics = pgTable("music", {
    id: serial("id").primaryKey(),
    userId: text("userId").notNull().references(() => users.id),
    artist: text("artist").notNull().default("unknown"),
    title: text("title").notNull(),
    url: text("url").notNull(),
    createdAt: timestamp("createdAt", { withTimezone: true }).notNull().defaultNow(),
})