"use strict";
/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ledger = void 0;
const ledgerGetActivity_js_1 = require("../funcs/ledgerGetActivity.js");
const ledgerGetEntry_js_1 = require("../funcs/ledgerGetEntry.js");
const ledgerListActivities_js_1 = require("../funcs/ledgerListActivities.js");
const ledgerListEntries_js_1 = require("../funcs/ledgerListEntries.js");
const ledgerListPositions_js_1 = require("../funcs/ledgerListPositions.js");
const sdks_js_1 = require("../lib/sdks.js");
const fp_js_1 = require("../types/fp.js");
class Ledger extends sdks_js_1.ClientSDK {
    /**
     * List Entries
     *
     * @remarks
     * List all Entries based on a filter
     */
    async listEntries(accountId, pageSize, pageToken, filter, options) {
        return (0, fp_js_1.unwrapAsync)((0, ledgerListEntries_js_1.ledgerListEntries)(this, accountId, pageSize, pageToken, filter, options));
    }
    /**
     * List Activities
     *
     * @remarks
     * List all Completed Activities based on a filter
     */
    async listActivities(accountId, pageSize, pageToken, filter, options) {
        return (0, fp_js_1.unwrapAsync)((0, ledgerListActivities_js_1.ledgerListActivities)(this, accountId, pageSize, pageToken, filter, options));
    }
    /**
     * List Positions
     *
     * @remarks
     * List positions based on a filter
     */
    async listPositions(accountId, pageSize, pageToken, filter, options) {
        return (0, fp_js_1.unwrapAsync)((0, ledgerListPositions_js_1.ledgerListPositions)(this, accountId, pageSize, pageToken, filter, options));
    }
    /**
     * Get Activity
     *
     * @remarks
     * Get an activity
     */
    async getActivity(accountId, activityId, options) {
        return (0, fp_js_1.unwrapAsync)((0, ledgerGetActivity_js_1.ledgerGetActivity)(this, accountId, activityId, options));
    }
    /**
     * Get Entry
     *
     * @remarks
     * Get an entry
     */
    async getEntry(accountId, entryId, options) {
        return (0, fp_js_1.unwrapAsync)((0, ledgerGetEntry_js_1.ledgerGetEntry)(this, accountId, entryId, options));
    }
}
exports.Ledger = Ledger;
//# sourceMappingURL=ledger.js.map