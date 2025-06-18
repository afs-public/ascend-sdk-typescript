import * as z from "zod";
import { HttpPushCallbackCreate, HttpPushCallbackCreate$Outbound } from "./httppushcallbackcreate.js";
/**
 * Configuration information about a push subscription
 */
export type PushSubscriptionCreate = {
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
    displayName: string;
    /**
     * Filter for event types; ["\*"] matches all values; Suffix wildcards using "\*" (e.g. ["account.\*"]) are supported
     */
    eventTypes: Array<string>;
    /**
     * Configuration information about an HTTP target callback
     */
    httpCallback?: HttpPushCallbackCreate | undefined;
};
/** @internal */
export declare const PushSubscriptionCreate$inboundSchema: z.ZodType<PushSubscriptionCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type PushSubscriptionCreate$Outbound = {
    client_id?: string | undefined;
    correspondent_id?: string | undefined;
    display_name: string;
    event_types: Array<string>;
    http_callback?: HttpPushCallbackCreate$Outbound | undefined;
};
/** @internal */
export declare const PushSubscriptionCreate$outboundSchema: z.ZodType<PushSubscriptionCreate$Outbound, z.ZodTypeDef, PushSubscriptionCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PushSubscriptionCreate$ {
    /** @deprecated use `PushSubscriptionCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PushSubscriptionCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `PushSubscriptionCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PushSubscriptionCreate$Outbound, z.ZodTypeDef, PushSubscriptionCreate>;
    /** @deprecated use `PushSubscriptionCreate$Outbound` instead. */
    type Outbound = PushSubscriptionCreate$Outbound;
}
//# sourceMappingURL=pushsubscriptioncreate.d.ts.map