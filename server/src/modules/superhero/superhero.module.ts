import { Module } from '@nestjs/common';
import { SuperheroService } from './superhero.service';
import { SuperheroController } from './superhero.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Superhero } from './entities/superhero.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Superhero])],
  controllers: [SuperheroController],
  providers: [SuperheroService],
})
export class SuperheroModule {}
