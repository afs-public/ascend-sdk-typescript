import * as z from "zod";
import * as components from "../components/index.js";
export type BookingGetTradeRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The trade id.
     */
    tradeId: string;
};
export type BookingGetTradeResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    bookingTrade?: components.BookingTrade | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const BookingGetTradeRequest$inboundSchema: z.ZodType<BookingGetTradeRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type BookingGetTradeRequest$Outbound = {
    account_id: string;
    trade_id: string;
};
/** @internal */
export declare const BookingGetTradeRequest$outboundSchema: z.ZodType<BookingGetTradeRequest$Outbound, z.ZodTypeDef, BookingGetTradeRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingGetTradeRequest$ {
    /** @deprecated use `BookingGetTradeRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingGetTradeRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingGetTradeRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingGetTradeRequest$Outbound, z.ZodTypeDef, BookingGetTradeRequest>;
    /** @deprecated use `BookingGetTradeRequest$Outbound` instead. */
    type Outbound = BookingGetTradeRequest$Outbound;
}
/** @internal */
export declare const BookingGetTradeResponse$inboundSchema: z.ZodType<BookingGetTradeResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type BookingGetTradeResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    BookingTrade?: components.BookingTrade$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const BookingGetTradeResponse$outboundSchema: z.ZodType<BookingGetTradeResponse$Outbound, z.ZodTypeDef, BookingGetTradeResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingGetTradeResponse$ {
    /** @deprecated use `BookingGetTradeResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingGetTradeResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingGetTradeResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingGetTradeResponse$Outbound, z.ZodTypeDef, BookingGetTradeResponse>;
    /** @deprecated use `BookingGetTradeResponse$Outbound` instead. */
    type Outbound = BookingGetTradeResponse$Outbound;
}
//# sourceMappingURL=bookinggettrade.d.ts.map