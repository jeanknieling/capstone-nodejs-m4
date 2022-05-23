"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTables1652886673338 = void 0;
class CreateTables1652886673338 {
    constructor() {
        this.name = 'CreateTables1652886673338';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "address" ("id" SERIAL NOT NULL, "zipcode" character varying NOT NULL, "street" character varying NOT NULL, "number" character varying NOT NULL, "neighborhood" character varying NOT NULL, "complement" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "buys" ("id" uuid NOT NULL, "status" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_34ecbce508fa8a98d0f23d9372a" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "product" ("id" uuid NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "price" integer NOT NULL, "likes" integer NOT NULL, "created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "discount_value" integer NOT NULL, "created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "user" DROP COLUMN "surname"`);
            yield queryRunner.query(`ALTER TABLE "user" ADD "nickname" character varying NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "user" ADD "addressId" integer`);
            yield queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_217ba147c5de6c107f2fa7fa271" UNIQUE ("addressId")`);
            yield queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_217ba147c5de6c107f2fa7fa271" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_217ba147c5de6c107f2fa7fa271"`);
            yield queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_217ba147c5de6c107f2fa7fa271"`);
            yield queryRunner.query(`ALTER TABLE "user" DROP COLUMN "addressId"`);
            yield queryRunner.query(`ALTER TABLE "user" DROP COLUMN "nickname"`);
            yield queryRunner.query(`ALTER TABLE "user" ADD "surname" character varying NOT NULL`);
            yield queryRunner.query(`DROP TABLE "category"`);
            yield queryRunner.query(`DROP TABLE "product"`);
            yield queryRunner.query(`DROP TABLE "buys"`);
            yield queryRunner.query(`DROP TABLE "address"`);
        });
    }
}
exports.CreateTables1652886673338 = CreateTables1652886673338;
