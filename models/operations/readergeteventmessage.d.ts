import * as z from "zod";
import * as components from "../components/index.js";
export type ReaderGetEventMessageRequest = {
    /**
     * The message id.
     */
    messageId: string;
};
export type ReaderGetEventMessageResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    eventMessage?: components.EventMessage | undefined;
    /**
     * INVALID_ARGUMENT: The request was not well formed.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const ReaderGetEventMessageRequest$inboundSchema: z.ZodType<ReaderGetEventMessageRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ReaderGetEventMessageRequest$Outbound = {
    message_id: string;
};
/** @internal */
export declare const ReaderGetEventMessageRequest$outboundSchema: z.ZodType<ReaderGetEventMessageRequest$Outbound, z.ZodTypeDef, ReaderGetEventMessageRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ReaderGetEventMessageRequest$ {
    /** @deprecated use `ReaderGetEventMessageRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ReaderGetEventMessageRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `ReaderGetEventMessageRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ReaderGetEventMessageRequest$Outbound, z.ZodTypeDef, ReaderGetEventMessageRequest>;
    /** @deprecated use `ReaderGetEventMessageRequest$Outbound` instead. */
    type Outbound = ReaderGetEventMessageRequest$Outbound;
}
/** @internal */
export declare const ReaderGetEventMessageResponse$inboundSchema: z.ZodType<ReaderGetEventMessageResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ReaderGetEventMessageResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    EventMessage?: components.EventMessage$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const ReaderGetEventMessageResponse$outboundSchema: z.ZodType<ReaderGetEventMessageResponse$Outbound, z.ZodTypeDef, ReaderGetEventMessageResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ReaderGetEventMessageResponse$ {
    /** @deprecated use `ReaderGetEventMessageResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ReaderGetEventMessageResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ReaderGetEventMessageResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ReaderGetEventMessageResponse$Outbound, z.ZodTypeDef, ReaderGetEventMessageResponse>;
    /** @deprecated use `ReaderGetEventMessageResponse$Outbound` instead. */
    type Outbound = ReaderGetEventMessageResponse$Outbound;
}
//# sourceMappingURL=readergeteventmessage.d.ts.map