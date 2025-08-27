import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DecimalCreate, DecimalCreate$Outbound } from "./decimalcreate.js";
/**
 * Request to simulate a check deposit FOR TESTING ONLY!
 */
export type SimulateCreateCheckDepositRequestCreate = {
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
    /**
     * The parent account of the check deposit
     */
    parent: string;
};
/** @internal */
export declare const SimulateCreateCheckDepositRequestCreate$inboundSchema: z.ZodType<SimulateCreateCheckDepositRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type SimulateCreateCheckDepositRequestCreate$Outbound = {
    amount: DecimalCreate$Outbound;
    parent: string;
};
/** @internal */
export declare const SimulateCreateCheckDepositRequestCreate$outboundSchema: z.ZodType<SimulateCreateCheckDepositRequestCreate$Outbound, z.ZodTypeDef, SimulateCreateCheckDepositRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SimulateCreateCheckDepositRequestCreate$ {
    /** @deprecated use `SimulateCreateCheckDepositRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SimulateCreateCheckDepositRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `SimulateCreateCheckDepositRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SimulateCreateCheckDepositRequestCreate$Outbound, z.ZodTypeDef, SimulateCreateCheckDepositRequestCreate>;
    /** @deprecated use `SimulateCreateCheckDepositRequestCreate$Outbound` instead. */
    type Outbound = SimulateCreateCheckDepositRequestCreate$Outbound;
}
export declare function simulateCreateCheckDepositRequestCreateToJSON(simulateCreateCheckDepositRequestCreate: SimulateCreateCheckDepositRequestCreate): string;
export declare function simulateCreateCheckDepositRequestCreateFromJSON(jsonString: string): SafeParseResult<SimulateCreateCheckDepositRequestCreate, SDKValidationError>;
//# sourceMappingURL=simulatecreatecheckdepositrequestcreate.d.ts.map