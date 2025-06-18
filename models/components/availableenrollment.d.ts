import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { LegalAgreement, LegalAgreement$Outbound } from "./legalagreement.js";
/**
 * The enrollment type.
 */
export declare enum EnrollmentType {
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
 * The enrollment type.
 */
export type EnrollmentTypeOpen = OpenEnum<typeof EnrollmentType>;
/**
 * Available Enrollment on an Account.
 */
export type AvailableEnrollment = {
    /**
     * A list of legal agreements associated with the enrollment.
     */
    agreements?: Array<LegalAgreement> | undefined;
    /**
     * The enrollment type.
     */
    enrollmentType?: EnrollmentTypeOpen | undefined;
};
/** @internal */
export declare const EnrollmentType$inboundSchema: z.ZodType<EnrollmentTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EnrollmentType$outboundSchema: z.ZodType<EnrollmentTypeOpen, z.ZodTypeDef, EnrollmentTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnrollmentType$ {
    /** @deprecated use `EnrollmentType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnrollmentTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnrollmentType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnrollmentTypeOpen, z.ZodTypeDef, EnrollmentTypeOpen>;
}
/** @internal */
export declare const AvailableEnrollment$inboundSchema: z.ZodType<AvailableEnrollment, z.ZodTypeDef, unknown>;
/** @internal */
export type AvailableEnrollment$Outbound = {
    agreements?: Array<LegalAgreement$Outbound> | undefined;
    enrollment_type?: string | undefined;
};
/** @internal */
export declare const AvailableEnrollment$outboundSchema: z.ZodType<AvailableEnrollment$Outbound, z.ZodTypeDef, AvailableEnrollment>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AvailableEnrollment$ {
    /** @deprecated use `AvailableEnrollment$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AvailableEnrollment, z.ZodTypeDef, unknown>;
    /** @deprecated use `AvailableEnrollment$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AvailableEnrollment$Outbound, z.ZodTypeDef, AvailableEnrollment>;
    /** @deprecated use `AvailableEnrollment$Outbound` instead. */
    type Outbound = AvailableEnrollment$Outbound;
}
//# sourceMappingURL=availableenrollment.d.ts.map