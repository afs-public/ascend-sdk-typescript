import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type BookingCreateTradeRequest = {
    /**
     * The account id.
     */
    accountId: string;
    tradeCreate: components.TradeCreate;
};
export type BookingCreateTradeResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    bookingTrade?: components.BookingTrade | undefined;
    /**
     * FAILED_PRECONDITION: The operation was rejected because the system is not in a state required for the operation's processing.
     *
     * @remarks
     * INVALID_ARGUMENT: The request is not valid.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const BookingCreateTradeRequest$inboundSchema: z.ZodType<BookingCreateTradeRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type BookingCreateTradeRequest$Outbound = {
    account_id: string;
    TradeCreate: components.TradeCreate$Outbound;
};
/** @internal */
export declare const BookingCreateTradeRequest$outboundSchema: z.ZodType<BookingCreateTradeRequest$Outbound, z.ZodTypeDef, BookingCreateTradeRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingCreateTradeRequest$ {
    /** @deprecated use `BookingCreateTradeRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingCreateTradeRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingCreateTradeRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingCreateTradeRequest$Outbound, z.ZodTypeDef, BookingCreateTradeRequest>;
    /** @deprecated use `BookingCreateTradeRequest$Outbound` instead. */
    type Outbound = BookingCreateTradeRequest$Outbound;
}
export declare function bookingCreateTradeRequestToJSON(bookingCreateTradeRequest: BookingCreateTradeRequest): string;
export declare function bookingCreateTradeRequestFromJSON(jsonString: string): SafeParseResult<BookingCreateTradeRequest, SDKValidationError>;
/** @internal */
export declare const BookingCreateTradeResponse$inboundSchema: z.ZodType<BookingCreateTradeResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type BookingCreateTradeResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    BookingTrade?: components.BookingTrade$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const BookingCreateTradeResponse$outboundSchema: z.ZodType<BookingCreateTradeResponse$Outbound, z.ZodTypeDef, BookingCreateTradeResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingCreateTradeResponse$ {
    /** @deprecated use `BookingCreateTradeResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingCreateTradeResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingCreateTradeResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingCreateTradeResponse$Outbound, z.ZodTypeDef, BookingCreateTradeResponse>;
    /** @deprecated use `BookingCreateTradeResponse$Outbound` instead. */
    type Outbound = BookingCreateTradeResponse$Outbound;
}
export declare function bookingCreateTradeResponseToJSON(bookingCreateTradeResponse: BookingCreateTradeResponse): string;
export declare function bookingCreateTradeResponseFromJSON(jsonString: string): SafeParseResult<BookingCreateTradeResponse, SDKValidationError>;
//# sourceMappingURL=bookingcreatetrade.d.ts.map