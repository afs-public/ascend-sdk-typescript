import * as z from "zod";
import * as components from "../components/index.js";
export type SubscriberDeletePushSubscriptionRequest = {
    /**
     * The subscription id.
     */
    subscriptionId: string;
};
export type SubscriberDeletePushSubscriptionResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * INVALID_ARGUMENT: The request was not well formed.
     *
     * @remarks
     * FAILED_PRECONDITION: The subscription cannot be deleted in its current state.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const SubscriberDeletePushSubscriptionRequest$inboundSchema: z.ZodType<SubscriberDeletePushSubscriptionRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type SubscriberDeletePushSubscriptionRequest$Outbound = {
    subscription_id: string;
};
/** @internal */
export declare const SubscriberDeletePushSubscriptionRequest$outboundSchema: z.ZodType<SubscriberDeletePushSubscriptionRequest$Outbound, z.ZodTypeDef, SubscriberDeletePushSubscriptionRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SubscriberDeletePushSubscriptionRequest$ {
    /** @deprecated use `SubscriberDeletePushSubscriptionRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SubscriberDeletePushSubscriptionRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `SubscriberDeletePushSubscriptionRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SubscriberDeletePushSubscriptionRequest$Outbound, z.ZodTypeDef, SubscriberDeletePushSubscriptionRequest>;
    /** @deprecated use `SubscriberDeletePushSubscriptionRequest$Outbound` instead. */
    type Outbound = SubscriberDeletePushSubscriptionRequest$Outbound;
}
/** @internal */
export declare const SubscriberDeletePushSubscriptionResponse$inboundSchema: z.ZodType<SubscriberDeletePushSubscriptionResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type SubscriberDeletePushSubscriptionResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const SubscriberDeletePushSubscriptionResponse$outboundSchema: z.ZodType<SubscriberDeletePushSubscriptionResponse$Outbound, z.ZodTypeDef, SubscriberDeletePushSubscriptionResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SubscriberDeletePushSubscriptionResponse$ {
    /** @deprecated use `SubscriberDeletePushSubscriptionResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SubscriberDeletePushSubscriptionResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `SubscriberDeletePushSubscriptionResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SubscriberDeletePushSubscriptionResponse$Outbound, z.ZodTypeDef, SubscriberDeletePushSubscriptionResponse>;
    /** @deprecated use `SubscriberDeletePushSubscriptionResponse$Outbound` instead. */
    type Outbound = SubscriberDeletePushSubscriptionResponse$Outbound;
}
//# sourceMappingURL=subscriberdeletepushsubscription.d.ts.map