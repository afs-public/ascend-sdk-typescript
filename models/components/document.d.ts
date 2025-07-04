import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * Describes the contents of a document and how it is used
 */
export declare enum DocumentDocumentType {
    AccountDocumentTypeUnspecified = "ACCOUNT_DOCUMENT_TYPE_UNSPECIFIED",
    CertificateOfAppointment = "CERTIFICATE_OF_APPOINTMENT",
    FdicSweepProgramAgreement = "FDIC_SWEEP_PROGRAM_AGREEMENT",
    FpslMasterServicesLoanAgreement = "FPSL_MASTER_SERVICES_LOAN_AGREEMENT",
    TransferOnDeathBeneficiaryDesignation = "TRANSFER_ON_DEATH_BENEFICIARY_DESIGNATION",
    ChangeOfAddress = "CHANGE_OF_ADDRESS",
    NewAccountForm = "NEW_ACCOUNT_FORM",
    Letter3210 = "LETTER_3210",
    IraApplForm = "IRA_APPL_FORM",
    RiaIraApplForm = "RIA_IRA_APPL_FORM",
    IraDepositForm = "IRA_DEPOSIT_FORM",
    RiaIraDepositForm = "RIA_IRA_DEPOSIT_FORM",
    IraDistForm = "IRA_DIST_FORM",
    RiaIraDistForm = "RIA_IRA_DIST_FORM",
    RothApplForm = "ROTH_APPL_FORM",
    RiaRothApplForm = "RIA_ROTH_APPL_FORM",
    RothDistForm = "ROTH_DIST_FORM",
    RiaRothDistForm = "RIA_ROTH_DIST_FORM",
    SimpleContTransm = "SIMPLE_CONT_TRANSM",
    EsaApplForm = "ESA_APPL_FORM",
    EsaWthdrStatement = "ESA_WTHDR_STATEMENT",
    DirConvForm = "DIR_CONV_FORM",
    IraBeneForm = "IRA_BENE_FORM",
    IraJrnlForm = "IRA_JRNL_FORM",
    SepEmplPlanDoc = "SEP_EMPL_PLAN_DOC",
    SimpleAdoptAgreement = "SIMPLE_ADOPT_AGREEMENT",
    SimpleApplForm = "SIMPLE_APPL_FORM",
    DeathCertification = "DEATH_CERTIFICATION",
    AchAgreement = "ACH_AGREEMENT",
    ApexSelectApplication = "APEX_SELECT_APPLICATION",
    AsaDirectDeposit = "ASA_DIRECT_DEPOSIT",
    BankingMisc = "BANKING_MISC",
    AccTransferForm = "ACC_TRANSFER_FORM",
    AddressVerificationNotice = "ADDRESS_VERIFICATION_NOTICE",
    AffidavitOfDomicile = "AFFIDAVIT_OF_DOMICILE",
    ApexSimpleDirectDeposit = "APEX_SIMPLE_DIRECT_DEPOSIT",
    TransferForm = "TRANSFER_FORM",
    JournalRequestForm = "JOURNAL_REQUEST_FORM",
    Check = "CHECK",
    CheckRequestForm = "CHECK_REQUEST_FORM",
    CorpAgreementCash = "CORP_AGREEMENT_CASH",
    CorpResolution = "CORP_RESOLUTION",
    CourtDocument = "COURT_DOCUMENT",
    CourtOrder = "COURT_ORDER",
    DepositSecuritiesRequestForm = "DEPOSIT_SECURITIES_REQUEST_FORM",
    DigitalSignature = "DIGITAL_SIGNATURE",
    DirectConversionRequest = "DIRECT_CONVERSION_REQUEST",
    DistributionForm = "DISTRIBUTION_FORM",
    DocumentIrs = "DOCUMENT_IRS",
    DomesticWire = "DOMESTIC_WIRE",
    DwacRequestForm = "DWAC_REQUEST_FORM",
    Dwre = "DWRE",
    EntityDueDiligenceQuestionnaire = "ENTITY_DUE_DILIGENCE_QUESTIONNAIRE",
    EntityUpdateForm = "ENTITY_UPDATE_FORM",
    EscheatForm = "ESCHEAT_FORM",
    EscheatmentDueDiligenceLetter = "ESCHEATMENT_DUE_DILIGENCE_LETTER",
    ESignature = "E_SIGNATURE",
    ForeignAccountDueDiligenceQuestionnaire = "FOREIGN_ACCOUNT_DUE_DILIGENCE_QUESTIONNAIRE",
    ForeignBankCertificationDisclosure = "FOREIGN_BANK_CERTIFICATION_DISCLOSURE",
    ForeignEntityDeclarationForm = "FOREIGN_ENTITY_DECLARATION_FORM",
    ForeignFinInstDueDiligenceQuestionnaire = "FOREIGN_FIN_INST_DUE_DILIGENCE_QUESTIONNAIRE",
    Form144 = "FORM_144",
    FreeDeliveryForm = "FREE_DELIVERY_FORM",
    FullTradingAuthorization = "FULL_TRADING_AUTHORIZATION",
    InternationalWireRequestForm = "INTERNATIONAL_WIRE_REQUEST_FORM",
    IrrevocableStockBondPower = "IRREVOCABLE_STOCK_BOND_POWER",
    JointAccAgreementEntirety = "JOINT_ACC_AGREEMENT_ENTIRETY",
    JointAccAgreementRightsOfSurvivorship = "JOINT_ACC_AGREEMENT_RIGHTS_OF_SURVIVORSHIP",
    JointAccAgreementCommunityProperty = "JOINT_ACC_AGREEMENT_COMMUNITY_PROPERTY",
    JointAccAgreementTenantsInCommon = "JOINT_ACC_AGREEMENT_TENANTS_IN_COMMON",
    JointTefraW8 = "JOINT_TEFRA_W8",
    LegalOpinion = "LEGAL_OPINION",
    LetterOfAuthority = "LETTER_OF_AUTHORITY",
    LettersOfTestamentaryCertAppointment = "LETTERS_OF_TESTAMENTARY_CERT_APPOINTMENT",
    LimitedLiabilityCompanyAgreement = "LIMITED_LIABILITY_COMPANY_AGREEMENT",
    LimitedPurposeMargin = "LIMITED_PURPOSE_MARGIN",
    MailAuthorization = "MAIL_AUTHORIZATION",
    Msla = "MSLA",
    MiscGeneral = "MISC_GENERAL",
    NewAccountApplicationEntity = "NEW_ACCOUNT_APPLICATION_ENTITY",
    NonCorporateAssociation = "NON_CORPORATE_ASSOCIATION",
    PartnershipAgreement = "PARTNERSHIP_AGREEMENT",
    PatternDayTraderForm = "PATTERN_DAY_TRADER_FORM",
    PowerOfAttorneyDurable = "POWER_OF_ATTORNEY_DURABLE",
    PowerOfAttorneyGeneral = "POWER_OF_ATTORNEY_GENERAL",
    RegisteredAdvisoryAuthorityForm = "REGISTERED_ADVISORY_AUTHORITY_FORM",
    Rmd = "RMD",
    RiskDisclosure = "RISK_DISCLOSURE",
    Rule145SellersLetter = "RULE_145_SELLERS_LETTER",
    Rule701Letter = "RULE_701_LETTER",
    SameNameLoa = "SAME_NAME_LOA",
    SecuritiesBasedLendingAgreement = "SECURITIES_BASED_LENDING_AGREEMENT",
    SepContributionAgreement = "SEP_CONTRIBUTION_AGREEMENT",
    SepEmployerPlanDocumentation = "SEP_EMPLOYER_PLAN_DOCUMENTATION",
    SignatureCard = "SIGNATURE_CARD",
    SimpleForm5304 = "SIMPLE_FORM_5304",
    SimplifiedEmployeePension = "SIMPLIFIED_EMPLOYEE_PENSION",
    CertificateSoleProprietorship = "CERTIFICATE_SOLE_PROPRIETORSHIP",
    TransferOnDeath = "TRANSFER_ON_DEATH",
    TrustAgreement = "TRUST_AGREEMENT",
    TaxW8Ben = "TAX_W8_BEN",
    TaxW8BenJointAccountHolder = "TAX_W8_BEN_JOINT_ACCOUNT_HOLDER",
    TaxW8Eci = "TAX_W8_ECI",
    TaxW8Exp = "TAX_W8_EXP",
    TaxW8Imy = "TAX_W8_IMY",
    TaxW9 = "TAX_W9",
    WillCopy = "WILL_COPY",
    WireRequestForm = "WIRE_REQUEST_FORM",
    WorthlessSecurities = "WORTHLESS_SECURITIES",
    ChangeOfAddressRequest = "CHANGE_OF_ADDRESS_REQUEST",
    OptionsAgreement = "OPTIONS_AGREEMENT",
    StateWaiverForm = "STATE_WAIVER_FORM"
}
/**
 * Describes the contents of a document and how it is used
 */
export type DocumentDocumentTypeOpen = OpenEnum<typeof DocumentDocumentType>;
/**
 * Date that the document was uploaded
 */
export type UploadedDate = {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | undefined;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | undefined;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | undefined;
};
/**
 * Fields specific to an account document
 */
export type AccountDocument = {
    /**
     * Identifies the account relevant to the document
     */
    accountId?: string | undefined;
    /**
     * Describes the contents of a document and how it is used
     */
    documentType?: DocumentDocumentTypeOpen | undefined;
    /**
     * Date that the document was uploaded
     */
    uploadedDate?: UploadedDate | null | undefined;
};
/**
 * Describes the contents of a document and how it is used
 */
export declare enum DocumentIdDocumentDocumentType {
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
 * Describes the contents of a document and how it is used
 */
export type DocumentIdDocumentDocumentTypeOpen = OpenEnum<typeof DocumentIdDocumentDocumentType>;
/**
 * Date that the document was uploaded
 */
export type DocumentUploadedDate = {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | undefined;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | undefined;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | undefined;
};
/**
 * Fields specific to an identity document
 */
export type IdDocument = {
    /**
     * Describes the contents of a document and how it is used
     */
    documentType?: DocumentIdDocumentDocumentTypeOpen | undefined;
    /**
     * Identifies the legal natural person relevant to the document
     */
    legalNaturalPersonId?: string | undefined;
    /**
     * Date that the document was uploaded
     */
    uploadedDate?: DocumentUploadedDate | null | undefined;
};
/**
 * Describes the contents of a document and how it is used
 */
export declare enum DocumentInvestorDocumentDocumentType {
    InvestorDocumentTypeUnspecified = "INVESTOR_DOCUMENT_TYPE_UNSPECIFIED",
    ConfirmDaily = "CONFIRM_DAILY",
    ConfirmMonthly = "CONFIRM_MONTHLY",
    FormConsolidated1099 = "FORM_CONSOLIDATED_1099",
    Form1042S = "FORM_1042_S",
    Form1099Q = "FORM_1099_Q",
    Form1099R = "FORM_1099_R",
    Form2439 = "FORM_2439",
    Form4806A = "FORM_480_6A",
    Form4806B = "FORM_480_6B",
    Form5498 = "FORM_5498",
    StatementMonthly = "STATEMENT_MONTHLY",
    StatementQuarterly = "STATEMENT_QUARTERLY",
    Form1099C = "FORM_1099_C",
    Form4806D = "FORM_480_6D",
    Form5498Esa = "FORM_5498_ESA"
}
/**
 * Describes the contents of a document and how it is used
 */
export type DocumentInvestorDocumentDocumentTypeOpen = OpenEnum<typeof DocumentInvestorDocumentDocumentType>;
/**
 * Date that the related activities were processed
 */
export type DocumentProcessDate = {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | undefined;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | undefined;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | undefined;
};
/**
 * Fields specific to an investor document
 */
export type InvestorDocument = {
    /**
     * Identifies the account relevant to the document
     */
    accountId?: string | undefined;
    /**
     * Describes the contents of a document and how it is used
     */
    documentType?: DocumentInvestorDocumentDocumentTypeOpen | undefined;
    /**
     * Date that the related activities were processed
     */
    processDate?: DocumentProcessDate | null | undefined;
};
/**
 * Describes a document that has been uploaded to Apex storage.
 */
export type Document = {
    /**
     * Fields specific to an account document
     */
    accountDocument?: AccountDocument | null | undefined;
    /**
     * Identifies the correspondent relevant to the document
     */
    correspondentId?: string | undefined;
    /**
     * Signed link used to download a document; The link expires one hour after being generated
     */
    downloadLink?: string | undefined;
    /**
     * Fields specific to an identity document
     */
    idDocument?: IdDocument | null | undefined;
    /**
     * Fields specific to an investor document
     */
    investorDocument?: InvestorDocument | null | undefined;
    /**
     * Identifier for the document
     */
    name?: string | undefined;
};
/** @internal */
export declare const DocumentDocumentType$inboundSchema: z.ZodType<DocumentDocumentTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const DocumentDocumentType$outboundSchema: z.ZodType<DocumentDocumentTypeOpen, z.ZodTypeDef, DocumentDocumentTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DocumentDocumentType$ {
    /** @deprecated use `DocumentDocumentType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DocumentDocumentTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `DocumentDocumentType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DocumentDocumentTypeOpen, z.ZodTypeDef, DocumentDocumentTypeOpen>;
}
/** @internal */
export declare const UploadedDate$inboundSchema: z.ZodType<UploadedDate, z.ZodTypeDef, unknown>;
/** @internal */
export type UploadedDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const UploadedDate$outboundSchema: z.ZodType<UploadedDate$Outbound, z.ZodTypeDef, UploadedDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UploadedDate$ {
    /** @deprecated use `UploadedDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UploadedDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `UploadedDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UploadedDate$Outbound, z.ZodTypeDef, UploadedDate>;
    /** @deprecated use `UploadedDate$Outbound` instead. */
    type Outbound = UploadedDate$Outbound;
}
/** @internal */
export declare const AccountDocument$inboundSchema: z.ZodType<AccountDocument, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountDocument$Outbound = {
    account_id?: string | undefined;
    document_type?: string | undefined;
    uploaded_date?: UploadedDate$Outbound | null | undefined;
};
/** @internal */
export declare const AccountDocument$outboundSchema: z.ZodType<AccountDocument$Outbound, z.ZodTypeDef, AccountDocument>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountDocument$ {
    /** @deprecated use `AccountDocument$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountDocument, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountDocument$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountDocument$Outbound, z.ZodTypeDef, AccountDocument>;
    /** @deprecated use `AccountDocument$Outbound` instead. */
    type Outbound = AccountDocument$Outbound;
}
/** @internal */
export declare const DocumentIdDocumentDocumentType$inboundSchema: z.ZodType<DocumentIdDocumentDocumentTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const DocumentIdDocumentDocumentType$outboundSchema: z.ZodType<DocumentIdDocumentDocumentTypeOpen, z.ZodTypeDef, DocumentIdDocumentDocumentTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DocumentIdDocumentDocumentType$ {
    /** @deprecated use `DocumentIdDocumentDocumentType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DocumentIdDocumentDocumentTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `DocumentIdDocumentDocumentType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DocumentIdDocumentDocumentTypeOpen, z.ZodTypeDef, DocumentIdDocumentDocumentTypeOpen>;
}
/** @internal */
export declare const DocumentUploadedDate$inboundSchema: z.ZodType<DocumentUploadedDate, z.ZodTypeDef, unknown>;
/** @internal */
export type DocumentUploadedDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const DocumentUploadedDate$outboundSchema: z.ZodType<DocumentUploadedDate$Outbound, z.ZodTypeDef, DocumentUploadedDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DocumentUploadedDate$ {
    /** @deprecated use `DocumentUploadedDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DocumentUploadedDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `DocumentUploadedDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DocumentUploadedDate$Outbound, z.ZodTypeDef, DocumentUploadedDate>;
    /** @deprecated use `DocumentUploadedDate$Outbound` instead. */
    type Outbound = DocumentUploadedDate$Outbound;
}
/** @internal */
export declare const IdDocument$inboundSchema: z.ZodType<IdDocument, z.ZodTypeDef, unknown>;
/** @internal */
export type IdDocument$Outbound = {
    document_type?: string | undefined;
    legal_natural_person_id?: string | undefined;
    uploaded_date?: DocumentUploadedDate$Outbound | null | undefined;
};
/** @internal */
export declare const IdDocument$outboundSchema: z.ZodType<IdDocument$Outbound, z.ZodTypeDef, IdDocument>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IdDocument$ {
    /** @deprecated use `IdDocument$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IdDocument, z.ZodTypeDef, unknown>;
    /** @deprecated use `IdDocument$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IdDocument$Outbound, z.ZodTypeDef, IdDocument>;
    /** @deprecated use `IdDocument$Outbound` instead. */
    type Outbound = IdDocument$Outbound;
}
/** @internal */
export declare const DocumentInvestorDocumentDocumentType$inboundSchema: z.ZodType<DocumentInvestorDocumentDocumentTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const DocumentInvestorDocumentDocumentType$outboundSchema: z.ZodType<DocumentInvestorDocumentDocumentTypeOpen, z.ZodTypeDef, DocumentInvestorDocumentDocumentTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DocumentInvestorDocumentDocumentType$ {
    /** @deprecated use `DocumentInvestorDocumentDocumentType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DocumentInvestorDocumentDocumentTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `DocumentInvestorDocumentDocumentType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DocumentInvestorDocumentDocumentTypeOpen, z.ZodTypeDef, DocumentInvestorDocumentDocumentTypeOpen>;
}
/** @internal */
export declare const DocumentProcessDate$inboundSchema: z.ZodType<DocumentProcessDate, z.ZodTypeDef, unknown>;
/** @internal */
export type DocumentProcessDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const DocumentProcessDate$outboundSchema: z.ZodType<DocumentProcessDate$Outbound, z.ZodTypeDef, DocumentProcessDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DocumentProcessDate$ {
    /** @deprecated use `DocumentProcessDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DocumentProcessDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `DocumentProcessDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DocumentProcessDate$Outbound, z.ZodTypeDef, DocumentProcessDate>;
    /** @deprecated use `DocumentProcessDate$Outbound` instead. */
    type Outbound = DocumentProcessDate$Outbound;
}
/** @internal */
export declare const InvestorDocument$inboundSchema: z.ZodType<InvestorDocument, z.ZodTypeDef, unknown>;
/** @internal */
export type InvestorDocument$Outbound = {
    account_id?: string | undefined;
    document_type?: string | undefined;
    process_date?: DocumentProcessDate$Outbound | null | undefined;
};
/** @internal */
export declare const InvestorDocument$outboundSchema: z.ZodType<InvestorDocument$Outbound, z.ZodTypeDef, InvestorDocument>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InvestorDocument$ {
    /** @deprecated use `InvestorDocument$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InvestorDocument, z.ZodTypeDef, unknown>;
    /** @deprecated use `InvestorDocument$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InvestorDocument$Outbound, z.ZodTypeDef, InvestorDocument>;
    /** @deprecated use `InvestorDocument$Outbound` instead. */
    type Outbound = InvestorDocument$Outbound;
}
/** @internal */
export declare const Document$inboundSchema: z.ZodType<Document, z.ZodTypeDef, unknown>;
/** @internal */
export type Document$Outbound = {
    account_document?: AccountDocument$Outbound | null | undefined;
    correspondent_id?: string | undefined;
    download_link?: string | undefined;
    id_document?: IdDocument$Outbound | null | undefined;
    investor_document?: InvestorDocument$Outbound | null | undefined;
    name?: string | undefined;
};
/** @internal */
export declare const Document$outboundSchema: z.ZodType<Document$Outbound, z.ZodTypeDef, Document>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Document$ {
    /** @deprecated use `Document$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Document, z.ZodTypeDef, unknown>;
    /** @deprecated use `Document$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Document$Outbound, z.ZodTypeDef, Document>;
    /** @deprecated use `Document$Outbound` instead. */
    type Outbound = Document$Outbound;
}
//# sourceMappingURL=document.d.ts.map