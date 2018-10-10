"use strict";
// Copyright (c) 2017-2018, The Particl Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/particl/particl-market/blob/develop/LICENSE
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * APPLICATION CONFIGURATION
 * ----------------------------------------
 *
 * This is the place to add any other express module and register
 * all your custom middlewares and routes.
 */
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const express = require("express");
const favicon = require("serve-favicon");
const bodyParser = require("body-parser");
const compression = require("compression");
const Logger_1 = require("../core/Logger");
class AppConfig {
    configure(app) {
        const logger = new Logger_1.Logger();
        app.Express
            .options('*', cors())
            .use(cors())
            .use(helmet())
            .use(helmet.hsts({
            maxAge: 31536000,
            includeSubdomains: true
        }))
            .use(compression())
            .use(bodyParser.json({ limit: '5mb' }))
            .use(bodyParser.urlencoded({
            extended: true
        }))
            .use(express.static(path.join(__dirname, '..', 'public'), { maxAge: Infinity }))
            .use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')))
            .use(morgan('dev', {
            stream: {
                write: logger.info.bind(logger)
            }
        }));
    }
}
exports.AppConfig = AppConfig;
//# sourceMappingURL=AppConfig.js.map