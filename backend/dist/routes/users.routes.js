"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoute = void 0;
var express_1 = require("express");
var listUsers_1 = __importDefault(require("../modules/useCases/listUsers"));
var createUser_1 = __importDefault(require("../modules/useCases/createUser"));
var usersRoute = (0, express_1.Router)();
exports.usersRoute = usersRoute;
usersRoute.post("/", function (request, response) { return (0, createUser_1.default)().handle(request, response); });
usersRoute.get("/", function (request, response) { return (0, listUsers_1.default)().handle(request, response); });
