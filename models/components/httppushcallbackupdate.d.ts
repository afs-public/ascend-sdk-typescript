import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Configuration information about an HTTP target callback
 */
export type HttpPushCallbackUpdate = {
    /**
     * A string that will be used to generate a signature for each event push request; This value cannot be more than 64KiB
     */
    clientSecret?: string | undefined;
    /**
     * The maximum amount of time, in seconds, the service will wait for an acknowledgement of a delivery. If a value of 0 or no value is specified, the timeout will default to 10 seconds.
     */
    timeoutSeconds?: number | undefined;
    /**
     * The URL address of the client HTTP server that will receive the events via POST; URLs must be in the form of https://{domain}[/{path}]
     */
    url?: string | undefined;
};
/** @internal */
export declare const HttpPushCallbackUpdate$inboundSchema: z.ZodType<HttpPushCallbackUpdate, z.ZodTypeDef, unknown>;
/** @internal */
export type HttpPushCallbackUpdate$Outbound = {
    client_secret?: string | undefined;
    timeout_seconds?: number | undefined;
    url?: string | undefined;
};
/** @internal */
export declare const HttpPushCallbackUpdate$outboundSchema: z.ZodType<HttpPushCallbackUpdate$Outbound, z.ZodTypeDef, HttpPushCallbackUpdate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace HttpPushCallbackUpdate$ {
    /** @deprecated use `HttpPushCallbackUpdate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<HttpPushCallbackUpdate, z.ZodTypeDef, unknown>;
    /** @deprecated use `HttpPushCallbackUpdate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<HttpPushCallbackUpdate$Outbound, z.ZodTypeDef, HttpPushCallbackUpdate>;
    /** @deprecated use `HttpPushCallbackUpdate$Outbound` instead. */
    type Outbound = HttpPushCallbackUpdate$Outbound;
}
export declare function httpPushCallbackUpdateToJSON(httpPushCallbackUpdate: HttpPushCallbackUpdate): string;
export declare function httpPushCallbackUpdateFromJSON(jsonString: string): SafeParseResult<HttpPushCallbackUpdate, SDKValidationError>;
//# sourceMappingURL=httppushcallbackupdate.d.ts.map