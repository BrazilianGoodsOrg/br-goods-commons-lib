"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppEnv = void 0;
const environment_1 = require("./environment");
class AppEnv {
}
exports.AppEnv = AppEnv;
AppEnv.NOTIFICATION_BASE_URL = (_a = process.env.NOTIFICATION_SERVICE_BASE_URL) !== null && _a !== void 0 ? _a : `https://3jvup5p0n3.execute-api.us-east-1.amazonaws.com/${environment_1.Environment.current}`;
