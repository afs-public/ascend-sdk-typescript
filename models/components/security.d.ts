import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type ServiceAccountCreds = {
    privateKey: string;
    name: string;
    organization: string;
    type: string;
};
export type Security = {
    apiKey?: string | undefined;
    serviceAccountCreds?: ServiceAccountCreds | undefined;
};
/** @internal */
export declare const ServiceAccountCreds$inboundSchema: z.ZodType<ServiceAccountCreds, z.ZodTypeDef, unknown>;
/** @internal */
export type ServiceAccountCreds$Outbound = {
    privateKey: string;
    name: string;
    organization: string;
    type: string;
};
/** @internal */
export declare const ServiceAccountCreds$outboundSchema: z.ZodType<ServiceAccountCreds$Outbound, z.ZodTypeDef, ServiceAccountCreds>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ServiceAccountCreds$ {
    /** @deprecated use `ServiceAccountCreds$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ServiceAccountCreds, z.ZodTypeDef, unknown>;
    /** @deprecated use `ServiceAccountCreds$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ServiceAccountCreds$Outbound, z.ZodTypeDef, ServiceAccountCreds>;
    /** @deprecated use `ServiceAccountCreds$Outbound` instead. */
    type Outbound = ServiceAccountCreds$Outbound;
}
export declare function serviceAccountCredsToJSON(serviceAccountCreds: ServiceAccountCreds): string;
export declare function serviceAccountCredsFromJSON(jsonString: string): SafeParseResult<ServiceAccountCreds, SDKValidationError>;
/** @internal */
export declare const Security$inboundSchema: z.ZodType<Security, z.ZodTypeDef, unknown>;
/** @internal */
export type Security$Outbound = {
    apiKey?: string | undefined;
    serviceAccountCreds?: ServiceAccountCreds$Outbound | undefined;
};
/** @internal */
export declare const Security$outboundSchema: z.ZodType<Security$Outbound, z.ZodTypeDef, Security>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Security$ {
    /** @deprecated use `Security$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Security, z.ZodTypeDef, unknown>;
    /** @deprecated use `Security$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Security$Outbound, z.ZodTypeDef, Security>;
    /** @deprecated use `Security$Outbound` instead. */
    type Outbound = Security$Outbound;
}
export declare function securityToJSON(security: Security): string;
export declare function securityFromJSON(jsonString: string): SafeParseResult<Security, SDKValidationError>;
//# sourceMappingURL=security.d.ts.map