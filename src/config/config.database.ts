import * as dotenv from 'dotenv';
import * as path from 'path';

const baseDir = path.join(__dirname, '../');
const entitiesPath = `${baseDir}${process.env.TYPEORM_ENTITIES}`;
const migrationPath = `${baseDir}${process.env.TYPEORM_MIGRATIONS}`;

export default {
  type: process.env.TYPEORM_CONNECTION || 'postgres',
  host: process.env.TYPE,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  port: Number.parseInt(process.env.TYPEORM_PORT, 10),
  entities: [entitiesPath],
  migrations: [migrationPath],
  migrationsRun: process.env.TYPEORM_MIGRATIONS_RUN === 'true',
  seeds: [`src/db/seeds/*.seed.ts`],
  cli: {
    migrationDir: 'src/db/migrations',
    entitiesDir: 'src/db/entities',
  },
};
