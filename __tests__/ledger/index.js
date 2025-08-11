"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entryID = entryID;
exports.activityID = activityID;
const sdk_1 = require("../utils/sdk");
async function entryID(account_id) {
    const result = await sdk_1.sdk.ledger.listEntries(account_id);
    if (result?.listEntriesResponse?.entries?.[0]?.entryId) {
        return result.listEntriesResponse.entries[0].entryId;
    }
    return undefined;
}
async function activityID(account_id) {
    const result = await sdk_1.sdk.ledger.listActivities(account_id);
    if (result?.listActivitiesResponse?.activities?.[0]?.activityId) {
        return result.listActivitiesResponse.activities[0].activityId;
    }
    return undefined;
}
//# sourceMappingURL=index.js.map