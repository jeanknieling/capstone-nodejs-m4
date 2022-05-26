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
exports.User = void 0;
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var address_entity_1 = require("./address.entity");
var buy_entity_1 = require("./buy.entity");
var cart_entity_1 = require("./cart.entity");
var User = /** @class */ (function () {
    function User() {
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
    ], User.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], User.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], User.prototype, "nickname", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Date)
    ], User.prototype, "birthday", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], User.prototype, "password", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Boolean)
    ], User.prototype, "isAdm", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Date)
    ], User.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Date)
    ], User.prototype, "updated_at", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function (type) { return address_entity_1.Address; }, function (address) { return address.usuario; }, {
            eager: true,
            onDelete: "SET NULL"
        }),
        __metadata("design:type", Array)
    ], User.prototype, "address", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function (type) { return buy_entity_1.Buy; }, function (buys) { return buys.user; }, {
            eager: true,
        }),
        __metadata("design:type", Array)
    ], User.prototype, "buys", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function (type) { return cart_entity_1.Cart; }, {
            eager: true
        }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", cart_entity_1.Cart)
    ], User.prototype, "cart", void 0);
    User = __decorate([
        (0, typeorm_1.Entity)(),
        __metadata("design:paramtypes", [])
    ], User);
    return User;
}());
exports.User = User;
