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
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm';
import Category from './category.js';
import Transaction from './transaction.js';
export default class Ticket extends BaseModel {
}
__decorate([
    column({ isPrimary: true }),
    __metadata("design:type", Number)
], Ticket.prototype, "id", void 0);
__decorate([
    column(),
    __metadata("design:type", Number)
], Ticket.prototype, "categoryId", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], Ticket.prototype, "transactionId", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Ticket.prototype, "code", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Ticket.prototype, "status", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Ticket.prototype, "seatNumber", void 0);
__decorate([
    column(),
    __metadata("design:type", Number)
], Ticket.prototype, "price", void 0);
__decorate([
    column.dateTime({ autoCreate: true }),
    __metadata("design:type", DateTime)
], Ticket.prototype, "createdAt", void 0);
__decorate([
    column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", DateTime)
], Ticket.prototype, "updatedAt", void 0);
__decorate([
    belongsTo(() => Category),
    __metadata("design:type", Object)
], Ticket.prototype, "category", void 0);
__decorate([
    belongsTo(() => Transaction),
    __metadata("design:type", Object)
], Ticket.prototype, "transaction", void 0);
//# sourceMappingURL=ticket.js.map