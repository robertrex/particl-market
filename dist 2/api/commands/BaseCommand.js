"use strict";
// Copyright (c) 2017-2018, The Particl Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/particl/particl-market/blob/develop/LICENSE
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const CommandEnumType_1 = require("./CommandEnumType");
const _ = require("lodash");
const NotFoundException_1 = require("../exceptions/NotFoundException");
class BaseCommand {
    constructor(command) {
        this.command = command;
        this.commands = CommandEnumType_1.Commands;
    }
    /**
     * execute the next command in data.params
     *
     * @param rpcCommandFactory
     * @param data
     * @returns {Promise<Bookshelf.Model<any>>}
     */
    executeNext(request, commandFactory) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const commandName = request.params.shift();
            // find a matching command from current commands childCommands
            const commandType = _.find(this.getChildCommands(), command => command.commandName === commandName);
            if (commandType) {
                const rpcCommand = commandFactory.get(commandType);
                // validate
                const newRpcRequest = yield rpcCommand.validate(request);
                request = newRpcRequest ? newRpcRequest : request;
                // execute
                return yield rpcCommand.execute(request, commandFactory);
            }
            else {
                throw new NotFoundException_1.NotFoundException('Unknown subcommand: ' + commandName + '\n');
            }
        });
    }
    /**
     * returns the child Commands of this command
     * @returns {Command[]}
     */
    getChildCommands() {
        return this.command.childCommands;
    }
    validate(data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return data;
        });
    }
    help() {
        return ' <TODO: Command.help()>';
    }
    usage() {
        return '<TODO: Command.usage()>';
    }
    description() {
        return 'TODO: Command.description()';
    }
    example() {
        return null;
    }
    getName() {
        return this.command.commandName;
    }
    getCommand() {
        return this.command;
    }
}
exports.BaseCommand = BaseCommand;
//# sourceMappingURL=BaseCommand.js.map