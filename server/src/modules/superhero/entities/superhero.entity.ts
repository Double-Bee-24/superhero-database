import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Superhero {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1, description: 'Superhero ID' })
  id: number;

  @Column()
  @ApiProperty({ example: 'Superman', description: 'Superhero nickname' })
  nickname: string;

  @Column()
  @ApiProperty({ example: 'Clark Kent', description: 'Real name' })
  real_name: string;

  @Column()
  @ApiProperty({
    example: 'He was born Kal-El on the planet Krypton...',
    description: 'Origin description of the superhero',
  })
  origin_description: string;

  @Column()
  @ApiProperty({
    example: 'Solar energy absorption, heat vision, flight...',
    description: 'List of superpowers',
  })
  superpowers: string;

  @Column()
  @ApiProperty({
    example: "Look, up in the sky, it's a bird, it's a plane, it's Superman!",
    description: 'Famous catch phrase',
  })
  catch_phrase: string;

  @Column('simple-array', { nullable: true })
  @ApiProperty({
    example: ['image1.jpg', 'image2.png'],
    description: 'List of image URLs or paths',
    type: [String],
  })
  images: string[];
}
