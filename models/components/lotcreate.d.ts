import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DateCreate, DateCreate$Outbound } from "./datecreate.js";
import { DecimalCreate, DecimalCreate$Outbound } from "./decimalcreate.js";
/**
 * Deprecated; use the price field instead
 *
 * @deprecated class: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export type Money = {
    currencyCode?: string | undefined;
    /**
     * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal][] or Python's [decimal.Decimal][].
     *
     * @remarks
     *
     *  [BigDecimal]:
     *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
     *  [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
     */
    price?: DecimalCreate | undefined;
};
/**
 * For use in specifying lot matching instructions on a trade
 */
export type LotCreate = {
    /**
     * User-specified ID for the lot
     */
    id?: string | undefined;
    /**
     * Deprecated; use the price field instead
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    money?: Money | undefined;
    /**
     * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal][] or Python's [decimal.Decimal][].
     *
     * @remarks
     *
     *  [BigDecimal]:
     *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
     *  [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
     */
    price?: DecimalCreate | undefined;
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
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following:
     *
     * @remarks
     *
     *  * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date
     *
     *  Related types are [google.type.TimeOfDay][google.type.TimeOfDay] and `google.protobuf.Timestamp`.
     */
    tradeDate?: DateCreate | undefined;
};
/** @internal */
export declare const Money$inboundSchema: z.ZodType<Money, z.ZodTypeDef, unknown>;
/** @internal */
export type Money$Outbound = {
    currency_code?: string | undefined;
    price?: DecimalCreate$Outbound | undefined;
};
/** @internal */
export declare const Money$outboundSchema: z.ZodType<Money$Outbound, z.ZodTypeDef, Money>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Money$ {
    /** @deprecated use `Money$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Money, z.ZodTypeDef, unknown>;
    /** @deprecated use `Money$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Money$Outbound, z.ZodTypeDef, Money>;
    /** @deprecated use `Money$Outbound` instead. */
    type Outbound = Money$Outbound;
}
export declare function moneyToJSON(money: Money): string;
export declare function moneyFromJSON(jsonString: string): SafeParseResult<Money, SDKValidationError>;
/** @internal */
export declare const LotCreate$inboundSchema: z.ZodType<LotCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type LotCreate$Outbound = {
    id?: string | undefined;
    money?: Money$Outbound | undefined;
    price?: DecimalCreate$Outbound | undefined;
    quantity?: DecimalCreate$Outbound | undefined;
    trade_date?: DateCreate$Outbound | undefined;
};
/** @internal */
export declare const LotCreate$outboundSchema: z.ZodType<LotCreate$Outbound, z.ZodTypeDef, LotCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LotCreate$ {
    /** @deprecated use `LotCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LotCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `LotCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LotCreate$Outbound, z.ZodTypeDef, LotCreate>;
    /** @deprecated use `LotCreate$Outbound` instead. */
    type Outbound = LotCreate$Outbound;
}
export declare function lotCreateToJSON(lotCreate: LotCreate): string;
export declare function lotCreateFromJSON(jsonString: string): SafeParseResult<LotCreate, SDKValidationError>;
//# sourceMappingURL=lotcreate.d.ts.map