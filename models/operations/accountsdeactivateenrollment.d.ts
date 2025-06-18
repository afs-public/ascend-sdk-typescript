import * as z from "zod";
import * as components from "../components/index.js";
export type AccountsDeactivateEnrollmentRequest = {
    /**
     * The account id.
     */
    accountId: string;
    deactivateEnrollmentRequestCreate: components.DeactivateEnrollmentRequestCreate;
};
export type AccountsDeactivateEnrollmentResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    enrollment?: components.Enrollment | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AccountsDeactivateEnrollmentRequest$inboundSchema: z.ZodType<AccountsDeactivateEnrollmentRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsDeactivateEnrollmentRequest$Outbound = {
    account_id: string;
    DeactivateEnrollmentRequestCreate: components.DeactivateEnrollmentRequestCreate$Outbound;
};
/** @internal */
export declare const AccountsDeactivateEnrollmentRequest$outboundSchema: z.ZodType<AccountsDeactivateEnrollmentRequest$Outbound, z.ZodTypeDef, AccountsDeactivateEnrollmentRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsDeactivateEnrollmentRequest$ {
    /** @deprecated use `AccountsDeactivateEnrollmentRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsDeactivateEnrollmentRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsDeactivateEnrollmentRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsDeactivateEnrollmentRequest$Outbound, z.ZodTypeDef, AccountsDeactivateEnrollmentRequest>;
    /** @deprecated use `AccountsDeactivateEnrollmentRequest$Outbound` instead. */
    type Outbound = AccountsDeactivateEnrollmentRequest$Outbound;
}
/** @internal */
export declare const AccountsDeactivateEnrollmentResponse$inboundSchema: z.ZodType<AccountsDeactivateEnrollmentResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsDeactivateEnrollmentResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    Enrollment?: components.Enrollment$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountsDeactivateEnrollmentResponse$outboundSchema: z.ZodType<AccountsDeactivateEnrollmentResponse$Outbound, z.ZodTypeDef, AccountsDeactivateEnrollmentResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsDeactivateEnrollmentResponse$ {
    /** @deprecated use `AccountsDeactivateEnrollmentResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsDeactivateEnrollmentResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsDeactivateEnrollmentResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsDeactivateEnrollmentResponse$Outbound, z.ZodTypeDef, AccountsDeactivateEnrollmentResponse>;
    /** @deprecated use `AccountsDeactivateEnrollmentResponse$Outbound` instead. */
    type Outbound = AccountsDeactivateEnrollmentResponse$Outbound;
}
//# sourceMappingURL=accountsdeactivateenrollment.d.ts.map