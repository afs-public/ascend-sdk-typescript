"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const sdk_1 = require("../utils/sdk");
const index_1 = require("./index");
const transfers_1 = require("../transfers");
const vitest_2 = require("vitest");
let entry_id;
let activity_id;
(0, vitest_2.beforeAll)(async () => {
    entry_id = await (0, index_1.entryID)(transfers_1.withdrawal_account_id);
    activity_id = await (0, index_1.activityID)(transfers_1.withdrawal_account_id);
}, 60000);
(0, vitest_1.test)("Ledger Ledger List Entries List Entries1", async () => {
    (0, vitest_1.expect)(entry_id).not.toBe(undefined);
});
(0, vitest_1.test)("Ledger Ledger List Activities List Activities1", async () => {
    (0, vitest_1.expect)(activity_id).not.toBe(undefined);
});
(0, vitest_1.test)("Ledger Ledger List Positions List Positions1", async () => {
    const result = await sdk_1.sdk.ledger.listPositions(transfers_1.withdrawal_account_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Ledger Ledger Get Activity Get Activity1", async () => {
    if (typeof activity_id !== "string") {
        throw new Error('activity_id is undefined.');
    }
    const result = await sdk_1.sdk.ledger.getActivity(transfers_1.withdrawal_account_id, activity_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Ledger Ledger Get Entry Get Entry1", async () => {
    if (typeof entry_id !== "string") {
        throw new Error('entry_id is undefined.');
    }
    const result = await sdk_1.sdk.ledger.getEntry(transfers_1.withdrawal_account_id, entry_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
//# sourceMappingURL=ledger.test.js.map