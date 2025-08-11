"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const sdk_1 = require("../utils/sdk");
const accounts_1 = require("../accounts");
const index_1 = require("./index");
const vitest_2 = require("vitest");
let lnp_id;
let account_id;
let enrollment_ids;
let transfer_id;
(0, vitest_2.beforeAll)(async () => {
    lnp_id = await (0, accounts_1.createLegalNaturalPerson)();
    if (typeof lnp_id !== "string") {
        throw new Error('lnp_id is undefined.');
    }
    await (0, sdk_1.timeout)(5000);
    account_id = await (0, accounts_1.createAccount)(lnp_id);
    if (typeof account_id !== "string") {
        throw new Error('account_id is undefined.');
    }
    await (0, sdk_1.timeout)(5000);
    enrollment_ids = await (0, accounts_1.enrollAccount)(account_id);
    if (typeof enrollment_ids !== "object") {
        throw new Error('enrollment_ids is undefined.');
    }
    await (0, sdk_1.timeout)(5000);
    (0, accounts_1.affirmAgreement)(account_id, enrollment_ids);
    await (0, sdk_1.timeout)(5000);
    transfer_id = await (0, index_1.create_account_transfer_id)(account_id);
    if (typeof transfer_id !== "string") {
        throw new Error('accept_transfer_id is undefined.');
    }
    await (0, sdk_1.timeout)(5000);
}, 60000);
(0, vitest_1.test)("Account Transfers Account Transfers Create Transfer Create Transfer1", async () => {
    (0, vitest_1.expect)(transfer_id).not.toBe(undefined);
});
(0, vitest_1.test)("Account Transfers Account Transfers List Transfers List Transfers1", async () => {
    if (typeof account_id !== "string") {
        throw new Error('account_id is undefined.');
    }
    const correspondentId = process.env["CORRESPONDENT_ID"] ?? "";
    if (!correspondentId) {
        throw new Error('CORRESPONDENT_ID is undefined or empty.');
    }
    const request = {
        correspondentId: correspondentId,
        accountId: account_id,
    };
    const result = await sdk_1.sdk.accountTransfers.listTransfers(request);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
    (0, vitest_1.expect)(result.listTransfersResponse?.transfers?.length).toBeGreaterThan(0);
});
(0, vitest_1.test)("Account Transfers Account Transfers Reject Transfer Reject Transfer1", async () => {
    if (typeof account_id !== "string") {
        throw new Error('account_id is undefined.');
    }
    const correspondentId = process.env["CORRESPONDENT_ID"] ?? "";
    if (!correspondentId) {
        throw new Error('CORRESPONDENT_ID is undefined or empty.');
    }
    if (typeof transfer_id !== "string") {
        throw new Error('transfer_id is undefined.');
    }
    const request = {
        name: `correspondents/${correspondentId}/accounts/${account_id}/transfers/${transfer_id}`,
    };
    const result = await sdk_1.sdk.accountTransfers.rejectTransfer(request, correspondentId, account_id, transfer_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Account Transfers Account Transfers Accept Transfer Accept Transfer1", async () => {
    if (typeof account_id !== "string") {
        throw new Error('account_id is undefined.');
    }
    const correspondentId = process.env["CORRESPONDENT_ID"] ?? "";
    if (!correspondentId) {
        throw new Error('CORRESPONDENT_ID is undefined or empty.');
    }
    const accept_transfer_id = await (0, index_1.create_account_transfer_id)(account_id);
    if (typeof accept_transfer_id !== "string") {
        throw new Error('accept_transfer_id is undefined.');
    }
    await (0, sdk_1.timeout)(5000);
    const request = {
        name: `correspondents/${correspondentId}/accounts/${account_id}/transfers/${accept_transfer_id}`,
    };
    const result = await sdk_1.sdk.accountTransfers.acceptTransfer(request, correspondentId, account_id, accept_transfer_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Account Transfers Account Transfers Get Transfer Get Transfer1", async () => {
    if (typeof account_id !== "string") {
        throw new Error('account_id is undefined.');
    }
    if (typeof transfer_id !== "string") {
        throw new Error('accept_transfer_id is undefined.');
    }
    const correspondentId = process.env["CORRESPONDENT_ID"] ?? "";
    if (!correspondentId) {
        throw new Error('CORRESPONDENT_ID is undefined or empty.');
    }
    const result = await sdk_1.sdk.accountTransfers.getTransfer(correspondentId, account_id, transfer_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
//# sourceMappingURL=account_transfers.test.js.map