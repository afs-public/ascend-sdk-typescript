"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entryID = entryID;
exports.activityID = activityID;
const sdk_1 = require("../utils/sdk");
async function entryID(account_id) {
    var _a, _b, _c;
    const result = await sdk_1.sdk.ledger.listEntries(account_id);
    if ((_c = (_b = (_a = result === null || result === void 0 ? void 0 : result.listEntriesResponse) === null || _a === void 0 ? void 0 : _a.entries) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.entryId) {
        return result.listEntriesResponse.entries[0].entryId;
    }
    return undefined;
}
async function activityID(account_id) {
    var _a, _b, _c;
    const result = await sdk_1.sdk.ledger.listActivities(account_id);
    if ((_c = (_b = (_a = result === null || result === void 0 ? void 0 : result.listActivitiesResponse) === null || _a === void 0 ? void 0 : _a.activities) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.activityId) {
        return result.listActivitiesResponse.activities[0].activityId;
    }
    return undefined;
}
//# sourceMappingURL=index.js.map