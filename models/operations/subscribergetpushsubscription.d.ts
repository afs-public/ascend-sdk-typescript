import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type SubscriberGetPushSubscriptionRequest = {
    /**
     * The subscription id.
     */
    subscriptionId: string;
};
export type SubscriberGetPushSubscriptionResponse = {
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
export declare const SubscriberGetPushSubscriptionRequest$inboundSchema: z.ZodType<SubscriberGetPushSubscriptionRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type SubscriberGetPushSubscriptionRequest$Outbound = {
    subscription_id: string;
};
/** @internal */
export declare const SubscriberGetPushSubscriptionRequest$outboundSchema: z.ZodType<SubscriberGetPushSubscriptionRequest$Outbound, z.ZodTypeDef, SubscriberGetPushSubscriptionRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SubscriberGetPushSubscriptionRequest$ {
    /** @deprecated use `SubscriberGetPushSubscriptionRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SubscriberGetPushSubscriptionRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `SubscriberGetPushSubscriptionRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SubscriberGetPushSubscriptionRequest$Outbound, z.ZodTypeDef, SubscriberGetPushSubscriptionRequest>;
    /** @deprecated use `SubscriberGetPushSubscriptionRequest$Outbound` instead. */
    type Outbound = SubscriberGetPushSubscriptionRequest$Outbound;
}
export declare function subscriberGetPushSubscriptionRequestToJSON(subscriberGetPushSubscriptionRequest: SubscriberGetPushSubscriptionRequest): string;
export declare function subscriberGetPushSubscriptionRequestFromJSON(jsonString: string): SafeParseResult<SubscriberGetPushSubscriptionRequest, SDKValidationError>;
/** @internal */
export declare const SubscriberGetPushSubscriptionResponse$inboundSchema: z.ZodType<SubscriberGetPushSubscriptionResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type SubscriberGetPushSubscriptionResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    PushSubscription?: components.PushSubscription$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const SubscriberGetPushSubscriptionResponse$outboundSchema: z.ZodType<SubscriberGetPushSubscriptionResponse$Outbound, z.ZodTypeDef, SubscriberGetPushSubscriptionResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SubscriberGetPushSubscriptionResponse$ {
    /** @deprecated use `SubscriberGetPushSubscriptionResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SubscriberGetPushSubscriptionResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `SubscriberGetPushSubscriptionResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SubscriberGetPushSubscriptionResponse$Outbound, z.ZodTypeDef, SubscriberGetPushSubscriptionResponse>;
    /** @deprecated use `SubscriberGetPushSubscriptionResponse$Outbound` instead. */
    type Outbound = SubscriberGetPushSubscriptionResponse$Outbound;
}
export declare function subscriberGetPushSubscriptionResponseToJSON(subscriberGetPushSubscriptionResponse: SubscriberGetPushSubscriptionResponse): string;
export declare function subscriberGetPushSubscriptionResponseFromJSON(jsonString: string): SafeParseResult<SubscriberGetPushSubscriptionResponse, SDKValidationError>;
//# sourceMappingURL=subscribergetpushsubscription.d.ts.map