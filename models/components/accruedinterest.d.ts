import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The amount of accrued interest associated with this activity
 */
export type AccruedInterestAmount1 = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
export type AccruedInterest = {
    /**
     * The amount of accrued interest associated with this activity
     */
    amount?: AccruedInterestAmount1 | null | undefined;
};
/** @internal */
export declare const AccruedInterestAmount1$inboundSchema: z.ZodType<AccruedInterestAmount1, z.ZodTypeDef, unknown>;
/** @internal */
export type AccruedInterestAmount1$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const AccruedInterestAmount1$outboundSchema: z.ZodType<AccruedInterestAmount1$Outbound, z.ZodTypeDef, AccruedInterestAmount1>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccruedInterestAmount1$ {
    /** @deprecated use `AccruedInterestAmount1$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccruedInterestAmount1, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccruedInterestAmount1$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccruedInterestAmount1$Outbound, z.ZodTypeDef, AccruedInterestAmount1>;
    /** @deprecated use `AccruedInterestAmount1$Outbound` instead. */
    type Outbound = AccruedInterestAmount1$Outbound;
}
export declare function accruedInterestAmount1ToJSON(accruedInterestAmount1: AccruedInterestAmount1): string;
export declare function accruedInterestAmount1FromJSON(jsonString: string): SafeParseResult<AccruedInterestAmount1, SDKValidationError>;
/** @internal */
export declare const AccruedInterest$inboundSchema: z.ZodType<AccruedInterest, z.ZodTypeDef, unknown>;
/** @internal */
export type AccruedInterest$Outbound = {
    amount?: AccruedInterestAmount1$Outbound | null | undefined;
};
/** @internal */
export declare const AccruedInterest$outboundSchema: z.ZodType<AccruedInterest$Outbound, z.ZodTypeDef, AccruedInterest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccruedInterest$ {
    /** @deprecated use `AccruedInterest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccruedInterest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccruedInterest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccruedInterest$Outbound, z.ZodTypeDef, AccruedInterest>;
    /** @deprecated use `AccruedInterest$Outbound` instead. */
    type Outbound = AccruedInterest$Outbound;
}
export declare function accruedInterestToJSON(accruedInterest: AccruedInterest): string;
export declare function accruedInterestFromJSON(jsonString: string): SafeParseResult<AccruedInterest, SDKValidationError>;
//# sourceMappingURL=accruedinterest.d.ts.map