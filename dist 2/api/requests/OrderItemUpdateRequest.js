"use strict";
// Copyright (c) 2017-2018, The Particl Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/particl/particl-market/blob/develop/LICENSE
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const RequestBody_1 = require("../../core/api/RequestBody");
const OrderStatus_1 = require("../enums/OrderStatus");
// tslint:disable:variable-name
class OrderItemUpdateRequest extends RequestBody_1.RequestBody {
}
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], OrderItemUpdateRequest.prototype, "itemHash", void 0);
tslib_1.__decorate([
    class_validator_1.IsEnum(OrderStatus_1.OrderStatus),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], OrderItemUpdateRequest.prototype, "status", void 0);
exports.OrderItemUpdateRequest = OrderItemUpdateRequest;
// tslint:enable:variable-name
//# sourceMappingURL=OrderItemUpdateRequest.js.map