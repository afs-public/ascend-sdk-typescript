import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type BookingRebookTradeAllocationRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The tradeAllocation id.
     */
    tradeAllocationId: string;
    rebookTradeAllocationRequestCreate: components.RebookTradeAllocationRequestCreate;
};
export type BookingRebookTradeAllocationResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    rebookTradeAllocationResponse?: components.RebookTradeAllocationResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid.
     *
     * @remarks
     * FAILED_PRECONDITION: The operation was rejected because the system is not in a state required for the operation's processing.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const BookingRebookTradeAllocationRequest$inboundSchema: z.ZodType<BookingRebookTradeAllocationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type BookingRebookTradeAllocationRequest$Outbound = {
    account_id: string;
    tradeAllocation_id: string;
    RebookTradeAllocationRequestCreate: components.RebookTradeAllocationRequestCreate$Outbound;
};
/** @internal */
export declare const BookingRebookTradeAllocationRequest$outboundSchema: z.ZodType<BookingRebookTradeAllocationRequest$Outbound, z.ZodTypeDef, BookingRebookTradeAllocationRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingRebookTradeAllocationRequest$ {
    /** @deprecated use `BookingRebookTradeAllocationRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingRebookTradeAllocationRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingRebookTradeAllocationRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingRebookTradeAllocationRequest$Outbound, z.ZodTypeDef, BookingRebookTradeAllocationRequest>;
    /** @deprecated use `BookingRebookTradeAllocationRequest$Outbound` instead. */
    type Outbound = BookingRebookTradeAllocationRequest$Outbound;
}
export declare function bookingRebookTradeAllocationRequestToJSON(bookingRebookTradeAllocationRequest: BookingRebookTradeAllocationRequest): string;
export declare function bookingRebookTradeAllocationRequestFromJSON(jsonString: string): SafeParseResult<BookingRebookTradeAllocationRequest, SDKValidationError>;
/** @internal */
export declare const BookingRebookTradeAllocationResponse$inboundSchema: z.ZodType<BookingRebookTradeAllocationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type BookingRebookTradeAllocationResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    RebookTradeAllocationResponse?: components.RebookTradeAllocationResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const BookingRebookTradeAllocationResponse$outboundSchema: z.ZodType<BookingRebookTradeAllocationResponse$Outbound, z.ZodTypeDef, BookingRebookTradeAllocationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingRebookTradeAllocationResponse$ {
    /** @deprecated use `BookingRebookTradeAllocationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingRebookTradeAllocationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingRebookTradeAllocationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingRebookTradeAllocationResponse$Outbound, z.ZodTypeDef, BookingRebookTradeAllocationResponse>;
    /** @deprecated use `BookingRebookTradeAllocationResponse$Outbound` instead. */
    type Outbound = BookingRebookTradeAllocationResponse$Outbound;
}
export declare function bookingRebookTradeAllocationResponseToJSON(bookingRebookTradeAllocationResponse: BookingRebookTradeAllocationResponse): string;
export declare function bookingRebookTradeAllocationResponseFromJSON(jsonString: string): SafeParseResult<BookingRebookTradeAllocationResponse, SDKValidationError>;
//# sourceMappingURL=bookingrebooktradeallocation.d.ts.map