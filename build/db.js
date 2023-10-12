"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const os_1 = __importDefault(require("os"));
const path_1 = __importDefault(require("path"));
const sequelize_1 = require("sequelize");
const models_1 = require("./models");
const sequelize = new sequelize_1.Sequelize('login-with-metamask-database', '', undefined, {
    dialect: 'sqlite',
    storage: path_1.default.join(os_1.default.tmpdir(), 'db.sqlite'),
    logging: false,
});
exports.sequelize = sequelize;
// Init all models
models_1.User.init({
    nonce: {
        allowNull: false,
        type: sequelize_1.INTEGER.UNSIGNED,
        defaultValue: () => Math.floor(Math.random() * 10000),
    },
    publicAddress: {
        allowNull: false,
        type: sequelize_1.STRING,
        unique: true,
        validate: { isLowercase: true },
    },
    username: {
        type: sequelize_1.STRING,
        unique: true,
    },
}, {
    modelName: 'user',
    sequelize,
    timestamps: false,
});
// Create new tables
sequelize.sync();
