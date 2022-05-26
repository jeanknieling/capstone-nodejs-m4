import { MigrationInterface, QueryRunner } from "typeorm";

export class productBuysColumnDelete1653577824236 implements MigrationInterface {
    name = 'productBuysColumnDelete1653577824236'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_8d357d0c9ceca7ec472a722d94f"`);
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_d25f1ea79e282cc8a42bd616aa3"`);
        await queryRunner.query(`ALTER TABLE "address" RENAME COLUMN "userId" TO "usuarioId"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "buyId"`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_9e353879c35303eb6530a92654b" FOREIGN KEY ("usuarioId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_9e353879c35303eb6530a92654b"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "buyId" uuid`);
        await queryRunner.query(`ALTER TABLE "address" RENAME COLUMN "usuarioId" TO "userId"`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_d25f1ea79e282cc8a42bd616aa3" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_8d357d0c9ceca7ec472a722d94f" FOREIGN KEY ("buyId") REFERENCES "buy"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
