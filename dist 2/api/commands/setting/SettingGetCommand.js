"use strict";
// Copyright (c) 2017-2018, The Particl Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/particl/particl-market/blob/develop/LICENSE
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inversify_1 = require("inversify");
const Validate_1 = require("../../../core/api/Validate");
const constants_1 = require("../../../constants");
const SettingService_1 = require("../../services/SettingService");
const RpcRequest_1 = require("../../requests/RpcRequest");
const CommandEnumType_1 = require("../CommandEnumType");
const BaseCommand_1 = require("../BaseCommand");
const RpcCommandFactory_1 = require("../../factories/RpcCommandFactory");
const MessageException_1 = require("../../exceptions/MessageException");
const ProfileService_1 = require("../../services/ProfileService");
let SettingGetCommand = class SettingGetCommand extends BaseCommand_1.BaseCommand {
    constructor(Logger, settingService, profileService) {
        super(CommandEnumType_1.Commands.SETTING_GET);
        this.Logger = Logger;
        this.settingService = settingService;
        this.profileService = profileService;
        this.log = new Logger(__filename);
    }
    /**
     * data.params[]:
     *  [0]: profileId
     *  [1]: key
     *
     * @param data
     * @param rpcCommandFactory
     * @returns {Promise<Setting>}
     */
    execute(data, rpcCommandFactory) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const profileId = data.params[0];
            const key = data.params[1];
            return yield this.settingService.findOneByKeyAndProfileId(key, profileId);
        });
    }
    /**
     * data.params[]:
     *  [0]: profileId
     *  [1]: key
     *
     * @param {RpcRequest} data
     * @returns {Promise<RpcRequest>}
     */
    validate(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (data.params.length < 1) {
                throw new MessageException_1.MessageException('Missing profileId.');
            }
            if (data.params.length < 2) {
                throw new MessageException_1.MessageException('Missing key.');
            }
            const profileId = data.params[0];
            if (profileId && typeof profileId === 'string') {
                throw new MessageException_1.MessageException('profileId cant be a string.');
            }
            else {
                // make sure Profile with the id exists
                yield this.profileService.findOne(profileId) // throws if not found
                    .catch(reason => {
                    throw new MessageException_1.MessageException('Profile not found.');
                });
            }
            return data;
        });
    }
    usage() {
        return this.getName() + ' [<profileId>] ';
    }
    help() {
        return this.usage() + ' -  ' + this.description() + '\n'
            + '    <profileId>              - Numeric - The ID of the related profile \n'
            + '    <key>                    - String - The key of the setting we want to fetch.';
    }
    description() {
        return 'Get the setting with profileId and key.';
    }
    example() {
        return 'setting ' + this.getName() + ' 1 key';
    }
};
tslib_1.__decorate([
    Validate_1.validate(),
    tslib_1.__param(0, Validate_1.request(RpcRequest_1.RpcRequest)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [RpcRequest_1.RpcRequest, RpcCommandFactory_1.RpcCommandFactory]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingGetCommand.prototype, "execute", null);
SettingGetCommand = tslib_1.__decorate([
    tslib_1.__param(0, inversify_1.inject(constants_1.Types.Core)), tslib_1.__param(0, inversify_1.named(constants_1.Core.Logger)),
    tslib_1.__param(1, inversify_1.inject(constants_1.Types.Service)), tslib_1.__param(1, inversify_1.named(constants_1.Targets.Service.SettingService)),
    tslib_1.__param(2, inversify_1.inject(constants_1.Types.Service)), tslib_1.__param(2, inversify_1.named(constants_1.Targets.Service.ProfileService)),
    tslib_1.__metadata("design:paramtypes", [Object, SettingService_1.SettingService,
        ProfileService_1.ProfileService])
], SettingGetCommand);
exports.SettingGetCommand = SettingGetCommand;
//# sourceMappingURL=SettingGetCommand.js.map