import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The percentage yield.
 */
export type Percent = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The type of yield.
 */
export declare enum BondYieldYieldType {
    YieldTypeUnspecified = "YIELD_TYPE_UNSPECIFIED",
    YieldToCall = "YIELD_TO_CALL",
    YieldToMaturity = "YIELD_TO_MATURITY",
    YieldToPut = "YIELD_TO_PUT",
    YieldToWorst = "YIELD_TO_WORST"
}
/**
 * The type of yield.
 */
export type BondYieldYieldTypeOpen = OpenEnum<typeof BondYieldYieldType>;
/**
 * A percentage yield
 */
export type BondYield = {
    /**
     * The percentage yield.
     */
    percent?: Percent | null | undefined;
    /**
     * The type of yield.
     */
    yieldType?: BondYieldYieldTypeOpen | undefined;
};
/** @internal */
export declare const Percent$inboundSchema: z.ZodType<Percent, z.ZodTypeDef, unknown>;
/** @internal */
export type Percent$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const Percent$outboundSchema: z.ZodType<Percent$Outbound, z.ZodTypeDef, Percent>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Percent$ {
    /** @deprecated use `Percent$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Percent, z.ZodTypeDef, unknown>;
    /** @deprecated use `Percent$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Percent$Outbound, z.ZodTypeDef, Percent>;
    /** @deprecated use `Percent$Outbound` instead. */
    type Outbound = Percent$Outbound;
}
export declare function percentToJSON(percent: Percent): string;
export declare function percentFromJSON(jsonString: string): SafeParseResult<Percent, SDKValidationError>;
/** @internal */
export declare const BondYieldYieldType$inboundSchema: z.ZodType<BondYieldYieldTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BondYieldYieldType$outboundSchema: z.ZodType<BondYieldYieldTypeOpen, z.ZodTypeDef, BondYieldYieldTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BondYieldYieldType$ {
    /** @deprecated use `BondYieldYieldType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BondYieldYieldTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BondYieldYieldType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BondYieldYieldTypeOpen, z.ZodTypeDef, BondYieldYieldTypeOpen>;
}
/** @internal */
export declare const BondYield$inboundSchema: z.ZodType<BondYield, z.ZodTypeDef, unknown>;
/** @internal */
export type BondYield$Outbound = {
    percent?: Percent$Outbound | null | undefined;
    yield_type?: string | undefined;
};
/** @internal */
export declare const BondYield$outboundSchema: z.ZodType<BondYield$Outbound, z.ZodTypeDef, BondYield>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BondYield$ {
    /** @deprecated use `BondYield$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BondYield, z.ZodTypeDef, unknown>;
    /** @deprecated use `BondYield$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BondYield$Outbound, z.ZodTypeDef, BondYield>;
    /** @deprecated use `BondYield$Outbound` instead. */
    type Outbound = BondYield$Outbound;
}
export declare function bondYieldToJSON(bondYield: BondYield): string;
export declare function bondYieldFromJSON(jsonString: string): SafeParseResult<BondYield, SDKValidationError>;
//# sourceMappingURL=bondyield.d.ts.map