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
export type DecimalCreate = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/** @internal */
export declare const DecimalCreate$inboundSchema: z.ZodType<DecimalCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type DecimalCreate$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const DecimalCreate$outboundSchema: z.ZodType<DecimalCreate$Outbound, z.ZodTypeDef, DecimalCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DecimalCreate$ {
    /** @deprecated use `DecimalCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DecimalCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `DecimalCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DecimalCreate$Outbound, z.ZodTypeDef, DecimalCreate>;
    /** @deprecated use `DecimalCreate$Outbound` instead. */
    type Outbound = DecimalCreate$Outbound;
}
export declare function decimalCreateToJSON(decimalCreate: DecimalCreate): string;
export declare function decimalCreateFromJSON(jsonString: string): SafeParseResult<DecimalCreate, SDKValidationError>;
//# sourceMappingURL=decimalcreate.d.ts.map