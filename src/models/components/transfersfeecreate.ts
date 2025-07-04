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
import {
  DecimalCreate,
  DecimalCreate$inboundSchema,
  DecimalCreate$Outbound,
  DecimalCreate$outboundSchema,
} from "./decimalcreate.js";

/**
 * The type of the fee being charged
 */
export enum TransfersFeeCreateType {
  TypeUnspecified = "TYPE_UNSPECIFIED",
  Management = "MANAGEMENT",
  Advisory = "ADVISORY",
  Exchange = "EXCHANGE",
  Platform = "PLATFORM",
  Inactivity = "INACTIVITY",
}
/**
 * The type of the fee being charged
 */
export type TransfersFeeCreateTypeOpen = OpenEnum<
  typeof TransfersFeeCreateType
>;

/**
 * A transfer using the FEE mechanism. Funds are moved from a customer's brokerage account to the firm account
 */
export type TransfersFeeCreate = {
  /**
   * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal][] or Python's [decimal.Decimal][].
   *
   * @remarks
   *
   *  [BigDecimal]:
   *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
   *  [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
   */
  amount: DecimalCreate;
  /**
   * External identifier supplied by the API caller. Each request must have a unique pairing of client_transfer_id and account
   */
  clientTransferId: string;
  /**
   * Optional description information that will attach to this transaction
   */
  description?: string | undefined;
  /**
   * Optional account field to denote where the fee amount should be deposited into. If provided, the account must be a fee operating account. In the case of multiple fee operating accounts under the same correspondent, this field must be provided. If not provided, this will be looked up asynchronously (therefore will not be in the initial response)
   */
  feeOperatingAccount?: string | undefined;
  /**
   * The type of the fee being charged
   */
  type: TransfersFeeCreateTypeOpen;
};

/** @internal */
export const TransfersFeeCreateType$inboundSchema: z.ZodType<
  TransfersFeeCreateTypeOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(TransfersFeeCreateType),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const TransfersFeeCreateType$outboundSchema: z.ZodType<
  TransfersFeeCreateTypeOpen,
  z.ZodTypeDef,
  TransfersFeeCreateTypeOpen
> = z.union([
  z.nativeEnum(TransfersFeeCreateType),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransfersFeeCreateType$ {
  /** @deprecated use `TransfersFeeCreateType$inboundSchema` instead. */
  export const inboundSchema = TransfersFeeCreateType$inboundSchema;
  /** @deprecated use `TransfersFeeCreateType$outboundSchema` instead. */
  export const outboundSchema = TransfersFeeCreateType$outboundSchema;
}

/** @internal */
export const TransfersFeeCreate$inboundSchema: z.ZodType<
  TransfersFeeCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  amount: DecimalCreate$inboundSchema,
  client_transfer_id: z.string(),
  description: z.string().optional(),
  fee_operating_account: z.string().optional(),
  type: TransfersFeeCreateType$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "client_transfer_id": "clientTransferId",
    "fee_operating_account": "feeOperatingAccount",
  });
});

/** @internal */
export type TransfersFeeCreate$Outbound = {
  amount: DecimalCreate$Outbound;
  client_transfer_id: string;
  description?: string | undefined;
  fee_operating_account?: string | undefined;
  type: string;
};

/** @internal */
export const TransfersFeeCreate$outboundSchema: z.ZodType<
  TransfersFeeCreate$Outbound,
  z.ZodTypeDef,
  TransfersFeeCreate
> = z.object({
  amount: DecimalCreate$outboundSchema,
  clientTransferId: z.string(),
  description: z.string().optional(),
  feeOperatingAccount: z.string().optional(),
  type: TransfersFeeCreateType$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    clientTransferId: "client_transfer_id",
    feeOperatingAccount: "fee_operating_account",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TransfersFeeCreate$ {
  /** @deprecated use `TransfersFeeCreate$inboundSchema` instead. */
  export const inboundSchema = TransfersFeeCreate$inboundSchema;
  /** @deprecated use `TransfersFeeCreate$outboundSchema` instead. */
  export const outboundSchema = TransfersFeeCreate$outboundSchema;
  /** @deprecated use `TransfersFeeCreate$Outbound` instead. */
  export type Outbound = TransfersFeeCreate$Outbound;
}
