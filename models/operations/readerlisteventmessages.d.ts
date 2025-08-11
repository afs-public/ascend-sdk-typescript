import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ReaderListEventMessagesRequest = {
    /**
     * A CEL string to filter results; See the [CEL Search](https://developer.apexclearing.com/apex-fintech-solutions/docs/cel-search) page in Guides for more information; If left empty, all events the user has permission to view are returned; Filter options include:
     *
     * @remarks
     *  `name`
     *  `message_id`
     *  `event_type`
     *  `publish_time`
     *  `partition_key`
     *  `client_id`
     *  `correspondent_id`
     *  `account_id`
     */
    filter?: string | undefined;
    /**
     * The number of entries to return in a single page; Default = 100; Maximum = 1000
     */
    pageSize?: number | undefined;
    /**
     * Page token used for pagination; Supplying a page token returns the next page of results
     */
    pageToken?: string | undefined;
};
export type ReaderListEventMessagesResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    listEventMessagesResponse?: components.ListEventMessagesResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request was not well formed.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const ReaderListEventMessagesRequest$inboundSchema: z.ZodType<ReaderListEventMessagesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ReaderListEventMessagesRequest$Outbound = {
    filter?: string | undefined;
    page_size?: number | undefined;
    page_token?: string | undefined;
};
/** @internal */
export declare const ReaderListEventMessagesRequest$outboundSchema: z.ZodType<ReaderListEventMessagesRequest$Outbound, z.ZodTypeDef, ReaderListEventMessagesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ReaderListEventMessagesRequest$ {
    /** @deprecated use `ReaderListEventMessagesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ReaderListEventMessagesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `ReaderListEventMessagesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ReaderListEventMessagesRequest$Outbound, z.ZodTypeDef, ReaderListEventMessagesRequest>;
    /** @deprecated use `ReaderListEventMessagesRequest$Outbound` instead. */
    type Outbound = ReaderListEventMessagesRequest$Outbound;
}
export declare function readerListEventMessagesRequestToJSON(readerListEventMessagesRequest: ReaderListEventMessagesRequest): string;
export declare function readerListEventMessagesRequestFromJSON(jsonString: string): SafeParseResult<ReaderListEventMessagesRequest, SDKValidationError>;
/** @internal */
export declare const ReaderListEventMessagesResponse$inboundSchema: z.ZodType<ReaderListEventMessagesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ReaderListEventMessagesResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    ListEventMessagesResponse?: components.ListEventMessagesResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const ReaderListEventMessagesResponse$outboundSchema: z.ZodType<ReaderListEventMessagesResponse$Outbound, z.ZodTypeDef, ReaderListEventMessagesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ReaderListEventMessagesResponse$ {
    /** @deprecated use `ReaderListEventMessagesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ReaderListEventMessagesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ReaderListEventMessagesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ReaderListEventMessagesResponse$Outbound, z.ZodTypeDef, ReaderListEventMessagesResponse>;
    /** @deprecated use `ReaderListEventMessagesResponse$Outbound` instead. */
    type Outbound = ReaderListEventMessagesResponse$Outbound;
}
export declare function readerListEventMessagesResponseToJSON(readerListEventMessagesResponse: ReaderListEventMessagesResponse): string;
export declare function readerListEventMessagesResponseFromJSON(jsonString: string): SafeParseResult<ReaderListEventMessagesResponse, SDKValidationError>;
//# sourceMappingURL=readerlisteventmessages.d.ts.map