import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * The outcome of the delivery
 */
export declare enum Result {
    PushSubscriptionDeliveryResultUnspecified = "PUSH_SUBSCRIPTION_DELIVERY_RESULT_UNSPECIFIED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}
/**
 * The outcome of the delivery
 */
export type ResultOpen = OpenEnum<typeof Result>;
/**
 * Represents the delivery results of an event for a push subscription
 */
export type PushSubscriptionDelivery = {
    /**
     * The unique identifier for the delivery
     */
    deliveryId?: string | undefined;
    /**
     * The total time spent delivering
     */
    duration?: string | undefined;
    /**
     * The resource name of the event; Format: messages/{message}
     */
    event?: string | undefined;
    /**
     * The date and time of the event publication
     */
    eventPublishTime?: Date | null | undefined;
    /**
     * The last response received when delivering the event
     */
    lastResponse?: string | undefined;
    /**
     * The time the event was last pushed
     */
    lastSendTime?: Date | null | undefined;
    /**
     * The resource name of the delivery; Format: subscriptions/{subscription}/deliveries/{delivery}
     */
    name?: string | undefined;
    /**
     * The outcome of the delivery
     */
    result?: ResultOpen | undefined;
};
/** @internal */
export declare const Result$inboundSchema: z.ZodType<ResultOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const Result$outboundSchema: z.ZodType<ResultOpen, z.ZodTypeDef, ResultOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Result$ {
    /** @deprecated use `Result$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ResultOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `Result$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ResultOpen, z.ZodTypeDef, ResultOpen>;
}
/** @internal */
export declare const PushSubscriptionDelivery$inboundSchema: z.ZodType<PushSubscriptionDelivery, z.ZodTypeDef, unknown>;
/** @internal */
export type PushSubscriptionDelivery$Outbound = {
    delivery_id?: string | undefined;
    duration?: string | undefined;
    event?: string | undefined;
    event_publish_time?: string | null | undefined;
    last_response?: string | undefined;
    last_send_time?: string | null | undefined;
    name?: string | undefined;
    result?: string | undefined;
};
/** @internal */
export declare const PushSubscriptionDelivery$outboundSchema: z.ZodType<PushSubscriptionDelivery$Outbound, z.ZodTypeDef, PushSubscriptionDelivery>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PushSubscriptionDelivery$ {
    /** @deprecated use `PushSubscriptionDelivery$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PushSubscriptionDelivery, z.ZodTypeDef, unknown>;
    /** @deprecated use `PushSubscriptionDelivery$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PushSubscriptionDelivery$Outbound, z.ZodTypeDef, PushSubscriptionDelivery>;
    /** @deprecated use `PushSubscriptionDelivery$Outbound` instead. */
    type Outbound = PushSubscriptionDelivery$Outbound;
}
//# sourceMappingURL=pushsubscriptiondelivery.d.ts.map