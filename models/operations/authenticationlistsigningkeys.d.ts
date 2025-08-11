import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AuthenticationListSigningKeysSecurity = {
    apiKeyAuth: string;
};
export type AuthenticationListSigningKeysRequest = {
    /**
     * The number of entries to return in a single page; Default = 100; Maximum = 1000
     */
    pageSize?: number | undefined;
    /**
     * Page token used for pagination; Supplying a page token returns the next page of results
     */
    pageToken?: string | undefined;
};
export type AuthenticationListSigningKeysResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    listSigningKeysResponse?: components.ListSigningKeysResponse | undefined;
    /**
     * INTERNAL: An internal server error occurred.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AuthenticationListSigningKeysSecurity$inboundSchema: z.ZodType<AuthenticationListSigningKeysSecurity, z.ZodTypeDef, unknown>;
/** @internal */
export type AuthenticationListSigningKeysSecurity$Outbound = {
    ApiKeyAuth: string;
};
/** @internal */
export declare const AuthenticationListSigningKeysSecurity$outboundSchema: z.ZodType<AuthenticationListSigningKeysSecurity$Outbound, z.ZodTypeDef, AuthenticationListSigningKeysSecurity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AuthenticationListSigningKeysSecurity$ {
    /** @deprecated use `AuthenticationListSigningKeysSecurity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AuthenticationListSigningKeysSecurity, z.ZodTypeDef, unknown>;
    /** @deprecated use `AuthenticationListSigningKeysSecurity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AuthenticationListSigningKeysSecurity$Outbound, z.ZodTypeDef, AuthenticationListSigningKeysSecurity>;
    /** @deprecated use `AuthenticationListSigningKeysSecurity$Outbound` instead. */
    type Outbound = AuthenticationListSigningKeysSecurity$Outbound;
}
export declare function authenticationListSigningKeysSecurityToJSON(authenticationListSigningKeysSecurity: AuthenticationListSigningKeysSecurity): string;
export declare function authenticationListSigningKeysSecurityFromJSON(jsonString: string): SafeParseResult<AuthenticationListSigningKeysSecurity, SDKValidationError>;
/** @internal */
export declare const AuthenticationListSigningKeysRequest$inboundSchema: z.ZodType<AuthenticationListSigningKeysRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AuthenticationListSigningKeysRequest$Outbound = {
    page_size?: number | undefined;
    page_token?: string | undefined;
};
/** @internal */
export declare const AuthenticationListSigningKeysRequest$outboundSchema: z.ZodType<AuthenticationListSigningKeysRequest$Outbound, z.ZodTypeDef, AuthenticationListSigningKeysRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AuthenticationListSigningKeysRequest$ {
    /** @deprecated use `AuthenticationListSigningKeysRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AuthenticationListSigningKeysRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AuthenticationListSigningKeysRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AuthenticationListSigningKeysRequest$Outbound, z.ZodTypeDef, AuthenticationListSigningKeysRequest>;
    /** @deprecated use `AuthenticationListSigningKeysRequest$Outbound` instead. */
    type Outbound = AuthenticationListSigningKeysRequest$Outbound;
}
export declare function authenticationListSigningKeysRequestToJSON(authenticationListSigningKeysRequest: AuthenticationListSigningKeysRequest): string;
export declare function authenticationListSigningKeysRequestFromJSON(jsonString: string): SafeParseResult<AuthenticationListSigningKeysRequest, SDKValidationError>;
/** @internal */
export declare const AuthenticationListSigningKeysResponse$inboundSchema: z.ZodType<AuthenticationListSigningKeysResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AuthenticationListSigningKeysResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    ListSigningKeysResponse?: components.ListSigningKeysResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AuthenticationListSigningKeysResponse$outboundSchema: z.ZodType<AuthenticationListSigningKeysResponse$Outbound, z.ZodTypeDef, AuthenticationListSigningKeysResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AuthenticationListSigningKeysResponse$ {
    /** @deprecated use `AuthenticationListSigningKeysResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AuthenticationListSigningKeysResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AuthenticationListSigningKeysResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AuthenticationListSigningKeysResponse$Outbound, z.ZodTypeDef, AuthenticationListSigningKeysResponse>;
    /** @deprecated use `AuthenticationListSigningKeysResponse$Outbound` instead. */
    type Outbound = AuthenticationListSigningKeysResponse$Outbound;
}
export declare function authenticationListSigningKeysResponseToJSON(authenticationListSigningKeysResponse: AuthenticationListSigningKeysResponse): string;
export declare function authenticationListSigningKeysResponseFromJSON(jsonString: string): SafeParseResult<AuthenticationListSigningKeysResponse, SDKValidationError>;
//# sourceMappingURL=authenticationlistsigningkeys.d.ts.map