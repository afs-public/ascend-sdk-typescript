"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const sdk_1 = require("../utils/sdk");
const accounts_1 = require("../accounts");
const vitest_2 = require("vitest");
const index_1 = require("./index");
let lnp_id;
let account_id;
let journal_id;
(0, vitest_2.beforeAll)(async () => {
    lnp_id = await (0, accounts_1.createLegalNaturalPerson)();
    if (typeof lnp_id !== "string") {
        throw new Error("lnp_id is undefined.");
    }
    await (0, sdk_1.timeout)(5000);
    account_id = await (0, accounts_1.createAccount)(lnp_id);
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    await (0, sdk_1.timeout)(5000);
    journal_id = await (0, index_1.createCashJournal)(account_id);
}, 60000);
(0, vitest_1.test)("Cash Journals Transfers Create Cash Journal Create Cash Journal1", async () => {
    (0, vitest_1.expect)(journal_id).not.toBe(undefined);
});
(0, vitest_1.test)("Cash Journals Transfers Get Cash Journal Get Cash Journal1", async () => {
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    if (typeof journal_id !== "string") {
        throw new Error("journal_id is undefined.");
    }
    const result = await sdk_1.sdk.journals.getCashJournal(journal_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Cash Journals Transfers Cancel Cash Journal Cancel Cash Journal1", async () => {
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    if (typeof journal_id !== "string") {
        throw new Error("journal_id is undefined.");
    }
    const request = {
        name: "cashJournals/" + journal_id,
        reason: "Test cancel cash journal",
    };
    const result = await sdk_1.sdk.journals.cancelCashJournal(request, journal_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Cash Journals Transfers Retrieve Cash Journal Party Retrieve Cash Journal Party1", async () => {
    if (typeof index_1.deceased_account_id !== "string") {
        throw new Error("deceased_account_id is undefined.");
    }
    if (typeof index_1.withdrawal_account_id !== "string") {
        throw new Error("withdrawal_account_id is undefined.");
    }
    const request = {
        destinationAccount: "accounts/" + index_1.deceased_account_id,
        sourceAccount: "accounts/" + index_1.withdrawal_account_id,
    };
    const result = await sdk_1.sdk.journals.checkPartyType(request);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Cash Journals Transfers Retrieve Cash Journal Constraints Retrieve Cash Journal Constraints1", async () => {
    const request = {
        destinationAccount: "accounts/" + index_1.deceased_account_id,
        sourceAccount: "accounts/" + index_1.withdrawal_account_id,
    };
    const result = await sdk_1.sdk.journals.retrieveCashJournalConstraints(request);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
//# sourceMappingURL=cash_journals.test.js.map