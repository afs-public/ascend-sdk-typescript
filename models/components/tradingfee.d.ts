import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * The amount of the fee. This is a monetary value in the same currency as the order.
 */
export type TradingFeeAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The type of fee being specified. Only the type of "BROKER_FEE" is supported.
 */
export declare enum TradingFeeType {
    FeeTypeUnspecified = "FEE_TYPE_UNSPECIFIED",
    BrokerFee = "BROKER_FEE",
    ContractFee = "CONTRACT_FEE"
}
/**
 * The type of fee being specified. Only the type of "BROKER_FEE" is supported.
 */
export type TradingFeeTypeOpen = OpenEnum<typeof TradingFeeType>;
/**
 * A fee that applies to an order
 */
export type TradingFee = {
    /**
     * The amount of the fee. This is a monetary value in the same currency as the order.
     */
    amount?: TradingFeeAmount | null | undefined;
    /**
     * The type of fee being specified. Only the type of "BROKER_FEE" is supported.
     */
    type?: TradingFeeTypeOpen | undefined;
};
/** @internal */
export declare const TradingFeeAmount$inboundSchema: z.ZodType<TradingFeeAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type TradingFeeAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const TradingFeeAmount$outboundSchema: z.ZodType<TradingFeeAmount$Outbound, z.ZodTypeDef, TradingFeeAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TradingFeeAmount$ {
    /** @deprecated use `TradingFeeAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TradingFeeAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `TradingFeeAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TradingFeeAmount$Outbound, z.ZodTypeDef, TradingFeeAmount>;
    /** @deprecated use `TradingFeeAmount$Outbound` instead. */
    type Outbound = TradingFeeAmount$Outbound;
}
/** @internal */
export declare const TradingFeeType$inboundSchema: z.ZodType<TradingFeeTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TradingFeeType$outboundSchema: z.ZodType<TradingFeeTypeOpen, z.ZodTypeDef, TradingFeeTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TradingFeeType$ {
    /** @deprecated use `TradingFeeType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TradingFeeTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TradingFeeType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TradingFeeTypeOpen, z.ZodTypeDef, TradingFeeTypeOpen>;
}
/** @internal */
export declare const TradingFee$inboundSchema: z.ZodType<TradingFee, z.ZodTypeDef, unknown>;
/** @internal */
export type TradingFee$Outbound = {
    amount?: TradingFeeAmount$Outbound | null | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const TradingFee$outboundSchema: z.ZodType<TradingFee$Outbound, z.ZodTypeDef, TradingFee>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TradingFee$ {
    /** @deprecated use `TradingFee$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TradingFee, z.ZodTypeDef, unknown>;
    /** @deprecated use `TradingFee$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TradingFee$Outbound, z.ZodTypeDef, TradingFee>;
    /** @deprecated use `TradingFee$Outbound` instead. */
    type Outbound = TradingFee$Outbound;
}
//# sourceMappingURL=tradingfee.d.ts.map