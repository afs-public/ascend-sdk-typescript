import * as z from "zod";
import { DateCreate, DateCreate$Outbound } from "./datecreate.js";
/**
 * An identity verification result that clients may supply. This result represents data and confirmation attesting to identity verification.
 */
export type IdentityVerificationResultCreate = {
    /**
     * Attestation that external result and review have verified the supplied investor's address has been verified in conjunction with other PII
     */
    addressVerified: boolean;
    /**
     * Attestation that external result and review have verified the supplied investor's date of birth has been verified in conjunction with other PII
     */
    birthDateVerified: boolean;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following:
     *
     * @remarks
     *
     *  * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date
     *
     *  Related types are [google.type.TimeOfDay][google.type.TimeOfDay] and `google.protobuf.Timestamp`.
     */
    executionDate: DateCreate;
    /**
     * Client-generated identifier associated with the KYC results for the appropriate case
     */
    externalCaseId: string;
    /**
     * System generated document IDs returned after uploading identity documents to the Documents API
     */
    identityVerificationDocumentIds?: Array<string> | undefined;
    /**
     * Attestation that external result and review have verified the supplied investor's name has been verified in conjunction with other PII
     */
    nameVerified: boolean;
    /**
     * A system-generated document ID assigned when raw vendor results are uploaded to the Documents API; This field is optional for person record creation, but required for account creation if the Correspondent provides IDV results
     */
    rawVendorDataDocumentId?: string | undefined;
    /**
     * Attestation that external result and review have verified the supplied investor's Tax ID has been verified in conjunction with other PII
     */
    taxIdVerified: boolean;
    /**
     * The name(s) of the vendor(s) used to externally verify and screen a natural person; relates to the identity_verification_result
     */
    vendor: string;
};
/** @internal */
export declare const IdentityVerificationResultCreate$inboundSchema: z.ZodType<IdentityVerificationResultCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type IdentityVerificationResultCreate$Outbound = {
    address_verified: boolean;
    birth_date_verified: boolean;
    execution_date: DateCreate$Outbound;
    external_case_id: string;
    identity_verification_document_ids?: Array<string> | undefined;
    name_verified: boolean;
    raw_vendor_data_document_id?: string | undefined;
    tax_id_verified: boolean;
    vendor: string;
};
/** @internal */
export declare const IdentityVerificationResultCreate$outboundSchema: z.ZodType<IdentityVerificationResultCreate$Outbound, z.ZodTypeDef, IdentityVerificationResultCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IdentityVerificationResultCreate$ {
    /** @deprecated use `IdentityVerificationResultCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IdentityVerificationResultCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `IdentityVerificationResultCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IdentityVerificationResultCreate$Outbound, z.ZodTypeDef, IdentityVerificationResultCreate>;
    /** @deprecated use `IdentityVerificationResultCreate$Outbound` instead. */
    type Outbound = IdentityVerificationResultCreate$Outbound;
}
//# sourceMappingURL=identityverificationresultcreate.d.ts.map