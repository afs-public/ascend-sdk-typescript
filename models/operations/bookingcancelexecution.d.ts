import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type BookingCancelExecutionRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The trade id.
     */
    tradeId: string;
    /**
     * The execution id.
     */
    executionId: string;
    cancelExecutionRequestCreate: components.CancelExecutionRequestCreate;
};
export type BookingCancelExecutionResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    cancelExecutionResponse?: components.CancelExecutionResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid.
     *
     * @remarks
     * FAILED_PRECONDITION: The operation was rejected because the system is not in a state required for the operation's processing.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const BookingCancelExecutionRequest$inboundSchema: z.ZodType<BookingCancelExecutionRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type BookingCancelExecutionRequest$Outbound = {
    account_id: string;
    trade_id: string;
    execution_id: string;
    CancelExecutionRequestCreate: components.CancelExecutionRequestCreate$Outbound;
};
/** @internal */
export declare const BookingCancelExecutionRequest$outboundSchema: z.ZodType<BookingCancelExecutionRequest$Outbound, z.ZodTypeDef, BookingCancelExecutionRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingCancelExecutionRequest$ {
    /** @deprecated use `BookingCancelExecutionRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingCancelExecutionRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingCancelExecutionRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingCancelExecutionRequest$Outbound, z.ZodTypeDef, BookingCancelExecutionRequest>;
    /** @deprecated use `BookingCancelExecutionRequest$Outbound` instead. */
    type Outbound = BookingCancelExecutionRequest$Outbound;
}
export declare function bookingCancelExecutionRequestToJSON(bookingCancelExecutionRequest: BookingCancelExecutionRequest): string;
export declare function bookingCancelExecutionRequestFromJSON(jsonString: string): SafeParseResult<BookingCancelExecutionRequest, SDKValidationError>;
/** @internal */
export declare const BookingCancelExecutionResponse$inboundSchema: z.ZodType<BookingCancelExecutionResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type BookingCancelExecutionResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    CancelExecutionResponse?: components.CancelExecutionResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const BookingCancelExecutionResponse$outboundSchema: z.ZodType<BookingCancelExecutionResponse$Outbound, z.ZodTypeDef, BookingCancelExecutionResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingCancelExecutionResponse$ {
    /** @deprecated use `BookingCancelExecutionResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingCancelExecutionResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingCancelExecutionResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingCancelExecutionResponse$Outbound, z.ZodTypeDef, BookingCancelExecutionResponse>;
    /** @deprecated use `BookingCancelExecutionResponse$Outbound` instead. */
    type Outbound = BookingCancelExecutionResponse$Outbound;
}
export declare function bookingCancelExecutionResponseToJSON(bookingCancelExecutionResponse: BookingCancelExecutionResponse): string;
export declare function bookingCancelExecutionResponseFromJSON(jsonString: string): SafeParseResult<BookingCancelExecutionResponse, SDKValidationError>;
//# sourceMappingURL=bookingcancelexecution.d.ts.map