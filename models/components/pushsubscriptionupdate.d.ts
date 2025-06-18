import * as z from "zod";
import { HttpPushCallbackUpdate, HttpPushCallbackUpdate$Outbound } from "./httppushcallbackupdate.js";
/**
 * Configuration information about a push subscription
 */
export type PushSubscriptionUpdate = {
    /**
     * The user-defined name for the subscription
     */
    displayName?: string | undefined;
    /**
     * Filter for event types; ["\*"] matches all values; Suffix wildcards using "\*" (e.g. ["account.\*"]) are supported
     */
    eventTypes?: Array<string> | undefined;
    /**
     * Configuration information about an HTTP target callback
     */
    httpCallback?: HttpPushCallbackUpdate | undefined;
};
/** @internal */
export declare const PushSubscriptionUpdate$inboundSchema: z.ZodType<PushSubscriptionUpdate, z.ZodTypeDef, unknown>;
/** @internal */
export type PushSubscriptionUpdate$Outbound = {
    display_name?: string | undefined;
    event_types?: Array<string> | undefined;
    http_callback?: HttpPushCallbackUpdate$Outbound | undefined;
};
/** @internal */
export declare const PushSubscriptionUpdate$outboundSchema: z.ZodType<PushSubscriptionUpdate$Outbound, z.ZodTypeDef, PushSubscriptionUpdate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PushSubscriptionUpdate$ {
    /** @deprecated use `PushSubscriptionUpdate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PushSubscriptionUpdate, z.ZodTypeDef, unknown>;
    /** @deprecated use `PushSubscriptionUpdate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PushSubscriptionUpdate$Outbound, z.ZodTypeDef, PushSubscriptionUpdate>;
    /** @deprecated use `PushSubscriptionUpdate$Outbound` instead. */
    type Outbound = PushSubscriptionUpdate$Outbound;
}
//# sourceMappingURL=pushsubscriptionupdate.d.ts.map