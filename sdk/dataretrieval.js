"use strict";
/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataRetrieval = void 0;
const dataRetrievalListSnapshots_js_1 = require("../funcs/dataRetrievalListSnapshots.js");
const sdks_js_1 = require("../lib/sdks.js");
const fp_js_1 = require("../types/fp.js");
class DataRetrieval extends sdks_js_1.ClientSDK {
    /**
     * List Snapshots
     *
     * @remarks
     * Returns details of a list of snapshots.
     */
    async listSnapshots(filter, pageSize, pageToken, options) {
        return (0, fp_js_1.unwrapAsync)((0, dataRetrievalListSnapshots_js_1.dataRetrievalListSnapshots)(this, filter, pageSize, pageToken, options));
    }
}
exports.DataRetrieval = DataRetrieval;
//# sourceMappingURL=dataretrieval.js.map