import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export declare enum JointWithRightsOfSurvivorshipEnrollmentMetadataCreateDividendReinvestmentPlan {
    AutoEnrollDividendReinvestmentUnspecified = "AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED",
    DividendReinvestmentEnroll = "DIVIDEND_REINVESTMENT_ENROLL",
    DividendReinvestmentDecline = "DIVIDEND_REINVESTMENT_DECLINE"
}
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export type JointWithRightsOfSurvivorshipEnrollmentMetadataCreateDividendReinvestmentPlanOpen = OpenEnum<typeof JointWithRightsOfSurvivorshipEnrollmentMetadataCreateDividendReinvestmentPlan>;
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export declare enum JointWithRightsOfSurvivorshipEnrollmentMetadataCreateFdicCashSweep {
    AutoEnrollFdicCashSweepUnspecified = "AUTO_ENROLL_FDIC_CASH_SWEEP_UNSPECIFIED",
    FdicCashSweepEnroll = "FDIC_CASH_SWEEP_ENROLL",
    FdicCashSweepDecline = "FDIC_CASH_SWEEP_DECLINE"
}
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export type JointWithRightsOfSurvivorshipEnrollmentMetadataCreateFdicCashSweepOpen = OpenEnum<typeof JointWithRightsOfSurvivorshipEnrollmentMetadataCreateFdicCashSweep>;
/**
 * Enrollment metadata for the With Right of Survivorship enrollment type
 */
export type JointWithRightsOfSurvivorshipEnrollmentMetadataCreate = {
    /**
     * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
     */
    dividendReinvestmentPlan?: JointWithRightsOfSurvivorshipEnrollmentMetadataCreateDividendReinvestmentPlanOpen | undefined;
    /**
     * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
     */
    fdicCashSweep?: JointWithRightsOfSurvivorshipEnrollmentMetadataCreateFdicCashSweepOpen | undefined;
};
/** @internal */
export declare const JointWithRightsOfSurvivorshipEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema: z.ZodType<JointWithRightsOfSurvivorshipEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const JointWithRightsOfSurvivorshipEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema: z.ZodType<JointWithRightsOfSurvivorshipEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, JointWithRightsOfSurvivorshipEnrollmentMetadataCreateDividendReinvestmentPlanOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace JointWithRightsOfSurvivorshipEnrollmentMetadataCreateDividendReinvestmentPlan$ {
    /** @deprecated use `JointWithRightsOfSurvivorshipEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema` instead. */
    const inboundSchema: z.ZodType<JointWithRightsOfSurvivorshipEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `JointWithRightsOfSurvivorshipEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema` instead. */
    const outboundSchema: z.ZodType<JointWithRightsOfSurvivorshipEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, JointWithRightsOfSurvivorshipEnrollmentMetadataCreateDividendReinvestmentPlanOpen>;
}
/** @internal */
export declare const JointWithRightsOfSurvivorshipEnrollmentMetadataCreateFdicCashSweep$inboundSchema: z.ZodType<JointWithRightsOfSurvivorshipEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const JointWithRightsOfSurvivorshipEnrollmentMetadataCreateFdicCashSweep$outboundSchema: z.ZodType<JointWithRightsOfSurvivorshipEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, JointWithRightsOfSurvivorshipEnrollmentMetadataCreateFdicCashSweepOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace JointWithRightsOfSurvivorshipEnrollmentMetadataCreateFdicCashSweep$ {
    /** @deprecated use `JointWithRightsOfSurvivorshipEnrollmentMetadataCreateFdicCashSweep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<JointWithRightsOfSurvivorshipEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `JointWithRightsOfSurvivorshipEnrollmentMetadataCreateFdicCashSweep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<JointWithRightsOfSurvivorshipEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, JointWithRightsOfSurvivorshipEnrollmentMetadataCreateFdicCashSweepOpen>;
}
/** @internal */
export declare const JointWithRightsOfSurvivorshipEnrollmentMetadataCreate$inboundSchema: z.ZodType<JointWithRightsOfSurvivorshipEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type JointWithRightsOfSurvivorshipEnrollmentMetadataCreate$Outbound = {
    dividend_reinvestment_plan?: string | undefined;
    fdic_cash_sweep?: string | undefined;
};
/** @internal */
export declare const JointWithRightsOfSurvivorshipEnrollmentMetadataCreate$outboundSchema: z.ZodType<JointWithRightsOfSurvivorshipEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, JointWithRightsOfSurvivorshipEnrollmentMetadataCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace JointWithRightsOfSurvivorshipEnrollmentMetadataCreate$ {
    /** @deprecated use `JointWithRightsOfSurvivorshipEnrollmentMetadataCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<JointWithRightsOfSurvivorshipEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `JointWithRightsOfSurvivorshipEnrollmentMetadataCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<JointWithRightsOfSurvivorshipEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, JointWithRightsOfSurvivorshipEnrollmentMetadataCreate>;
    /** @deprecated use `JointWithRightsOfSurvivorshipEnrollmentMetadataCreate$Outbound` instead. */
    type Outbound = JointWithRightsOfSurvivorshipEnrollmentMetadataCreate$Outbound;
}
//# sourceMappingURL=jointwithrightsofsurvivorshipenrollmentmetadatacreate.d.ts.map