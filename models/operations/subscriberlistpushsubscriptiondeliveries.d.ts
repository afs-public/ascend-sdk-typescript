import * as z from "zod";
import * as components from "../components/index.js";
export type SubscriberListPushSubscriptionDeliveriesRequest = {
    /**
     * The subscription id.
     */
    subscriptionId: string;
    /**
     * A CEL string to filter results; See the [CEL Search](https://developer.apexclearing.com/apex-fintech-solutions/docs/cel-search) page in Guides for more information; If left empty, all deliveries the user has permission to view are returned; Filter options include:
     *
     * @remarks
     *  `name`
     *  `delivery_id`
     *  `event`
     *  `event_publish_time`
     *  `result`
     *  `last_response`
     *  `last_send_time`
     *  `duration`
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
export type SubscriberListPushSubscriptionDeliveriesResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    listPushSubscriptionDeliveriesResponse?: components.ListPushSubscriptionDeliveriesResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request was not well formed.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const SubscriberListPushSubscriptionDeliveriesRequest$inboundSchema: z.ZodType<SubscriberListPushSubscriptionDeliveriesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type SubscriberListPushSubscriptionDeliveriesRequest$Outbound = {
    subscription_id: string;
    filter?: string | undefined;
    page_size?: number | undefined;
    page_token?: string | undefined;
};
/** @internal */
export declare const SubscriberListPushSubscriptionDeliveriesRequest$outboundSchema: z.ZodType<SubscriberListPushSubscriptionDeliveriesRequest$Outbound, z.ZodTypeDef, SubscriberListPushSubscriptionDeliveriesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SubscriberListPushSubscriptionDeliveriesRequest$ {
    /** @deprecated use `SubscriberListPushSubscriptionDeliveriesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SubscriberListPushSubscriptionDeliveriesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `SubscriberListPushSubscriptionDeliveriesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SubscriberListPushSubscriptionDeliveriesRequest$Outbound, z.ZodTypeDef, SubscriberListPushSubscriptionDeliveriesRequest>;
    /** @deprecated use `SubscriberListPushSubscriptionDeliveriesRequest$Outbound` instead. */
    type Outbound = SubscriberListPushSubscriptionDeliveriesRequest$Outbound;
}
/** @internal */
export declare const SubscriberListPushSubscriptionDeliveriesResponse$inboundSchema: z.ZodType<SubscriberListPushSubscriptionDeliveriesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type SubscriberListPushSubscriptionDeliveriesResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    ListPushSubscriptionDeliveriesResponse?: components.ListPushSubscriptionDeliveriesResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const SubscriberListPushSubscriptionDeliveriesResponse$outboundSchema: z.ZodType<SubscriberListPushSubscriptionDeliveriesResponse$Outbound, z.ZodTypeDef, SubscriberListPushSubscriptionDeliveriesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SubscriberListPushSubscriptionDeliveriesResponse$ {
    /** @deprecated use `SubscriberListPushSubscriptionDeliveriesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SubscriberListPushSubscriptionDeliveriesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `SubscriberListPushSubscriptionDeliveriesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SubscriberListPushSubscriptionDeliveriesResponse$Outbound, z.ZodTypeDef, SubscriberListPushSubscriptionDeliveriesResponse>;
    /** @deprecated use `SubscriberListPushSubscriptionDeliveriesResponse$Outbound` instead. */
    type Outbound = SubscriberListPushSubscriptionDeliveriesResponse$Outbound;
}
//# sourceMappingURL=subscriberlistpushsubscriptiondeliveries.d.ts.map