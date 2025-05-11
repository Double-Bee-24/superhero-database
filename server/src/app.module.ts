import * as path from 'path';
import { Module } from '@nestjs/common';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { getConfig } from './common/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SuperheroModule } from './modules/superhero/superhero.module';
import { UploadModule } from './modules/upload/upload.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [getConfig] }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory(config: ConfigService): TypeOrmModuleOptions {
        const postgresql = config.get('database.postgresql');

        return {
          type: 'postgres',
          host: postgresql.host,
          port: postgresql.port,
          username: postgresql.username,
          password: postgresql.password,
          database: postgresql.database,
          entities: [path.join(__dirname, '/**/*.entity{.ts,.js}')],
          synchronize: false,
          autoLoadEntities: true,
        };
      },
    }),
    SuperheroModule,
    UploadModule,
  ],
})
export class AppModule {}
