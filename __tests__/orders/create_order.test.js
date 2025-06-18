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
let created_order_id;
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
    enrollment_ids = await (0, accounts_1.enrollAccount)(account_id);
    if (typeof enrollment_ids !== "object") {
        throw new Error("enrollment_ids is undefined.");
    }
    await (0, sdk_1.timeout)(5000);
    (0, accounts_1.affirmAgreement)(account_id, enrollment_ids);
    await (0, sdk_1.timeout)(5000);
    created_order_id = await (0, index_1.createOrder)(account_id);
    if (typeof created_order_id !== "string") {
        throw new Error("created_order_id is undefined.");
    }
    await (0, sdk_1.timeout)(5000);
}, 60000);
(0, vitest_1.test)("Create Order Orders Create Order Create Order1", async () => {
    (0, vitest_1.expect)(created_order_id).not.toBe(undefined);
});
(0, vitest_1.test)("Create Order Orders Get Order Get Order1", async () => {
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    if (typeof created_order_id !== "string") {
        throw new Error("created_order_id is undefined.");
    }
    const result = await sdk_1.sdk.createOrder.getOrder(account_id, created_order_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Create Order Orders Cancel Order Cancel Order1", async () => {
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    if (typeof created_order_id !== "string") {
        throw new Error("created_order_id is undefined.");
    }
    const request = {
        name: `accounts/${account_id}/orders/${created_order_id}`,
    };
    const result = await sdk_1.sdk.createOrder.cancelOrder(request, account_id, created_order_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
//# sourceMappingURL=create_order.test.js.map