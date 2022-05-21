import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTest1653083857285 implements MigrationInterface {
    name = 'CreateUserTest1653083857285'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" ADD "user_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ADD "category_id" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "category_id"`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "user_id"`);
    }

}
