import * as z from "zod";
/**
 * A summary of the results from a identity verification check
 */
export type IdentityVerificationResult = {
    /**
     * The time the identity verification result was created
     */
    createTime?: Date | null | undefined;
    /**
     * The resource identifier for the CIP service The format is "customerIdentificationResults/{customer_identification_id}"
     */
    customerIdentificationId?: string | undefined;
    /**
     * If identity verification result is verified by a document(s) upload, this is the document id(s) relating to that
     */
    documentIds?: Array<string> | undefined;
    /**
     * The external vendor name that verified the identity verification result
     */
    externalVendor?: string | undefined;
    /**
     * Whether the overall identity verification check has passed or not
     */
    identityVerificationPassed?: boolean | undefined;
    /**
     * Describes the type of Identity Verification that was performed
     */
    identityVerificationTypes?: Array<string> | undefined;
    /**
     * Who provided the identity verification result
     */
    providedBy?: string | undefined;
};
/** @internal */
export declare const IdentityVerificationResult$inboundSchema: z.ZodType<IdentityVerificationResult, z.ZodTypeDef, unknown>;
/** @internal */
export type IdentityVerificationResult$Outbound = {
    create_time?: string | null | undefined;
    customer_identification_id?: string | undefined;
    document_ids?: Array<string> | undefined;
    external_vendor?: string | undefined;
    identity_verification_passed?: boolean | undefined;
    identity_verification_types?: Array<string> | undefined;
    provided_by?: string | undefined;
};
/** @internal */
export declare const IdentityVerificationResult$outboundSchema: z.ZodType<IdentityVerificationResult$Outbound, z.ZodTypeDef, IdentityVerificationResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IdentityVerificationResult$ {
    /** @deprecated use `IdentityVerificationResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IdentityVerificationResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `IdentityVerificationResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IdentityVerificationResult$Outbound, z.ZodTypeDef, IdentityVerificationResult>;
    /** @deprecated use `IdentityVerificationResult$Outbound` instead. */
    type Outbound = IdentityVerificationResult$Outbound;
}
//# sourceMappingURL=identityverificationresult.d.ts.map