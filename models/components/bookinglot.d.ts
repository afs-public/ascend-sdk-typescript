import * as z from "zod";
/**
 * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal][] or Python's [decimal.Decimal][].
 *
 * @remarks
 *
 *  [BigDecimal]:
 *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
 *  [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
 */
export type BookingLotMoneyPrice = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Deprecated; use the price field instead
 *
 * @deprecated class: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export type BookingLotMoney = {
    currencyCode?: string | undefined;
    price?: BookingLotMoneyPrice | null | undefined;
};
/**
 * Lot price in the same currency as the trade price
 */
export type BookingLotPrice = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Lot quantity
 */
export type BookingLotQuantity = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Trade date for this lot specifically
 */
export type TradeDate = {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | undefined;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | undefined;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | undefined;
};
/**
 * For use in specifying lot matching instructions on a trade
 */
export type BookingLot = {
    /**
     * User-specified ID for the lot
     */
    id?: string | undefined;
    /**
     * Deprecated; use the price field instead
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    money?: BookingLotMoney | null | undefined;
    /**
     * Lot price in the same currency as the trade price
     */
    price?: BookingLotPrice | null | undefined;
    /**
     * Lot quantity
     */
    quantity?: BookingLotQuantity | null | undefined;
    /**
     * Trade date for this lot specifically
     */
    tradeDate?: TradeDate | null | undefined;
};
/** @internal */
export declare const BookingLotMoneyPrice$inboundSchema: z.ZodType<BookingLotMoneyPrice, z.ZodTypeDef, unknown>;
/** @internal */
export type BookingLotMoneyPrice$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const BookingLotMoneyPrice$outboundSchema: z.ZodType<BookingLotMoneyPrice$Outbound, z.ZodTypeDef, BookingLotMoneyPrice>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingLotMoneyPrice$ {
    /** @deprecated use `BookingLotMoneyPrice$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingLotMoneyPrice, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingLotMoneyPrice$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingLotMoneyPrice$Outbound, z.ZodTypeDef, BookingLotMoneyPrice>;
    /** @deprecated use `BookingLotMoneyPrice$Outbound` instead. */
    type Outbound = BookingLotMoneyPrice$Outbound;
}
/** @internal */
export declare const BookingLotMoney$inboundSchema: z.ZodType<BookingLotMoney, z.ZodTypeDef, unknown>;
/** @internal */
export type BookingLotMoney$Outbound = {
    currency_code?: string | undefined;
    price?: BookingLotMoneyPrice$Outbound | null | undefined;
};
/** @internal */
export declare const BookingLotMoney$outboundSchema: z.ZodType<BookingLotMoney$Outbound, z.ZodTypeDef, BookingLotMoney>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingLotMoney$ {
    /** @deprecated use `BookingLotMoney$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingLotMoney, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingLotMoney$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingLotMoney$Outbound, z.ZodTypeDef, BookingLotMoney>;
    /** @deprecated use `BookingLotMoney$Outbound` instead. */
    type Outbound = BookingLotMoney$Outbound;
}
/** @internal */
export declare const BookingLotPrice$inboundSchema: z.ZodType<BookingLotPrice, z.ZodTypeDef, unknown>;
/** @internal */
export type BookingLotPrice$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const BookingLotPrice$outboundSchema: z.ZodType<BookingLotPrice$Outbound, z.ZodTypeDef, BookingLotPrice>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingLotPrice$ {
    /** @deprecated use `BookingLotPrice$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingLotPrice, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingLotPrice$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingLotPrice$Outbound, z.ZodTypeDef, BookingLotPrice>;
    /** @deprecated use `BookingLotPrice$Outbound` instead. */
    type Outbound = BookingLotPrice$Outbound;
}
/** @internal */
export declare const BookingLotQuantity$inboundSchema: z.ZodType<BookingLotQuantity, z.ZodTypeDef, unknown>;
/** @internal */
export type BookingLotQuantity$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const BookingLotQuantity$outboundSchema: z.ZodType<BookingLotQuantity$Outbound, z.ZodTypeDef, BookingLotQuantity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingLotQuantity$ {
    /** @deprecated use `BookingLotQuantity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingLotQuantity, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingLotQuantity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingLotQuantity$Outbound, z.ZodTypeDef, BookingLotQuantity>;
    /** @deprecated use `BookingLotQuantity$Outbound` instead. */
    type Outbound = BookingLotQuantity$Outbound;
}
/** @internal */
export declare const TradeDate$inboundSchema: z.ZodType<TradeDate, z.ZodTypeDef, unknown>;
/** @internal */
export type TradeDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const TradeDate$outboundSchema: z.ZodType<TradeDate$Outbound, z.ZodTypeDef, TradeDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TradeDate$ {
    /** @deprecated use `TradeDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TradeDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `TradeDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TradeDate$Outbound, z.ZodTypeDef, TradeDate>;
    /** @deprecated use `TradeDate$Outbound` instead. */
    type Outbound = TradeDate$Outbound;
}
/** @internal */
export declare const BookingLot$inboundSchema: z.ZodType<BookingLot, z.ZodTypeDef, unknown>;
/** @internal */
export type BookingLot$Outbound = {
    id?: string | undefined;
    money?: BookingLotMoney$Outbound | null | undefined;
    price?: BookingLotPrice$Outbound | null | undefined;
    quantity?: BookingLotQuantity$Outbound | null | undefined;
    trade_date?: TradeDate$Outbound | null | undefined;
};
/** @internal */
export declare const BookingLot$outboundSchema: z.ZodType<BookingLot$Outbound, z.ZodTypeDef, BookingLot>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingLot$ {
    /** @deprecated use `BookingLot$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingLot, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingLot$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingLot$Outbound, z.ZodTypeDef, BookingLot>;
    /** @deprecated use `BookingLot$Outbound` instead. */
    type Outbound = BookingLot$Outbound;
}
//# sourceMappingURL=bookinglot.d.ts.map