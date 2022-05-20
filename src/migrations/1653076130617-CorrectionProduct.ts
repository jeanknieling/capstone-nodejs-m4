import { MigrationInterface, QueryRunner } from "typeorm";

export class CorrectionProduct1653076130617 implements MigrationInterface {
    name = 'CorrectionProduct1653076130617'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "category_id"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "category_id" integer NOT NULL`);
    }

}
