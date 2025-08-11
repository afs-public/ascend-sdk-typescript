import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal][] or Python's [decimal.Decimal][].
 *
 * @remarks
 *
 *  [BigDecimal]:
 *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
 *  [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
 */
export type DecimalUpdate = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/** @internal */
export declare const DecimalUpdate$inboundSchema: z.ZodType<DecimalUpdate, z.ZodTypeDef, unknown>;
/** @internal */
export type DecimalUpdate$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const DecimalUpdate$outboundSchema: z.ZodType<DecimalUpdate$Outbound, z.ZodTypeDef, DecimalUpdate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DecimalUpdate$ {
    /** @deprecated use `DecimalUpdate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DecimalUpdate, z.ZodTypeDef, unknown>;
    /** @deprecated use `DecimalUpdate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DecimalUpdate$Outbound, z.ZodTypeDef, DecimalUpdate>;
    /** @deprecated use `DecimalUpdate$Outbound` instead. */
    type Outbound = DecimalUpdate$Outbound;
}
export declare function decimalUpdateToJSON(decimalUpdate: DecimalUpdate): string;
export declare function decimalUpdateFromJSON(jsonString: string): SafeParseResult<DecimalUpdate, SDKValidationError>;
//# sourceMappingURL=decimalupdate.d.ts.map