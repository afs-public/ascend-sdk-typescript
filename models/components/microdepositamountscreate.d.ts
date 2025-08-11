import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DecimalCreate, DecimalCreate$Outbound } from "./decimalcreate.js";
/**
 * The micro deposits sent to verify a pending bank relationship. FOR TESTING ONLY!
 */
export type MicroDepositAmountsCreate = {
    /**
     * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal][] or Python's [decimal.Decimal][].
     *
     * @remarks
     *
     *  [BigDecimal]:
     *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
     *  [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
     */
    amount1: DecimalCreate;
    /**
     * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal][] or Python's [decimal.Decimal][].
     *
     * @remarks
     *
     *  [BigDecimal]:
     *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
     *  [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
     */
    amount2: DecimalCreate;
};
/** @internal */
export declare const MicroDepositAmountsCreate$inboundSchema: z.ZodType<MicroDepositAmountsCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type MicroDepositAmountsCreate$Outbound = {
    amount1: DecimalCreate$Outbound;
    amount2: DecimalCreate$Outbound;
};
/** @internal */
export declare const MicroDepositAmountsCreate$outboundSchema: z.ZodType<MicroDepositAmountsCreate$Outbound, z.ZodTypeDef, MicroDepositAmountsCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MicroDepositAmountsCreate$ {
    /** @deprecated use `MicroDepositAmountsCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<MicroDepositAmountsCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `MicroDepositAmountsCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<MicroDepositAmountsCreate$Outbound, z.ZodTypeDef, MicroDepositAmountsCreate>;
    /** @deprecated use `MicroDepositAmountsCreate$Outbound` instead. */
    type Outbound = MicroDepositAmountsCreate$Outbound;
}
export declare function microDepositAmountsCreateToJSON(microDepositAmountsCreate: MicroDepositAmountsCreate): string;
export declare function microDepositAmountsCreateFromJSON(jsonString: string): SafeParseResult<MicroDepositAmountsCreate, SDKValidationError>;
//# sourceMappingURL=microdepositamountscreate.d.ts.map