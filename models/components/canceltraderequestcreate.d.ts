import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * A request for canceling all executions underneath a trade.
 */
export type CancelTradeRequestCreate = {
    /**
     * The name of the trade to cancel.
     */
    name: string;
};
/** @internal */
export declare const CancelTradeRequestCreate$inboundSchema: z.ZodType<CancelTradeRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelTradeRequestCreate$Outbound = {
    name: string;
};
/** @internal */
export declare const CancelTradeRequestCreate$outboundSchema: z.ZodType<CancelTradeRequestCreate$Outbound, z.ZodTypeDef, CancelTradeRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelTradeRequestCreate$ {
    /** @deprecated use `CancelTradeRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelTradeRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelTradeRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelTradeRequestCreate$Outbound, z.ZodTypeDef, CancelTradeRequestCreate>;
    /** @deprecated use `CancelTradeRequestCreate$Outbound` instead. */
    type Outbound = CancelTradeRequestCreate$Outbound;
}
export declare function cancelTradeRequestCreateToJSON(cancelTradeRequestCreate: CancelTradeRequestCreate): string;
export declare function cancelTradeRequestCreateFromJSON(jsonString: string): SafeParseResult<CancelTradeRequestCreate, SDKValidationError>;
//# sourceMappingURL=canceltraderequestcreate.d.ts.map