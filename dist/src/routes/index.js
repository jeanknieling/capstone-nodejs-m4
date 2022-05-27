"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutes = void 0;
var users_routes_1 = require("./users.routes");
var products_routes_1 = require("./products.routes");
var categories_routes_1 = require("./categories.routes");
var address_routes_1 = require("./address.routes");
var cart_routes_1 = require("./cart.routes");
var buy_routes_1 = require("./buy.routes");
var appRoutes = function (app) {
    app.use("/users", (0, users_routes_1.usersRoutes)());
    app.use("/products", (0, products_routes_1.productsRoutes)());
    app.use("/address", (0, address_routes_1.addressRoutes)());
    app.use("/category", (0, categories_routes_1.categoriesRoutes)());
    app.use("/cart", (0, cart_routes_1.cartRoutes)());
    app.use("/buy", (0, buy_routes_1.buyRoutes)());
};
exports.appRoutes = appRoutes;
