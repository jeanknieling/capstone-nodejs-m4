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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTableMigration1653593408854 = void 0;
var createTableMigration1653593408854 = /** @class */ (function () {
    function createTableMigration1653593408854() {
        this.name = 'createTableMigration1653593408854';
    }
    createTableMigration1653593408854.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE \"category\" (\"id\" SERIAL NOT NULL, \"name\" character varying NOT NULL, \"discount_value\" integer NOT NULL DEFAULT '0', \"created_at\" TIMESTAMP NOT NULL, \"updated_at\" TIMESTAMP NOT NULL, CONSTRAINT \"PK_9c4e4a89e3674fc9f382d733f03\" PRIMARY KEY (\"id\"))")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"product\" (\"id\" uuid NOT NULL, \"name\" character varying NOT NULL, \"description\" character varying NOT NULL, \"price\" integer NOT NULL, \"likes\" integer NOT NULL DEFAULT '0', \"created_at\" TIMESTAMP NOT NULL, \"updated_at\" TIMESTAMP NOT NULL, \"categoryId\" integer, CONSTRAINT \"PK_bebc9158e480b949565b4dc7a82\" PRIMARY KEY (\"id\"))")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"buy\" (\"id\" uuid NOT NULL, \"status\" character varying NOT NULL DEFAULT 'Em aberto', \"total\" integer NOT NULL, \"created_at\" TIMESTAMP NOT NULL, \"updated_at\" TIMESTAMP NOT NULL, \"userId\" uuid, CONSTRAINT \"PK_634c4687b54f6a44ac0c142adf7\" PRIMARY KEY (\"id\"))")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"cart\" (\"id\" uuid NOT NULL, \"total\" double precision NOT NULL, CONSTRAINT \"PK_c524ec48751b9b5bcfbf6e59be7\" PRIMARY KEY (\"id\"))")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"user\" (\"id\" uuid NOT NULL, \"name\" character varying NOT NULL, \"nickname\" character varying NOT NULL, \"birthday\" TIMESTAMP NOT NULL, \"email\" character varying NOT NULL, \"password\" character varying NOT NULL, \"isAdm\" boolean NOT NULL, \"created_at\" TIMESTAMP NOT NULL, \"updated_at\" TIMESTAMP NOT NULL, \"cartId\" uuid, CONSTRAINT \"REL_342497b574edb2309ec8c6b62a\" UNIQUE (\"cartId\"), CONSTRAINT \"PK_cace4a159ff9f2512dd42373760\" PRIMARY KEY (\"id\"))")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"address\" (\"id\" SERIAL NOT NULL, \"zipcode\" character varying NOT NULL, \"street\" character varying NOT NULL, \"number\" character varying NOT NULL, \"neighborhood\" character varying NOT NULL, \"complement\" character varying NOT NULL, \"created_at\" TIMESTAMP NOT NULL, \"updated_at\" TIMESTAMP NOT NULL, \"usuarioId\" uuid, CONSTRAINT \"PK_d92de1f82754668b5f5f5dd4fd5\" PRIMARY KEY (\"id\"))")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"buy_products_product\" (\"buyId\" uuid NOT NULL, \"productId\" uuid NOT NULL, CONSTRAINT \"PK_436080770c60352a2023667f456\" PRIMARY KEY (\"buyId\", \"productId\"))")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_65c27917774c9df0d3d2fb929d\" ON \"buy_products_product\" (\"buyId\") ")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_210c90379be266d3c64d71f603\" ON \"buy_products_product\" (\"productId\") ")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"cart_products_product\" (\"cartId\" uuid NOT NULL, \"productId\" uuid NOT NULL, CONSTRAINT \"PK_785ab9c1dbede19ef42bf12280b\" PRIMARY KEY (\"cartId\", \"productId\"))")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_e6ce39be5d354954a88ded1eba\" ON \"cart_products_product\" (\"cartId\") ")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE INDEX \"IDX_0fc996e42b6330c97f8cffbddf\" ON \"cart_products_product\" (\"productId\") ")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"product\" ADD CONSTRAINT \"FK_ff0c0301a95e517153df97f6812\" FOREIGN KEY (\"categoryId\") REFERENCES \"category\"(\"id\") ON DELETE SET NULL ON UPDATE NO ACTION")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"buy\" ADD CONSTRAINT \"FK_73b6d9b1037a714d3314e038819\" FOREIGN KEY (\"userId\") REFERENCES \"user\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"user\" ADD CONSTRAINT \"FK_342497b574edb2309ec8c6b62aa\" FOREIGN KEY (\"cartId\") REFERENCES \"cart\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"address\" ADD CONSTRAINT \"FK_9e353879c35303eb6530a92654b\" FOREIGN KEY (\"usuarioId\") REFERENCES \"user\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"buy_products_product\" ADD CONSTRAINT \"FK_65c27917774c9df0d3d2fb929d9\" FOREIGN KEY (\"buyId\") REFERENCES \"buy\"(\"id\") ON DELETE CASCADE ON UPDATE CASCADE")];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"buy_products_product\" ADD CONSTRAINT \"FK_210c90379be266d3c64d71f6038\" FOREIGN KEY (\"productId\") REFERENCES \"product\"(\"id\") ON DELETE CASCADE ON UPDATE CASCADE")];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"cart_products_product\" ADD CONSTRAINT \"FK_e6ce39be5d354954a88ded1ebac\" FOREIGN KEY (\"cartId\") REFERENCES \"cart\"(\"id\") ON DELETE CASCADE ON UPDATE CASCADE")];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"cart_products_product\" ADD CONSTRAINT \"FK_0fc996e42b6330c97f8cffbddfa\" FOREIGN KEY (\"productId\") REFERENCES \"product\"(\"id\") ON DELETE CASCADE ON UPDATE CASCADE")];
                    case 20:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    createTableMigration1653593408854.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE \"cart_products_product\" DROP CONSTRAINT \"FK_0fc996e42b6330c97f8cffbddfa\"")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"cart_products_product\" DROP CONSTRAINT \"FK_e6ce39be5d354954a88ded1ebac\"")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"buy_products_product\" DROP CONSTRAINT \"FK_210c90379be266d3c64d71f6038\"")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"buy_products_product\" DROP CONSTRAINT \"FK_65c27917774c9df0d3d2fb929d9\"")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"address\" DROP CONSTRAINT \"FK_9e353879c35303eb6530a92654b\"")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"user\" DROP CONSTRAINT \"FK_342497b574edb2309ec8c6b62aa\"")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"buy\" DROP CONSTRAINT \"FK_73b6d9b1037a714d3314e038819\"")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"product\" DROP CONSTRAINT \"FK_ff0c0301a95e517153df97f6812\"")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"public\".\"IDX_0fc996e42b6330c97f8cffbddf\"")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"public\".\"IDX_e6ce39be5d354954a88ded1eba\"")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"cart_products_product\"")];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"public\".\"IDX_210c90379be266d3c64d71f603\"")];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP INDEX \"public\".\"IDX_65c27917774c9df0d3d2fb929d\"")];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"buy_products_product\"")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"address\"")];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"user\"")];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"cart\"")];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"buy\"")];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"product\"")];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"category\"")];
                    case 20:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return createTableMigration1653593408854;
}());
exports.createTableMigration1653593408854 = createTableMigration1653593408854;
