import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DecimalCreate, DecimalCreate$Outbound } from "./decimalcreate.js";
import { SchedulePropertiesCreate, SchedulePropertiesCreate$Outbound } from "./schedulepropertiescreate.js";
/**
 * Details of withdrawal schedule transfers
 */
export type WithdrawalScheduleDetailsCreate = {
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
     * External identifier supplied by the API caller. Each request must have a unique pairing of client_schedule_id and account
     */
    clientScheduleId: string;
    /**
     * Flag to indicate a full disbursement transfer (mutually exclusive with 'amount')
     */
    fullDisbursement?: boolean | undefined;
    /**
     * Properties common to all transfer schedules
     */
    scheduleProperties: SchedulePropertiesCreate;
};
/** @internal */
export declare const WithdrawalScheduleDetailsCreate$inboundSchema: z.ZodType<WithdrawalScheduleDetailsCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type WithdrawalScheduleDetailsCreate$Outbound = {
    amount?: DecimalCreate$Outbound | undefined;
    client_schedule_id: string;
    full_disbursement?: boolean | undefined;
    schedule_properties: SchedulePropertiesCreate$Outbound;
};
/** @internal */
export declare const WithdrawalScheduleDetailsCreate$outboundSchema: z.ZodType<WithdrawalScheduleDetailsCreate$Outbound, z.ZodTypeDef, WithdrawalScheduleDetailsCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WithdrawalScheduleDetailsCreate$ {
    /** @deprecated use `WithdrawalScheduleDetailsCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WithdrawalScheduleDetailsCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `WithdrawalScheduleDetailsCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WithdrawalScheduleDetailsCreate$Outbound, z.ZodTypeDef, WithdrawalScheduleDetailsCreate>;
    /** @deprecated use `WithdrawalScheduleDetailsCreate$Outbound` instead. */
    type Outbound = WithdrawalScheduleDetailsCreate$Outbound;
}
export declare function withdrawalScheduleDetailsCreateToJSON(withdrawalScheduleDetailsCreate: WithdrawalScheduleDetailsCreate): string;
export declare function withdrawalScheduleDetailsCreateFromJSON(jsonString: string): SafeParseResult<WithdrawalScheduleDetailsCreate, SDKValidationError>;
//# sourceMappingURL=withdrawalscheduledetailscreate.d.ts.map