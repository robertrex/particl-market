"use strict";
// Copyright (c) 2017-2018, The Particl Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/particl/particl-market/blob/develop/LICENSE
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
class GenerateProfileParams {
    /**
     * generateParams[]:
     * [0]: generateShippingAddresses
     * [1]: generateCryptocurrencyAddresses
     * [2]: generateSettings
     *
     * @param generateParams
     */
    constructor(generateParams = []) {
        // GenerateProfileParamsInterface
        this.generateShippingAddresses = true;
        this.generateCryptocurrencyAddresses = true;
        this.generateSettings = true;
        // set params only if there are some -> by default all are true
        if (!_.isEmpty(generateParams)) {
            this.generateShippingAddresses = generateParams[0] ? true : false;
            this.generateCryptocurrencyAddresses = generateParams[1] ? true : false;
            this.generateSettings = generateParams[2] ? true : false;
        }
    }
    toParamsArray() {
        return [this.generateShippingAddresses, this.generateCryptocurrencyAddresses, this.generateSettings];
    }
}
exports.GenerateProfileParams = GenerateProfileParams;
//# sourceMappingURL=GenerateProfileParams.js.map