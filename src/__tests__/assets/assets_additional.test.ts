import {expect, test} from "vitest";
import {sdk} from "../utils/sdk";

test("Assets Assets List Assets By Correspondent Assets List Assets By Correspondent1", async () => {
  const result = await sdk.assets.listAssetsCorrespondent(process.env["CORRESPONDENT_ID"] ?? "");
  expect(result.httpMeta.response.status).toBe(200);
});

test("Assets Assets Get Asset By Correspondent Assets Get Asset By Correspondent1", async () => {
  const result = await sdk.assets.getAssetCorrespondent(process.env["CORRESPONDENT_ID"] ?? "", "8395");
  expect(result.httpMeta.response.status).toBe(200);
});
