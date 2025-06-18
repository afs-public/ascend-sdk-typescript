"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const sdk_1 = require("../utils/sdk");
const index_1 = require("./index");
const vitest_2 = require("vitest");
let message_id;
(0, vitest_2.beforeAll)(async () => {
    message_id = await (0, index_1.create_message_id)();
    if (typeof message_id !== "string") {
        throw new Error('message_id is undefined.');
    }
    await (0, sdk_1.timeout)(5000);
}, 60000);
(0, vitest_1.test)("Reader Events List Event Messages List Event Messages1", async () => {
    (0, vitest_1.expect)(message_id).not.toBe(undefined);
});
(0, vitest_1.test)("Reader Events Get Event Message Get Event Message1", async () => {
    if (typeof message_id !== "string") {
        throw new Error('message_id is undefined.');
    }
    const result = await sdk_1.sdk.reader.getEventMessage(message_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
//# sourceMappingURL=reader.test.js.map