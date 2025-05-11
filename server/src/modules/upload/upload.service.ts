import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Superhero } from '../superhero/entities/superhero.entity';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class UploadService {
  constructor(
    @InjectRepository(Superhero)
    private superheroRepository: Repository<Superhero>,
  ) {}
  async uploadManyImages(id: number, files: Express.Multer.File[]) {
    const hero = await this.superheroRepository.findOneBy({ id });
    if (!hero) throw new NotFoundException('Hero not found');

    const fileNames = files.map((file) => file.filename);
    hero.images = hero.images ? [...hero.images, ...fileNames] : fileNames;

    await this.superheroRepository.save(hero);

    return { message: 'Images uploaded', hero };
  }

  async deleteImage(id: number, filename: string) {
    const hero = await this.superheroRepository.findOneBy({ id });
    if (!hero) throw new NotFoundException('Hero not found');

    hero.images = hero.images.filter((img) => img !== filename);
    await this.superheroRepository.save(hero);

    const filePath = path.join(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      'uploads',
      filename,
    );

    fs.unlink(filePath, (err) => {
      if (err) console.error('Failed to delete image from disk:', err);
    });

    return { message: 'Image deleted', hero };
  }
}
