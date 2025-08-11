import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * A request for canceling a trade allocation.
 */
export type CancelTradeAllocationRequestCreate = {
    /**
     * The name of the trade allocation to cancel.
     */
    name: string;
};
/** @internal */
export declare const CancelTradeAllocationRequestCreate$inboundSchema: z.ZodType<CancelTradeAllocationRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelTradeAllocationRequestCreate$Outbound = {
    name: string;
};
/** @internal */
export declare const CancelTradeAllocationRequestCreate$outboundSchema: z.ZodType<CancelTradeAllocationRequestCreate$Outbound, z.ZodTypeDef, CancelTradeAllocationRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelTradeAllocationRequestCreate$ {
    /** @deprecated use `CancelTradeAllocationRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelTradeAllocationRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelTradeAllocationRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelTradeAllocationRequestCreate$Outbound, z.ZodTypeDef, CancelTradeAllocationRequestCreate>;
    /** @deprecated use `CancelTradeAllocationRequestCreate$Outbound` instead. */
    type Outbound = CancelTradeAllocationRequestCreate$Outbound;
}
export declare function cancelTradeAllocationRequestCreateToJSON(cancelTradeAllocationRequestCreate: CancelTradeAllocationRequestCreate): string;
export declare function cancelTradeAllocationRequestCreateFromJSON(jsonString: string): SafeParseResult<CancelTradeAllocationRequestCreate, SDKValidationError>;
//# sourceMappingURL=canceltradeallocationrequestcreate.d.ts.map