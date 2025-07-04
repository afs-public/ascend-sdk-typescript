/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";

/**
 * The bank account type.
 */
export enum BankAccountUpdateType {
  TypeUnspecified = "TYPE_UNSPECIFIED",
  Checking = "CHECKING",
  Savings = "SAVINGS",
}
/**
 * The bank account type.
 */
export type BankAccountUpdateTypeOpen = OpenEnum<typeof BankAccountUpdateType>;

/**
 * A representation of a bank account.
 */
export type BankAccountUpdate = {
  /**
   * The bank account number. This value will be masked in responses.
   */
  accountNumber?: string | undefined;
  /**
   * The name of the bank account owner.
   */
  owner?: string | undefined;
  /**
   * The bank routing number (either ABA or BIC).
   */
  routingNumber?: string | undefined;
  /**
   * The bank account type.
   */
  type?: BankAccountUpdateTypeOpen | undefined;
};

/** @internal */
export const BankAccountUpdateType$inboundSchema: z.ZodType<
  BankAccountUpdateTypeOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(BankAccountUpdateType),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const BankAccountUpdateType$outboundSchema: z.ZodType<
  BankAccountUpdateTypeOpen,
  z.ZodTypeDef,
  BankAccountUpdateTypeOpen
> = z.union([
  z.nativeEnum(BankAccountUpdateType),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BankAccountUpdateType$ {
  /** @deprecated use `BankAccountUpdateType$inboundSchema` instead. */
  export const inboundSchema = BankAccountUpdateType$inboundSchema;
  /** @deprecated use `BankAccountUpdateType$outboundSchema` instead. */
  export const outboundSchema = BankAccountUpdateType$outboundSchema;
}

/** @internal */
export const BankAccountUpdate$inboundSchema: z.ZodType<
  BankAccountUpdate,
  z.ZodTypeDef,
  unknown
> = z.object({
  account_number: z.string().optional(),
  owner: z.string().optional(),
  routing_number: z.string().optional(),
  type: BankAccountUpdateType$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "account_number": "accountNumber",
    "routing_number": "routingNumber",
  });
});

/** @internal */
export type BankAccountUpdate$Outbound = {
  account_number?: string | undefined;
  owner?: string | undefined;
  routing_number?: string | undefined;
  type?: string | undefined;
};

/** @internal */
export const BankAccountUpdate$outboundSchema: z.ZodType<
  BankAccountUpdate$Outbound,
  z.ZodTypeDef,
  BankAccountUpdate
> = z.object({
  accountNumber: z.string().optional(),
  owner: z.string().optional(),
  routingNumber: z.string().optional(),
  type: BankAccountUpdateType$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    accountNumber: "account_number",
    routingNumber: "routing_number",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BankAccountUpdate$ {
  /** @deprecated use `BankAccountUpdate$inboundSchema` instead. */
  export const inboundSchema = BankAccountUpdate$inboundSchema;
  /** @deprecated use `BankAccountUpdate$outboundSchema` instead. */
  export const outboundSchema = BankAccountUpdate$outboundSchema;
  /** @deprecated use `BankAccountUpdate$Outbound` instead. */
  export type Outbound = BankAccountUpdate$Outbound;
}
