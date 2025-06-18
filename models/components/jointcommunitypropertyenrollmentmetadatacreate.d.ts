import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export declare enum JointCommunityPropertyEnrollmentMetadataCreateDividendReinvestmentPlan {
    AutoEnrollDividendReinvestmentUnspecified = "AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED",
    DividendReinvestmentEnroll = "DIVIDEND_REINVESTMENT_ENROLL",
    DividendReinvestmentDecline = "DIVIDEND_REINVESTMENT_DECLINE"
}
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export type JointCommunityPropertyEnrollmentMetadataCreateDividendReinvestmentPlanOpen = OpenEnum<typeof JointCommunityPropertyEnrollmentMetadataCreateDividendReinvestmentPlan>;
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export declare enum JointCommunityPropertyEnrollmentMetadataCreateFdicCashSweep {
    AutoEnrollFdicCashSweepUnspecified = "AUTO_ENROLL_FDIC_CASH_SWEEP_UNSPECIFIED",
    FdicCashSweepEnroll = "FDIC_CASH_SWEEP_ENROLL",
    FdicCashSweepDecline = "FDIC_CASH_SWEEP_DECLINE"
}
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export type JointCommunityPropertyEnrollmentMetadataCreateFdicCashSweepOpen = OpenEnum<typeof JointCommunityPropertyEnrollmentMetadataCreateFdicCashSweep>;
/**
 * The legal residency state of a married couple
 */
export declare enum LegalResidencyStateOfMarriedCouple {
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
export type LegalResidencyStateOfMarriedCoupleOpen = OpenEnum<typeof LegalResidencyStateOfMarriedCouple>;
/**
 * Enrollment metadata for the Joint Community Property Registration enrollment type
 */
export type JointCommunityPropertyEnrollmentMetadataCreate = {
    /**
     * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
     */
    dividendReinvestmentPlan?: JointCommunityPropertyEnrollmentMetadataCreateDividendReinvestmentPlanOpen | undefined;
    /**
     * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
     */
    fdicCashSweep?: JointCommunityPropertyEnrollmentMetadataCreateFdicCashSweepOpen | undefined;
    /**
     * The legal residency state of a married couple
     */
    legalResidencyStateOfMarriedCouple: LegalResidencyStateOfMarriedCoupleOpen;
};
/** @internal */
export declare const JointCommunityPropertyEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema: z.ZodType<JointCommunityPropertyEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const JointCommunityPropertyEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema: z.ZodType<JointCommunityPropertyEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, JointCommunityPropertyEnrollmentMetadataCreateDividendReinvestmentPlanOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace JointCommunityPropertyEnrollmentMetadataCreateDividendReinvestmentPlan$ {
    /** @deprecated use `JointCommunityPropertyEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema` instead. */
    const inboundSchema: z.ZodType<JointCommunityPropertyEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `JointCommunityPropertyEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema` instead. */
    const outboundSchema: z.ZodType<JointCommunityPropertyEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, JointCommunityPropertyEnrollmentMetadataCreateDividendReinvestmentPlanOpen>;
}
/** @internal */
export declare const JointCommunityPropertyEnrollmentMetadataCreateFdicCashSweep$inboundSchema: z.ZodType<JointCommunityPropertyEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const JointCommunityPropertyEnrollmentMetadataCreateFdicCashSweep$outboundSchema: z.ZodType<JointCommunityPropertyEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, JointCommunityPropertyEnrollmentMetadataCreateFdicCashSweepOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace JointCommunityPropertyEnrollmentMetadataCreateFdicCashSweep$ {
    /** @deprecated use `JointCommunityPropertyEnrollmentMetadataCreateFdicCashSweep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<JointCommunityPropertyEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `JointCommunityPropertyEnrollmentMetadataCreateFdicCashSweep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<JointCommunityPropertyEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, JointCommunityPropertyEnrollmentMetadataCreateFdicCashSweepOpen>;
}
/** @internal */
export declare const LegalResidencyStateOfMarriedCouple$inboundSchema: z.ZodType<LegalResidencyStateOfMarriedCoupleOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const LegalResidencyStateOfMarriedCouple$outboundSchema: z.ZodType<LegalResidencyStateOfMarriedCoupleOpen, z.ZodTypeDef, LegalResidencyStateOfMarriedCoupleOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LegalResidencyStateOfMarriedCouple$ {
    /** @deprecated use `LegalResidencyStateOfMarriedCouple$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LegalResidencyStateOfMarriedCoupleOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `LegalResidencyStateOfMarriedCouple$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LegalResidencyStateOfMarriedCoupleOpen, z.ZodTypeDef, LegalResidencyStateOfMarriedCoupleOpen>;
}
/** @internal */
export declare const JointCommunityPropertyEnrollmentMetadataCreate$inboundSchema: z.ZodType<JointCommunityPropertyEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type JointCommunityPropertyEnrollmentMetadataCreate$Outbound = {
    dividend_reinvestment_plan?: string | undefined;
    fdic_cash_sweep?: string | undefined;
    legal_residency_state_of_married_couple: string;
};
/** @internal */
export declare const JointCommunityPropertyEnrollmentMetadataCreate$outboundSchema: z.ZodType<JointCommunityPropertyEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, JointCommunityPropertyEnrollmentMetadataCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace JointCommunityPropertyEnrollmentMetadataCreate$ {
    /** @deprecated use `JointCommunityPropertyEnrollmentMetadataCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<JointCommunityPropertyEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `JointCommunityPropertyEnrollmentMetadataCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<JointCommunityPropertyEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, JointCommunityPropertyEnrollmentMetadataCreate>;
    /** @deprecated use `JointCommunityPropertyEnrollmentMetadataCreate$Outbound` instead. */
    type Outbound = JointCommunityPropertyEnrollmentMetadataCreate$Outbound;
}
//# sourceMappingURL=jointcommunitypropertyenrollmentmetadatacreate.d.ts.map