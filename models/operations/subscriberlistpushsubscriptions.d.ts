import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type SubscriberListPushSubscriptionsRequest = {
    /**
     * A CEL string to filter results; See the [CEL Search](https://developer.apexclearing.com/apex-fintech-solutions/docs/cel-search) page in Guides for more information; If empty, all subscriptions the user has permission to view will be returned; Filter options include:
     *
     * @remarks
     *  `name`
     *  `subscription_id`
     *  `client_id`
     *  `correspondent_id`
     *  `display_name`
     *  `event_types`
     *  `state`
     *  `http_callback.url`
     *  `http_callback.timeout_seconds`
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
export type SubscriberListPushSubscriptionsResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    listPushSubscriptionsResponse?: components.ListPushSubscriptionsResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request was not well formed.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const SubscriberListPushSubscriptionsRequest$inboundSchema: z.ZodType<SubscriberListPushSubscriptionsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type SubscriberListPushSubscriptionsRequest$Outbound = {
    filter?: string | undefined;
    page_size?: number | undefined;
    page_token?: string | undefined;
};
/** @internal */
export declare const SubscriberListPushSubscriptionsRequest$outboundSchema: z.ZodType<SubscriberListPushSubscriptionsRequest$Outbound, z.ZodTypeDef, SubscriberListPushSubscriptionsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SubscriberListPushSubscriptionsRequest$ {
    /** @deprecated use `SubscriberListPushSubscriptionsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SubscriberListPushSubscriptionsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `SubscriberListPushSubscriptionsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SubscriberListPushSubscriptionsRequest$Outbound, z.ZodTypeDef, SubscriberListPushSubscriptionsRequest>;
    /** @deprecated use `SubscriberListPushSubscriptionsRequest$Outbound` instead. */
    type Outbound = SubscriberListPushSubscriptionsRequest$Outbound;
}
export declare function subscriberListPushSubscriptionsRequestToJSON(subscriberListPushSubscriptionsRequest: SubscriberListPushSubscriptionsRequest): string;
export declare function subscriberListPushSubscriptionsRequestFromJSON(jsonString: string): SafeParseResult<SubscriberListPushSubscriptionsRequest, SDKValidationError>;
/** @internal */
export declare const SubscriberListPushSubscriptionsResponse$inboundSchema: z.ZodType<SubscriberListPushSubscriptionsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type SubscriberListPushSubscriptionsResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    ListPushSubscriptionsResponse?: components.ListPushSubscriptionsResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const SubscriberListPushSubscriptionsResponse$outboundSchema: z.ZodType<SubscriberListPushSubscriptionsResponse$Outbound, z.ZodTypeDef, SubscriberListPushSubscriptionsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SubscriberListPushSubscriptionsResponse$ {
    /** @deprecated use `SubscriberListPushSubscriptionsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SubscriberListPushSubscriptionsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `SubscriberListPushSubscriptionsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SubscriberListPushSubscriptionsResponse$Outbound, z.ZodTypeDef, SubscriberListPushSubscriptionsResponse>;
    /** @deprecated use `SubscriberListPushSubscriptionsResponse$Outbound` instead. */
    type Outbound = SubscriberListPushSubscriptionsResponse$Outbound;
}
export declare function subscriberListPushSubscriptionsResponseToJSON(subscriberListPushSubscriptionsResponse: SubscriberListPushSubscriptionsResponse): string;
export declare function subscriberListPushSubscriptionsResponseFromJSON(jsonString: string): SafeParseResult<SubscriberListPushSubscriptionsResponse, SDKValidationError>;
//# sourceMappingURL=subscriberlistpushsubscriptions.d.ts.map