import * as components from "../models/components/index.js";
export declare enum SecurityErrorCode {
    Incomplete = "incomplete",
    UnrecognisedSecurityType = "unrecognized_security_type"
}
export declare class SecurityError extends Error {
    code: SecurityErrorCode;
    constructor(code: SecurityErrorCode, message: string);
    static incomplete(): SecurityError;
    static unrecognizedType(type: string): SecurityError;
}
export type SecurityState = {
    basic: {
        username?: string | undefined;
        password?: string | undefined;
    };
    headers: Record<string, string>;
    queryParams: Record<string, string>;
    cookies: Record<string, string>;
};
type SecurityInputBasic = {
    type: "http:basic";
    value: {
        username?: string | undefined;
        password?: string | undefined;
    } | null | undefined;
};
type SecurityInputBearer = {
    type: "http:bearer";
    value: string | null | undefined;
    fieldName: string;
};
type SecurityInputAPIKey = {
    type: "apiKey:header" | "apiKey:query" | "apiKey:cookie";
    value: string | null | undefined;
    fieldName: string;
};
type SecurityInputOIDC = {
    type: "openIdConnect";
    value: string | null | undefined;
    fieldName: string;
};
type SecurityInputOAuth2 = {
    type: "oauth2";
    value: string | null | undefined;
    fieldName: string;
};
type SecurityInputOAuth2ClientCredentials = {
    type: "oauth2:client_credentials";
    value: string | null | undefined;
    fieldName: string;
};
type SecurityInputCustom = {
    type: "http:custom";
    value: any | null | undefined;
    fieldName: string;
};
export type SecurityInput = SecurityInputBasic | SecurityInputBearer | SecurityInputAPIKey | SecurityInputOAuth2 | SecurityInputOAuth2ClientCredentials | SecurityInputOIDC | SecurityInputCustom;
export declare function resolveSecurity(...options: SecurityInput[][]): SecurityState | null;
export declare function resolveGlobalSecurity(security: Partial<components.Security> | null | undefined): SecurityState | null;
export declare function extractSecurity<T extends string | Record<string, unknown>>(sec: T | (() => Promise<T>) | undefined): Promise<T | undefined>;
export {};
//# sourceMappingURL=security.d.ts.map