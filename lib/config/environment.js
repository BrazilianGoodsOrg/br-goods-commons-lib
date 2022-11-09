"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Environment = void 0;
var Env;
(function (Env) {
    Env["Development"] = "dev";
    Env["Homologation"] = "hml";
    Env["Production"] = "prd";
})(Env || (Env = {}));
class Environment {
    static get current() {
        var _a, _b;
        const env = (_a = process.env.NODE_ENV) !== null && _a !== void 0 ? _a : 'dev';
        return (_b = Environment.envs[env.toLocaleLowerCase()]) !== null && _b !== void 0 ? _b : Env.Development;
    }
}
exports.Environment = Environment;
Environment.Development = Env.Development;
Environment.Homologation = Env.Homologation;
Environment.Production = Env.Production;
Environment.envs = {
    dev: Env.Development,
    develop: Env.Development,
    development: Env.Development,
    local: Env.Development,
    hml: Env.Homologation,
    homolog: Env.Homologation,
    homologation: Env.Homologation,
    production: Env.Production,
    prod: Env.Production,
    prd: Env.Production,
};
