import { Injectable } from '@nestjs/common';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { UpdateSuperheroDto } from './dto/update-superhero.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Superhero } from './entities/superhero.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SuperheroService {
  constructor(
    @InjectRepository(Superhero)
    private superheroRepository: Repository<Superhero>,
  ) {}

  create(createSuperheroDto: CreateSuperheroDto): Promise<Superhero> {
    const superhero = this.superheroRepository.create(createSuperheroDto);
    return this.superheroRepository.save(superhero);
  }

  async findAll(page: number, limit: number) {
    const [result, total] = await this.superheroRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });
    return { page, limit, result, total };
  }

  findOne(id: number): Promise<Superhero> {
    return this.superheroRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    updateSuperheroDto: UpdateSuperheroDto,
  ): Promise<Superhero> {
    await this.superheroRepository.update(id, updateSuperheroDto);
    return this.superheroRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.superheroRepository.delete(id);
  }
}
