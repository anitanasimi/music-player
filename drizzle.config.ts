import { Config } from "drizzle-kit"
import * as dotenv from 'dotenv';

dotenv.config({
  path: '.env.local',
});

export default {
  schema: "./db/schema/*",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.MIGRATION_DATABASE_URL!, 
  },
  out: "./drizzle",
} satisfies Config
