import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class Subscriber extends ClientSDK {
    /**
     * Create Push Subscription
     *
     * @remarks
     * Creates a new push subscription for event notifications.
     */
    createPushSubscription(request: components.PushSubscriptionCreate, options?: RequestOptions): Promise<operations.SubscriberCreatePushSubscriptionResponse>;
    /**
     * List Push Subscriptions
     *
     * @remarks
     * Gets a list of push subscriptions.
     */
    listPushSubscriptions(filter?: string | undefined, pageSize?: number | undefined, pageToken?: string | undefined, options?: RequestOptions): Promise<operations.SubscriberListPushSubscriptionsResponse>;
    /**
     * Get Push Subscription
     *
     * @remarks
     * Gets the details of a specific push subscription.
     */
    getPushSubscription(subscriptionId: string, options?: RequestOptions): Promise<operations.SubscriberGetPushSubscriptionResponse>;
    /**
     * Update Subscription
     *
     * @remarks
     * Updates the details of a push subscription.
     */
    updatePushSubscription(pushSubscriptionUpdate: components.PushSubscriptionUpdate, subscriptionId: string, updateMask?: string | undefined, options?: RequestOptions): Promise<operations.SubscriberUpdatePushSubscriptionResponse>;
    /**
     * Delete Subscription
     *
     * @remarks
     * Stops receiving events from a push subscription, and then deletes it.
     */
    deletePushSubscription(subscriptionId: string, options?: RequestOptions): Promise<operations.SubscriberDeletePushSubscriptionResponse>;
    /**
     * Get Subscription Event Delivery
     *
     * @remarks
     * Gets the details of a specific push subscription delivery.
     */
    getPushSubscriptionDelivery(subscriptionId: string, deliveryId: string, options?: RequestOptions): Promise<operations.SubscriberGetPushSubscriptionDeliveryResponse>;
    /**
     * List Push Subscription Event Deliveries
     *
     * @remarks
     * Gets a list of a push subscription's event deliveries.
     */
    listPushSubscriptionDeliveries(subscriptionId: string, filter?: string | undefined, pageSize?: number | undefined, pageToken?: string | undefined, options?: RequestOptions): Promise<operations.SubscriberListPushSubscriptionDeliveriesResponse>;
}
//# sourceMappingURL=subscriber.d.ts.map