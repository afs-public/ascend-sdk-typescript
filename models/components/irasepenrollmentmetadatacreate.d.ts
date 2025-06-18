import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export declare enum IRASEPEnrollmentMetadataCreateDividendReinvestmentPlan {
    AutoEnrollDividendReinvestmentUnspecified = "AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED",
    DividendReinvestmentEnroll = "DIVIDEND_REINVESTMENT_ENROLL",
    DividendReinvestmentDecline = "DIVIDEND_REINVESTMENT_DECLINE"
}
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export type IRASEPEnrollmentMetadataCreateDividendReinvestmentPlanOpen = OpenEnum<typeof IRASEPEnrollmentMetadataCreateDividendReinvestmentPlan>;
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export declare enum IRASEPEnrollmentMetadataCreateFdicCashSweep {
    AutoEnrollFdicCashSweepUnspecified = "AUTO_ENROLL_FDIC_CASH_SWEEP_UNSPECIFIED",
    FdicCashSweepEnroll = "FDIC_CASH_SWEEP_ENROLL",
    FdicCashSweepDecline = "FDIC_CASH_SWEEP_DECLINE"
}
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export type IRASEPEnrollmentMetadataCreateFdicCashSweepOpen = OpenEnum<typeof IRASEPEnrollmentMetadataCreateFdicCashSweep>;
/**
 * Enrollment metadata for IRA SEP_IRA accounts enrollment type
 */
export type IRASEPEnrollmentMetadataCreate = {
    /**
     * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
     */
    dividendReinvestmentPlan?: IRASEPEnrollmentMetadataCreateDividendReinvestmentPlanOpen | undefined;
    /**
     * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
     */
    fdicCashSweep?: IRASEPEnrollmentMetadataCreateFdicCashSweepOpen | undefined;
};
/** @internal */
export declare const IRASEPEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema: z.ZodType<IRASEPEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const IRASEPEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema: z.ZodType<IRASEPEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, IRASEPEnrollmentMetadataCreateDividendReinvestmentPlanOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IRASEPEnrollmentMetadataCreateDividendReinvestmentPlan$ {
    /** @deprecated use `IRASEPEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IRASEPEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `IRASEPEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IRASEPEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, IRASEPEnrollmentMetadataCreateDividendReinvestmentPlanOpen>;
}
/** @internal */
export declare const IRASEPEnrollmentMetadataCreateFdicCashSweep$inboundSchema: z.ZodType<IRASEPEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const IRASEPEnrollmentMetadataCreateFdicCashSweep$outboundSchema: z.ZodType<IRASEPEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, IRASEPEnrollmentMetadataCreateFdicCashSweepOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IRASEPEnrollmentMetadataCreateFdicCashSweep$ {
    /** @deprecated use `IRASEPEnrollmentMetadataCreateFdicCashSweep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IRASEPEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `IRASEPEnrollmentMetadataCreateFdicCashSweep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IRASEPEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, IRASEPEnrollmentMetadataCreateFdicCashSweepOpen>;
}
/** @internal */
export declare const IRASEPEnrollmentMetadataCreate$inboundSchema: z.ZodType<IRASEPEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type IRASEPEnrollmentMetadataCreate$Outbound = {
    dividend_reinvestment_plan?: string | undefined;
    fdic_cash_sweep?: string | undefined;
};
/** @internal */
export declare const IRASEPEnrollmentMetadataCreate$outboundSchema: z.ZodType<IRASEPEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, IRASEPEnrollmentMetadataCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IRASEPEnrollmentMetadataCreate$ {
    /** @deprecated use `IRASEPEnrollmentMetadataCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IRASEPEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `IRASEPEnrollmentMetadataCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IRASEPEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, IRASEPEnrollmentMetadataCreate>;
    /** @deprecated use `IRASEPEnrollmentMetadataCreate$Outbound` instead. */
    type Outbound = IRASEPEnrollmentMetadataCreate$Outbound;
}
//# sourceMappingURL=irasepenrollmentmetadatacreate.d.ts.map