/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type AccountsUpdateAccountRequest = {
  /**
   * The account id.
   */
  accountId: string;
  /**
   * The list of fields to update. Updatable Fields  `advised`  `cat_account_holder_type`  `primary_registered_rep_id`  `investment_profile.account_goals.investment_objective`  `investment_profile.account_goals.risk_tolerance`  `investment_profile.account_goals.liquidity_needs`  `investment_profile.account_goals.time_horizon`  `investment_profile.customer_profile.annual_income_range_usd`  `investment_profile.customer_profile.liquid_net_worth_range_usd`  `investment_profile.customer_profile.total_net_worth_range_usd`  `investment_profile.customer_profile.federal_tax_bracket`  `wrap_fee_billed`  `managed`
   */
  updateMask?: string | undefined;
  accountRequestUpdate: components.AccountRequestUpdate;
};

export type AccountsUpdateAccountResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * OK
   */
  account?: components.Account | undefined;
  /**
   * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
   */
  status?: components.Status | undefined;
};

/** @internal */
export const AccountsUpdateAccountRequest$inboundSchema: z.ZodType<
  AccountsUpdateAccountRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  account_id: z.string(),
  update_mask: z.string().optional(),
  AccountRequestUpdate: components.AccountRequestUpdate$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "account_id": "accountId",
    "update_mask": "updateMask",
    "AccountRequestUpdate": "accountRequestUpdate",
  });
});

/** @internal */
export type AccountsUpdateAccountRequest$Outbound = {
  account_id: string;
  update_mask?: string | undefined;
  AccountRequestUpdate: components.AccountRequestUpdate$Outbound;
};

/** @internal */
export const AccountsUpdateAccountRequest$outboundSchema: z.ZodType<
  AccountsUpdateAccountRequest$Outbound,
  z.ZodTypeDef,
  AccountsUpdateAccountRequest
> = z.object({
  accountId: z.string(),
  updateMask: z.string().optional(),
  accountRequestUpdate: components.AccountRequestUpdate$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    accountId: "account_id",
    updateMask: "update_mask",
    accountRequestUpdate: "AccountRequestUpdate",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountsUpdateAccountRequest$ {
  /** @deprecated use `AccountsUpdateAccountRequest$inboundSchema` instead. */
  export const inboundSchema = AccountsUpdateAccountRequest$inboundSchema;
  /** @deprecated use `AccountsUpdateAccountRequest$outboundSchema` instead. */
  export const outboundSchema = AccountsUpdateAccountRequest$outboundSchema;
  /** @deprecated use `AccountsUpdateAccountRequest$Outbound` instead. */
  export type Outbound = AccountsUpdateAccountRequest$Outbound;
}

/** @internal */
export const AccountsUpdateAccountResponse$inboundSchema: z.ZodType<
  AccountsUpdateAccountResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  Account: components.Account$inboundSchema.optional(),
  Status: components.Status$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "Account": "account",
    "Status": "status",
  });
});

/** @internal */
export type AccountsUpdateAccountResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  Account?: components.Account$Outbound | undefined;
  Status?: components.Status$Outbound | undefined;
};

/** @internal */
export const AccountsUpdateAccountResponse$outboundSchema: z.ZodType<
  AccountsUpdateAccountResponse$Outbound,
  z.ZodTypeDef,
  AccountsUpdateAccountResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  account: components.Account$outboundSchema.optional(),
  status: components.Status$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    account: "Account",
    status: "Status",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountsUpdateAccountResponse$ {
  /** @deprecated use `AccountsUpdateAccountResponse$inboundSchema` instead. */
  export const inboundSchema = AccountsUpdateAccountResponse$inboundSchema;
  /** @deprecated use `AccountsUpdateAccountResponse$outboundSchema` instead. */
  export const outboundSchema = AccountsUpdateAccountResponse$outboundSchema;
  /** @deprecated use `AccountsUpdateAccountResponse$Outbound` instead. */
  export type Outbound = AccountsUpdateAccountResponse$Outbound;
}
