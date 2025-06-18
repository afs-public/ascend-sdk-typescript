import * as z from "zod";
import { DateCreate, DateCreate$Outbound } from "./datecreate.js";
import { DecimalCreate, DecimalCreate$Outbound } from "./decimalcreate.js";
/**
 * Letter of Intent (LOI). An LOI allows investors to receive sales charge discounts based on a commitment to buy a specified monetary amount of shares over a period of time, usually 13 months.
 */
export type LetterOfIntentCreate = {
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
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following:
     *
     * @remarks
     *
     *  * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date
     *
     *  Related types are [google.type.TimeOfDay][google.type.TimeOfDay] and `google.protobuf.Timestamp`.
     */
    periodStartDate: DateCreate;
};
/** @internal */
export declare const LetterOfIntentCreate$inboundSchema: z.ZodType<LetterOfIntentCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type LetterOfIntentCreate$Outbound = {
    amount: DecimalCreate$Outbound;
    period_start_date: DateCreate$Outbound;
};
/** @internal */
export declare const LetterOfIntentCreate$outboundSchema: z.ZodType<LetterOfIntentCreate$Outbound, z.ZodTypeDef, LetterOfIntentCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LetterOfIntentCreate$ {
    /** @deprecated use `LetterOfIntentCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LetterOfIntentCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `LetterOfIntentCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LetterOfIntentCreate$Outbound, z.ZodTypeDef, LetterOfIntentCreate>;
    /** @deprecated use `LetterOfIntentCreate$Outbound` instead. */
    type Outbound = LetterOfIntentCreate$Outbound;
}
//# sourceMappingURL=letterofintentcreate.d.ts.map