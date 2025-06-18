import * as z from "zod";
import * as components from "../components/index.js";
export type BookingRebookTradeRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The trade id.
     */
    tradeId: string;
    rebookTradeRequestCreate: components.RebookTradeRequestCreate;
};
export type BookingRebookTradeResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    rebookTradeResponse?: components.RebookTradeResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid.
     *
     * @remarks
     * FAILED_PRECONDITION: The operation was rejected because the system is not in a state required for the operation's processing.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const BookingRebookTradeRequest$inboundSchema: z.ZodType<BookingRebookTradeRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type BookingRebookTradeRequest$Outbound = {
    account_id: string;
    trade_id: string;
    RebookTradeRequestCreate: components.RebookTradeRequestCreate$Outbound;
};
/** @internal */
export declare const BookingRebookTradeRequest$outboundSchema: z.ZodType<BookingRebookTradeRequest$Outbound, z.ZodTypeDef, BookingRebookTradeRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingRebookTradeRequest$ {
    /** @deprecated use `BookingRebookTradeRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingRebookTradeRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingRebookTradeRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingRebookTradeRequest$Outbound, z.ZodTypeDef, BookingRebookTradeRequest>;
    /** @deprecated use `BookingRebookTradeRequest$Outbound` instead. */
    type Outbound = BookingRebookTradeRequest$Outbound;
}
/** @internal */
export declare const BookingRebookTradeResponse$inboundSchema: z.ZodType<BookingRebookTradeResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type BookingRebookTradeResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    RebookTradeResponse?: components.RebookTradeResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const BookingRebookTradeResponse$outboundSchema: z.ZodType<BookingRebookTradeResponse$Outbound, z.ZodTypeDef, BookingRebookTradeResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingRebookTradeResponse$ {
    /** @deprecated use `BookingRebookTradeResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingRebookTradeResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingRebookTradeResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingRebookTradeResponse$Outbound, z.ZodTypeDef, BookingRebookTradeResponse>;
    /** @deprecated use `BookingRebookTradeResponse$Outbound` instead. */
    type Outbound = BookingRebookTradeResponse$Outbound;
}
//# sourceMappingURL=bookingrebooktrade.d.ts.map