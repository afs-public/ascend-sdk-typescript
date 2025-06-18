import * as z from "zod";
import * as components from "../components/index.js";
export type SubscriberGetPushSubscriptionDeliveryRequest = {
    /**
     * The subscription id.
     */
    subscriptionId: string;
    /**
     * The delivery id.
     */
    deliveryId: string;
};
export type SubscriberGetPushSubscriptionDeliveryResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    pushSubscriptionDelivery?: components.PushSubscriptionDelivery | undefined;
    /**
     * INVALID_ARGUMENT: The request was not well formed.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const SubscriberGetPushSubscriptionDeliveryRequest$inboundSchema: z.ZodType<SubscriberGetPushSubscriptionDeliveryRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type SubscriberGetPushSubscriptionDeliveryRequest$Outbound = {
    subscription_id: string;
    delivery_id: string;
};
/** @internal */
export declare const SubscriberGetPushSubscriptionDeliveryRequest$outboundSchema: z.ZodType<SubscriberGetPushSubscriptionDeliveryRequest$Outbound, z.ZodTypeDef, SubscriberGetPushSubscriptionDeliveryRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SubscriberGetPushSubscriptionDeliveryRequest$ {
    /** @deprecated use `SubscriberGetPushSubscriptionDeliveryRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SubscriberGetPushSubscriptionDeliveryRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `SubscriberGetPushSubscriptionDeliveryRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SubscriberGetPushSubscriptionDeliveryRequest$Outbound, z.ZodTypeDef, SubscriberGetPushSubscriptionDeliveryRequest>;
    /** @deprecated use `SubscriberGetPushSubscriptionDeliveryRequest$Outbound` instead. */
    type Outbound = SubscriberGetPushSubscriptionDeliveryRequest$Outbound;
}
/** @internal */
export declare const SubscriberGetPushSubscriptionDeliveryResponse$inboundSchema: z.ZodType<SubscriberGetPushSubscriptionDeliveryResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type SubscriberGetPushSubscriptionDeliveryResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    PushSubscriptionDelivery?: components.PushSubscriptionDelivery$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const SubscriberGetPushSubscriptionDeliveryResponse$outboundSchema: z.ZodType<SubscriberGetPushSubscriptionDeliveryResponse$Outbound, z.ZodTypeDef, SubscriberGetPushSubscriptionDeliveryResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SubscriberGetPushSubscriptionDeliveryResponse$ {
    /** @deprecated use `SubscriberGetPushSubscriptionDeliveryResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SubscriberGetPushSubscriptionDeliveryResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `SubscriberGetPushSubscriptionDeliveryResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SubscriberGetPushSubscriptionDeliveryResponse$Outbound, z.ZodTypeDef, SubscriberGetPushSubscriptionDeliveryResponse>;
    /** @deprecated use `SubscriberGetPushSubscriptionDeliveryResponse$Outbound` instead. */
    type Outbound = SubscriberGetPushSubscriptionDeliveryResponse$Outbound;
}
//# sourceMappingURL=subscribergetpushsubscriptiondelivery.d.ts.map