"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const sdk_1 = require("../utils/sdk");
const accounts_1 = require("../accounts");
const components_1 = require("@apexfintechsolutions/ascend-sdk/models/components");
let lnp_id;
let account_id;
(0, vitest_1.beforeAll)(async () => {
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
}, 60000);
(0, vitest_1.test)("Retirements Transfers List Contribution Summaries List Contribution Summaries1", async () => {
    if (account_id === undefined) {
        throw new Error("account_id is undefined.");
    }
    const result = await sdk_1.sdk.retirements.listContributionSummaries(account_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Retirements Transfers Retrieve Contribution Constraints Retrieve Contribution Constraints1", async () => {
    if (account_id === undefined) {
        throw new Error("account_id is undefined.");
    }
    const request = {
        mechanism: components_1.Mechanism.Ach,
        name: "accounts/" + account_id,
    };
    const result = await sdk_1.sdk.retirements.retrieveContributionConstraints(request, account_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Test Retirements Transfers Retrieve Distribution Constraints Retrieve Distribution Constraints", async () => {
    if (account_id === undefined) {
        throw new Error("account_id is undefined.");
    }
    const request = {
        mechanism: components_1.RetrieveDistributionConstraintsRequestCreateMechanism.Ach,
        name: "accounts/" + account_id,
    };
    const result = await sdk_1.sdk.retirements.retrieveDistributionConstraints(request, account_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Test Retirements Transfers List Distribution Summaries List Distribution Summaries1", async () => {
    const result = await sdk_1.sdk.retirements.listDistributionSummaries(account_id || "");
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
//# sourceMappingURL=retirements.test.js.map