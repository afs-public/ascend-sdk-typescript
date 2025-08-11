import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following:
 *
 * @remarks
 *
 *  * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date
 *
 *  Related types are [google.type.TimeOfDay][google.type.TimeOfDay] and `google.protobuf.Timestamp`.
 */
export type DateCreate = {
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
/** @internal */
export declare const DateCreate$inboundSchema: z.ZodType<DateCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type DateCreate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const DateCreate$outboundSchema: z.ZodType<DateCreate$Outbound, z.ZodTypeDef, DateCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DateCreate$ {
    /** @deprecated use `DateCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DateCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `DateCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DateCreate$Outbound, z.ZodTypeDef, DateCreate>;
    /** @deprecated use `DateCreate$Outbound` instead. */
    type Outbound = DateCreate$Outbound;
}
export declare function dateCreateToJSON(dateCreate: DateCreate): string;
export declare function dateCreateFromJSON(jsonString: string): SafeParseResult<DateCreate, SDKValidationError>;
//# sourceMappingURL=datecreate.d.ts.map