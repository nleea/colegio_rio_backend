"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtAuthenticate = void 0;
const passport_jwt_1 = require("passport-jwt");
const passport_1 = __importDefault(require("passport"));
const db_1 = require("../infrastructure/models/db");
const opt = {
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_OR_KEY,
};
exports.jwtAuthenticate = passport_1.default.use(new passport_jwt_1.Strategy(opt, async (payload, done) => {
    try {
        const user = await db_1.db.users.findUnique({
            where: { username: payload.username },
        });
        if (!user) {
            done(null, false);
        }
        else
            done(null, user);
    }
    catch (error) {
        done(error, false);
    }
}));
//# sourceMappingURL=jwt_authentication.js.map