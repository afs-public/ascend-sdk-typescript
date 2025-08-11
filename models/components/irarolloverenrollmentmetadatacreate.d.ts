import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export declare enum IRARolloverEnrollmentMetadataCreateDividendReinvestmentPlan {
    AutoEnrollDividendReinvestmentUnspecified = "AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED",
    DividendReinvestmentEnroll = "DIVIDEND_REINVESTMENT_ENROLL",
    DividendReinvestmentDecline = "DIVIDEND_REINVESTMENT_DECLINE"
}
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export type IRARolloverEnrollmentMetadataCreateDividendReinvestmentPlanOpen = OpenEnum<typeof IRARolloverEnrollmentMetadataCreateDividendReinvestmentPlan>;
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export declare enum IRARolloverEnrollmentMetadataCreateFdicCashSweep {
    AutoEnrollFdicCashSweepUnspecified = "AUTO_ENROLL_FDIC_CASH_SWEEP_UNSPECIFIED",
    FdicCashSweepEnroll = "FDIC_CASH_SWEEP_ENROLL",
    FdicCashSweepDecline = "FDIC_CASH_SWEEP_DECLINE"
}
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export type IRARolloverEnrollmentMetadataCreateFdicCashSweepOpen = OpenEnum<typeof IRARolloverEnrollmentMetadataCreateFdicCashSweep>;
/**
 * Enrollment metadata for Rollover IRA accounts enrollment type
 */
export type IRARolloverEnrollmentMetadataCreate = {
    /**
     * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
     */
    dividendReinvestmentPlan?: IRARolloverEnrollmentMetadataCreateDividendReinvestmentPlanOpen | undefined;
    /**
     * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
     */
    fdicCashSweep?: IRARolloverEnrollmentMetadataCreateFdicCashSweepOpen | undefined;
};
/** @internal */
export declare const IRARolloverEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema: z.ZodType<IRARolloverEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const IRARolloverEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema: z.ZodType<IRARolloverEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, IRARolloverEnrollmentMetadataCreateDividendReinvestmentPlanOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IRARolloverEnrollmentMetadataCreateDividendReinvestmentPlan$ {
    /** @deprecated use `IRARolloverEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IRARolloverEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `IRARolloverEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IRARolloverEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, IRARolloverEnrollmentMetadataCreateDividendReinvestmentPlanOpen>;
}
/** @internal */
export declare const IRARolloverEnrollmentMetadataCreateFdicCashSweep$inboundSchema: z.ZodType<IRARolloverEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const IRARolloverEnrollmentMetadataCreateFdicCashSweep$outboundSchema: z.ZodType<IRARolloverEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, IRARolloverEnrollmentMetadataCreateFdicCashSweepOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IRARolloverEnrollmentMetadataCreateFdicCashSweep$ {
    /** @deprecated use `IRARolloverEnrollmentMetadataCreateFdicCashSweep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IRARolloverEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `IRARolloverEnrollmentMetadataCreateFdicCashSweep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IRARolloverEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, IRARolloverEnrollmentMetadataCreateFdicCashSweepOpen>;
}
/** @internal */
export declare const IRARolloverEnrollmentMetadataCreate$inboundSchema: z.ZodType<IRARolloverEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type IRARolloverEnrollmentMetadataCreate$Outbound = {
    dividend_reinvestment_plan?: string | undefined;
    fdic_cash_sweep?: string | undefined;
};
/** @internal */
export declare const IRARolloverEnrollmentMetadataCreate$outboundSchema: z.ZodType<IRARolloverEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, IRARolloverEnrollmentMetadataCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IRARolloverEnrollmentMetadataCreate$ {
    /** @deprecated use `IRARolloverEnrollmentMetadataCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IRARolloverEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `IRARolloverEnrollmentMetadataCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IRARolloverEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, IRARolloverEnrollmentMetadataCreate>;
    /** @deprecated use `IRARolloverEnrollmentMetadataCreate$Outbound` instead. */
    type Outbound = IRARolloverEnrollmentMetadataCreate$Outbound;
}
export declare function iraRolloverEnrollmentMetadataCreateToJSON(iraRolloverEnrollmentMetadataCreate: IRARolloverEnrollmentMetadataCreate): string;
export declare function iraRolloverEnrollmentMetadataCreateFromJSON(jsonString: string): SafeParseResult<IRARolloverEnrollmentMetadataCreate, SDKValidationError>;
//# sourceMappingURL=irarolloverenrollmentmetadatacreate.d.ts.map