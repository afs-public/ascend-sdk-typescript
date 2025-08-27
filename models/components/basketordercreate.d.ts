import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DecimalCreate, DecimalCreate$Outbound } from "./decimalcreate.js";
/**
 * The type of the asset in this order
 */
export declare enum BasketOrderCreateAssetType {
    AssetTypeUnspecified = "ASSET_TYPE_UNSPECIFIED",
    Equity = "EQUITY",
    MutualFund = "MUTUAL_FUND"
}
/**
 * The type of the asset in this order
 */
export type BasketOrderCreateAssetTypeOpen = OpenEnum<typeof BasketOrderCreateAssetType>;
/**
 * The identifier type of the asset being ordered. For Equities: only SYMBOL is supported For Mutual Funds: only SYMBOL and CUSIP are supported
 */
export declare enum BasketOrderCreateIdentifierType {
    Symbol = "SYMBOL",
    Cusip = "CUSIP",
    Isin = "ISIN"
}
/**
 * The identifier type of the asset being ordered. For Equities: only SYMBOL is supported For Mutual Funds: only SYMBOL and CUSIP are supported
 */
export type BasketOrderCreateIdentifierTypeOpen = OpenEnum<typeof BasketOrderCreateIdentifierType>;
/**
 * The execution type of this order.
 */
export declare enum BasketOrderCreateOrderType {
    OrderTypeUnspecified = "ORDER_TYPE_UNSPECIFIED",
    Market = "MARKET"
}
/**
 * The execution type of this order.
 */
export type BasketOrderCreateOrderTypeOpen = OpenEnum<typeof BasketOrderCreateOrderType>;
/**
 * The side of this order.
 */
export declare enum BasketOrderCreateSide {
    SideUnspecified = "SIDE_UNSPECIFIED",
    Buy = "BUY",
    Sell = "SELL"
}
/**
 * The side of this order.
 */
export type BasketOrderCreateSideOpen = OpenEnum<typeof BasketOrderCreateSide>;
export declare enum BasketOrderCreateSpecialReportingInstructions {
    SpecialReportingInstructionsUnspecified = "SPECIAL_REPORTING_INSTRUCTIONS_UNSPECIFIED",
    Solicited = "SOLICITED",
    Unsolicited = "UNSOLICITED",
    RoundUp = "ROUND_UP"
}
export type BasketOrderCreateSpecialReportingInstructionsOpen = OpenEnum<typeof BasketOrderCreateSpecialReportingInstructions>;
/**
 * Must be the value "DAY". Regulatory requirements dictate that the system capture the intended time_in_force, which is why this a mandatory field.
 */
export declare enum BasketOrderCreateTimeInForce {
    TimeInForceUnspecified = "TIME_IN_FORCE_UNSPECIFIED",
    Day = "DAY"
}
/**
 * Must be the value "DAY". Regulatory requirements dictate that the system capture the intended time_in_force, which is why this a mandatory field.
 */
export type BasketOrderCreateTimeInForceOpen = OpenEnum<typeof BasketOrderCreateTimeInForce>;
/**
 * The message describing an order that has been added to a basket
 */
export type BasketOrderCreate = {
    /**
     * The identifier of the account transacting this order
     */
    accountId: string;
    /**
     * The type of the asset in this order
     */
    assetType: BasketOrderCreateAssetTypeOpen;
    /**
     * User-supplied unique order ID. Cannot be more than 40 characters long.
     */
    clientOrderId: string;
    /**
     * Time the order request was received by the client. Must be in the past.
     */
    clientOrderReceivedTime?: Date | null | undefined;
    /**
     * Defaults to "USD". Only "USD" is supported. Full list of currency codes is defined at: https://en.wikipedia.org/wiki/ISO_4217
     */
    currencyCode?: string | undefined;
    /**
     * Identifier of the asset (of the type specified in `identifier_type`).
     */
    identifier: string;
    /**
     * The identifier type of the asset being ordered. For Equities: only SYMBOL is supported For Mutual Funds: only SYMBOL and CUSIP are supported
     */
    identifierType: BasketOrderCreateIdentifierTypeOpen;
    /**
     * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal][] or Python's [decimal.Decimal][].
     *
     * @remarks
     *
     *  [BigDecimal]:
     *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
     *  [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
     */
    maxSellQuantity?: DecimalCreate | undefined;
    /**
     * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal][] or Python's [decimal.Decimal][].
     *
     * @remarks
     *
     *  [BigDecimal]:
     *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
     *  [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
     */
    notionalValue?: DecimalCreate | undefined;
    /**
     * The execution type of this order.
     */
    orderType: BasketOrderCreateOrderTypeOpen;
    /**
     * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal][] or Python's [decimal.Decimal][].
     *
     * @remarks
     *
     *  [BigDecimal]:
     *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
     *  [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
     */
    quantity?: DecimalCreate | undefined;
    /**
     * The side of this order.
     */
    side: BasketOrderCreateSideOpen;
    /**
     * Special Reporting Instructions to be applied to this order. Can include multiple Instructions.
     */
    specialReportingInstructions?: Array<BasketOrderCreateSpecialReportingInstructionsOpen> | undefined;
    /**
     * Must be the value "DAY". Regulatory requirements dictate that the system capture the intended time_in_force, which is why this a mandatory field.
     */
    timeInForce: BasketOrderCreateTimeInForceOpen;
};
/** @internal */
export declare const BasketOrderCreateAssetType$inboundSchema: z.ZodType<BasketOrderCreateAssetTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BasketOrderCreateAssetType$outboundSchema: z.ZodType<BasketOrderCreateAssetTypeOpen, z.ZodTypeDef, BasketOrderCreateAssetTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketOrderCreateAssetType$ {
    /** @deprecated use `BasketOrderCreateAssetType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketOrderCreateAssetTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketOrderCreateAssetType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketOrderCreateAssetTypeOpen, z.ZodTypeDef, BasketOrderCreateAssetTypeOpen>;
}
/** @internal */
export declare const BasketOrderCreateIdentifierType$inboundSchema: z.ZodType<BasketOrderCreateIdentifierTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BasketOrderCreateIdentifierType$outboundSchema: z.ZodType<BasketOrderCreateIdentifierTypeOpen, z.ZodTypeDef, BasketOrderCreateIdentifierTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketOrderCreateIdentifierType$ {
    /** @deprecated use `BasketOrderCreateIdentifierType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketOrderCreateIdentifierTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketOrderCreateIdentifierType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketOrderCreateIdentifierTypeOpen, z.ZodTypeDef, BasketOrderCreateIdentifierTypeOpen>;
}
/** @internal */
export declare const BasketOrderCreateOrderType$inboundSchema: z.ZodType<BasketOrderCreateOrderTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BasketOrderCreateOrderType$outboundSchema: z.ZodType<BasketOrderCreateOrderTypeOpen, z.ZodTypeDef, BasketOrderCreateOrderTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketOrderCreateOrderType$ {
    /** @deprecated use `BasketOrderCreateOrderType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketOrderCreateOrderTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketOrderCreateOrderType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketOrderCreateOrderTypeOpen, z.ZodTypeDef, BasketOrderCreateOrderTypeOpen>;
}
/** @internal */
export declare const BasketOrderCreateSide$inboundSchema: z.ZodType<BasketOrderCreateSideOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BasketOrderCreateSide$outboundSchema: z.ZodType<BasketOrderCreateSideOpen, z.ZodTypeDef, BasketOrderCreateSideOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketOrderCreateSide$ {
    /** @deprecated use `BasketOrderCreateSide$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketOrderCreateSideOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketOrderCreateSide$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketOrderCreateSideOpen, z.ZodTypeDef, BasketOrderCreateSideOpen>;
}
/** @internal */
export declare const BasketOrderCreateSpecialReportingInstructions$inboundSchema: z.ZodType<BasketOrderCreateSpecialReportingInstructionsOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BasketOrderCreateSpecialReportingInstructions$outboundSchema: z.ZodType<BasketOrderCreateSpecialReportingInstructionsOpen, z.ZodTypeDef, BasketOrderCreateSpecialReportingInstructionsOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketOrderCreateSpecialReportingInstructions$ {
    /** @deprecated use `BasketOrderCreateSpecialReportingInstructions$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketOrderCreateSpecialReportingInstructionsOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketOrderCreateSpecialReportingInstructions$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketOrderCreateSpecialReportingInstructionsOpen, z.ZodTypeDef, BasketOrderCreateSpecialReportingInstructionsOpen>;
}
/** @internal */
export declare const BasketOrderCreateTimeInForce$inboundSchema: z.ZodType<BasketOrderCreateTimeInForceOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BasketOrderCreateTimeInForce$outboundSchema: z.ZodType<BasketOrderCreateTimeInForceOpen, z.ZodTypeDef, BasketOrderCreateTimeInForceOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketOrderCreateTimeInForce$ {
    /** @deprecated use `BasketOrderCreateTimeInForce$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketOrderCreateTimeInForceOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketOrderCreateTimeInForce$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketOrderCreateTimeInForceOpen, z.ZodTypeDef, BasketOrderCreateTimeInForceOpen>;
}
/** @internal */
export declare const BasketOrderCreate$inboundSchema: z.ZodType<BasketOrderCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type BasketOrderCreate$Outbound = {
    account_id: string;
    asset_type: string;
    client_order_id: string;
    client_order_received_time?: string | null | undefined;
    currency_code?: string | undefined;
    identifier: string;
    identifier_type: string;
    max_sell_quantity?: DecimalCreate$Outbound | undefined;
    notional_value?: DecimalCreate$Outbound | undefined;
    order_type: string;
    quantity?: DecimalCreate$Outbound | undefined;
    side: string;
    special_reporting_instructions?: Array<string> | undefined;
    time_in_force: string;
};
/** @internal */
export declare const BasketOrderCreate$outboundSchema: z.ZodType<BasketOrderCreate$Outbound, z.ZodTypeDef, BasketOrderCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketOrderCreate$ {
    /** @deprecated use `BasketOrderCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketOrderCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketOrderCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketOrderCreate$Outbound, z.ZodTypeDef, BasketOrderCreate>;
    /** @deprecated use `BasketOrderCreate$Outbound` instead. */
    type Outbound = BasketOrderCreate$Outbound;
}
export declare function basketOrderCreateToJSON(basketOrderCreate: BasketOrderCreate): string;
export declare function basketOrderCreateFromJSON(jsonString: string): SafeParseResult<BasketOrderCreate, SDKValidationError>;
//# sourceMappingURL=basketordercreate.d.ts.map