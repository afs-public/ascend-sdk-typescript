"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const sdk_1 = require("../utils/sdk");
(0, vitest_1.test)("Assets Assets List Assets By Correspondent Assets List Assets By Correspondent1", async () => {
    var _a;
    const result = await sdk_1.sdk.assets.listAssetsCorrespondent((_a = process.env["CORRESPONDENT_ID"]) !== null && _a !== void 0 ? _a : "");
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Assets Assets Get Asset By Correspondent Assets Get Asset By Correspondent1", async () => {
    var _a;
    const result = await sdk_1.sdk.assets.getAssetCorrespondent((_a = process.env["CORRESPONDENT_ID"]) !== null && _a !== void 0 ? _a : "", "8395");
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
//# sourceMappingURL=assets_additional.test.js.map