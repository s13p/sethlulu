"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = require("./auth");
const users_1 = require("./users");
exports.services = express_1.default.Router();
exports.services.use('/auth', auth_1.authRouter);
exports.services.use('/users', users_1.userRouter);
