"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UsersRepository_1 = require("../../repositories/implementation/UsersRepository");
var CreateUserUseCase_1 = require("./CreateUserUseCase");
var CreateUserController_1 = require("./CreateUserController");
exports.default = (function () {
    var usersRepository = new UsersRepository_1.UserRepository();
    var createUserUseCase = new CreateUserUseCase_1.CreateUserUseCase(usersRepository);
    var createUserController = new CreateUserController_1.CreateUserController(createUserUseCase);
    return createUserController;
});
