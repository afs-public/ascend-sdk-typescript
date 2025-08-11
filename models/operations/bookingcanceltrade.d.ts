import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type BookingCancelTradeRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The trade id.
     */
    tradeId: string;
    cancelTradeRequestCreate: components.CancelTradeRequestCreate;
};
export type BookingCancelTradeResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    cancelTradeResponse?: components.CancelTradeResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid.
     *
     * @remarks
     * FAILED_PRECONDITION: The operation was rejected because the system is not in a state required for the operation's processing.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const BookingCancelTradeRequest$inboundSchema: z.ZodType<BookingCancelTradeRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type BookingCancelTradeRequest$Outbound = {
    account_id: string;
    trade_id: string;
    CancelTradeRequestCreate: components.CancelTradeRequestCreate$Outbound;
};
/** @internal */
export declare const BookingCancelTradeRequest$outboundSchema: z.ZodType<BookingCancelTradeRequest$Outbound, z.ZodTypeDef, BookingCancelTradeRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingCancelTradeRequest$ {
    /** @deprecated use `BookingCancelTradeRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingCancelTradeRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingCancelTradeRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingCancelTradeRequest$Outbound, z.ZodTypeDef, BookingCancelTradeRequest>;
    /** @deprecated use `BookingCancelTradeRequest$Outbound` instead. */
    type Outbound = BookingCancelTradeRequest$Outbound;
}
export declare function bookingCancelTradeRequestToJSON(bookingCancelTradeRequest: BookingCancelTradeRequest): string;
export declare function bookingCancelTradeRequestFromJSON(jsonString: string): SafeParseResult<BookingCancelTradeRequest, SDKValidationError>;
/** @internal */
export declare const BookingCancelTradeResponse$inboundSchema: z.ZodType<BookingCancelTradeResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type BookingCancelTradeResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    CancelTradeResponse?: components.CancelTradeResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const BookingCancelTradeResponse$outboundSchema: z.ZodType<BookingCancelTradeResponse$Outbound, z.ZodTypeDef, BookingCancelTradeResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingCancelTradeResponse$ {
    /** @deprecated use `BookingCancelTradeResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingCancelTradeResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingCancelTradeResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingCancelTradeResponse$Outbound, z.ZodTypeDef, BookingCancelTradeResponse>;
    /** @deprecated use `BookingCancelTradeResponse$Outbound` instead. */
    type Outbound = BookingCancelTradeResponse$Outbound;
}
export declare function bookingCancelTradeResponseToJSON(bookingCancelTradeResponse: BookingCancelTradeResponse): string;
export declare function bookingCancelTradeResponseFromJSON(jsonString: string): SafeParseResult<BookingCancelTradeResponse, SDKValidationError>;
//# sourceMappingURL=bookingcanceltrade.d.ts.map