import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * Describes the contents of a document and how it is used; Required for all identity documents
 */
export declare enum IDDocumentUploadRequestCreateDocumentType {
    IdDocumentTypeUnspecified = "ID_DOCUMENT_TYPE_UNSPECIFIED",
    BirthCertificate = "BIRTH_CERTIFICATE",
    CustomerIdentificationProcess = "CUSTOMER_IDENTIFICATION_PROCESS",
    DeathCertificate = "DEATH_CERTIFICATE",
    DrivingLicense = "DRIVING_LICENSE",
    EmployerConsentForm407Letter = "EMPLOYER_CONSENT_FORM_407_LETTER",
    MarriageCertificate = "MARRIAGE_CERTIFICATE",
    Passport = "PASSPORT",
    ProofOfTaxId = "PROOF_OF_TAX_ID",
    SocialSecurityDocument = "SOCIAL_SECURITY_DOCUMENT",
    ThirdPartyCipResults = "THIRD_PARTY_CIP_RESULTS",
    StateIdCard = "STATE_ID_CARD",
    NationalIdCard = "NATIONAL_ID_CARD",
    PermanentResidentVisa = "PERMANENT_RESIDENT_VISA",
    IrisItinLetter = "IRIS_ITIN_LETTER",
    UtilityBill = "UTILITY_BILL",
    MilitaryIdCard = "MILITARY_ID_CARD",
    MortgageStatement = "MORTGAGE_STATEMENT",
    LeaseAgreement = "LEASE_AGREEMENT",
    ExecutorCertification = "EXECUTOR_CERTIFICATION",
    TrusteeCertification = "TRUSTEE_CERTIFICATION",
    Selfie = "SELFIE",
    CertOfSoleOfficer = "CERT_OF_SOLE_OFFICER",
    CertificationCorrespondentAccounts = "CERTIFICATION_CORRESPONDENT_ACCOUNTS",
    CertificationForeignBanks = "CERTIFICATION_FOREIGN_BANKS",
    CharterArticlesOfIncorporation = "CHARTER_ARTICLES_OF_INCORPORATION",
    DivorceDecree = "DIVORCE_DECREE",
    ProofOfResidence = "PROOF_OF_RESIDENCE",
    BoReportingExemptionProof = "BO_REPORTING_EXEMPTION_PROOF",
    OperatingAgreement = "OPERATING_AGREEMENT",
    RegisterOfMembers = "REGISTER_OF_MEMBERS",
    BoardResolution = "BOARD_RESOLUTION",
    TrustDeedsAgreement = "TRUST_DEEDS_AGREEMENT",
    CorporateBylaws = "CORPORATE_BYLAWS",
    ShareholderAgreement = "SHAREHOLDER_AGREEMENT",
    CorporateRecords = "CORPORATE_RECORDS",
    ArticlesOfOrganization = "ARTICLES_OF_ORGANIZATION"
}
/**
 * Describes the contents of a document and how it is used; Required for all identity documents
 */
export type IDDocumentUploadRequestCreateDocumentTypeOpen = OpenEnum<typeof IDDocumentUploadRequestCreateDocumentType>;
/**
 * Identity document to be uploaded;
 */
export type IDDocumentUploadRequestCreate = {
    /**
     * Identifies the correspondent relevant to the document; Required for all identity documents
     */
    correspondentId: string;
    /**
     * Describes the contents of a document and how it is used; Required for all identity documents
     */
    documentType: IDDocumentUploadRequestCreateDocumentTypeOpen;
    /**
     * Identifies the legal natural person or legal entity relevant to the document
     */
    legalNaturalPersonId: string;
};
/** @internal */
export declare const IDDocumentUploadRequestCreateDocumentType$inboundSchema: z.ZodType<IDDocumentUploadRequestCreateDocumentTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const IDDocumentUploadRequestCreateDocumentType$outboundSchema: z.ZodType<IDDocumentUploadRequestCreateDocumentTypeOpen, z.ZodTypeDef, IDDocumentUploadRequestCreateDocumentTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IDDocumentUploadRequestCreateDocumentType$ {
    /** @deprecated use `IDDocumentUploadRequestCreateDocumentType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IDDocumentUploadRequestCreateDocumentTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `IDDocumentUploadRequestCreateDocumentType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IDDocumentUploadRequestCreateDocumentTypeOpen, z.ZodTypeDef, IDDocumentUploadRequestCreateDocumentTypeOpen>;
}
/** @internal */
export declare const IDDocumentUploadRequestCreate$inboundSchema: z.ZodType<IDDocumentUploadRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type IDDocumentUploadRequestCreate$Outbound = {
    correspondent_id: string;
    document_type: string;
    legal_natural_person_id: string;
};
/** @internal */
export declare const IDDocumentUploadRequestCreate$outboundSchema: z.ZodType<IDDocumentUploadRequestCreate$Outbound, z.ZodTypeDef, IDDocumentUploadRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IDDocumentUploadRequestCreate$ {
    /** @deprecated use `IDDocumentUploadRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IDDocumentUploadRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `IDDocumentUploadRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IDDocumentUploadRequestCreate$Outbound, z.ZodTypeDef, IDDocumentUploadRequestCreate>;
    /** @deprecated use `IDDocumentUploadRequestCreate$Outbound` instead. */
    type Outbound = IDDocumentUploadRequestCreate$Outbound;
}
//# sourceMappingURL=iddocumentuploadrequestcreate.d.ts.map