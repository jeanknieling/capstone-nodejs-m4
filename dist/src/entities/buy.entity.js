"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Buy = void 0;
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var product_entity_1 = require("./product.entity");
var user_entity_1 = require("./user.entity");
var Buy = /** @class */ (function () {
    function Buy() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
        if (!this.created_at) {
            this.created_at = new Date();
        }
        if (!this.updated_at) {
            this.updated_at = new Date();
        }
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)("uuid"),
        __metadata("design:type", String)
    ], Buy.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            default: "Em aberto",
        }),
        __metadata("design:type", String)
    ], Buy.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Buy.prototype, "total", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function (type) { return product_entity_1.Product; }, {
            eager: true,
        }),
        (0, typeorm_1.JoinTable)(),
        __metadata("design:type", Array)
    ], Buy.prototype, "products", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function (type) { return user_entity_1.User; }, function (user) { return user.buys; }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", user_entity_1.User)
    ], Buy.prototype, "user", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Date)
    ], Buy.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Date)
    ], Buy.prototype, "updated_at", void 0);
    Buy = __decorate([
        (0, typeorm_1.Entity)(),
        __metadata("design:paramtypes", [])
    ], Buy);
    return Buy;
}());
exports.Buy = Buy;
