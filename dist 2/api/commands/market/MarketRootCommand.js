"use strict";
// Copyright (c) 2017-2018, The Particl Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/particl/particl-market/blob/develop/LICENSE
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inversify_1 = require("inversify");
const RpcRequest_1 = require("../../requests/RpcRequest");
const Validate_1 = require("../../../core/api/Validate");
const constants_1 = require("../../../constants");
const BaseCommand_1 = require("../BaseCommand");
const RpcCommandFactory_1 = require("../../factories/RpcCommandFactory");
const CommandEnumType_1 = require("../CommandEnumType");
let MarketRootCommand = class MarketRootCommand extends BaseCommand_1.BaseCommand {
    constructor(Logger) {
        super(CommandEnumType_1.Commands.MARKET_ROOT);
        this.Logger = Logger;
        this.log = new Logger(__filename);
    }
    execute(data, rpcCommandFactory) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.executeNext(data, rpcCommandFactory);
        });
    }
    usage() {
        return this.getName() + ' (list|add)  -  ' + this.description();
    }
    help() {
        return this.usage();
    }
    description() {
        return 'Commands for managing markets';
    }
};
tslib_1.__decorate([
    Validate_1.validate(),
    tslib_1.__param(0, Validate_1.request(RpcRequest_1.RpcRequest)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [RpcRequest_1.RpcRequest, RpcCommandFactory_1.RpcCommandFactory]),
    tslib_1.__metadata("design:returntype", Promise)
], MarketRootCommand.prototype, "execute", null);
MarketRootCommand = tslib_1.__decorate([
    tslib_1.__param(0, inversify_1.inject(constants_1.Types.Core)), tslib_1.__param(0, inversify_1.named(constants_1.Core.Logger)),
    tslib_1.__metadata("design:paramtypes", [Object])
], MarketRootCommand);
exports.MarketRootCommand = MarketRootCommand;
//# sourceMappingURL=MarketRootCommand.js.map