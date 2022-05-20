import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigrations1653075650178 implements MigrationInterface {
    name = 'initialMigrations1653075650178'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_87ffe09e725a6e79f87dd6c0b69"`);
        await queryRunner.query(`ALTER TABLE "buys" DROP CONSTRAINT "FK_6d690a7123e83d1fecb948e9ee3"`);
        await queryRunner.query(`ALTER TABLE "product" RENAME COLUMN "orderId" TO "category_id"`);
        await queryRunner.query(`ALTER TABLE "buys" RENAME COLUMN "user_id" TO "userId"`);
        await queryRunner.query(`ALTER TABLE "address" ADD "user_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "category" ALTER COLUMN "created_at" SET DEFAULT ('now'::text)::timestamp(6) with time zone`);
        await queryRunner.query(`ALTER TABLE "category" ALTER COLUMN "updated_at" SET DEFAULT ('now'::text)::timestamp(6) with time zone`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "category_id"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "category_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "created_at" SET DEFAULT ('now'::text)::timestamp(6) with time zone`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "updated_at" SET DEFAULT ('now'::text)::timestamp(6) with time zone`);
        await queryRunner.query(`ALTER TABLE "buys" ADD CONSTRAINT "FK_3bb64d577595984a95f14ea0f71" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "buys" DROP CONSTRAINT "FK_3bb64d577595984a95f14ea0f71"`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "updated_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "created_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "category_id"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "category_id" uuid`);
        await queryRunner.query(`ALTER TABLE "category" ALTER COLUMN "updated_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "category" ALTER COLUMN "created_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "buys" RENAME COLUMN "userId" TO "user_id"`);
        await queryRunner.query(`ALTER TABLE "product" RENAME COLUMN "category_id" TO "orderId"`);
        await queryRunner.query(`ALTER TABLE "buys" ADD CONSTRAINT "FK_6d690a7123e83d1fecb948e9ee3" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_87ffe09e725a6e79f87dd6c0b69" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
