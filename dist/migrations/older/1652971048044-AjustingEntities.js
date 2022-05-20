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
exports.AjustingEntities1652971048044 = void 0;
class AjustingEntities1652971048044 {
    constructor() {
        this.name = 'AjustingEntities1652971048044';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "buys" DROP CONSTRAINT "FK_3bb64d577595984a95f14ea0f71"`);
            yield queryRunner.query(`ALTER TABLE "buys" RENAME COLUMN "userId" TO "user_id"`);
            yield queryRunner.query(`ALTER TABLE "user" DROP COLUMN "isAdm"`);
            yield queryRunner.query(`ALTER TABLE "user" ADD "isAdm" boolean NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "buys" ADD CONSTRAINT "FK_6d690a7123e83d1fecb948e9ee3" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "buys" DROP CONSTRAINT "FK_6d690a7123e83d1fecb948e9ee3"`);
            yield queryRunner.query(`ALTER TABLE "user" DROP COLUMN "isAdm"`);
            yield queryRunner.query(`ALTER TABLE "user" ADD "isAdm" character varying NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "buys" RENAME COLUMN "user_id" TO "userId"`);
            yield queryRunner.query(`ALTER TABLE "buys" ADD CONSTRAINT "FK_3bb64d577595984a95f14ea0f71" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
}
exports.AjustingEntities1652971048044 = AjustingEntities1652971048044;
