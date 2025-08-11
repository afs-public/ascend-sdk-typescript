import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The information about an HTTP target callback
 */
export type HttpCallback = {
    /**
     * The maximum amount of time, in seconds, the service will wait for an acknowledgement of a delivery. If a value of 0 or no value is specified, the timeout will default to 10 seconds.
     */
    timeoutSeconds?: number | undefined;
    /**
     * The URL address of the client HTTP server that will receive the events via POST; URLs must be in the form of https://{domain}[/{path}]
     */
    url?: string | undefined;
};
/**
 * The current status of the subscription
 */
export declare enum State {
    PushSubscriptionStateUnspecified = "PUSH_SUBSCRIPTION_STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Updating = "UPDATING",
    Deleting = "DELETING"
}
/**
 * The current status of the subscription
 */
export type StateOpen = OpenEnum<typeof State>;
/**
 * Configuration information about a push subscription
 */
export type PushSubscription = {
    /**
     * The client that owns the subscription. A client subscription will receive events for it and all of its correspondents. This can only be set at creation time and is mutually exclusive with correspondent_id.
     */
    clientId?: string | undefined;
    /**
     * The correspondent that owns the subscription. A correspondent subscription will receive events only for itself. This can only be set at creation time and is mutually exclusive with client_id.
     */
    correspondentId?: string | undefined;
    /**
     * The user-defined name for the subscription
     */
    displayName?: string | undefined;
    /**
     * Filter for event types; ["\*"] matches all values; Suffix wildcards using "\*" (e.g. ["account.\*"]) are supported
     */
    eventTypes?: Array<string> | undefined;
    /**
     * The information about an HTTP target callback
     */
    httpCallback?: HttpCallback | null | undefined;
    /**
     * The resource name of the subscription; Format: subscriptions/{subscription}
     */
    name?: string | undefined;
    /**
     * The current status of the subscription
     */
    state?: StateOpen | undefined;
    /**
     * The unique identifier for the subscription
     */
    subscriptionId?: string | undefined;
};
/** @internal */
export declare const HttpCallback$inboundSchema: z.ZodType<HttpCallback, z.ZodTypeDef, unknown>;
/** @internal */
export type HttpCallback$Outbound = {
    timeout_seconds?: number | undefined;
    url?: string | undefined;
};
/** @internal */
export declare const HttpCallback$outboundSchema: z.ZodType<HttpCallback$Outbound, z.ZodTypeDef, HttpCallback>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace HttpCallback$ {
    /** @deprecated use `HttpCallback$inboundSchema` instead. */
    const inboundSchema: z.ZodType<HttpCallback, z.ZodTypeDef, unknown>;
    /** @deprecated use `HttpCallback$outboundSchema` instead. */
    const outboundSchema: z.ZodType<HttpCallback$Outbound, z.ZodTypeDef, HttpCallback>;
    /** @deprecated use `HttpCallback$Outbound` instead. */
    type Outbound = HttpCallback$Outbound;
}
export declare function httpCallbackToJSON(httpCallback: HttpCallback): string;
export declare function httpCallbackFromJSON(jsonString: string): SafeParseResult<HttpCallback, SDKValidationError>;
/** @internal */
export declare const State$inboundSchema: z.ZodType<StateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const State$outboundSchema: z.ZodType<StateOpen, z.ZodTypeDef, StateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace State$ {
    /** @deprecated use `State$inboundSchema` instead. */
    const inboundSchema: z.ZodType<StateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `State$outboundSchema` instead. */
    const outboundSchema: z.ZodType<StateOpen, z.ZodTypeDef, StateOpen>;
}
/** @internal */
export declare const PushSubscription$inboundSchema: z.ZodType<PushSubscription, z.ZodTypeDef, unknown>;
/** @internal */
export type PushSubscription$Outbound = {
    client_id?: string | undefined;
    correspondent_id?: string | undefined;
    display_name?: string | undefined;
    event_types?: Array<string> | undefined;
    http_callback?: HttpCallback$Outbound | null | undefined;
    name?: string | undefined;
    state?: string | undefined;
    subscription_id?: string | undefined;
};
/** @internal */
export declare const PushSubscription$outboundSchema: z.ZodType<PushSubscription$Outbound, z.ZodTypeDef, PushSubscription>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PushSubscription$ {
    /** @deprecated use `PushSubscription$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PushSubscription, z.ZodTypeDef, unknown>;
    /** @deprecated use `PushSubscription$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PushSubscription$Outbound, z.ZodTypeDef, PushSubscription>;
    /** @deprecated use `PushSubscription$Outbound` instead. */
    type Outbound = PushSubscription$Outbound;
}
export declare function pushSubscriptionToJSON(pushSubscription: PushSubscription): string;
export declare function pushSubscriptionFromJSON(jsonString: string): SafeParseResult<PushSubscription, SDKValidationError>;
//# sourceMappingURL=pushsubscription.d.ts.map