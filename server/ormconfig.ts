import * as path from 'path';
import { DataSource } from 'typeorm';

import { getConfig } from './src/common/config';

const { postgresql } = getConfig().database;

export const PostgresqlDataSource = new DataSource({
  type: 'postgres',
  host: postgresql.host,
  port: postgresql.port,
  username: postgresql.username,
  password: postgresql.password,
  database: postgresql.database,
  synchronize: false,
  logging: true,
  entities: [path.join(__dirname, 'src/**/*.entity{.ts,.js}')],
  migrations: [path.join(__dirname, 'database/migrations/*{.ts,.js}')],
});
