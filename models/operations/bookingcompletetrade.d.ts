import * as z from "zod";
import * as components from "../components/index.js";
export type BookingCompleteTradeRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The trade id.
     */
    tradeId: string;
    completeTradeRequestCreate: components.CompleteTradeRequestCreate;
};
export type BookingCompleteTradeResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    completeTradeResponse?: components.CompleteTradeResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid.
     *
     * @remarks
     * FAILED_PRECONDITION: The operation was rejected because the system is not in a state required for the operation's processing.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const BookingCompleteTradeRequest$inboundSchema: z.ZodType<BookingCompleteTradeRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type BookingCompleteTradeRequest$Outbound = {
    account_id: string;
    trade_id: string;
    CompleteTradeRequestCreate: components.CompleteTradeRequestCreate$Outbound;
};
/** @internal */
export declare const BookingCompleteTradeRequest$outboundSchema: z.ZodType<BookingCompleteTradeRequest$Outbound, z.ZodTypeDef, BookingCompleteTradeRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingCompleteTradeRequest$ {
    /** @deprecated use `BookingCompleteTradeRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingCompleteTradeRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingCompleteTradeRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingCompleteTradeRequest$Outbound, z.ZodTypeDef, BookingCompleteTradeRequest>;
    /** @deprecated use `BookingCompleteTradeRequest$Outbound` instead. */
    type Outbound = BookingCompleteTradeRequest$Outbound;
}
/** @internal */
export declare const BookingCompleteTradeResponse$inboundSchema: z.ZodType<BookingCompleteTradeResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type BookingCompleteTradeResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    CompleteTradeResponse?: components.CompleteTradeResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const BookingCompleteTradeResponse$outboundSchema: z.ZodType<BookingCompleteTradeResponse$Outbound, z.ZodTypeDef, BookingCompleteTradeResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingCompleteTradeResponse$ {
    /** @deprecated use `BookingCompleteTradeResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingCompleteTradeResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingCompleteTradeResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingCompleteTradeResponse$Outbound, z.ZodTypeDef, BookingCompleteTradeResponse>;
    /** @deprecated use `BookingCompleteTradeResponse$Outbound` instead. */
    type Outbound = BookingCompleteTradeResponse$Outbound;
}
//# sourceMappingURL=bookingcompletetrade.d.ts.map