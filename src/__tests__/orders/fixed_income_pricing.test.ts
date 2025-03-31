import { beforeAll, expect, test } from "vitest";
import { sdk, timeout } from "../utils/sdk";
import * as components from "../../models/components";
import { RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreateIdentifierType } from "../../models/components";
import {
  affirmAgreement,
  createAccount,
  createLegalNaturalPerson,
  enrollAccount,
} from "../accounts";
import { identifier_cusp } from "./index";

let lnp_id: string | undefined;
let account_id: string | undefined;
let enrollment_ids: string[] | undefined;

beforeAll(async () => {
  lnp_id = await createLegalNaturalPerson();
  if (typeof lnp_id !== "string") {
    throw new Error("lnp_id is undefined.");
  }
  await timeout(5000);
  account_id = await createAccount(lnp_id);
  if (typeof account_id !== "string") {
    throw new Error("account_id is undefined.");
  }
  await timeout(5000);
  enrollment_ids = await enrollAccount(account_id);
  if (typeof enrollment_ids !== "object") {
    throw new Error("enrollment_ids is undefined.");
  }
  await timeout(5000);
  affirmAgreement(account_id, enrollment_ids);
  await timeout(5000);
}, 60000);

test("Fixed Income Pricing Orders Preview Order Cost Preview Order Cost1", async () => {
  if (typeof account_id !== "string") {
    throw new Error("account_id is undefined.");
  }
  const request: components.OrderCostPreviewRequestCreate = {
    assetType: components.OrderCostPreviewRequestCreateAssetType.FixedIncome,
    identifier: identifier_cusp,
    identifierType:
      components.OrderCostPreviewRequestCreateIdentifierType.Cusip,
    parent: `accounts/${account_id}`,
    quantity: {
      value: "5",
    },
    limitPrice: {
      price: {
        value: "2",
      },
      type: components.LimitPriceCreateType.PercentageOfPar,
    },
  };
  const result = await sdk.fixedIncomePricing.previewOrderCost(
    request,
    account_id,
  );
  expect(result.httpMeta.response.status).toBe(200);
});

test("Fixed Income Pricing Orders Retrieve Quote Retrieve Quote1", async () => {
  if (typeof account_id !== "string") {
    throw new Error("account_id is undefined.");
  }
  const request: components.RetrieveQuoteRequestCreate = {
    assetType: components.RetrieveQuoteRequestCreateAssetType.FixedIncome,
    identifier: identifier_cusp,
    identifierType: components.RetrieveQuoteRequestCreateIdentifierType.Cusip,
    parent: `accounts/${account_id}`,
  };
  const result = await sdk.fixedIncomePricing.retrieveQuote(
    request,
    account_id,
  );
  expect(result.httpMeta.response.status).toBe(200);
});

test("Fixed Income Pricing Orders Retrieve Fixed Income Marks", async () => {
  const request: components.RetrieveFixedIncomeMarksRequestCreate = {
    parent: "correspondents/" + process.env["CORRESPONDENT_ID"],
    securityIdentifiers: [
      {
        identifier: identifier_cusp,
        identifierType:
          RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreateIdentifierType.Cusip,
      },
    ],
  };
  const result = await sdk.fixedIncomePricing.retrieveFixedIncomeMarks(
    request,
    process.env['CORRESPONDENT_ID'] || "",
  );
  expect(result.httpMeta.response.status).toBe(200);
});
