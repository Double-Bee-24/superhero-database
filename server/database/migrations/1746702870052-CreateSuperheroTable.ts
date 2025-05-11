import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateSuperheroTable1746702870052 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "superhero" (
        "id" SERIAL PRIMARY KEY,
        "nickname" VARCHAR NOT NULL,
        "real_name" VARCHAR NOT NULL,
        "origin_description" TEXT NOT NULL,
        "superpowers" TEXT NOT NULL,
        "catch_phrase" TEXT NOT NULL,
        "images" TEXT
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "superhero";`);
  }
}
