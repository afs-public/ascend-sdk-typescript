import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * **Field Dependencies:**
 *
 * @remarks
 *
 * Required if `enrollment_id` is not present.
 *
 * Otherwise, must be empty.
 */
export declare enum DeactivateEnrollmentRequestCreateEnrollmentType {
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
 * **Field Dependencies:**
 *
 * @remarks
 *
 * Required if `enrollment_id` is not present.
 *
 * Otherwise, must be empty.
 */
export type DeactivateEnrollmentRequestCreateEnrollmentTypeOpen = OpenEnum<typeof DeactivateEnrollmentRequestCreateEnrollmentType>;
/**
 * The request for deactivating an Enrollment on an account.
 */
export type DeactivateEnrollmentRequestCreate = {
    /**
     * **Field Dependencies:**
     *
     * @remarks
     *
     * Required if `enrollment_type` is not present.
     *
     * Otherwise, must be empty.
     */
    enrollmentId?: string | undefined;
    /**
     * **Field Dependencies:**
     *
     * @remarks
     *
     * Required if `enrollment_id` is not present.
     *
     * Otherwise, must be empty.
     */
    enrollmentType?: DeactivateEnrollmentRequestCreateEnrollmentTypeOpen | undefined;
};
/** @internal */
export declare const DeactivateEnrollmentRequestCreateEnrollmentType$inboundSchema: z.ZodType<DeactivateEnrollmentRequestCreateEnrollmentTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const DeactivateEnrollmentRequestCreateEnrollmentType$outboundSchema: z.ZodType<DeactivateEnrollmentRequestCreateEnrollmentTypeOpen, z.ZodTypeDef, DeactivateEnrollmentRequestCreateEnrollmentTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeactivateEnrollmentRequestCreateEnrollmentType$ {
    /** @deprecated use `DeactivateEnrollmentRequestCreateEnrollmentType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeactivateEnrollmentRequestCreateEnrollmentTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeactivateEnrollmentRequestCreateEnrollmentType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeactivateEnrollmentRequestCreateEnrollmentTypeOpen, z.ZodTypeDef, DeactivateEnrollmentRequestCreateEnrollmentTypeOpen>;
}
/** @internal */
export declare const DeactivateEnrollmentRequestCreate$inboundSchema: z.ZodType<DeactivateEnrollmentRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type DeactivateEnrollmentRequestCreate$Outbound = {
    enrollment_id?: string | undefined;
    enrollment_type?: string | undefined;
};
/** @internal */
export declare const DeactivateEnrollmentRequestCreate$outboundSchema: z.ZodType<DeactivateEnrollmentRequestCreate$Outbound, z.ZodTypeDef, DeactivateEnrollmentRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeactivateEnrollmentRequestCreate$ {
    /** @deprecated use `DeactivateEnrollmentRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeactivateEnrollmentRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeactivateEnrollmentRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeactivateEnrollmentRequestCreate$Outbound, z.ZodTypeDef, DeactivateEnrollmentRequestCreate>;
    /** @deprecated use `DeactivateEnrollmentRequestCreate$Outbound` instead. */
    type Outbound = DeactivateEnrollmentRequestCreate$Outbound;
}
export declare function deactivateEnrollmentRequestCreateToJSON(deactivateEnrollmentRequestCreate: DeactivateEnrollmentRequestCreate): string;
export declare function deactivateEnrollmentRequestCreateFromJSON(jsonString: string): SafeParseResult<DeactivateEnrollmentRequestCreate, SDKValidationError>;
//# sourceMappingURL=deactivateenrollmentrequestcreate.d.ts.map