import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DecimalCreate, DecimalCreate$Outbound } from "./decimalcreate.js";
/**
 * Rights of Accumulation (ROA). An ROA allows an investor to aggregate their own fund shares with the holdings of certain related parties toward achieving the investment thresholds at which sales charge discounts become available.
 */
export type RightsOfAccumulationCreate = {
    /**
     * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal][] or Python's [decimal.Decimal][].
     *
     * @remarks
     *
     *  [BigDecimal]:
     *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
     *  [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
     */
    amount: DecimalCreate;
};
/** @internal */
export declare const RightsOfAccumulationCreate$inboundSchema: z.ZodType<RightsOfAccumulationCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type RightsOfAccumulationCreate$Outbound = {
    amount: DecimalCreate$Outbound;
};
/** @internal */
export declare const RightsOfAccumulationCreate$outboundSchema: z.ZodType<RightsOfAccumulationCreate$Outbound, z.ZodTypeDef, RightsOfAccumulationCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RightsOfAccumulationCreate$ {
    /** @deprecated use `RightsOfAccumulationCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RightsOfAccumulationCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `RightsOfAccumulationCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RightsOfAccumulationCreate$Outbound, z.ZodTypeDef, RightsOfAccumulationCreate>;
    /** @deprecated use `RightsOfAccumulationCreate$Outbound` instead. */
    type Outbound = RightsOfAccumulationCreate$Outbound;
}
export declare function rightsOfAccumulationCreateToJSON(rightsOfAccumulationCreate: RightsOfAccumulationCreate): string;
export declare function rightsOfAccumulationCreateFromJSON(jsonString: string): SafeParseResult<RightsOfAccumulationCreate, SDKValidationError>;
//# sourceMappingURL=rightsofaccumulationcreate.d.ts.map