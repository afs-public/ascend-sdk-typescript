import {expect, test} from "vitest";
import {sdk, timeout} from "../utils/sdk";
import {create_message_id} from "./index";
import {beforeAll} from "vitest";

let message_id: string | undefined;

beforeAll(async () => {
  message_id = await create_message_id();
  if (typeof message_id !== "string") {
    throw new Error('message_id is undefined.');
  }
  await timeout(5000);
}, 60000);

test("Reader Events List Event Messages List Event Messages1", async () => {
  expect(message_id).not.toBe(undefined);
});

test("Reader Events Get Event Message Get Event Message1", async () => {
  if (typeof message_id !== "string") {
    throw new Error('message_id is undefined.');
  }
  const result = await sdk.reader.getEventMessage(message_id);
  expect(result.httpMeta.response.status).toBe(200);
});
