import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The request to assign a Large Trader ID to a Legal Natural Person/Legal Entity.
 */
export type AssignLargeTraderRequestCreate = {
    largeTraderId: string;
};
/** @internal */
export declare const AssignLargeTraderRequestCreate$inboundSchema: z.ZodType<AssignLargeTraderRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type AssignLargeTraderRequestCreate$Outbound = {
    large_trader_id: string;
};
/** @internal */
export declare const AssignLargeTraderRequestCreate$outboundSchema: z.ZodType<AssignLargeTraderRequestCreate$Outbound, z.ZodTypeDef, AssignLargeTraderRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AssignLargeTraderRequestCreate$ {
    /** @deprecated use `AssignLargeTraderRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AssignLargeTraderRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `AssignLargeTraderRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AssignLargeTraderRequestCreate$Outbound, z.ZodTypeDef, AssignLargeTraderRequestCreate>;
    /** @deprecated use `AssignLargeTraderRequestCreate$Outbound` instead. */
    type Outbound = AssignLargeTraderRequestCreate$Outbound;
}
export declare function assignLargeTraderRequestCreateToJSON(assignLargeTraderRequestCreate: AssignLargeTraderRequestCreate): string;
export declare function assignLargeTraderRequestCreateFromJSON(jsonString: string): SafeParseResult<AssignLargeTraderRequestCreate, SDKValidationError>;
//# sourceMappingURL=assignlargetraderrequestcreate.d.ts.map