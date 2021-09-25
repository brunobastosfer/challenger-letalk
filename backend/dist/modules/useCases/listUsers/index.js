"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UsersRepository_1 = require("../../repositories/implementation/UsersRepository");
var ListUsersController_1 = require("./ListUsersController");
var ListUserUseCase_1 = require("./ListUserUseCase");
exports.default = (function () {
    var usersRepository = new UsersRepository_1.UserRepository();
    var listUsersUseCase = new ListUserUseCase_1.ListUsersUseCase(usersRepository);
    var listCategoryController = new ListUsersController_1.ListUsersController(listUsersUseCase);
    return listCategoryController;
});
