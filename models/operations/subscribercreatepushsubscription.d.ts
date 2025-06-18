import * as z from "zod";
import * as components from "../components/index.js";
export type SubscriberCreatePushSubscriptionResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    pushSubscription?: components.PushSubscription | undefined;
    /**
     * INVALID_ARGUMENT: The request was not well formed.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const SubscriberCreatePushSubscriptionResponse$inboundSchema: z.ZodType<SubscriberCreatePushSubscriptionResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type SubscriberCreatePushSubscriptionResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    PushSubscription?: components.PushSubscription$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const SubscriberCreatePushSubscriptionResponse$outboundSchema: z.ZodType<SubscriberCreatePushSubscriptionResponse$Outbound, z.ZodTypeDef, SubscriberCreatePushSubscriptionResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SubscriberCreatePushSubscriptionResponse$ {
    /** @deprecated use `SubscriberCreatePushSubscriptionResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SubscriberCreatePushSubscriptionResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `SubscriberCreatePushSubscriptionResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SubscriberCreatePushSubscriptionResponse$Outbound, z.ZodTypeDef, SubscriberCreatePushSubscriptionResponse>;
    /** @deprecated use `SubscriberCreatePushSubscriptionResponse$Outbound` instead. */
    type Outbound = SubscriberCreatePushSubscriptionResponse$Outbound;
}
//# sourceMappingURL=subscribercreatepushsubscription.d.ts.map