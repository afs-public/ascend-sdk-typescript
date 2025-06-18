import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export declare enum JointTenantsInCommonEnrollmentMetadataCreateDividendReinvestmentPlan {
    AutoEnrollDividendReinvestmentUnspecified = "AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED",
    DividendReinvestmentEnroll = "DIVIDEND_REINVESTMENT_ENROLL",
    DividendReinvestmentDecline = "DIVIDEND_REINVESTMENT_DECLINE"
}
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export type JointTenantsInCommonEnrollmentMetadataCreateDividendReinvestmentPlanOpen = OpenEnum<typeof JointTenantsInCommonEnrollmentMetadataCreateDividendReinvestmentPlan>;
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export declare enum JointTenantsInCommonEnrollmentMetadataCreateFdicCashSweep {
    AutoEnrollFdicCashSweepUnspecified = "AUTO_ENROLL_FDIC_CASH_SWEEP_UNSPECIFIED",
    FdicCashSweepEnroll = "FDIC_CASH_SWEEP_ENROLL",
    FdicCashSweepDecline = "FDIC_CASH_SWEEP_DECLINE"
}
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export type JointTenantsInCommonEnrollmentMetadataCreateFdicCashSweepOpen = OpenEnum<typeof JointTenantsInCommonEnrollmentMetadataCreateFdicCashSweep>;
/**
 * Enrollment metadata for the Joint Tenants In Common enrollment type
 */
export type JointTenantsInCommonEnrollmentMetadataCreate = {
    /**
     * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
     */
    dividendReinvestmentPlan?: JointTenantsInCommonEnrollmentMetadataCreateDividendReinvestmentPlanOpen | undefined;
    /**
     * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
     */
    fdicCashSweep?: JointTenantsInCommonEnrollmentMetadataCreateFdicCashSweepOpen | undefined;
};
/** @internal */
export declare const JointTenantsInCommonEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema: z.ZodType<JointTenantsInCommonEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const JointTenantsInCommonEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema: z.ZodType<JointTenantsInCommonEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, JointTenantsInCommonEnrollmentMetadataCreateDividendReinvestmentPlanOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace JointTenantsInCommonEnrollmentMetadataCreateDividendReinvestmentPlan$ {
    /** @deprecated use `JointTenantsInCommonEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema` instead. */
    const inboundSchema: z.ZodType<JointTenantsInCommonEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `JointTenantsInCommonEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema` instead. */
    const outboundSchema: z.ZodType<JointTenantsInCommonEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, JointTenantsInCommonEnrollmentMetadataCreateDividendReinvestmentPlanOpen>;
}
/** @internal */
export declare const JointTenantsInCommonEnrollmentMetadataCreateFdicCashSweep$inboundSchema: z.ZodType<JointTenantsInCommonEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const JointTenantsInCommonEnrollmentMetadataCreateFdicCashSweep$outboundSchema: z.ZodType<JointTenantsInCommonEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, JointTenantsInCommonEnrollmentMetadataCreateFdicCashSweepOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace JointTenantsInCommonEnrollmentMetadataCreateFdicCashSweep$ {
    /** @deprecated use `JointTenantsInCommonEnrollmentMetadataCreateFdicCashSweep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<JointTenantsInCommonEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `JointTenantsInCommonEnrollmentMetadataCreateFdicCashSweep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<JointTenantsInCommonEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, JointTenantsInCommonEnrollmentMetadataCreateFdicCashSweepOpen>;
}
/** @internal */
export declare const JointTenantsInCommonEnrollmentMetadataCreate$inboundSchema: z.ZodType<JointTenantsInCommonEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type JointTenantsInCommonEnrollmentMetadataCreate$Outbound = {
    dividend_reinvestment_plan?: string | undefined;
    fdic_cash_sweep?: string | undefined;
};
/** @internal */
export declare const JointTenantsInCommonEnrollmentMetadataCreate$outboundSchema: z.ZodType<JointTenantsInCommonEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, JointTenantsInCommonEnrollmentMetadataCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace JointTenantsInCommonEnrollmentMetadataCreate$ {
    /** @deprecated use `JointTenantsInCommonEnrollmentMetadataCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<JointTenantsInCommonEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `JointTenantsInCommonEnrollmentMetadataCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<JointTenantsInCommonEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, JointTenantsInCommonEnrollmentMetadataCreate>;
    /** @deprecated use `JointTenantsInCommonEnrollmentMetadataCreate$Outbound` instead. */
    type Outbound = JointTenantsInCommonEnrollmentMetadataCreate$Outbound;
}
//# sourceMappingURL=jointtenantsincommonenrollmentmetadatacreate.d.ts.map