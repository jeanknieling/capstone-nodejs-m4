import { MigrationInterface, QueryRunner } from "typeorm";

export class AjustingEntities1652971048044 implements MigrationInterface {
    name = 'AjustingEntities1652971048044'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "buys" DROP CONSTRAINT "FK_3bb64d577595984a95f14ea0f71"`);
        await queryRunner.query(`ALTER TABLE "buys" RENAME COLUMN "userId" TO "user_id"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "isAdm"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "isAdm" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "buys" ADD CONSTRAINT "FK_6d690a7123e83d1fecb948e9ee3" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "buys" DROP CONSTRAINT "FK_6d690a7123e83d1fecb948e9ee3"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "isAdm"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "isAdm" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "buys" RENAME COLUMN "user_id" TO "userId"`);
        await queryRunner.query(`ALTER TABLE "buys" ADD CONSTRAINT "FK_3bb64d577595984a95f14ea0f71" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
