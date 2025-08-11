import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type BookingGetTradeAllocationRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The tradeAllocation id.
     */
    tradeAllocationId: string;
};
export type BookingGetTradeAllocationResponse = {
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
export declare const BookingGetTradeAllocationRequest$inboundSchema: z.ZodType<BookingGetTradeAllocationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type BookingGetTradeAllocationRequest$Outbound = {
    account_id: string;
    tradeAllocation_id: string;
};
/** @internal */
export declare const BookingGetTradeAllocationRequest$outboundSchema: z.ZodType<BookingGetTradeAllocationRequest$Outbound, z.ZodTypeDef, BookingGetTradeAllocationRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingGetTradeAllocationRequest$ {
    /** @deprecated use `BookingGetTradeAllocationRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingGetTradeAllocationRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingGetTradeAllocationRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingGetTradeAllocationRequest$Outbound, z.ZodTypeDef, BookingGetTradeAllocationRequest>;
    /** @deprecated use `BookingGetTradeAllocationRequest$Outbound` instead. */
    type Outbound = BookingGetTradeAllocationRequest$Outbound;
}
export declare function bookingGetTradeAllocationRequestToJSON(bookingGetTradeAllocationRequest: BookingGetTradeAllocationRequest): string;
export declare function bookingGetTradeAllocationRequestFromJSON(jsonString: string): SafeParseResult<BookingGetTradeAllocationRequest, SDKValidationError>;
/** @internal */
export declare const BookingGetTradeAllocationResponse$inboundSchema: z.ZodType<BookingGetTradeAllocationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type BookingGetTradeAllocationResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    TradeAllocation?: components.TradeAllocation$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const BookingGetTradeAllocationResponse$outboundSchema: z.ZodType<BookingGetTradeAllocationResponse$Outbound, z.ZodTypeDef, BookingGetTradeAllocationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingGetTradeAllocationResponse$ {
    /** @deprecated use `BookingGetTradeAllocationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingGetTradeAllocationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingGetTradeAllocationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingGetTradeAllocationResponse$Outbound, z.ZodTypeDef, BookingGetTradeAllocationResponse>;
    /** @deprecated use `BookingGetTradeAllocationResponse$Outbound` instead. */
    type Outbound = BookingGetTradeAllocationResponse$Outbound;
}
export declare function bookingGetTradeAllocationResponseToJSON(bookingGetTradeAllocationResponse: BookingGetTradeAllocationResponse): string;
export declare function bookingGetTradeAllocationResponseFromJSON(jsonString: string): SafeParseResult<BookingGetTradeAllocationResponse, SDKValidationError>;
//# sourceMappingURL=bookinggettradeallocation.d.ts.map