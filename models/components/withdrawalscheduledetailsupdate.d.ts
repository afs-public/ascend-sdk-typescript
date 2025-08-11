import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DecimalUpdate, DecimalUpdate$Outbound } from "./decimalupdate.js";
/**
 * Details of withdrawal schedule transfers
 */
export type WithdrawalScheduleDetailsUpdate = {
    /**
     * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal][] or Python's [decimal.Decimal][].
     *
     * @remarks
     *
     *  [BigDecimal]:
     *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
     *  [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
     */
    amount?: DecimalUpdate | undefined;
};
/** @internal */
export declare const WithdrawalScheduleDetailsUpdate$inboundSchema: z.ZodType<WithdrawalScheduleDetailsUpdate, z.ZodTypeDef, unknown>;
/** @internal */
export type WithdrawalScheduleDetailsUpdate$Outbound = {
    amount?: DecimalUpdate$Outbound | undefined;
};
/** @internal */
export declare const WithdrawalScheduleDetailsUpdate$outboundSchema: z.ZodType<WithdrawalScheduleDetailsUpdate$Outbound, z.ZodTypeDef, WithdrawalScheduleDetailsUpdate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WithdrawalScheduleDetailsUpdate$ {
    /** @deprecated use `WithdrawalScheduleDetailsUpdate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WithdrawalScheduleDetailsUpdate, z.ZodTypeDef, unknown>;
    /** @deprecated use `WithdrawalScheduleDetailsUpdate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WithdrawalScheduleDetailsUpdate$Outbound, z.ZodTypeDef, WithdrawalScheduleDetailsUpdate>;
    /** @deprecated use `WithdrawalScheduleDetailsUpdate$Outbound` instead. */
    type Outbound = WithdrawalScheduleDetailsUpdate$Outbound;
}
export declare function withdrawalScheduleDetailsUpdateToJSON(withdrawalScheduleDetailsUpdate: WithdrawalScheduleDetailsUpdate): string;
export declare function withdrawalScheduleDetailsUpdateFromJSON(jsonString: string): SafeParseResult<WithdrawalScheduleDetailsUpdate, SDKValidationError>;
//# sourceMappingURL=withdrawalscheduledetailsupdate.d.ts.map