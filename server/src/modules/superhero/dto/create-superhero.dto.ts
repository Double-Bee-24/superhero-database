import { ApiProperty } from '@nestjs/swagger';

export class CreateSuperheroDto {
  @ApiProperty({ example: 'Superman', description: 'Superhero nickname' })
  nickname: string;

  @ApiProperty({ example: 'Clark Kent', description: 'Real name' })
  real_name: string;

  @ApiProperty({
    example: 'He was born Kal-El on the planet Krypton...',
    description: 'Origin description of the superhero',
  })
  origin_description: string;

  @ApiProperty({
    example: 'Solar energy absorption, heat vision, flight...',
    description: 'List of superpowers',
  })
  superpowers: string;

  @ApiProperty({
    example: "Look, up in the sky, it's a bird, it's a plane, it's Superman!",
    description: 'Famous catch phrase',
  })
  catch_phrase: string;

  @ApiProperty({
    example: [],
    description: 'List of image URLs or paths',
    type: [String],
    required: false,
  })
  images?: string[];
}
