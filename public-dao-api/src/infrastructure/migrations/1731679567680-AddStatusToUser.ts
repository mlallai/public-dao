import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddStatusToUser1731679567680 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "projects" ADD "status" varchar(255) NOT NULL DEFAULT 'inactive'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "projects" DROP COLUMN "status"`);
  }
}
