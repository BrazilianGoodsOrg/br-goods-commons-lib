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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrGoodNotification = void 0;
const assert = require("assert");
const type_commons_lib_1 = require("type-commons-lib");
const email_service_1 = require("./email-service");
class Notification {
    constructor() {
        this.service = email_service_1.EmailService;
    }
    /**
     * Send email using notification service
     * @param email {EmailDto}
     */
    sendEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            assert(email);
            assert(email.subject);
            assert(email.to);
            assert(email.templateKey);
            const emails = email.to.split(',');
            emails.forEach((e) => {
                if (!e.match(type_commons_lib_1.RegexUtils.EMAIL_VALIDATOR_REGEX)) {
                    throw new Error('Invalid email address');
                }
            });
            yield this.service.sendEmail(email);
        });
    }
}
__decorate([
    (0, type_commons_lib_1.log)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], Notification.prototype, "sendEmail", null);
exports.BrGoodNotification = new Notification();
