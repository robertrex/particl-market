"use strict";
// Copyright (c) 2017-2018, The Particl Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/particl/particl-market/blob/develop/LICENSE
Object.defineProperty(exports, "__esModule", { value: true });
const ts_enums_1 = require("ts-enums");
const Environment_1 = require("../../core/helpers/Environment");
class Command extends ts_enums_1.EnumValue {
    constructor(uniqueName, name, root = true, children = [], theCommandType = Environment_1.EnvironmentType.ALL) {
        super(uniqueName);
        this.name = name;
        this.root = root;
        this.children = children;
        this.theCommandType = theCommandType;
    }
    get commandName() {
        return this.name;
    }
    get isRoot() {
        return this.root;
    }
    get childCommands() {
        return this.children;
    }
    get commandType() {
        return this.theCommandType;
    }
}
exports.Command = Command;
//# sourceMappingURL=Command.js.map