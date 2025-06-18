import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * The yield percentage at which the transaction was effected
 */
export type YieldPercent = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Characterization of a yield percentage
 */
export declare enum YieldRecordYieldType {
    YieldTypeUnspecified = "YIELD_TYPE_UNSPECIFIED",
    YieldToCall = "YIELD_TO_CALL",
    YieldToMaturity = "YIELD_TO_MATURITY",
    YieldToPut = "YIELD_TO_PUT",
    YieldToWorst = "YIELD_TO_WORST"
}
/**
 * Characterization of a yield percentage
 */
export type YieldRecordYieldTypeOpen = OpenEnum<typeof YieldRecordYieldType>;
/**
 * Contains details about the yields associated with a trade in fixed income instruments
 */
export type YieldRecord = {
    /**
     * The yield percentage at which the transaction was effected
     */
    yieldPercent?: YieldPercent | null | undefined;
    /**
     * Characterization of a yield percentage
     */
    yieldType?: YieldRecordYieldTypeOpen | undefined;
};
/** @internal */
export declare const YieldPercent$inboundSchema: z.ZodType<YieldPercent, z.ZodTypeDef, unknown>;
/** @internal */
export type YieldPercent$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const YieldPercent$outboundSchema: z.ZodType<YieldPercent$Outbound, z.ZodTypeDef, YieldPercent>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace YieldPercent$ {
    /** @deprecated use `YieldPercent$inboundSchema` instead. */
    const inboundSchema: z.ZodType<YieldPercent, z.ZodTypeDef, unknown>;
    /** @deprecated use `YieldPercent$outboundSchema` instead. */
    const outboundSchema: z.ZodType<YieldPercent$Outbound, z.ZodTypeDef, YieldPercent>;
    /** @deprecated use `YieldPercent$Outbound` instead. */
    type Outbound = YieldPercent$Outbound;
}
/** @internal */
export declare const YieldRecordYieldType$inboundSchema: z.ZodType<YieldRecordYieldTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const YieldRecordYieldType$outboundSchema: z.ZodType<YieldRecordYieldTypeOpen, z.ZodTypeDef, YieldRecordYieldTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace YieldRecordYieldType$ {
    /** @deprecated use `YieldRecordYieldType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<YieldRecordYieldTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `YieldRecordYieldType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<YieldRecordYieldTypeOpen, z.ZodTypeDef, YieldRecordYieldTypeOpen>;
}
/** @internal */
export declare const YieldRecord$inboundSchema: z.ZodType<YieldRecord, z.ZodTypeDef, unknown>;
/** @internal */
export type YieldRecord$Outbound = {
    yield_percent?: YieldPercent$Outbound | null | undefined;
    yield_type?: string | undefined;
};
/** @internal */
export declare const YieldRecord$outboundSchema: z.ZodType<YieldRecord$Outbound, z.ZodTypeDef, YieldRecord>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace YieldRecord$ {
    /** @deprecated use `YieldRecord$inboundSchema` instead. */
    const inboundSchema: z.ZodType<YieldRecord, z.ZodTypeDef, unknown>;
    /** @deprecated use `YieldRecord$outboundSchema` instead. */
    const outboundSchema: z.ZodType<YieldRecord$Outbound, z.ZodTypeDef, YieldRecord>;
    /** @deprecated use `YieldRecord$Outbound` instead. */
    type Outbound = YieldRecord$Outbound;
}
//# sourceMappingURL=yieldrecord.d.ts.map