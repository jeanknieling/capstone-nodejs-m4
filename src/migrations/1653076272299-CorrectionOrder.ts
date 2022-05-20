import { MigrationInterface, QueryRunner } from "typeorm";

export class CorrectionOrder1653076272299 implements MigrationInterface {
    name = 'CorrectionOrder1653076272299'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_0f9bad794228a26d568b8b18f4e"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_88991860e839c6153a7ec878d39"`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "buyId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "productId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_0f9bad794228a26d568b8b18f4e" FOREIGN KEY ("buyId") REFERENCES "buys"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_88991860e839c6153a7ec878d39" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_88991860e839c6153a7ec878d39"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_0f9bad794228a26d568b8b18f4e"`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "productId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order" ALTER COLUMN "buyId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_88991860e839c6153a7ec878d39" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_0f9bad794228a26d568b8b18f4e" FOREIGN KEY ("buyId") REFERENCES "buys"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
