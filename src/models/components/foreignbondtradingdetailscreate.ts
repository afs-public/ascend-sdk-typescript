/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  ForeignBondTradingDetailCreate,
  ForeignBondTradingDetailCreate$inboundSchema,
  ForeignBondTradingDetailCreate$Outbound,
  ForeignBondTradingDetailCreate$outboundSchema,
} from "./foreignbondtradingdetailcreate.js";

/**
 * Foreign bond trading detail
 */
export type ForeignBondTradingDetailsCreate = {
  /**
   * Does the account anticipate trading in foreign bonds
   */
  foreignBondTrading: boolean;
  /**
   * The foreign bond trading countries details. If yes, than please provide details
   */
  foreignBondTradingDetail?: Array<ForeignBondTradingDetailCreate> | undefined;
};

/** @internal */
export const ForeignBondTradingDetailsCreate$inboundSchema: z.ZodType<
  ForeignBondTradingDetailsCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  foreign_bond_trading: z.boolean(),
  foreign_bond_trading_detail: z.array(
    ForeignBondTradingDetailCreate$inboundSchema,
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "foreign_bond_trading": "foreignBondTrading",
    "foreign_bond_trading_detail": "foreignBondTradingDetail",
  });
});

/** @internal */
export type ForeignBondTradingDetailsCreate$Outbound = {
  foreign_bond_trading: boolean;
  foreign_bond_trading_detail?:
    | Array<ForeignBondTradingDetailCreate$Outbound>
    | undefined;
};

/** @internal */
export const ForeignBondTradingDetailsCreate$outboundSchema: z.ZodType<
  ForeignBondTradingDetailsCreate$Outbound,
  z.ZodTypeDef,
  ForeignBondTradingDetailsCreate
> = z.object({
  foreignBondTrading: z.boolean(),
  foreignBondTradingDetail: z.array(
    ForeignBondTradingDetailCreate$outboundSchema,
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    foreignBondTrading: "foreign_bond_trading",
    foreignBondTradingDetail: "foreign_bond_trading_detail",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ForeignBondTradingDetailsCreate$ {
  /** @deprecated use `ForeignBondTradingDetailsCreate$inboundSchema` instead. */
  export const inboundSchema = ForeignBondTradingDetailsCreate$inboundSchema;
  /** @deprecated use `ForeignBondTradingDetailsCreate$outboundSchema` instead. */
  export const outboundSchema = ForeignBondTradingDetailsCreate$outboundSchema;
  /** @deprecated use `ForeignBondTradingDetailsCreate$Outbound` instead. */
  export type Outbound = ForeignBondTradingDetailsCreate$Outbound;
}
