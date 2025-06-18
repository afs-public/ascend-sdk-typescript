import * as z from "zod";
import { PushSubscriptionDelivery, PushSubscriptionDelivery$Outbound } from "./pushsubscriptiondelivery.js";
/**
 * A response to a list push subscription deliveries method
 */
export type ListPushSubscriptionDeliveriesResponse = {
    /**
     * Page token used for pagination; Supplying a page token returns the next page of results
     */
    nextPageToken?: string | undefined;
    /**
     * The returned collection of deliveries
     */
    pushSubscriptionDeliveries?: Array<PushSubscriptionDelivery> | undefined;
};
/** @internal */
export declare const ListPushSubscriptionDeliveriesResponse$inboundSchema: z.ZodType<ListPushSubscriptionDeliveriesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListPushSubscriptionDeliveriesResponse$Outbound = {
    next_page_token?: string | undefined;
    push_subscription_deliveries?: Array<PushSubscriptionDelivery$Outbound> | undefined;
};
/** @internal */
export declare const ListPushSubscriptionDeliveriesResponse$outboundSchema: z.ZodType<ListPushSubscriptionDeliveriesResponse$Outbound, z.ZodTypeDef, ListPushSubscriptionDeliveriesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListPushSubscriptionDeliveriesResponse$ {
    /** @deprecated use `ListPushSubscriptionDeliveriesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListPushSubscriptionDeliveriesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListPushSubscriptionDeliveriesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListPushSubscriptionDeliveriesResponse$Outbound, z.ZodTypeDef, ListPushSubscriptionDeliveriesResponse>;
    /** @deprecated use `ListPushSubscriptionDeliveriesResponse$Outbound` instead. */
    type Outbound = ListPushSubscriptionDeliveriesResponse$Outbound;
}
//# sourceMappingURL=listpushsubscriptiondeliveriesresponse.d.ts.map