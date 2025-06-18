import * as z from "zod";
/**
 * Configuration information about an HTTP target callback
 */
export type HttpPushCallbackCreate = {
    /**
     * A string that will be used to generate a signature for each event push request; This value cannot be more than 64KiB
     */
    clientSecret: string;
    /**
     * The maximum amount of time, in seconds, the service will wait for an acknowledgement of a delivery. If a value of 0 or no value is specified, the timeout will default to 10 seconds.
     */
    timeoutSeconds?: number | undefined;
    /**
     * The URL address of the client HTTP server that will receive the events via POST; URLs must be in the form of https://{domain}[/{path}]
     */
    url: string;
};
/** @internal */
export declare const HttpPushCallbackCreate$inboundSchema: z.ZodType<HttpPushCallbackCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type HttpPushCallbackCreate$Outbound = {
    client_secret: string;
    timeout_seconds?: number | undefined;
    url: string;
};
/** @internal */
export declare const HttpPushCallbackCreate$outboundSchema: z.ZodType<HttpPushCallbackCreate$Outbound, z.ZodTypeDef, HttpPushCallbackCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace HttpPushCallbackCreate$ {
    /** @deprecated use `HttpPushCallbackCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<HttpPushCallbackCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `HttpPushCallbackCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<HttpPushCallbackCreate$Outbound, z.ZodTypeDef, HttpPushCallbackCreate>;
    /** @deprecated use `HttpPushCallbackCreate$Outbound` instead. */
    type Outbound = HttpPushCallbackCreate$Outbound;
}
//# sourceMappingURL=httppushcallbackcreate.d.ts.map