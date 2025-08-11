import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TradeCreate, TradeCreate$Outbound } from "./tradecreate.js";
/**
 * Used to correct an entire fill of trades using the activity_id that is common to all of the trades in the request
 */
export type RebookTradeRequestCreate = {
    /**
     * The name of the trade to rebook.
     */
    name: string;
    /**
     * A Trade represents an entire order made by a client. Trades can hold one or many executions representing partial fills that aggregate into a whole order.
     */
    trade: TradeCreate;
};
/** @internal */
export declare const RebookTradeRequestCreate$inboundSchema: z.ZodType<RebookTradeRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type RebookTradeRequestCreate$Outbound = {
    name: string;
    trade: TradeCreate$Outbound;
};
/** @internal */
export declare const RebookTradeRequestCreate$outboundSchema: z.ZodType<RebookTradeRequestCreate$Outbound, z.ZodTypeDef, RebookTradeRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeRequestCreate$ {
    /** @deprecated use `RebookTradeRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeRequestCreate$Outbound, z.ZodTypeDef, RebookTradeRequestCreate>;
    /** @deprecated use `RebookTradeRequestCreate$Outbound` instead. */
    type Outbound = RebookTradeRequestCreate$Outbound;
}
export declare function rebookTradeRequestCreateToJSON(rebookTradeRequestCreate: RebookTradeRequestCreate): string;
export declare function rebookTradeRequestCreateFromJSON(jsonString: string): SafeParseResult<RebookTradeRequestCreate, SDKValidationError>;
//# sourceMappingURL=rebooktraderequestcreate.d.ts.map