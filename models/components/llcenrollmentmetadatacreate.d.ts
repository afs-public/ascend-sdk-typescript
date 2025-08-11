import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { EddAccountEnrollmentMetadataCreate, EddAccountEnrollmentMetadataCreate$Outbound } from "./eddaccountenrollmentmetadatacreate.js";
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export declare enum LLCEnrollmentMetadataCreateDividendReinvestmentPlan {
    AutoEnrollDividendReinvestmentUnspecified = "AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED",
    DividendReinvestmentEnroll = "DIVIDEND_REINVESTMENT_ENROLL",
    DividendReinvestmentDecline = "DIVIDEND_REINVESTMENT_DECLINE"
}
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export type LLCEnrollmentMetadataCreateDividendReinvestmentPlanOpen = OpenEnum<typeof LLCEnrollmentMetadataCreateDividendReinvestmentPlan>;
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export declare enum LLCEnrollmentMetadataCreateFdicCashSweep {
    AutoEnrollFdicCashSweepUnspecified = "AUTO_ENROLL_FDIC_CASH_SWEEP_UNSPECIFIED",
    FdicCashSweepEnroll = "FDIC_CASH_SWEEP_ENROLL",
    FdicCashSweepDecline = "FDIC_CASH_SWEEP_DECLINE"
}
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export type LLCEnrollmentMetadataCreateFdicCashSweepOpen = OpenEnum<typeof LLCEnrollmentMetadataCreateFdicCashSweep>;
export type LLCEnrollmentMetadataCreate = {
    /**
     * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
     */
    dividendReinvestmentPlan?: LLCEnrollmentMetadataCreateDividendReinvestmentPlanOpen | undefined;
    /**
     * Enrollment metadata for Entity Accounts
     */
    eddAccountEnrollmentMetadata?: EddAccountEnrollmentMetadataCreate | undefined;
    /**
     * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
     */
    fdicCashSweep?: LLCEnrollmentMetadataCreateFdicCashSweepOpen | undefined;
};
/** @internal */
export declare const LLCEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema: z.ZodType<LLCEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const LLCEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema: z.ZodType<LLCEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, LLCEnrollmentMetadataCreateDividendReinvestmentPlanOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LLCEnrollmentMetadataCreateDividendReinvestmentPlan$ {
    /** @deprecated use `LLCEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LLCEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `LLCEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LLCEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, LLCEnrollmentMetadataCreateDividendReinvestmentPlanOpen>;
}
/** @internal */
export declare const LLCEnrollmentMetadataCreateFdicCashSweep$inboundSchema: z.ZodType<LLCEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const LLCEnrollmentMetadataCreateFdicCashSweep$outboundSchema: z.ZodType<LLCEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, LLCEnrollmentMetadataCreateFdicCashSweepOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LLCEnrollmentMetadataCreateFdicCashSweep$ {
    /** @deprecated use `LLCEnrollmentMetadataCreateFdicCashSweep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LLCEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `LLCEnrollmentMetadataCreateFdicCashSweep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LLCEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, LLCEnrollmentMetadataCreateFdicCashSweepOpen>;
}
/** @internal */
export declare const LLCEnrollmentMetadataCreate$inboundSchema: z.ZodType<LLCEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type LLCEnrollmentMetadataCreate$Outbound = {
    dividend_reinvestment_plan?: string | undefined;
    edd_account_enrollment_metadata?: EddAccountEnrollmentMetadataCreate$Outbound | undefined;
    fdic_cash_sweep?: string | undefined;
};
/** @internal */
export declare const LLCEnrollmentMetadataCreate$outboundSchema: z.ZodType<LLCEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, LLCEnrollmentMetadataCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LLCEnrollmentMetadataCreate$ {
    /** @deprecated use `LLCEnrollmentMetadataCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LLCEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `LLCEnrollmentMetadataCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LLCEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, LLCEnrollmentMetadataCreate>;
    /** @deprecated use `LLCEnrollmentMetadataCreate$Outbound` instead. */
    type Outbound = LLCEnrollmentMetadataCreate$Outbound;
}
export declare function llcEnrollmentMetadataCreateToJSON(llcEnrollmentMetadataCreate: LLCEnrollmentMetadataCreate): string;
export declare function llcEnrollmentMetadataCreateFromJSON(jsonString: string): SafeParseResult<LLCEnrollmentMetadataCreate, SDKValidationError>;
//# sourceMappingURL=llcenrollmentmetadatacreate.d.ts.map