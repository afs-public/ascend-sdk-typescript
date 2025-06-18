import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export declare enum IRASimpleEnrollmentMetadataCreateDividendReinvestmentPlan {
    AutoEnrollDividendReinvestmentUnspecified = "AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED",
    DividendReinvestmentEnroll = "DIVIDEND_REINVESTMENT_ENROLL",
    DividendReinvestmentDecline = "DIVIDEND_REINVESTMENT_DECLINE"
}
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export type IRASimpleEnrollmentMetadataCreateDividendReinvestmentPlanOpen = OpenEnum<typeof IRASimpleEnrollmentMetadataCreateDividendReinvestmentPlan>;
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export declare enum IRASimpleEnrollmentMetadataCreateFdicCashSweep {
    AutoEnrollFdicCashSweepUnspecified = "AUTO_ENROLL_FDIC_CASH_SWEEP_UNSPECIFIED",
    FdicCashSweepEnroll = "FDIC_CASH_SWEEP_ENROLL",
    FdicCashSweepDecline = "FDIC_CASH_SWEEP_DECLINE"
}
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export type IRASimpleEnrollmentMetadataCreateFdicCashSweepOpen = OpenEnum<typeof IRASimpleEnrollmentMetadataCreateFdicCashSweep>;
/**
 * Enrollment metadata for Simple IRA accounts enrollment type
 */
export type IRASimpleEnrollmentMetadataCreate = {
    /**
     * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
     */
    dividendReinvestmentPlan?: IRASimpleEnrollmentMetadataCreateDividendReinvestmentPlanOpen | undefined;
    /**
     * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
     */
    fdicCashSweep?: IRASimpleEnrollmentMetadataCreateFdicCashSweepOpen | undefined;
};
/** @internal */
export declare const IRASimpleEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema: z.ZodType<IRASimpleEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const IRASimpleEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema: z.ZodType<IRASimpleEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, IRASimpleEnrollmentMetadataCreateDividendReinvestmentPlanOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IRASimpleEnrollmentMetadataCreateDividendReinvestmentPlan$ {
    /** @deprecated use `IRASimpleEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IRASimpleEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `IRASimpleEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IRASimpleEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, IRASimpleEnrollmentMetadataCreateDividendReinvestmentPlanOpen>;
}
/** @internal */
export declare const IRASimpleEnrollmentMetadataCreateFdicCashSweep$inboundSchema: z.ZodType<IRASimpleEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const IRASimpleEnrollmentMetadataCreateFdicCashSweep$outboundSchema: z.ZodType<IRASimpleEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, IRASimpleEnrollmentMetadataCreateFdicCashSweepOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IRASimpleEnrollmentMetadataCreateFdicCashSweep$ {
    /** @deprecated use `IRASimpleEnrollmentMetadataCreateFdicCashSweep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IRASimpleEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `IRASimpleEnrollmentMetadataCreateFdicCashSweep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IRASimpleEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, IRASimpleEnrollmentMetadataCreateFdicCashSweepOpen>;
}
/** @internal */
export declare const IRASimpleEnrollmentMetadataCreate$inboundSchema: z.ZodType<IRASimpleEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type IRASimpleEnrollmentMetadataCreate$Outbound = {
    dividend_reinvestment_plan?: string | undefined;
    fdic_cash_sweep?: string | undefined;
};
/** @internal */
export declare const IRASimpleEnrollmentMetadataCreate$outboundSchema: z.ZodType<IRASimpleEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, IRASimpleEnrollmentMetadataCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IRASimpleEnrollmentMetadataCreate$ {
    /** @deprecated use `IRASimpleEnrollmentMetadataCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IRASimpleEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `IRASimpleEnrollmentMetadataCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IRASimpleEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, IRASimpleEnrollmentMetadataCreate>;
    /** @deprecated use `IRASimpleEnrollmentMetadataCreate$Outbound` instead. */
    type Outbound = IRASimpleEnrollmentMetadataCreate$Outbound;
}
//# sourceMappingURL=irasimpleenrollmentmetadatacreate.d.ts.map