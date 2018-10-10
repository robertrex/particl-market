"use strict";
// Copyright (c) 2017-2018, The Particl Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/particl/particl-market/blob/develop/LICENSE
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inversify_1 = require("inversify");
const constants_1 = require("../../constants");
const DatabaseException_1 = require("../exceptions/DatabaseException");
const NotFoundException_1 = require("../exceptions/NotFoundException");
let OrderItemRepository = class OrderItemRepository {
    constructor(OrderItemModel, Logger) {
        this.OrderItemModel = OrderItemModel;
        this.Logger = Logger;
        this.log = new Logger(__filename);
    }
    findAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const list = yield this.OrderItemModel.fetchAll();
            return list;
        });
    }
    findOne(id, withRelated = true) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.OrderItemModel.fetchById(id, withRelated);
        });
    }
    create(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const orderItem = this.OrderItemModel.forge(data);
            try {
                const orderItemCreated = yield orderItem.save();
                return this.OrderItemModel.fetchById(orderItemCreated.id);
            }
            catch (error) {
                throw new DatabaseException_1.DatabaseException('Could not create the orderItem!', error);
            }
        });
    }
    update(id, data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const orderItem = this.OrderItemModel.forge({ id });
            try {
                const orderItemUpdated = yield orderItem.save(data, { patch: true });
                return this.OrderItemModel.fetchById(orderItemUpdated.id);
            }
            catch (error) {
                throw new DatabaseException_1.DatabaseException('Could not update the orderItem!', error);
            }
        });
    }
    destroy(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let orderItem = this.OrderItemModel.forge({ id });
            try {
                orderItem = yield orderItem.fetch({ require: true });
            }
            catch (error) {
                throw new NotFoundException_1.NotFoundException(id);
            }
            try {
                yield orderItem.destroy();
                return;
            }
            catch (error) {
                throw new DatabaseException_1.DatabaseException('Could not delete the orderItem!', error);
            }
        });
    }
};
OrderItemRepository = tslib_1.__decorate([
    tslib_1.__param(0, inversify_1.inject(constants_1.Types.Model)), tslib_1.__param(0, inversify_1.named(constants_1.Targets.Model.OrderItem)),
    tslib_1.__param(1, inversify_1.inject(constants_1.Types.Core)), tslib_1.__param(1, inversify_1.named(constants_1.Core.Logger)),
    tslib_1.__metadata("design:paramtypes", [Object, Object])
], OrderItemRepository);
exports.OrderItemRepository = OrderItemRepository;
//# sourceMappingURL=OrderItemRepository.js.map