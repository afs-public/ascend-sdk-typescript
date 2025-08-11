import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DecimalCreate, DecimalCreate$Outbound } from "./decimalcreate.js";
/**
 * The type of fee
 */
export declare enum BookingFeeCreateType {
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
export type BookingFeeCreateTypeOpen = OpenEnum<typeof BookingFeeCreateType>;
/**
 * Fee message includes both fee type as well as the fee amount
 */
export type BookingFeeCreate = {
    /**
     * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal][] or Python's [decimal.Decimal][].
     *
     * @remarks
     *
     *  [BigDecimal]:
     *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
     *  [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
     */
    amount?: DecimalCreate | undefined;
    /**
     * Indicates whether to explicitly suppress this fee type. If the trade would normally calculate fees (e.g., for TRADE_ACTIVITY), the client can add a fee with this boolean value set to true, and the Booking Service will not calculate or assess that fee on the trade.
     */
    suppressFee?: boolean | undefined;
    /**
     * The type of fee
     */
    type?: BookingFeeCreateTypeOpen | undefined;
};
/** @internal */
export declare const BookingFeeCreateType$inboundSchema: z.ZodType<BookingFeeCreateTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BookingFeeCreateType$outboundSchema: z.ZodType<BookingFeeCreateTypeOpen, z.ZodTypeDef, BookingFeeCreateTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingFeeCreateType$ {
    /** @deprecated use `BookingFeeCreateType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingFeeCreateTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingFeeCreateType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingFeeCreateTypeOpen, z.ZodTypeDef, BookingFeeCreateTypeOpen>;
}
/** @internal */
export declare const BookingFeeCreate$inboundSchema: z.ZodType<BookingFeeCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type BookingFeeCreate$Outbound = {
    amount?: DecimalCreate$Outbound | undefined;
    suppress_fee?: boolean | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const BookingFeeCreate$outboundSchema: z.ZodType<BookingFeeCreate$Outbound, z.ZodTypeDef, BookingFeeCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingFeeCreate$ {
    /** @deprecated use `BookingFeeCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingFeeCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingFeeCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingFeeCreate$Outbound, z.ZodTypeDef, BookingFeeCreate>;
    /** @deprecated use `BookingFeeCreate$Outbound` instead. */
    type Outbound = BookingFeeCreate$Outbound;
}
export declare function bookingFeeCreateToJSON(bookingFeeCreate: BookingFeeCreate): string;
export declare function bookingFeeCreateFromJSON(jsonString: string): SafeParseResult<BookingFeeCreate, SDKValidationError>;
//# sourceMappingURL=bookingfeecreate.d.ts.map