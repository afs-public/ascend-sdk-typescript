import * as z from "zod";
import * as components from "../components/index.js";
export type BookingRebookExecutionRequest = {
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
    rebookExecutionRequestCreate: components.RebookExecutionRequestCreate;
};
export type BookingRebookExecutionResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    rebookExecutionResponse?: components.RebookExecutionResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid.
     *
     * @remarks
     * FAILED_PRECONDITION: The operation was rejected because the system is not in a state required for the operation's processing.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const BookingRebookExecutionRequest$inboundSchema: z.ZodType<BookingRebookExecutionRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type BookingRebookExecutionRequest$Outbound = {
    account_id: string;
    trade_id: string;
    execution_id: string;
    RebookExecutionRequestCreate: components.RebookExecutionRequestCreate$Outbound;
};
/** @internal */
export declare const BookingRebookExecutionRequest$outboundSchema: z.ZodType<BookingRebookExecutionRequest$Outbound, z.ZodTypeDef, BookingRebookExecutionRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingRebookExecutionRequest$ {
    /** @deprecated use `BookingRebookExecutionRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingRebookExecutionRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingRebookExecutionRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingRebookExecutionRequest$Outbound, z.ZodTypeDef, BookingRebookExecutionRequest>;
    /** @deprecated use `BookingRebookExecutionRequest$Outbound` instead. */
    type Outbound = BookingRebookExecutionRequest$Outbound;
}
/** @internal */
export declare const BookingRebookExecutionResponse$inboundSchema: z.ZodType<BookingRebookExecutionResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type BookingRebookExecutionResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    RebookExecutionResponse?: components.RebookExecutionResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const BookingRebookExecutionResponse$outboundSchema: z.ZodType<BookingRebookExecutionResponse$Outbound, z.ZodTypeDef, BookingRebookExecutionResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BookingRebookExecutionResponse$ {
    /** @deprecated use `BookingRebookExecutionResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BookingRebookExecutionResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `BookingRebookExecutionResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BookingRebookExecutionResponse$Outbound, z.ZodTypeDef, BookingRebookExecutionResponse>;
    /** @deprecated use `BookingRebookExecutionResponse$Outbound` instead. */
    type Outbound = BookingRebookExecutionResponse$Outbound;
}
//# sourceMappingURL=bookingrebookexecution.d.ts.map