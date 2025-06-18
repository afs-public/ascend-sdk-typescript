import * as z from "zod";
import * as components from "../components/index.js";
export type BookingCreateTradeAllocationRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * A globally unique UUID that is specific to the request. This id is used to prevent duplicate requests from being processed.
     */
    requestId?: string | undefined;
    tradeAllocationCreate: components.TradeAllocationCreate;
};
export type BookingCreateTradeAllocationResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    tradeAllocation?: components.TradeAllocation | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid.
     *
     * @remarks
     * FAILED_PRECONDITION: The operation was rejected because the system is not in a state required for the operation's processing.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const BookingCreateTradeAllocationRequest$inboundSchema: z.ZodType<BookingCreateTradeAllocationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type BookingCreateTradeAllocationRequest$Outbound = {
    account_id: string;
    request_id?: string | undefined;
    TradeAllocationCreate: components.TradeAllocationCreate$Outbound;
};
/** @internal */
export declare const BookingCreateTradeAllocationRequest$outboundSchema: z.ZodType<BookingCreateTradeAllocationRequest$Outbound, z.ZodTypeDef, BookingCreateTradeAllocationRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingCreateTradeAllocationRequest$ {
    /** @deprecated use `BookingCreateTradeAllocationRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingCreateTradeAllocationRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingCreateTradeAllocationRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingCreateTradeAllocationRequest$Outbound, z.ZodTypeDef, BookingCreateTradeAllocationRequest>;
    /** @deprecated use `BookingCreateTradeAllocationRequest$Outbound` instead. */
    type Outbound = BookingCreateTradeAllocationRequest$Outbound;
}
/** @internal */
export declare const BookingCreateTradeAllocationResponse$inboundSchema: z.ZodType<BookingCreateTradeAllocationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type BookingCreateTradeAllocationResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    TradeAllocation?: components.TradeAllocation$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const BookingCreateTradeAllocationResponse$outboundSchema: z.ZodType<BookingCreateTradeAllocationResponse$Outbound, z.ZodTypeDef, BookingCreateTradeAllocationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingCreateTradeAllocationResponse$ {
    /** @deprecated use `BookingCreateTradeAllocationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingCreateTradeAllocationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingCreateTradeAllocationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingCreateTradeAllocationResponse$Outbound, z.ZodTypeDef, BookingCreateTradeAllocationResponse>;
    /** @deprecated use `BookingCreateTradeAllocationResponse$Outbound` instead. */
    type Outbound = BookingCreateTradeAllocationResponse$Outbound;
}
//# sourceMappingURL=bookingcreatetradeallocation.d.ts.map