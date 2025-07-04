/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  DecimalCreate,
  DecimalCreate$inboundSchema,
  DecimalCreate$Outbound,
  DecimalCreate$outboundSchema,
} from "./decimalcreate.js";

/**
 * The initial amount of money placed into the account by the entity upon or after the account's establishment.
 */
export type DepositedFundsCreate = {
  /**
   * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal][] or Python's [decimal.Decimal][].
   *
   * @remarks
   *
   *  [BigDecimal]:
   *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
   *  [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
   */
  initialDepositAmount: DecimalCreate;
  /**
   * The source of the initial deposit
   */
  initialDepositSource: string;
};

/** @internal */
export const DepositedFundsCreate$inboundSchema: z.ZodType<
  DepositedFundsCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  initial_deposit_amount: DecimalCreate$inboundSchema,
  initial_deposit_source: z.string(),
}).transform((v) => {
  return remap$(v, {
    "initial_deposit_amount": "initialDepositAmount",
    "initial_deposit_source": "initialDepositSource",
  });
});

/** @internal */
export type DepositedFundsCreate$Outbound = {
  initial_deposit_amount: DecimalCreate$Outbound;
  initial_deposit_source: string;
};

/** @internal */
export const DepositedFundsCreate$outboundSchema: z.ZodType<
  DepositedFundsCreate$Outbound,
  z.ZodTypeDef,
  DepositedFundsCreate
> = z.object({
  initialDepositAmount: DecimalCreate$outboundSchema,
  initialDepositSource: z.string(),
}).transform((v) => {
  return remap$(v, {
    initialDepositAmount: "initial_deposit_amount",
    initialDepositSource: "initial_deposit_source",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DepositedFundsCreate$ {
  /** @deprecated use `DepositedFundsCreate$inboundSchema` instead. */
  export const inboundSchema = DepositedFundsCreate$inboundSchema;
  /** @deprecated use `DepositedFundsCreate$outboundSchema` instead. */
  export const outboundSchema = DepositedFundsCreate$outboundSchema;
  /** @deprecated use `DepositedFundsCreate$Outbound` instead. */
  export type Outbound = DepositedFundsCreate$Outbound;
}
