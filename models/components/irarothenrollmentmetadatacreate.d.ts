import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export declare enum IRARothEnrollmentMetadataCreateDividendReinvestmentPlan {
    AutoEnrollDividendReinvestmentUnspecified = "AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED",
    DividendReinvestmentEnroll = "DIVIDEND_REINVESTMENT_ENROLL",
    DividendReinvestmentDecline = "DIVIDEND_REINVESTMENT_DECLINE"
}
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export type IRARothEnrollmentMetadataCreateDividendReinvestmentPlanOpen = OpenEnum<typeof IRARothEnrollmentMetadataCreateDividendReinvestmentPlan>;
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export declare enum IRARothEnrollmentMetadataCreateFdicCashSweep {
    AutoEnrollFdicCashSweepUnspecified = "AUTO_ENROLL_FDIC_CASH_SWEEP_UNSPECIFIED",
    FdicCashSweepEnroll = "FDIC_CASH_SWEEP_ENROLL",
    FdicCashSweepDecline = "FDIC_CASH_SWEEP_DECLINE"
}
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export type IRARothEnrollmentMetadataCreateFdicCashSweepOpen = OpenEnum<typeof IRARothEnrollmentMetadataCreateFdicCashSweep>;
/**
 * Enrollment metadata for ROTH IRA accounts enrollment type
 */
export type IRARothEnrollmentMetadataCreate = {
    /**
     * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
     */
    dividendReinvestmentPlan?: IRARothEnrollmentMetadataCreateDividendReinvestmentPlanOpen | undefined;
    /**
     * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
     */
    fdicCashSweep?: IRARothEnrollmentMetadataCreateFdicCashSweepOpen | undefined;
};
/** @internal */
export declare const IRARothEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema: z.ZodType<IRARothEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const IRARothEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema: z.ZodType<IRARothEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, IRARothEnrollmentMetadataCreateDividendReinvestmentPlanOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IRARothEnrollmentMetadataCreateDividendReinvestmentPlan$ {
    /** @deprecated use `IRARothEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IRARothEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `IRARothEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IRARothEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, IRARothEnrollmentMetadataCreateDividendReinvestmentPlanOpen>;
}
/** @internal */
export declare const IRARothEnrollmentMetadataCreateFdicCashSweep$inboundSchema: z.ZodType<IRARothEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const IRARothEnrollmentMetadataCreateFdicCashSweep$outboundSchema: z.ZodType<IRARothEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, IRARothEnrollmentMetadataCreateFdicCashSweepOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IRARothEnrollmentMetadataCreateFdicCashSweep$ {
    /** @deprecated use `IRARothEnrollmentMetadataCreateFdicCashSweep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IRARothEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `IRARothEnrollmentMetadataCreateFdicCashSweep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IRARothEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, IRARothEnrollmentMetadataCreateFdicCashSweepOpen>;
}
/** @internal */
export declare const IRARothEnrollmentMetadataCreate$inboundSchema: z.ZodType<IRARothEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type IRARothEnrollmentMetadataCreate$Outbound = {
    dividend_reinvestment_plan?: string | undefined;
    fdic_cash_sweep?: string | undefined;
};
/** @internal */
export declare const IRARothEnrollmentMetadataCreate$outboundSchema: z.ZodType<IRARothEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, IRARothEnrollmentMetadataCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IRARothEnrollmentMetadataCreate$ {
    /** @deprecated use `IRARothEnrollmentMetadataCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IRARothEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `IRARothEnrollmentMetadataCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IRARothEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, IRARothEnrollmentMetadataCreate>;
    /** @deprecated use `IRARothEnrollmentMetadataCreate$Outbound` instead. */
    type Outbound = IRARothEnrollmentMetadataCreate$Outbound;
}
export declare function iraRothEnrollmentMetadataCreateToJSON(iraRothEnrollmentMetadataCreate: IRARothEnrollmentMetadataCreate): string;
export declare function iraRothEnrollmentMetadataCreateFromJSON(jsonString: string): SafeParseResult<IRARothEnrollmentMetadataCreate, SDKValidationError>;
//# sourceMappingURL=irarothenrollmentmetadatacreate.d.ts.map