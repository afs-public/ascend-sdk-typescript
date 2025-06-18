import * as z from "zod";
import * as components from "../components/index.js";
export type BookingCancelTradeAllocationRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The tradeAllocation id.
     */
    tradeAllocationId: string;
    cancelTradeAllocationRequestCreate: components.CancelTradeAllocationRequestCreate;
};
export type BookingCancelTradeAllocationResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    cancelTradeAllocationResponse?: components.CancelTradeAllocationResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid.
     *
     * @remarks
     * FAILED_PRECONDITION: The operation was rejected because the system is not in a state required for the operation's processing.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const BookingCancelTradeAllocationRequest$inboundSchema: z.ZodType<BookingCancelTradeAllocationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type BookingCancelTradeAllocationRequest$Outbound = {
    account_id: string;
    tradeAllocation_id: string;
    CancelTradeAllocationRequestCreate: components.CancelTradeAllocationRequestCreate$Outbound;
};
/** @internal */
export declare const BookingCancelTradeAllocationRequest$outboundSchema: z.ZodType<BookingCancelTradeAllocationRequest$Outbound, z.ZodTypeDef, BookingCancelTradeAllocationRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingCancelTradeAllocationRequest$ {
    /** @deprecated use `BookingCancelTradeAllocationRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingCancelTradeAllocationRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingCancelTradeAllocationRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingCancelTradeAllocationRequest$Outbound, z.ZodTypeDef, BookingCancelTradeAllocationRequest>;
    /** @deprecated use `BookingCancelTradeAllocationRequest$Outbound` instead. */
    type Outbound = BookingCancelTradeAllocationRequest$Outbound;
}
/** @internal */
export declare const BookingCancelTradeAllocationResponse$inboundSchema: z.ZodType<BookingCancelTradeAllocationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type BookingCancelTradeAllocationResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    CancelTradeAllocationResponse?: components.CancelTradeAllocationResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const BookingCancelTradeAllocationResponse$outboundSchema: z.ZodType<BookingCancelTradeAllocationResponse$Outbound, z.ZodTypeDef, BookingCancelTradeAllocationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingCancelTradeAllocationResponse$ {
    /** @deprecated use `BookingCancelTradeAllocationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingCancelTradeAllocationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingCancelTradeAllocationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingCancelTradeAllocationResponse$Outbound, z.ZodTypeDef, BookingCancelTradeAllocationResponse>;
    /** @deprecated use `BookingCancelTradeAllocationResponse$Outbound` instead. */
    type Outbound = BookingCancelTradeAllocationResponse$Outbound;
}
//# sourceMappingURL=bookingcanceltradeallocation.d.ts.map