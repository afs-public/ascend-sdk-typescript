import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DecimalCreate, DecimalCreate$Outbound } from "./decimalcreate.js";
/**
 * The type of yield.
 */
export declare enum YieldType {
    YieldTypeUnspecified = "YIELD_TYPE_UNSPECIFIED",
    YieldToCall = "YIELD_TO_CALL",
    YieldToMaturity = "YIELD_TO_MATURITY",
    YieldToPut = "YIELD_TO_PUT",
    YieldToWorst = "YIELD_TO_WORST"
}
/**
 * The type of yield.
 */
export type YieldTypeOpen = OpenEnum<typeof YieldType>;
/**
 * A percentage yield
 */
export type BondYieldCreate = {
    /**
     * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal][] or Python's [decimal.Decimal][].
     *
     * @remarks
     *
     *  [BigDecimal]:
     *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
     *  [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
     */
    percent: DecimalCreate;
    /**
     * The type of yield.
     */
    yieldType: YieldTypeOpen;
};
/** @internal */
export declare const YieldType$inboundSchema: z.ZodType<YieldTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const YieldType$outboundSchema: z.ZodType<YieldTypeOpen, z.ZodTypeDef, YieldTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace YieldType$ {
    /** @deprecated use `YieldType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<YieldTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `YieldType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<YieldTypeOpen, z.ZodTypeDef, YieldTypeOpen>;
}
/** @internal */
export declare const BondYieldCreate$inboundSchema: z.ZodType<BondYieldCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type BondYieldCreate$Outbound = {
    percent: DecimalCreate$Outbound;
    yield_type: string;
};
/** @internal */
export declare const BondYieldCreate$outboundSchema: z.ZodType<BondYieldCreate$Outbound, z.ZodTypeDef, BondYieldCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BondYieldCreate$ {
    /** @deprecated use `BondYieldCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BondYieldCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `BondYieldCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BondYieldCreate$Outbound, z.ZodTypeDef, BondYieldCreate>;
    /** @deprecated use `BondYieldCreate$Outbound` instead. */
    type Outbound = BondYieldCreate$Outbound;
}
export declare function bondYieldCreateToJSON(bondYieldCreate: BondYieldCreate): string;
export declare function bondYieldCreateFromJSON(jsonString: string): SafeParseResult<BondYieldCreate, SDKValidationError>;
//# sourceMappingURL=bondyieldcreate.d.ts.map