var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { DateTime } from 'luxon';
import { BaseModel, column, belongsTo, hasMany } from '@adonisjs/lucid/orm';
import Customer from './customer.js';
import Ticket from './ticket.js';
export default class Transaction extends BaseModel {
}
__decorate([
    column({ isPrimary: true }),
    __metadata("design:type", Number)
], Transaction.prototype, "id", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], Transaction.prototype, "customerId", void 0);
__decorate([
    column(),
    __metadata("design:type", Number)
], Transaction.prototype, "amount", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Transaction.prototype, "status", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Transaction.prototype, "stripeSessionId", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Transaction.prototype, "stripePaymentIntentId", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Transaction.prototype, "paymentMethod", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Transaction.prototype, "customerEmail", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Transaction.prototype, "customerName", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Transaction.prototype, "receiptUrl", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], Transaction.prototype, "metadata", void 0);
__decorate([
    column.dateTime({ autoCreate: true }),
    __metadata("design:type", DateTime)
], Transaction.prototype, "createdAt", void 0);
__decorate([
    column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", DateTime)
], Transaction.prototype, "updatedAt", void 0);
__decorate([
    belongsTo(() => Customer),
    __metadata("design:type", Object)
], Transaction.prototype, "customer", void 0);
__decorate([
    hasMany(() => Ticket),
    __metadata("design:type", Object)
], Transaction.prototype, "tickets", void 0);
//# sourceMappingURL=transaction.js.map