import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type BookingCreateExecutionRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The trade id.
     */
    tradeId: string;
    executionCreate: components.ExecutionCreate;
};
export type BookingCreateExecutionResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    execution?: components.Execution | undefined;
    /**
     * FAILED_PRECONDITION: The operation was rejected because the system is not in a state required for the operation's processing.
     *
     * @remarks
     * INVALID_ARGUMENT: The request is not valid.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const BookingCreateExecutionRequest$inboundSchema: z.ZodType<BookingCreateExecutionRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type BookingCreateExecutionRequest$Outbound = {
    account_id: string;
    trade_id: string;
    ExecutionCreate: components.ExecutionCreate$Outbound;
};
/** @internal */
export declare const BookingCreateExecutionRequest$outboundSchema: z.ZodType<BookingCreateExecutionRequest$Outbound, z.ZodTypeDef, BookingCreateExecutionRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingCreateExecutionRequest$ {
    /** @deprecated use `BookingCreateExecutionRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingCreateExecutionRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingCreateExecutionRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingCreateExecutionRequest$Outbound, z.ZodTypeDef, BookingCreateExecutionRequest>;
    /** @deprecated use `BookingCreateExecutionRequest$Outbound` instead. */
    type Outbound = BookingCreateExecutionRequest$Outbound;
}
export declare function bookingCreateExecutionRequestToJSON(bookingCreateExecutionRequest: BookingCreateExecutionRequest): string;
export declare function bookingCreateExecutionRequestFromJSON(jsonString: string): SafeParseResult<BookingCreateExecutionRequest, SDKValidationError>;
/** @internal */
export declare const BookingCreateExecutionResponse$inboundSchema: z.ZodType<BookingCreateExecutionResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type BookingCreateExecutionResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    Execution?: components.Execution$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const BookingCreateExecutionResponse$outboundSchema: z.ZodType<BookingCreateExecutionResponse$Outbound, z.ZodTypeDef, BookingCreateExecutionResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingCreateExecutionResponse$ {
    /** @deprecated use `BookingCreateExecutionResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingCreateExecutionResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingCreateExecutionResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingCreateExecutionResponse$Outbound, z.ZodTypeDef, BookingCreateExecutionResponse>;
    /** @deprecated use `BookingCreateExecutionResponse$Outbound` instead. */
    type Outbound = BookingCreateExecutionResponse$Outbound;
}
export declare function bookingCreateExecutionResponseToJSON(bookingCreateExecutionResponse: BookingCreateExecutionResponse): string;
export declare function bookingCreateExecutionResponseFromJSON(jsonString: string): SafeParseResult<BookingCreateExecutionResponse, SDKValidationError>;
//# sourceMappingURL=bookingcreateexecution.d.ts.map