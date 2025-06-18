import * as z from "zod";
import { DateUpdate, DateUpdate$Outbound } from "./dateupdate.js";
/**
 * A large trader.
 */
export type LargeTraderUpdate = {
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following:
     *
     * @remarks
     *
     *  * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date
     *
     *  Related types are [google.type.TimeOfDay][google.type.TimeOfDay] and `google.protobuf.Timestamp`.
     */
    effectiveDate?: DateUpdate | undefined;
    /**
     * SEC-issued ID signifying the person/entity as a large trader; Required for CAIS regulatory reporting.
     */
    largeTraderId?: string | undefined;
};
/** @internal */
export declare const LargeTraderUpdate$inboundSchema: z.ZodType<LargeTraderUpdate, z.ZodTypeDef, unknown>;
/** @internal */
export type LargeTraderUpdate$Outbound = {
    effective_date?: DateUpdate$Outbound | undefined;
    large_trader_id?: string | undefined;
};
/** @internal */
export declare const LargeTraderUpdate$outboundSchema: z.ZodType<LargeTraderUpdate$Outbound, z.ZodTypeDef, LargeTraderUpdate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LargeTraderUpdate$ {
    /** @deprecated use `LargeTraderUpdate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LargeTraderUpdate, z.ZodTypeDef, unknown>;
    /** @deprecated use `LargeTraderUpdate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LargeTraderUpdate$Outbound, z.ZodTypeDef, LargeTraderUpdate>;
    /** @deprecated use `LargeTraderUpdate$Outbound` instead. */
    type Outbound = LargeTraderUpdate$Outbound;
}
//# sourceMappingURL=largetraderupdate.d.ts.map