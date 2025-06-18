import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * Whether or not the customer birth date was verified
 */
export declare enum BirthDateVerified {
    VerificationStateUnspecified = "VERIFICATION_STATE_UNSPECIFIED",
    NotInScope = "NOT_IN_SCOPE",
    Verified = "VERIFIED",
    Unverified = "UNVERIFIED",
    Inconclusive = "INCONCLUSIVE"
}
/**
 * Whether or not the customer birth date was verified
 */
export type BirthDateVerifiedOpen = OpenEnum<typeof BirthDateVerified>;
/**
 * Whether or not the document authenticity is verified or not Will be NOT_IN_SCOPE if the check being done is not documentary
 */
export declare enum DocumentAuthenticityVerified {
    VerificationStateUnspecified = "VERIFICATION_STATE_UNSPECIFIED",
    NotInScope = "NOT_IN_SCOPE",
    Verified = "VERIFIED",
    Unverified = "UNVERIFIED",
    Inconclusive = "INCONCLUSIVE"
}
/**
 * Whether or not the document authenticity is verified or not Will be NOT_IN_SCOPE if the check being done is not documentary
 */
export type DocumentAuthenticityVerifiedOpen = OpenEnum<typeof DocumentAuthenticityVerified>;
/**
 * Whether or not the document expiry was verified This is only in scope for document verification checks If document is expired this will be set to EXPIRED
 */
export declare enum DocumentExpiryStatus {
    ExpirationStateUnspecified = "EXPIRATION_STATE_UNSPECIFIED",
    Unexpired = "UNEXPIRED",
    Expired = "EXPIRED",
    NotApplicable = "NOT_APPLICABLE"
}
/**
 * Whether or not the document expiry was verified This is only in scope for document verification checks If document is expired this will be set to EXPIRED
 */
export type DocumentExpiryStatusOpen = OpenEnum<typeof DocumentExpiryStatus>;
/**
 * Whether or not the customer email was verified
 */
export declare enum EmailVerified {
    VerificationStateUnspecified = "VERIFICATION_STATE_UNSPECIFIED",
    NotInScope = "NOT_IN_SCOPE",
    Verified = "VERIFIED",
    Unverified = "UNVERIFIED",
    Inconclusive = "INCONCLUSIVE"
}
/**
 * Whether or not the customer email was verified
 */
export type EmailVerifiedOpen = OpenEnum<typeof EmailVerified>;
/**
 * Whether or not the customer identification number was verified
 */
export declare enum IdentificationNumberVerified {
    VerificationStateUnspecified = "VERIFICATION_STATE_UNSPECIFIED",
    NotInScope = "NOT_IN_SCOPE",
    Verified = "VERIFIED",
    Unverified = "UNVERIFIED",
    Inconclusive = "INCONCLUSIVE"
}
/**
 * Whether or not the customer identification number was verified
 */
export type IdentificationNumberVerifiedOpen = OpenEnum<typeof IdentificationNumberVerified>;
export declare enum IdentityVerificationTypes {
    IdentityVerificationTypeUnspecified = "IDENTITY_VERIFICATION_TYPE_UNSPECIFIED",
    Database = "DATABASE",
    Documentary = "DOCUMENTARY",
    Selfie = "SELFIE"
}
export type IdentityVerificationTypesOpen = OpenEnum<typeof IdentityVerificationTypes>;
/**
 * Whether or not the customer legal address was verified
 */
export declare enum LegalAddressVerified {
    VerificationStateUnspecified = "VERIFICATION_STATE_UNSPECIFIED",
    NotInScope = "NOT_IN_SCOPE",
    Verified = "VERIFIED",
    Unverified = "UNVERIFIED",
    Inconclusive = "INCONCLUSIVE"
}
/**
 * Whether or not the customer legal address was verified
 */
export type LegalAddressVerifiedOpen = OpenEnum<typeof LegalAddressVerified>;
/**
 * Presents verified results e.g. if name or birth date have been verified
 */
export declare enum NameVerified {
    VerificationStateUnspecified = "VERIFICATION_STATE_UNSPECIFIED",
    NotInScope = "NOT_IN_SCOPE",
    Verified = "VERIFIED",
    Unverified = "UNVERIFIED",
    Inconclusive = "INCONCLUSIVE"
}
/**
 * Presents verified results e.g. if name or birth date have been verified
 */
export type NameVerifiedOpen = OpenEnum<typeof NameVerified>;
/**
 * Whether or not the customer phone number was verified
 */
export declare enum PhoneNumberVerified {
    VerificationStateUnspecified = "VERIFICATION_STATE_UNSPECIFIED",
    NotInScope = "NOT_IN_SCOPE",
    Verified = "VERIFIED",
    Unverified = "UNVERIFIED",
    Inconclusive = "INCONCLUSIVE"
}
/**
 * Whether or not the customer phone number was verified
 */
export type PhoneNumberVerifiedOpen = OpenEnum<typeof PhoneNumberVerified>;
/**
 * Whether or not the customer photo identification was verified Will be NOT_IN_SCOPE if the check being done is not selfie
 */
export declare enum SelfieVerified {
    VerificationStateUnspecified = "VERIFICATION_STATE_UNSPECIFIED",
    NotInScope = "NOT_IN_SCOPE",
    Verified = "VERIFIED",
    Unverified = "UNVERIFIED",
    Inconclusive = "INCONCLUSIVE"
}
/**
 * Whether or not the customer photo identification was verified Will be NOT_IN_SCOPE if the check being done is not selfie
 */
export type SelfieVerifiedOpen = OpenEnum<typeof SelfieVerified>;
/**
 * Result from a customer identification check
 */
export type CustomerIdentificationResult = {
    /**
     * Whether or not the customer birth date was verified
     */
    birthDateVerified?: BirthDateVerifiedOpen | undefined;
    /**
     * Whether or not the result is completed Must be true to be linked to an Investigation or used to Create/Update an LegalNaturalPerson
     */
    completed?: boolean | undefined;
    /**
     * Whether or not the document authenticity is verified or not Will be NOT_IN_SCOPE if the check being done is not documentary
     */
    documentAuthenticityVerified?: DocumentAuthenticityVerifiedOpen | undefined;
    /**
     * Whether or not the document expiry was verified This is only in scope for document verification checks If document is expired this will be set to EXPIRED
     */
    documentExpiryStatus?: DocumentExpiryStatusOpen | undefined;
    /**
     * One or more ULIDs from the documents api of the image(s) of the document that relates to the identification check for a DOCUMENTARY check, these will be the images provided in the session
     */
    documentVerificationIds?: Array<string> | undefined;
    /**
     * The URI to complete documentary session Will be populated if the CheckType is DOCUMENTARY
     */
    documentarySessionUri?: string | undefined;
    /**
     * Whether or not the customer email was verified
     */
    emailVerified?: EmailVerifiedOpen | undefined;
    /**
     * The name of the external vendor
     */
    externalVendor?: string | undefined;
    /**
     * The id relating to the external vendor
     */
    externalVendorId?: string | undefined;
    /**
     * Whether or not the customer identification number was verified
     */
    identificationNumberVerified?: IdentificationNumberVerifiedOpen | undefined;
    /**
     * Describes the type(s) of Identity Verification that was performed
     */
    identityVerificationTypes?: Array<IdentityVerificationTypesOpen> | undefined;
    /**
     * Whether or not the customer legal address was verified
     */
    legalAddressVerified?: LegalAddressVerifiedOpen | undefined;
    /**
     * Presents verified results e.g. if name or birth date have been verified
     */
    nameVerified?: NameVerifiedOpen | undefined;
    /**
     * Whether or not the customer phone number was verified
     */
    phoneNumberVerified?: PhoneNumberVerifiedOpen | undefined;
    /**
     * Raw vendor result will return full json response from vendor if view is set to FULL
     */
    rawVendorResult?: string | undefined;
    /**
     * Whether or not the customer photo identification was verified Will be NOT_IN_SCOPE if the check being done is not selfie
     */
    selfieVerified?: SelfieVerifiedOpen | undefined;
};
/** @internal */
export declare const BirthDateVerified$inboundSchema: z.ZodType<BirthDateVerifiedOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BirthDateVerified$outboundSchema: z.ZodType<BirthDateVerifiedOpen, z.ZodTypeDef, BirthDateVerifiedOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BirthDateVerified$ {
    /** @deprecated use `BirthDateVerified$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BirthDateVerifiedOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BirthDateVerified$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BirthDateVerifiedOpen, z.ZodTypeDef, BirthDateVerifiedOpen>;
}
/** @internal */
export declare const DocumentAuthenticityVerified$inboundSchema: z.ZodType<DocumentAuthenticityVerifiedOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const DocumentAuthenticityVerified$outboundSchema: z.ZodType<DocumentAuthenticityVerifiedOpen, z.ZodTypeDef, DocumentAuthenticityVerifiedOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DocumentAuthenticityVerified$ {
    /** @deprecated use `DocumentAuthenticityVerified$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DocumentAuthenticityVerifiedOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `DocumentAuthenticityVerified$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DocumentAuthenticityVerifiedOpen, z.ZodTypeDef, DocumentAuthenticityVerifiedOpen>;
}
/** @internal */
export declare const DocumentExpiryStatus$inboundSchema: z.ZodType<DocumentExpiryStatusOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const DocumentExpiryStatus$outboundSchema: z.ZodType<DocumentExpiryStatusOpen, z.ZodTypeDef, DocumentExpiryStatusOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DocumentExpiryStatus$ {
    /** @deprecated use `DocumentExpiryStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DocumentExpiryStatusOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `DocumentExpiryStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DocumentExpiryStatusOpen, z.ZodTypeDef, DocumentExpiryStatusOpen>;
}
/** @internal */
export declare const EmailVerified$inboundSchema: z.ZodType<EmailVerifiedOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EmailVerified$outboundSchema: z.ZodType<EmailVerifiedOpen, z.ZodTypeDef, EmailVerifiedOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmailVerified$ {
    /** @deprecated use `EmailVerified$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EmailVerifiedOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EmailVerified$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EmailVerifiedOpen, z.ZodTypeDef, EmailVerifiedOpen>;
}
/** @internal */
export declare const IdentificationNumberVerified$inboundSchema: z.ZodType<IdentificationNumberVerifiedOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const IdentificationNumberVerified$outboundSchema: z.ZodType<IdentificationNumberVerifiedOpen, z.ZodTypeDef, IdentificationNumberVerifiedOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IdentificationNumberVerified$ {
    /** @deprecated use `IdentificationNumberVerified$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IdentificationNumberVerifiedOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `IdentificationNumberVerified$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IdentificationNumberVerifiedOpen, z.ZodTypeDef, IdentificationNumberVerifiedOpen>;
}
/** @internal */
export declare const IdentityVerificationTypes$inboundSchema: z.ZodType<IdentityVerificationTypesOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const IdentityVerificationTypes$outboundSchema: z.ZodType<IdentityVerificationTypesOpen, z.ZodTypeDef, IdentityVerificationTypesOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IdentityVerificationTypes$ {
    /** @deprecated use `IdentityVerificationTypes$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IdentityVerificationTypesOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `IdentityVerificationTypes$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IdentityVerificationTypesOpen, z.ZodTypeDef, IdentityVerificationTypesOpen>;
}
/** @internal */
export declare const LegalAddressVerified$inboundSchema: z.ZodType<LegalAddressVerifiedOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const LegalAddressVerified$outboundSchema: z.ZodType<LegalAddressVerifiedOpen, z.ZodTypeDef, LegalAddressVerifiedOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalAddressVerified$ {
    /** @deprecated use `LegalAddressVerified$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalAddressVerifiedOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalAddressVerified$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalAddressVerifiedOpen, z.ZodTypeDef, LegalAddressVerifiedOpen>;
}
/** @internal */
export declare const NameVerified$inboundSchema: z.ZodType<NameVerifiedOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const NameVerified$outboundSchema: z.ZodType<NameVerifiedOpen, z.ZodTypeDef, NameVerifiedOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace NameVerified$ {
    /** @deprecated use `NameVerified$inboundSchema` instead. */
    const inboundSchema: z.ZodType<NameVerifiedOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `NameVerified$outboundSchema` instead. */
    const outboundSchema: z.ZodType<NameVerifiedOpen, z.ZodTypeDef, NameVerifiedOpen>;
}
/** @internal */
export declare const PhoneNumberVerified$inboundSchema: z.ZodType<PhoneNumberVerifiedOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PhoneNumberVerified$outboundSchema: z.ZodType<PhoneNumberVerifiedOpen, z.ZodTypeDef, PhoneNumberVerifiedOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PhoneNumberVerified$ {
    /** @deprecated use `PhoneNumberVerified$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PhoneNumberVerifiedOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PhoneNumberVerified$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PhoneNumberVerifiedOpen, z.ZodTypeDef, PhoneNumberVerifiedOpen>;
}
/** @internal */
export declare const SelfieVerified$inboundSchema: z.ZodType<SelfieVerifiedOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const SelfieVerified$outboundSchema: z.ZodType<SelfieVerifiedOpen, z.ZodTypeDef, SelfieVerifiedOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SelfieVerified$ {
    /** @deprecated use `SelfieVerified$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SelfieVerifiedOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `SelfieVerified$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SelfieVerifiedOpen, z.ZodTypeDef, SelfieVerifiedOpen>;
}
/** @internal */
export declare const CustomerIdentificationResult$inboundSchema: z.ZodType<CustomerIdentificationResult, z.ZodTypeDef, unknown>;
/** @internal */
export type CustomerIdentificationResult$Outbound = {
    birth_date_verified?: string | undefined;
    completed?: boolean | undefined;
    document_authenticity_verified?: string | undefined;
    document_expiry_status?: string | undefined;
    document_verification_ids?: Array<string> | undefined;
    documentary_session_uri?: string | undefined;
    email_verified?: string | undefined;
    external_vendor?: string | undefined;
    external_vendor_id?: string | undefined;
    identification_number_verified?: string | undefined;
    identity_verification_types?: Array<string> | undefined;
    legal_address_verified?: string | undefined;
    name_verified?: string | undefined;
    phone_number_verified?: string | undefined;
    raw_vendor_result?: string | undefined;
    selfie_verified?: string | undefined;
};
/** @internal */
export declare const CustomerIdentificationResult$outboundSchema: z.ZodType<CustomerIdentificationResult$Outbound, z.ZodTypeDef, CustomerIdentificationResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CustomerIdentificationResult$ {
    /** @deprecated use `CustomerIdentificationResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CustomerIdentificationResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `CustomerIdentificationResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CustomerIdentificationResult$Outbound, z.ZodTypeDef, CustomerIdentificationResult>;
    /** @deprecated use `CustomerIdentificationResult$Outbound` instead. */
    type Outbound = CustomerIdentificationResult$Outbound;
}
//# sourceMappingURL=customeridentificationresult.d.ts.map