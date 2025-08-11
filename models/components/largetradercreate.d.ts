import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DateCreate, DateCreate$Outbound } from "./datecreate.js";
/**
 * A large trader.
 */
export type LargeTraderCreate = {
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following:
     *
     * @remarks
     *
     *  * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date
     *
     *  Related types are [google.type.TimeOfDay][google.type.TimeOfDay] and `google.protobuf.Timestamp`.
     */
    effectiveDate: DateCreate;
    /**
     * SEC-issued ID signifying the person/entity as a large trader; Required for CAIS regulatory reporting.
     */
    largeTraderId: string;
};
/** @internal */
export declare const LargeTraderCreate$inboundSchema: z.ZodType<LargeTraderCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type LargeTraderCreate$Outbound = {
    effective_date: DateCreate$Outbound;
    large_trader_id: string;
};
/** @internal */
export declare const LargeTraderCreate$outboundSchema: z.ZodType<LargeTraderCreate$Outbound, z.ZodTypeDef, LargeTraderCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LargeTraderCreate$ {
    /** @deprecated use `LargeTraderCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LargeTraderCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `LargeTraderCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LargeTraderCreate$Outbound, z.ZodTypeDef, LargeTraderCreate>;
    /** @deprecated use `LargeTraderCreate$Outbound` instead. */
    type Outbound = LargeTraderCreate$Outbound;
}
export declare function largeTraderCreateToJSON(largeTraderCreate: LargeTraderCreate): string;
export declare function largeTraderCreateFromJSON(jsonString: string): SafeParseResult<LargeTraderCreate, SDKValidationError>;
//# sourceMappingURL=largetradercreate.d.ts.map