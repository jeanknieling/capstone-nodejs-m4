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
exports.CreateUserTable1652980296275 = void 0;
class CreateUserTable1652980296275 {
    constructor() {
        this.name = 'CreateUserTable1652980296275';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "buys" ("id" uuid NOT NULL, "status" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP NOT NULL, "user_id" uuid, CONSTRAINT "PK_34ecbce508fa8a98d0f23d9372a" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL, "name" character varying NOT NULL, "nickname" character varying NOT NULL, "birthday" TIMESTAMP NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "isAdm" boolean NOT NULL, "created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "address" ("id" SERIAL NOT NULL, "zipcode" character varying NOT NULL, "street" character varying NOT NULL, "number" character varying NOT NULL, "neighborhood" character varying NOT NULL, "complement" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP NOT NULL, "userId" uuid, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "product" ("id" uuid NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "price" integer NOT NULL, "likes" integer NOT NULL, "created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "discount_value" integer NOT NULL, "created_at" TIMESTAMP NOT NULL, "updated_at" TIMESTAMP NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "buys" ADD CONSTRAINT "FK_6d690a7123e83d1fecb948e9ee3" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_d25f1ea79e282cc8a42bd616aa3" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_d25f1ea79e282cc8a42bd616aa3"`);
            yield queryRunner.query(`ALTER TABLE "buys" DROP CONSTRAINT "FK_6d690a7123e83d1fecb948e9ee3"`);
            yield queryRunner.query(`DROP TABLE "category"`);
            yield queryRunner.query(`DROP TABLE "product"`);
            yield queryRunner.query(`DROP TABLE "address"`);
            yield queryRunner.query(`DROP TABLE "user"`);
            yield queryRunner.query(`DROP TABLE "buys"`);
        });
    }
}
exports.CreateUserTable1652980296275 = CreateUserTable1652980296275;
