import * as z from "zod";
import { TradeAllocationCreate, TradeAllocationCreate$Outbound } from "./tradeallocationcreate.js";
/**
 * Used to correct a trade allocation.
 */
export type RebookTradeAllocationRequestCreate = {
    /**
     * The name of the original trade allocation to rebook.
     */
    name: string;
    /**
     * A globally unique UUID that is specific to the request. This id is used to prevent duplicate requests from being processed.
     */
    requestId: string;
    /**
     * A TradeAllocation represents the movement of positions between two ascend accounts.
     */
    tradeAllocation: TradeAllocationCreate;
};
/** @internal */
export declare const RebookTradeAllocationRequestCreate$inboundSchema: z.ZodType<RebookTradeAllocationRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type RebookTradeAllocationRequestCreate$Outbound = {
    name: string;
    request_id: string;
    trade_allocation: TradeAllocationCreate$Outbound;
};
/** @internal */
export declare const RebookTradeAllocationRequestCreate$outboundSchema: z.ZodType<RebookTradeAllocationRequestCreate$Outbound, z.ZodTypeDef, RebookTradeAllocationRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookTradeAllocationRequestCreate$ {
    /** @deprecated use `RebookTradeAllocationRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookTradeAllocationRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookTradeAllocationRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookTradeAllocationRequestCreate$Outbound, z.ZodTypeDef, RebookTradeAllocationRequestCreate>;
    /** @deprecated use `RebookTradeAllocationRequestCreate$Outbound` instead. */
    type Outbound = RebookTradeAllocationRequestCreate$Outbound;
}
//# sourceMappingURL=rebooktradeallocationrequestcreate.d.ts.map