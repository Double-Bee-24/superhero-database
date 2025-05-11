import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Superhero } from '../superhero/entities/superhero.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Superhero])],
  providers: [UploadService],
  controllers: [UploadController],
})
export class UploadModule {}
