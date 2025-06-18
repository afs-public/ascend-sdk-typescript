import * as z from "zod";
import { DecimalCreate, DecimalCreate$Outbound } from "./decimalcreate.js";
import { SchedulePropertiesCreate, SchedulePropertiesCreate$Outbound } from "./schedulepropertiescreate.js";
/**
 * Details of deposit schedule transfers
 */
export type DepositScheduleDetailsCreate = {
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
     * External identifier supplied by the API caller. Each request must have a unique pairing of client_schedule_id and account
     */
    clientScheduleId: string;
    /**
     * Properties common to all transfer schedules
     */
    scheduleProperties: SchedulePropertiesCreate;
};
/** @internal */
export declare const DepositScheduleDetailsCreate$inboundSchema: z.ZodType<DepositScheduleDetailsCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type DepositScheduleDetailsCreate$Outbound = {
    amount: DecimalCreate$Outbound;
    client_schedule_id: string;
    schedule_properties: SchedulePropertiesCreate$Outbound;
};
/** @internal */
export declare const DepositScheduleDetailsCreate$outboundSchema: z.ZodType<DepositScheduleDetailsCreate$Outbound, z.ZodTypeDef, DepositScheduleDetailsCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DepositScheduleDetailsCreate$ {
    /** @deprecated use `DepositScheduleDetailsCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DepositScheduleDetailsCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `DepositScheduleDetailsCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DepositScheduleDetailsCreate$Outbound, z.ZodTypeDef, DepositScheduleDetailsCreate>;
    /** @deprecated use `DepositScheduleDetailsCreate$Outbound` instead. */
    type Outbound = DepositScheduleDetailsCreate$Outbound;
}
//# sourceMappingURL=depositscheduledetailscreate.d.ts.map