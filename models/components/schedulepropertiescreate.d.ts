import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DateCreate, DateCreate$Outbound } from "./datecreate.js";
/**
 * The time unit used to calculate the interval between transfers. The time period between transfers in a scheduled series is the unit of time times the multiplier
 */
export declare enum TimeUnit {
    Day = "DAY",
    Week = "WEEK",
    Month = "MONTH"
}
/**
 * The time unit used to calculate the interval between transfers. The time period between transfers in a scheduled series is the unit of time times the multiplier
 */
export type TimeUnitOpen = OpenEnum<typeof TimeUnit>;
/**
 * Properties common to all transfer schedules
 */
export type SchedulePropertiesCreate = {
    /**
     * The number of occurrences (empty or 0 indicates unlimited occurrences)
     */
    occurrences?: number | undefined;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following:
     *
     * @remarks
     *
     *  * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date
     *
     *  Related types are [google.type.TimeOfDay][google.type.TimeOfDay] and `google.protobuf.Timestamp`.
     */
    startDate: DateCreate;
    /**
     * The time unit used to calculate the interval between transfers. The time period between transfers in a scheduled series is the unit of time times the multiplier
     */
    timeUnit: TimeUnitOpen;
    /**
     * The multiplier used to determine the length of the interval between transfers. The time period between transfers in a scheduled series is the unit of time times the multiplier
     */
    unitMultiplier: number;
};
/** @internal */
export declare const TimeUnit$inboundSchema: z.ZodType<TimeUnitOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TimeUnit$outboundSchema: z.ZodType<TimeUnitOpen, z.ZodTypeDef, TimeUnitOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TimeUnit$ {
    /** @deprecated use `TimeUnit$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TimeUnitOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TimeUnit$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TimeUnitOpen, z.ZodTypeDef, TimeUnitOpen>;
}
/** @internal */
export declare const SchedulePropertiesCreate$inboundSchema: z.ZodType<SchedulePropertiesCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type SchedulePropertiesCreate$Outbound = {
    occurrences?: number | undefined;
    start_date: DateCreate$Outbound;
    time_unit: string;
    unit_multiplier: number;
};
/** @internal */
export declare const SchedulePropertiesCreate$outboundSchema: z.ZodType<SchedulePropertiesCreate$Outbound, z.ZodTypeDef, SchedulePropertiesCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SchedulePropertiesCreate$ {
    /** @deprecated use `SchedulePropertiesCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SchedulePropertiesCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `SchedulePropertiesCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SchedulePropertiesCreate$Outbound, z.ZodTypeDef, SchedulePropertiesCreate>;
    /** @deprecated use `SchedulePropertiesCreate$Outbound` instead. */
    type Outbound = SchedulePropertiesCreate$Outbound;
}
export declare function schedulePropertiesCreateToJSON(schedulePropertiesCreate: SchedulePropertiesCreate): string;
export declare function schedulePropertiesCreateFromJSON(jsonString: string): SafeParseResult<SchedulePropertiesCreate, SDKValidationError>;
//# sourceMappingURL=schedulepropertiescreate.d.ts.map