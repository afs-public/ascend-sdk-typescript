import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export declare enum JointTenantsByEntiretyEnrollmentMetadataCreateDividendReinvestmentPlan {
    AutoEnrollDividendReinvestmentUnspecified = "AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED",
    DividendReinvestmentEnroll = "DIVIDEND_REINVESTMENT_ENROLL",
    DividendReinvestmentDecline = "DIVIDEND_REINVESTMENT_DECLINE"
}
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export type JointTenantsByEntiretyEnrollmentMetadataCreateDividendReinvestmentPlanOpen = OpenEnum<typeof JointTenantsByEntiretyEnrollmentMetadataCreateDividendReinvestmentPlan>;
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export declare enum JointTenantsByEntiretyEnrollmentMetadataCreateFdicCashSweep {
    AutoEnrollFdicCashSweepUnspecified = "AUTO_ENROLL_FDIC_CASH_SWEEP_UNSPECIFIED",
    FdicCashSweepEnroll = "FDIC_CASH_SWEEP_ENROLL",
    FdicCashSweepDecline = "FDIC_CASH_SWEEP_DECLINE"
}
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export type JointTenantsByEntiretyEnrollmentMetadataCreateFdicCashSweepOpen = OpenEnum<typeof JointTenantsByEntiretyEnrollmentMetadataCreateFdicCashSweep>;
/**
 * The legal residency state of a married couple
 */
export declare enum JointTenantsByEntiretyEnrollmentMetadataCreateLegalResidencyStateOfMarriedCouple {
    LegalResidencyStateOfMarriedCoupleUnspecified = "LEGAL_RESIDENCY_STATE_OF_MARRIED_COUPLE_UNSPECIFIED",
    Ak = "AK",
    Az = "AZ",
    Ar = "AR",
    Ca = "CA",
    De = "DE",
    Fl = "FL",
    Hi = "HI",
    Id = "ID",
    Il = "IL",
    In = "IN",
    Ky = "KY",
    La = "LA",
    Md = "MD",
    Ma = "MA",
    Mi = "MI",
    Ms = "MS",
    Mo = "MO",
    Nv = "NV",
    Nj = "NJ",
    Nm = "NM",
    Ny = "NY",
    Nc = "NC",
    Oh = "OH",
    Ok = "OK",
    Or = "OR",
    Pa = "PA",
    Ri = "RI",
    Tn = "TN",
    Tx = "TX",
    Vt = "VT",
    Va = "VA",
    Wa = "WA",
    Wi = "WI",
    Wy = "WY"
}
/**
 * The legal residency state of a married couple
 */
export type JointTenantsByEntiretyEnrollmentMetadataCreateLegalResidencyStateOfMarriedCoupleOpen = OpenEnum<typeof JointTenantsByEntiretyEnrollmentMetadataCreateLegalResidencyStateOfMarriedCouple>;
/**
 * Enrollment metadata for the Joint Tenants by Entirety Registration enrollment type
 */
export type JointTenantsByEntiretyEnrollmentMetadataCreate = {
    /**
     * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
     */
    dividendReinvestmentPlan?: JointTenantsByEntiretyEnrollmentMetadataCreateDividendReinvestmentPlanOpen | undefined;
    /**
     * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
     */
    fdicCashSweep?: JointTenantsByEntiretyEnrollmentMetadataCreateFdicCashSweepOpen | undefined;
    /**
     * The legal residency state of a married couple
     */
    legalResidencyStateOfMarriedCouple: JointTenantsByEntiretyEnrollmentMetadataCreateLegalResidencyStateOfMarriedCoupleOpen;
};
/** @internal */
export declare const JointTenantsByEntiretyEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema: z.ZodType<JointTenantsByEntiretyEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const JointTenantsByEntiretyEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema: z.ZodType<JointTenantsByEntiretyEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, JointTenantsByEntiretyEnrollmentMetadataCreateDividendReinvestmentPlanOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace JointTenantsByEntiretyEnrollmentMetadataCreateDividendReinvestmentPlan$ {
    /** @deprecated use `JointTenantsByEntiretyEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema` instead. */
    const inboundSchema: z.ZodType<JointTenantsByEntiretyEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `JointTenantsByEntiretyEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema` instead. */
    const outboundSchema: z.ZodType<JointTenantsByEntiretyEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, JointTenantsByEntiretyEnrollmentMetadataCreateDividendReinvestmentPlanOpen>;
}
/** @internal */
export declare const JointTenantsByEntiretyEnrollmentMetadataCreateFdicCashSweep$inboundSchema: z.ZodType<JointTenantsByEntiretyEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const JointTenantsByEntiretyEnrollmentMetadataCreateFdicCashSweep$outboundSchema: z.ZodType<JointTenantsByEntiretyEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, JointTenantsByEntiretyEnrollmentMetadataCreateFdicCashSweepOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace JointTenantsByEntiretyEnrollmentMetadataCreateFdicCashSweep$ {
    /** @deprecated use `JointTenantsByEntiretyEnrollmentMetadataCreateFdicCashSweep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<JointTenantsByEntiretyEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `JointTenantsByEntiretyEnrollmentMetadataCreateFdicCashSweep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<JointTenantsByEntiretyEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, JointTenantsByEntiretyEnrollmentMetadataCreateFdicCashSweepOpen>;
}
/** @internal */
export declare const JointTenantsByEntiretyEnrollmentMetadataCreateLegalResidencyStateOfMarriedCouple$inboundSchema: z.ZodType<JointTenantsByEntiretyEnrollmentMetadataCreateLegalResidencyStateOfMarriedCoupleOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const JointTenantsByEntiretyEnrollmentMetadataCreateLegalResidencyStateOfMarriedCouple$outboundSchema: z.ZodType<JointTenantsByEntiretyEnrollmentMetadataCreateLegalResidencyStateOfMarriedCoupleOpen, z.ZodTypeDef, JointTenantsByEntiretyEnrollmentMetadataCreateLegalResidencyStateOfMarriedCoupleOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace JointTenantsByEntiretyEnrollmentMetadataCreateLegalResidencyStateOfMarriedCouple$ {
    /** @deprecated use `JointTenantsByEntiretyEnrollmentMetadataCreateLegalResidencyStateOfMarriedCouple$inboundSchema` instead. */
    const inboundSchema: z.ZodType<JointTenantsByEntiretyEnrollmentMetadataCreateLegalResidencyStateOfMarriedCoupleOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `JointTenantsByEntiretyEnrollmentMetadataCreateLegalResidencyStateOfMarriedCouple$outboundSchema` instead. */
    const outboundSchema: z.ZodType<JointTenantsByEntiretyEnrollmentMetadataCreateLegalResidencyStateOfMarriedCoupleOpen, z.ZodTypeDef, JointTenantsByEntiretyEnrollmentMetadataCreateLegalResidencyStateOfMarriedCoupleOpen>;
}
/** @internal */
export declare const JointTenantsByEntiretyEnrollmentMetadataCreate$inboundSchema: z.ZodType<JointTenantsByEntiretyEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type JointTenantsByEntiretyEnrollmentMetadataCreate$Outbound = {
    dividend_reinvestment_plan?: string | undefined;
    fdic_cash_sweep?: string | undefined;
    legal_residency_state_of_married_couple: string;
};
/** @internal */
export declare const JointTenantsByEntiretyEnrollmentMetadataCreate$outboundSchema: z.ZodType<JointTenantsByEntiretyEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, JointTenantsByEntiretyEnrollmentMetadataCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace JointTenantsByEntiretyEnrollmentMetadataCreate$ {
    /** @deprecated use `JointTenantsByEntiretyEnrollmentMetadataCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<JointTenantsByEntiretyEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `JointTenantsByEntiretyEnrollmentMetadataCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<JointTenantsByEntiretyEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, JointTenantsByEntiretyEnrollmentMetadataCreate>;
    /** @deprecated use `JointTenantsByEntiretyEnrollmentMetadataCreate$Outbound` instead. */
    type Outbound = JointTenantsByEntiretyEnrollmentMetadataCreate$Outbound;
}
//# sourceMappingURL=jointtenantsbyentiretyenrollmentmetadatacreate.d.ts.map