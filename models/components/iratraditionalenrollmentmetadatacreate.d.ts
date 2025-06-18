import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export declare enum IRATraditionalEnrollmentMetadataCreateDividendReinvestmentPlan {
    AutoEnrollDividendReinvestmentUnspecified = "AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED",
    DividendReinvestmentEnroll = "DIVIDEND_REINVESTMENT_ENROLL",
    DividendReinvestmentDecline = "DIVIDEND_REINVESTMENT_DECLINE"
}
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export type IRATraditionalEnrollmentMetadataCreateDividendReinvestmentPlanOpen = OpenEnum<typeof IRATraditionalEnrollmentMetadataCreateDividendReinvestmentPlan>;
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export declare enum IRATraditionalEnrollmentMetadataCreateFdicCashSweep {
    AutoEnrollFdicCashSweepUnspecified = "AUTO_ENROLL_FDIC_CASH_SWEEP_UNSPECIFIED",
    FdicCashSweepEnroll = "FDIC_CASH_SWEEP_ENROLL",
    FdicCashSweepDecline = "FDIC_CASH_SWEEP_DECLINE"
}
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export type IRATraditionalEnrollmentMetadataCreateFdicCashSweepOpen = OpenEnum<typeof IRATraditionalEnrollmentMetadataCreateFdicCashSweep>;
/**
 * Enrollment metadata for Traditional IRA accounts enrollment type
 */
export type IRATraditionalEnrollmentMetadataCreate = {
    /**
     * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
     */
    dividendReinvestmentPlan?: IRATraditionalEnrollmentMetadataCreateDividendReinvestmentPlanOpen | undefined;
    /**
     * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
     */
    fdicCashSweep?: IRATraditionalEnrollmentMetadataCreateFdicCashSweepOpen | undefined;
};
/** @internal */
export declare const IRATraditionalEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema: z.ZodType<IRATraditionalEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const IRATraditionalEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema: z.ZodType<IRATraditionalEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, IRATraditionalEnrollmentMetadataCreateDividendReinvestmentPlanOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IRATraditionalEnrollmentMetadataCreateDividendReinvestmentPlan$ {
    /** @deprecated use `IRATraditionalEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IRATraditionalEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `IRATraditionalEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IRATraditionalEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, IRATraditionalEnrollmentMetadataCreateDividendReinvestmentPlanOpen>;
}
/** @internal */
export declare const IRATraditionalEnrollmentMetadataCreateFdicCashSweep$inboundSchema: z.ZodType<IRATraditionalEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const IRATraditionalEnrollmentMetadataCreateFdicCashSweep$outboundSchema: z.ZodType<IRATraditionalEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, IRATraditionalEnrollmentMetadataCreateFdicCashSweepOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IRATraditionalEnrollmentMetadataCreateFdicCashSweep$ {
    /** @deprecated use `IRATraditionalEnrollmentMetadataCreateFdicCashSweep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IRATraditionalEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `IRATraditionalEnrollmentMetadataCreateFdicCashSweep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IRATraditionalEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, IRATraditionalEnrollmentMetadataCreateFdicCashSweepOpen>;
}
/** @internal */
export declare const IRATraditionalEnrollmentMetadataCreate$inboundSchema: z.ZodType<IRATraditionalEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type IRATraditionalEnrollmentMetadataCreate$Outbound = {
    dividend_reinvestment_plan?: string | undefined;
    fdic_cash_sweep?: string | undefined;
};
/** @internal */
export declare const IRATraditionalEnrollmentMetadataCreate$outboundSchema: z.ZodType<IRATraditionalEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, IRATraditionalEnrollmentMetadataCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IRATraditionalEnrollmentMetadataCreate$ {
    /** @deprecated use `IRATraditionalEnrollmentMetadataCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IRATraditionalEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `IRATraditionalEnrollmentMetadataCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IRATraditionalEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, IRATraditionalEnrollmentMetadataCreate>;
    /** @deprecated use `IRATraditionalEnrollmentMetadataCreate$Outbound` instead. */
    type Outbound = IRATraditionalEnrollmentMetadataCreate$Outbound;
}
//# sourceMappingURL=iratraditionalenrollmentmetadatacreate.d.ts.map