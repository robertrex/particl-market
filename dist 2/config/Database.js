"use strict";
// Copyright (c) 2017-2018, The Particl Market developers
// Distributed under the GPL software license, see the accompanying
// file COPYING or https://github.com/particl/particl-market/blob/develop/LICENSE
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * config.Database
 * ------------------------------------
 *
 * Here we configure our database connection and
 * our ORM 'bookshelf'.
 *
 * Here would be the place to add more bookshelf plugins.
 */
const knex = require("knex");
const bookshelf = require("bookshelf");
const DataDir_1 = require("../core/helpers/DataDir");
exports.DatabaseConfig = {
    client: process.env.DB_CLIENT || 'sqlite3',
    connection: {
        filename: process.env.DB_CONNECTION || DataDir_1.DataDir.getDatabaseFile()
    },
    pool: {
        min: parseInt(process.env.DB_POOL_MIN || 2, 10),
        max: parseInt(process.env.DB_POOL_MAX || 10, 10),
        afterCreate: (conn, cb) => {
            conn.run('PRAGMA foreign_keys = ON', cb);
            conn.run('PRAGMA journal_mode = WAL', cb);
        }
    },
    migrations: {
        directory: process.env.DB_MIGRATION_DIR || DataDir_1.DataDir.getDefaultMigrationsPath(),
        tableName: process.env.DB_MIGRATION_TABLE || 'version'
    },
    // not used anymore, potentially we can delete this.
    seeds: {
        directory: process.env.DB_SEEDS_DIR || DataDir_1.DataDir.getDefaultSeedsPath()
    },
    useNullAsDefault: true,
    // debug: true
    debug: false
};
exports.Knex = () => {
    console.log('knex config:', JSON.stringify(exports.DatabaseConfig, null, 2));
    return knex(exports.DatabaseConfig);
};
exports.Bookshelf = bookshelf(exports.Knex());
exports.Bookshelf.plugin(['bookshelf-camelcase']);
//# sourceMappingURL=Database.js.map