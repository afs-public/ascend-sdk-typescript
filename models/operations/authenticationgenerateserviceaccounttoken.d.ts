import * as z from "zod";
import * as components from "../components/index.js";
export type AuthenticationGenerateServiceAccountTokenSecurity = {
    apiKeyAuth: string;
};
export type AuthenticationGenerateServiceAccountTokenResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    token?: components.Token | undefined;
    /**
     * INVALID_ARGUMENT: The request was not well formed.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AuthenticationGenerateServiceAccountTokenSecurity$inboundSchema: z.ZodType<AuthenticationGenerateServiceAccountTokenSecurity, z.ZodTypeDef, unknown>;
/** @internal */
export type AuthenticationGenerateServiceAccountTokenSecurity$Outbound = {
    ApiKeyAuth: string;
};
/** @internal */
export declare const AuthenticationGenerateServiceAccountTokenSecurity$outboundSchema: z.ZodType<AuthenticationGenerateServiceAccountTokenSecurity$Outbound, z.ZodTypeDef, AuthenticationGenerateServiceAccountTokenSecurity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AuthenticationGenerateServiceAccountTokenSecurity$ {
    /** @deprecated use `AuthenticationGenerateServiceAccountTokenSecurity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AuthenticationGenerateServiceAccountTokenSecurity, z.ZodTypeDef, unknown>;
    /** @deprecated use `AuthenticationGenerateServiceAccountTokenSecurity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AuthenticationGenerateServiceAccountTokenSecurity$Outbound, z.ZodTypeDef, AuthenticationGenerateServiceAccountTokenSecurity>;
    /** @deprecated use `AuthenticationGenerateServiceAccountTokenSecurity$Outbound` instead. */
    type Outbound = AuthenticationGenerateServiceAccountTokenSecurity$Outbound;
}
/** @internal */
export declare const AuthenticationGenerateServiceAccountTokenResponse$inboundSchema: z.ZodType<AuthenticationGenerateServiceAccountTokenResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AuthenticationGenerateServiceAccountTokenResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    Token?: components.Token$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AuthenticationGenerateServiceAccountTokenResponse$outboundSchema: z.ZodType<AuthenticationGenerateServiceAccountTokenResponse$Outbound, z.ZodTypeDef, AuthenticationGenerateServiceAccountTokenResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AuthenticationGenerateServiceAccountTokenResponse$ {
    /** @deprecated use `AuthenticationGenerateServiceAccountTokenResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AuthenticationGenerateServiceAccountTokenResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AuthenticationGenerateServiceAccountTokenResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AuthenticationGenerateServiceAccountTokenResponse$Outbound, z.ZodTypeDef, AuthenticationGenerateServiceAccountTokenResponse>;
    /** @deprecated use `AuthenticationGenerateServiceAccountTokenResponse$Outbound` instead. */
    type Outbound = AuthenticationGenerateServiceAccountTokenResponse$Outbound;
}
//# sourceMappingURL=authenticationgenerateserviceaccounttoken.d.ts.map