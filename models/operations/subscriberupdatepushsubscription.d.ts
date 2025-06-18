import * as z from "zod";
import * as components from "../components/index.js";
export type SubscriberUpdatePushSubscriptionRequest = {
    /**
     * The subscription id.
     */
    subscriptionId: string;
    /**
     * The fields to update in subscription
     */
    updateMask?: string | undefined;
    pushSubscriptionUpdate: components.PushSubscriptionUpdate;
};
export type SubscriberUpdatePushSubscriptionResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    pushSubscription?: components.PushSubscription | undefined;
    /**
     * INVALID_ARGUMENT: The request was not well formed.
     *
     * @remarks
     * FAILED_PRECONDITION: The subscription cannot be updated in its current state.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const SubscriberUpdatePushSubscriptionRequest$inboundSchema: z.ZodType<SubscriberUpdatePushSubscriptionRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type SubscriberUpdatePushSubscriptionRequest$Outbound = {
    subscription_id: string;
    update_mask?: string | undefined;
    PushSubscriptionUpdate: components.PushSubscriptionUpdate$Outbound;
};
/** @internal */
export declare const SubscriberUpdatePushSubscriptionRequest$outboundSchema: z.ZodType<SubscriberUpdatePushSubscriptionRequest$Outbound, z.ZodTypeDef, SubscriberUpdatePushSubscriptionRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SubscriberUpdatePushSubscriptionRequest$ {
    /** @deprecated use `SubscriberUpdatePushSubscriptionRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SubscriberUpdatePushSubscriptionRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `SubscriberUpdatePushSubscriptionRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SubscriberUpdatePushSubscriptionRequest$Outbound, z.ZodTypeDef, SubscriberUpdatePushSubscriptionRequest>;
    /** @deprecated use `SubscriberUpdatePushSubscriptionRequest$Outbound` instead. */
    type Outbound = SubscriberUpdatePushSubscriptionRequest$Outbound;
}
/** @internal */
export declare const SubscriberUpdatePushSubscriptionResponse$inboundSchema: z.ZodType<SubscriberUpdatePushSubscriptionResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type SubscriberUpdatePushSubscriptionResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    PushSubscription?: components.PushSubscription$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const SubscriberUpdatePushSubscriptionResponse$outboundSchema: z.ZodType<SubscriberUpdatePushSubscriptionResponse$Outbound, z.ZodTypeDef, SubscriberUpdatePushSubscriptionResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SubscriberUpdatePushSubscriptionResponse$ {
    /** @deprecated use `SubscriberUpdatePushSubscriptionResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SubscriberUpdatePushSubscriptionResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `SubscriberUpdatePushSubscriptionResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SubscriberUpdatePushSubscriptionResponse$Outbound, z.ZodTypeDef, SubscriberUpdatePushSubscriptionResponse>;
    /** @deprecated use `SubscriberUpdatePushSubscriptionResponse$Outbound` instead. */
    type Outbound = SubscriberUpdatePushSubscriptionResponse$Outbound;
}
//# sourceMappingURL=subscriberupdatepushsubscription.d.ts.map