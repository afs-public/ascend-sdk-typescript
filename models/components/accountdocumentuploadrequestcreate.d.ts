import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * Describes the contents of a document and how it is used; Required for all account documents
 */
export declare enum DocumentType {
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
 * Describes the contents of a document and how it is used; Required for all account documents
 */
export type DocumentTypeOpen = OpenEnum<typeof DocumentType>;
/**
 * Account document to be uploaded;
 */
export type AccountDocumentUploadRequestCreate = {
    /**
     * Identifies the account relevant to the document; Required for all account documents
     */
    accountId: string;
    /**
     * Identifies the correspondent relevant to the document; Required for all account documents
     */
    correspondentId: string;
    /**
     * Describes the contents of a document and how it is used; Required for all account documents
     */
    documentType: DocumentTypeOpen;
};
/** @internal */
export declare const DocumentType$inboundSchema: z.ZodType<DocumentTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const DocumentType$outboundSchema: z.ZodType<DocumentTypeOpen, z.ZodTypeDef, DocumentTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DocumentType$ {
    /** @deprecated use `DocumentType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DocumentTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `DocumentType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DocumentTypeOpen, z.ZodTypeDef, DocumentTypeOpen>;
}
/** @internal */
export declare const AccountDocumentUploadRequestCreate$inboundSchema: z.ZodType<AccountDocumentUploadRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountDocumentUploadRequestCreate$Outbound = {
    account_id: string;
    correspondent_id: string;
    document_type: string;
};
/** @internal */
export declare const AccountDocumentUploadRequestCreate$outboundSchema: z.ZodType<AccountDocumentUploadRequestCreate$Outbound, z.ZodTypeDef, AccountDocumentUploadRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountDocumentUploadRequestCreate$ {
    /** @deprecated use `AccountDocumentUploadRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountDocumentUploadRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountDocumentUploadRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountDocumentUploadRequestCreate$Outbound, z.ZodTypeDef, AccountDocumentUploadRequestCreate>;
    /** @deprecated use `AccountDocumentUploadRequestCreate$Outbound` instead. */
    type Outbound = AccountDocumentUploadRequestCreate$Outbound;
}
//# sourceMappingURL=accountdocumentuploadrequestcreate.d.ts.map