"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const sdk_1 = require("../utils/sdk");
(0, vitest_1.test)("Assets Assets List Assets By Correspondent Assets List Assets By Correspondent1", async () => {
    const result = await sdk_1.sdk.assets.listAssetsCorrespondent(process.env["CORRESPONDENT_ID"] ?? "");
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Assets Assets Get Asset By Correspondent Assets Get Asset By Correspondent1", async () => {
    const result = await sdk_1.sdk.assets.getAssetCorrespondent(process.env["CORRESPONDENT_ID"] ?? "", "8395");
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
//# sourceMappingURL=assets_additional.test.js.map