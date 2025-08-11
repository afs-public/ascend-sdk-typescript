import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DecimalUpdate, DecimalUpdate$Outbound } from "./decimalupdate.js";
/**
 * Details of deposit schedule transfers
 */
export type DepositScheduleDetailsUpdate = {
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
export declare const DepositScheduleDetailsUpdate$inboundSchema: z.ZodType<DepositScheduleDetailsUpdate, z.ZodTypeDef, unknown>;
/** @internal */
export type DepositScheduleDetailsUpdate$Outbound = {
    amount?: DecimalUpdate$Outbound | undefined;
};
/** @internal */
export declare const DepositScheduleDetailsUpdate$outboundSchema: z.ZodType<DepositScheduleDetailsUpdate$Outbound, z.ZodTypeDef, DepositScheduleDetailsUpdate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DepositScheduleDetailsUpdate$ {
    /** @deprecated use `DepositScheduleDetailsUpdate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DepositScheduleDetailsUpdate, z.ZodTypeDef, unknown>;
    /** @deprecated use `DepositScheduleDetailsUpdate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DepositScheduleDetailsUpdate$Outbound, z.ZodTypeDef, DepositScheduleDetailsUpdate>;
    /** @deprecated use `DepositScheduleDetailsUpdate$Outbound` instead. */
    type Outbound = DepositScheduleDetailsUpdate$Outbound;
}
export declare function depositScheduleDetailsUpdateToJSON(depositScheduleDetailsUpdate: DepositScheduleDetailsUpdate): string;
export declare function depositScheduleDetailsUpdateFromJSON(jsonString: string): SafeParseResult<DepositScheduleDetailsUpdate, SDKValidationError>;
//# sourceMappingURL=depositscheduledetailsupdate.d.ts.map