import { MigrationInterface, QueryRunner } from "typeorm";

export class RelationshipProductCategory1652989973804 implements MigrationInterface {
    name = 'RelationshipProductCategory1652989973804'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "categoryId" integer`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_ff0c0301a95e517153df97f6812" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_ff0c0301a95e517153df97f6812"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "categoryId"`);
    }

}
