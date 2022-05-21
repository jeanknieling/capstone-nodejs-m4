import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1653151397899 implements MigrationInterface {
    name = 'CreateUserTable1653151397899'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "buys" DROP CONSTRAINT "FK_6d690a7123e83d1fecb948e9ee3"`);
        await queryRunner.query(`ALTER TABLE "product" RENAME COLUMN "category_id" TO "categoryId"`);
        await queryRunner.query(`ALTER TABLE "buys" RENAME COLUMN "user_id" TO "userId"`);
        await queryRunner.query(`CREATE TABLE "order" ("id" uuid NOT NULL, "buyId" uuid NOT NULL, "productId" uuid NOT NULL, CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "categoryId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "created_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updated_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "created_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "updated_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_ff0c0301a95e517153df97f6812" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_0f9bad794228a26d568b8b18f4e" FOREIGN KEY ("buyId") REFERENCES "buys"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_88991860e839c6153a7ec878d39" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "buys" ADD CONSTRAINT "FK_3bb64d577595984a95f14ea0f71" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "buys" DROP CONSTRAINT "FK_3bb64d577595984a95f14ea0f71"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_88991860e839c6153a7ec878d39"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_0f9bad794228a26d568b8b18f4e"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_ff0c0301a95e517153df97f6812"`);
        await queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "updated_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "created_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updated_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "created_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "categoryId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "address" ADD "user_id" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "order"`);
        await queryRunner.query(`ALTER TABLE "buys" RENAME COLUMN "userId" TO "user_id"`);
        await queryRunner.query(`ALTER TABLE "product" RENAME COLUMN "categoryId" TO "category_id"`);
        await queryRunner.query(`ALTER TABLE "buys" ADD CONSTRAINT "FK_6d690a7123e83d1fecb948e9ee3" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
