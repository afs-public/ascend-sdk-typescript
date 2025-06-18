import * as components from "../models/components/index.js";
import { HTTPClient } from "./http.js";
import { Logger } from "./logger.js";
import { RetryConfig } from "./retries.js";
/**
 * our uat environment
 */
export declare const ServerUat = "uat";
/**
 * our production environment
 */
export declare const ServerProd = "prod";
/**
 * our sandbox environment
 */
export declare const ServerSbx = "sbx";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: {
    readonly uat: "https://uat.apexapis.com";
    readonly prod: "https://api.apexapis.com";
    readonly sbx: "https://sbx.apexapis.com";
};
export type SDKOptions = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: components.Security | (() => Promise<components.Security>);
    httpClient?: HTTPClient;
    /**
     * Allows overriding the default server used by the SDK
     */
    server?: keyof typeof ServerList;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: RetryConfig;
    timeoutMs?: number;
    debugLogger?: Logger;
};
export declare function serverURLFromOptions(options: SDKOptions): URL | null;
export declare const SDK_METADATA: {
    readonly language: "typescript";
    readonly openapiDocVersion: "v1:20250617:uat:6f66f0a5cade";
    readonly sdkVersion: "1.5.6";
    readonly genVersion: "2.437.1";
    readonly userAgent: "speakeasy-sdk/typescript 1.5.6 2.437.1 v1:20250617:uat:6f66f0a5cade @apexfintechsolutions/ascend-sdk";
};
//# sourceMappingURL=config.d.ts.map