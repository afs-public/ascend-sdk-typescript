import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { BeneficiaryEnrollmentMetadataCreate, BeneficiaryEnrollmentMetadataCreate$Outbound } from "./beneficiaryenrollmentmetadatacreate.js";
import { CorporationEnrollmentMetadataCreate, CorporationEnrollmentMetadataCreate$Outbound } from "./corporationenrollmentmetadatacreate.js";
import { CustodialEnrollmentMetadataCreate, CustodialEnrollmentMetadataCreate$Outbound } from "./custodialenrollmentmetadatacreate.js";
import { EstateEnrollmentMetadataCreate, EstateEnrollmentMetadataCreate$Outbound } from "./estateenrollmentmetadatacreate.js";
import { ForeignIndividualAccountEnrollmentMetadataCreate, ForeignIndividualAccountEnrollmentMetadataCreate$Outbound } from "./foreignindividualaccountenrollmentmetadatacreate.js";
import { ForeignJointAccountEnrollmentMetadataCreate, ForeignJointAccountEnrollmentMetadataCreate$Outbound } from "./foreignjointaccountenrollmentmetadatacreate.js";
import { FPSLEnrollmentMetaDataCreate, FPSLEnrollmentMetaDataCreate$Outbound } from "./fpslenrollmentmetadatacreate.js";
import { IndividualEnrollmentMetadataCreate, IndividualEnrollmentMetadataCreate$Outbound } from "./individualenrollmentmetadatacreate.js";
import { IRABeneficiaryEnrollmentMetadataCreate, IRABeneficiaryEnrollmentMetadataCreate$Outbound } from "./irabeneficiaryenrollmentmetadatacreate.js";
import { IRARolloverEnrollmentMetadataCreate, IRARolloverEnrollmentMetadataCreate$Outbound } from "./irarolloverenrollmentmetadatacreate.js";
import { IRARothEnrollmentMetadataCreate, IRARothEnrollmentMetadataCreate$Outbound } from "./irarothenrollmentmetadatacreate.js";
import { IRASEPEnrollmentMetadataCreate, IRASEPEnrollmentMetadataCreate$Outbound } from "./irasepenrollmentmetadatacreate.js";
import { IRASimpleEnrollmentMetadataCreate, IRASimpleEnrollmentMetadataCreate$Outbound } from "./irasimpleenrollmentmetadatacreate.js";
import { IRATraditionalEnrollmentMetadataCreate, IRATraditionalEnrollmentMetadataCreate$Outbound } from "./iratraditionalenrollmentmetadatacreate.js";
import { JointCommunityPropertyEnrollmentMetadataCreate, JointCommunityPropertyEnrollmentMetadataCreate$Outbound } from "./jointcommunitypropertyenrollmentmetadatacreate.js";
import { JointTenantsByEntiretyEnrollmentMetadataCreate, JointTenantsByEntiretyEnrollmentMetadataCreate$Outbound } from "./jointtenantsbyentiretyenrollmentmetadatacreate.js";
import { JointTenantsInCommonEnrollmentMetadataCreate, JointTenantsInCommonEnrollmentMetadataCreate$Outbound } from "./jointtenantsincommonenrollmentmetadatacreate.js";
import { JointWithRightsOfSurvivorshipEnrollmentMetadataCreate, JointWithRightsOfSurvivorshipEnrollmentMetadataCreate$Outbound } from "./jointwithrightsofsurvivorshipenrollmentmetadatacreate.js";
import { LLCEnrollmentMetadataCreate, LLCEnrollmentMetadataCreate$Outbound } from "./llcenrollmentmetadatacreate.js";
import { OperatingEnrollmentMetadataCreate, OperatingEnrollmentMetadataCreate$Outbound } from "./operatingenrollmentmetadatacreate.js";
import { OrdersOptionsTradingEnrollmentMetadataCreate, OrdersOptionsTradingEnrollmentMetadataCreate$Outbound } from "./ordersoptionstradingenrollmentmetadatacreate.js";
import { TrustEnrollmentMetadataCreate, TrustEnrollmentMetadataCreate$Outbound } from "./trustenrollmentmetadatacreate.js";
import { VirtualAccountNumberEnrollmentMetadataCreate, VirtualAccountNumberEnrollmentMetadataCreate$Outbound } from "./virtualaccountnumberenrollmentmetadatacreate.js";
/**
 * The consent method for the enrollment. Defaults to ESIGNATURE.
 */
export declare enum EnrollmentCreateConsentMethod {
    ConsentMethodUnspecified = "CONSENT_METHOD_UNSPECIFIED",
    Esignature = "ESIGNATURE",
    WetSignature = "WET_SIGNATURE",
    NegativeConsentConversion = "NEGATIVE_CONSENT_CONVERSION",
    InternalConversion = "INTERNAL_CONVERSION"
}
/**
 * The consent method for the enrollment. Defaults to ESIGNATURE.
 */
export type EnrollmentCreateConsentMethodOpen = OpenEnum<typeof EnrollmentCreateConsentMethod>;
/**
 * Describes the name of the enrollment; Expressed as an enum
 */
export declare enum EnrollmentCreateType {
    EnrollmentTypeUnspecified = "ENROLLMENT_TYPE_UNSPECIFIED",
    RegistrationIndividual = "REGISTRATION_INDIVIDUAL",
    LendingFullyPaidStockLoan = "LENDING_FULLY_PAID_STOCK_LOAN",
    BeneficiaryDesignation = "BENEFICIARY_DESIGNATION",
    RegistrationJointWros = "REGISTRATION_JOINT_WROS",
    RegistrationJointTic = "REGISTRATION_JOINT_TIC",
    RegistrationJointTbe = "REGISTRATION_JOINT_TBE",
    RegistrationJointCp = "REGISTRATION_JOINT_CP",
    RegistrationEstate = "REGISTRATION_ESTATE",
    RegistrationIraTraditional = "REGISTRATION_IRA_TRADITIONAL",
    RegistrationIraSimple = "REGISTRATION_IRA_SIMPLE",
    RegistrationIraSep = "REGISTRATION_IRA_SEP",
    RegistrationIraRoth = "REGISTRATION_IRA_ROTH",
    RegistrationIraRollover = "REGISTRATION_IRA_ROLLOVER",
    RegistrationTrust = "REGISTRATION_TRUST",
    RegistrationCorporation = "REGISTRATION_CORPORATION",
    RegistrationLlc = "REGISTRATION_LLC",
    CashFdicCashSweep = "CASH_FDIC_CASH_SWEEP",
    RetirementBeneficiaryDesignation = "RETIREMENT_BENEFICIARY_DESIGNATION",
    DividendReinvestmentPlan = "DIVIDEND_REINVESTMENT_PLAN",
    RegistrationIraBeneficiaryTraditional = "REGISTRATION_IRA_BENEFICIARY_TRADITIONAL",
    RegistrationIraBeneficiaryRoth = "REGISTRATION_IRA_BENEFICIARY_ROTH",
    RegistrationIndividualForeign = "REGISTRATION_INDIVIDUAL_FOREIGN",
    RegistrationCustodial = "REGISTRATION_CUSTODIAL",
    VirtualAccountNumber = "VIRTUAL_ACCOUNT_NUMBER"
}
/**
 * Describes the name of the enrollment; Expressed as an enum
 */
export type EnrollmentCreateTypeOpen = OpenEnum<typeof EnrollmentCreateType>;
/**
 * An Enrollment represents programs the account may enroll in.
 */
export type EnrollmentCreate = {
    /**
     * Enrollment metadata for the BENEFICIARY_DESIGNATION enrollment type.
     */
    beneficiaryEnrollmentMetadata?: BeneficiaryEnrollmentMetadataCreate | undefined;
    /**
     * The consent method for the enrollment. Defaults to ESIGNATURE.
     */
    consentMethod?: EnrollmentCreateConsentMethodOpen | undefined;
    corporationEnrollmentMetadata?: CorporationEnrollmentMetadataCreate | undefined;
    /**
     * Enrollment metadata for the CUSTODIAL enrollment type
     */
    custodialEnrollmentMetadata?: CustodialEnrollmentMetadataCreate | undefined;
    /**
     * Enrollment metadata for estate enrollments
     */
    estateEnrollmentMetadata?: EstateEnrollmentMetadataCreate | undefined;
    foreignIndividualAccountEnrollmentMetadata?: ForeignIndividualAccountEnrollmentMetadataCreate | undefined;
    /**
     * Enrollment metadata for the FOREIGN_JOINT_WROS enrollment type
     */
    foreignJointAccountEnrollmentMetadata?: ForeignJointAccountEnrollmentMetadataCreate | undefined;
    /**
     * Percentages for FPSL Enrollment, must equal 100
     */
    fpslEnrollmentMetadata?: FPSLEnrollmentMetaDataCreate | undefined;
    /**
     * Enrollment metadata for Individual accounts enrollment type
     */
    individualEnrollmentMetadata?: IndividualEnrollmentMetadataCreate | undefined;
    /**
     * Enrollment metadata for beneficiary IRA accounts enrollment type
     */
    iraBeneficiaryEnrollmentMetadata?: IRABeneficiaryEnrollmentMetadataCreate | undefined;
    /**
     * Enrollment metadata for Rollover IRA accounts enrollment type
     */
    iraRolloverEnrollmentMetadata?: IRARolloverEnrollmentMetadataCreate | undefined;
    /**
     * Enrollment metadata for ROTH IRA accounts enrollment type
     */
    iraRothEnrollmentMetadata?: IRARothEnrollmentMetadataCreate | undefined;
    /**
     * Enrollment metadata for IRA SEP_IRA accounts enrollment type
     */
    iraSepEnrollmentMetadata?: IRASEPEnrollmentMetadataCreate | undefined;
    /**
     * Enrollment metadata for Simple IRA accounts enrollment type
     */
    iraSimpleEnrollmentMetadata?: IRASimpleEnrollmentMetadataCreate | undefined;
    /**
     * Enrollment metadata for Traditional IRA accounts enrollment type
     */
    iraTraditionalEnrollmentMetadata?: IRATraditionalEnrollmentMetadataCreate | undefined;
    /**
     * Enrollment metadata for the Joint Community Property Registration enrollment type
     */
    jointCommunityPropertyEnrollmentMetadata?: JointCommunityPropertyEnrollmentMetadataCreate | undefined;
    /**
     * Enrollment metadata for the Joint Tenants by Entirety Registration enrollment type
     */
    jointTenantsByEntiretyEnrollmentMetadata?: JointTenantsByEntiretyEnrollmentMetadataCreate | undefined;
    /**
     * Enrollment metadata for the Joint Tenants In Common enrollment type
     */
    jointTenantsInCommonEnrollmentMetadata?: JointTenantsInCommonEnrollmentMetadataCreate | undefined;
    /**
     * Enrollment metadata for the With Right of Survivorship enrollment type
     */
    jointWithRightsOfSurvivorshipEnrollmentMetadata?: JointWithRightsOfSurvivorshipEnrollmentMetadataCreate | undefined;
    llcEnrollmentMetadata?: LLCEnrollmentMetadataCreate | undefined;
    /**
     * Enrollment metadata for the REGISTRATION_OPERATING enrollment type.
     */
    operatingEnrollmentMetadata?: OperatingEnrollmentMetadataCreate | undefined;
    /**
     * Enrollment metadata for the ORDERS_OPTIONS_TRADING enrollment type
     */
    ordersOptionsTradingEnrollmentMetadata?: OrdersOptionsTradingEnrollmentMetadataCreate | undefined;
    /**
     * The ULID is associated with the approver of a given enrollment. The approver you create will contain the CRD Number issued to the person by FINRA. As an RIA, you should use the ULID associated with Apex's approver.
     */
    principalApproverId: string;
    trustEnrollmentMetadata?: TrustEnrollmentMetadataCreate | undefined;
    /**
     * Describes the name of the enrollment; Expressed as an enum
     */
    type: EnrollmentCreateTypeOpen;
    /**
     * Enrollment metadata for the VIRTUAL_ACCOUNT_NUMBER enrollment type
     */
    virtualAccountNumberEnrollmentMetadata?: VirtualAccountNumberEnrollmentMetadataCreate | undefined;
};
/** @internal */
export declare const EnrollmentCreateConsentMethod$inboundSchema: z.ZodType<EnrollmentCreateConsentMethodOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentCreateConsentMethod$outboundSchema: z.ZodType<EnrollmentCreateConsentMethodOpen, z.ZodTypeDef, EnrollmentCreateConsentMethodOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentCreateConsentMethod$ {
    /** @deprecated use `EnrollmentCreateConsentMethod$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentCreateConsentMethodOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentCreateConsentMethod$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentCreateConsentMethodOpen, z.ZodTypeDef, EnrollmentCreateConsentMethodOpen>;
}
/** @internal */
export declare const EnrollmentCreateType$inboundSchema: z.ZodType<EnrollmentCreateTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentCreateType$outboundSchema: z.ZodType<EnrollmentCreateTypeOpen, z.ZodTypeDef, EnrollmentCreateTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentCreateType$ {
    /** @deprecated use `EnrollmentCreateType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentCreateTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentCreateType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentCreateTypeOpen, z.ZodTypeDef, EnrollmentCreateTypeOpen>;
}
/** @internal */
export declare const EnrollmentCreate$inboundSchema: z.ZodType<EnrollmentCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type EnrollmentCreate$Outbound = {
    beneficiary_enrollment_metadata?: BeneficiaryEnrollmentMetadataCreate$Outbound | undefined;
    consent_method?: string | undefined;
    corporation_enrollment_metadata?: CorporationEnrollmentMetadataCreate$Outbound | undefined;
    custodial_enrollment_metadata?: CustodialEnrollmentMetadataCreate$Outbound | undefined;
    estate_enrollment_metadata?: EstateEnrollmentMetadataCreate$Outbound | undefined;
    foreign_individual_account_enrollment_metadata?: ForeignIndividualAccountEnrollmentMetadataCreate$Outbound | undefined;
    foreign_joint_account_enrollment_metadata?: ForeignJointAccountEnrollmentMetadataCreate$Outbound | undefined;
    fpsl_enrollment_metadata?: FPSLEnrollmentMetaDataCreate$Outbound | undefined;
    individual_enrollment_metadata?: IndividualEnrollmentMetadataCreate$Outbound | undefined;
    ira_beneficiary_enrollment_metadata?: IRABeneficiaryEnrollmentMetadataCreate$Outbound | undefined;
    ira_rollover_enrollment_metadata?: IRARolloverEnrollmentMetadataCreate$Outbound | undefined;
    ira_roth_enrollment_metadata?: IRARothEnrollmentMetadataCreate$Outbound | undefined;
    ira_sep_enrollment_metadata?: IRASEPEnrollmentMetadataCreate$Outbound | undefined;
    ira_simple_enrollment_metadata?: IRASimpleEnrollmentMetadataCreate$Outbound | undefined;
    ira_traditional_enrollment_metadata?: IRATraditionalEnrollmentMetadataCreate$Outbound | undefined;
    joint_community_property_enrollment_metadata?: JointCommunityPropertyEnrollmentMetadataCreate$Outbound | undefined;
    joint_tenants_by_entirety_enrollment_metadata?: JointTenantsByEntiretyEnrollmentMetadataCreate$Outbound | undefined;
    joint_tenants_in_common_enrollment_metadata?: JointTenantsInCommonEnrollmentMetadataCreate$Outbound | undefined;
    joint_with_rights_of_survivorship_enrollment_metadata?: JointWithRightsOfSurvivorshipEnrollmentMetadataCreate$Outbound | undefined;
    llc_enrollment_metadata?: LLCEnrollmentMetadataCreate$Outbound | undefined;
    operating_enrollment_metadata?: OperatingEnrollmentMetadataCreate$Outbound | undefined;
    orders_options_trading_enrollment_metadata?: OrdersOptionsTradingEnrollmentMetadataCreate$Outbound | undefined;
    principal_approver_id: string;
    trust_enrollment_metadata?: TrustEnrollmentMetadataCreate$Outbound | undefined;
    type: string;
    virtual_account_number_enrollment_metadata?: VirtualAccountNumberEnrollmentMetadataCreate$Outbound | undefined;
};
/** @internal */
export declare const EnrollmentCreate$outboundSchema: z.ZodType<EnrollmentCreate$Outbound, z.ZodTypeDef, EnrollmentCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentCreate$ {
    /** @deprecated use `EnrollmentCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentCreate$Outbound, z.ZodTypeDef, EnrollmentCreate>;
    /** @deprecated use `EnrollmentCreate$Outbound` instead. */
    type Outbound = EnrollmentCreate$Outbound;
}
//# sourceMappingURL=enrollmentcreate.d.ts.map