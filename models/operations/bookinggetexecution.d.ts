import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type BookingGetExecutionRequest = {
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
};
export type BookingGetExecutionResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    execution?: components.Execution | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const BookingGetExecutionRequest$inboundSchema: z.ZodType<BookingGetExecutionRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type BookingGetExecutionRequest$Outbound = {
    account_id: string;
    trade_id: string;
    execution_id: string;
};
/** @internal */
export declare const BookingGetExecutionRequest$outboundSchema: z.ZodType<BookingGetExecutionRequest$Outbound, z.ZodTypeDef, BookingGetExecutionRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingGetExecutionRequest$ {
    /** @deprecated use `BookingGetExecutionRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingGetExecutionRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingGetExecutionRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingGetExecutionRequest$Outbound, z.ZodTypeDef, BookingGetExecutionRequest>;
    /** @deprecated use `BookingGetExecutionRequest$Outbound` instead. */
    type Outbound = BookingGetExecutionRequest$Outbound;
}
export declare function bookingGetExecutionRequestToJSON(bookingGetExecutionRequest: BookingGetExecutionRequest): string;
export declare function bookingGetExecutionRequestFromJSON(jsonString: string): SafeParseResult<BookingGetExecutionRequest, SDKValidationError>;
/** @internal */
export declare const BookingGetExecutionResponse$inboundSchema: z.ZodType<BookingGetExecutionResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type BookingGetExecutionResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    Execution?: components.Execution$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const BookingGetExecutionResponse$outboundSchema: z.ZodType<BookingGetExecutionResponse$Outbound, z.ZodTypeDef, BookingGetExecutionResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingGetExecutionResponse$ {
    /** @deprecated use `BookingGetExecutionResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingGetExecutionResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingGetExecutionResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingGetExecutionResponse$Outbound, z.ZodTypeDef, BookingGetExecutionResponse>;
    /** @deprecated use `BookingGetExecutionResponse$Outbound` instead. */
    type Outbound = BookingGetExecutionResponse$Outbound;
}
export declare function bookingGetExecutionResponseToJSON(bookingGetExecutionResponse: BookingGetExecutionResponse): string;
export declare function bookingGetExecutionResponseFromJSON(jsonString: string): SafeParseResult<BookingGetExecutionResponse, SDKValidationError>;
//# sourceMappingURL=bookinggetexecution.d.ts.map