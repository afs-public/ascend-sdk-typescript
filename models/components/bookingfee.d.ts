import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * The fee amount. Not required if the fee is suppressed
 */
export type BookingFeeAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The type of fee
 */
export declare enum BookingFeeType {
    FeeTypeUnspecified = "FEE_TYPE_UNSPECIFIED",
    ClientClearing = "CLIENT_CLEARING",
    Liquidity = "LIQUIDITY",
    TradeActivity = "TRADE_ACTIVITY",
    FinancialTransactionTax = "FINANCIAL_TRANSACTION_TAX",
    IndexOptionFee = "INDEX_OPTION_FEE",
    SecFee = "SEC_FEE",
    OptionsRegulatory = "OPTIONS_REGULATORY",
    GeneralPurposeFee = "GENERAL_PURPOSE_FEE",
    BrokerFee = "BROKER_FEE",
    ContractFee = "CONTRACT_FEE",
    OccFee = "OCC_FEE"
}
/**
 * The type of fee
 */
export type BookingFeeTypeOpen = OpenEnum<typeof BookingFeeType>;
/**
 * Fee message includes both fee type as well as the fee amount
 */
export type BookingFee = {
    /**
     * The fee amount. Not required if the fee is suppressed
     */
    amount?: BookingFeeAmount | null | undefined;
    /**
     * Indicates whether to explicitly suppress this fee type. If the trade would normally calculate fees (e.g., for TRADE_ACTIVITY), the client can add a fee with this boolean value set to true, and the Booking Service will not calculate or assess that fee on the trade.
     */
    suppressFee?: boolean | undefined;
    /**
     * The type of fee
     */
    type?: BookingFeeTypeOpen | undefined;
};
/** @internal */
export declare const BookingFeeAmount$inboundSchema: z.ZodType<BookingFeeAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type BookingFeeAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const BookingFeeAmount$outboundSchema: z.ZodType<BookingFeeAmount$Outbound, z.ZodTypeDef, BookingFeeAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingFeeAmount$ {
    /** @deprecated use `BookingFeeAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingFeeAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingFeeAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingFeeAmount$Outbound, z.ZodTypeDef, BookingFeeAmount>;
    /** @deprecated use `BookingFeeAmount$Outbound` instead. */
    type Outbound = BookingFeeAmount$Outbound;
}
/** @internal */
export declare const BookingFeeType$inboundSchema: z.ZodType<BookingFeeTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BookingFeeType$outboundSchema: z.ZodType<BookingFeeTypeOpen, z.ZodTypeDef, BookingFeeTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingFeeType$ {
    /** @deprecated use `BookingFeeType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingFeeTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingFeeType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingFeeTypeOpen, z.ZodTypeDef, BookingFeeTypeOpen>;
}
/** @internal */
export declare const BookingFee$inboundSchema: z.ZodType<BookingFee, z.ZodTypeDef, unknown>;
/** @internal */
export type BookingFee$Outbound = {
    amount?: BookingFeeAmount$Outbound | null | undefined;
    suppress_fee?: boolean | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const BookingFee$outboundSchema: z.ZodType<BookingFee$Outbound, z.ZodTypeDef, BookingFee>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingFee$ {
    /** @deprecated use `BookingFee$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingFee, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingFee$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingFee$Outbound, z.ZodTypeDef, BookingFee>;
    /** @deprecated use `BookingFee$Outbound` instead. */
    type Outbound = BookingFee$Outbound;
}
//# sourceMappingURL=bookingfee.d.ts.map