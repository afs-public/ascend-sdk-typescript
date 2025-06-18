import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { EddAccountEnrollmentMetadataCreate, EddAccountEnrollmentMetadataCreate$Outbound } from "./eddaccountenrollmentmetadatacreate.js";
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export declare enum DividendReinvestmentPlan {
    AutoEnrollDividendReinvestmentUnspecified = "AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED",
    DividendReinvestmentEnroll = "DIVIDEND_REINVESTMENT_ENROLL",
    DividendReinvestmentDecline = "DIVIDEND_REINVESTMENT_DECLINE"
}
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export type DividendReinvestmentPlanOpen = OpenEnum<typeof DividendReinvestmentPlan>;
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export declare enum FdicCashSweep {
    AutoEnrollFdicCashSweepUnspecified = "AUTO_ENROLL_FDIC_CASH_SWEEP_UNSPECIFIED",
    FdicCashSweepEnroll = "FDIC_CASH_SWEEP_ENROLL",
    FdicCashSweepDecline = "FDIC_CASH_SWEEP_DECLINE"
}
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export type FdicCashSweepOpen = OpenEnum<typeof FdicCashSweep>;
export type CorporationEnrollmentMetadataCreate = {
    /**
     * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
     */
    dividendReinvestmentPlan?: DividendReinvestmentPlanOpen | undefined;
    /**
     * Enrollment metadata for Entity Accounts
     */
    eddAccountEnrollmentMetadata?: EddAccountEnrollmentMetadataCreate | undefined;
    /**
     * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
     */
    fdicCashSweep?: FdicCashSweepOpen | undefined;
};
/** @internal */
export declare const DividendReinvestmentPlan$inboundSchema: z.ZodType<DividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const DividendReinvestmentPlan$outboundSchema: z.ZodType<DividendReinvestmentPlanOpen, z.ZodTypeDef, DividendReinvestmentPlanOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DividendReinvestmentPlan$ {
    /** @deprecated use `DividendReinvestmentPlan$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `DividendReinvestmentPlan$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DividendReinvestmentPlanOpen, z.ZodTypeDef, DividendReinvestmentPlanOpen>;
}
/** @internal */
export declare const FdicCashSweep$inboundSchema: z.ZodType<FdicCashSweepOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const FdicCashSweep$outboundSchema: z.ZodType<FdicCashSweepOpen, z.ZodTypeDef, FdicCashSweepOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FdicCashSweep$ {
    /** @deprecated use `FdicCashSweep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FdicCashSweepOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `FdicCashSweep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FdicCashSweepOpen, z.ZodTypeDef, FdicCashSweepOpen>;
}
/** @internal */
export declare const CorporationEnrollmentMetadataCreate$inboundSchema: z.ZodType<CorporationEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type CorporationEnrollmentMetadataCreate$Outbound = {
    dividend_reinvestment_plan?: string | undefined;
    edd_account_enrollment_metadata?: EddAccountEnrollmentMetadataCreate$Outbound | undefined;
    fdic_cash_sweep?: string | undefined;
};
/** @internal */
export declare const CorporationEnrollmentMetadataCreate$outboundSchema: z.ZodType<CorporationEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, CorporationEnrollmentMetadataCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CorporationEnrollmentMetadataCreate$ {
    /** @deprecated use `CorporationEnrollmentMetadataCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CorporationEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `CorporationEnrollmentMetadataCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CorporationEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, CorporationEnrollmentMetadataCreate>;
    /** @deprecated use `CorporationEnrollmentMetadataCreate$Outbound` instead. */
    type Outbound = CorporationEnrollmentMetadataCreate$Outbound;
}
//# sourceMappingURL=corporationenrollmentmetadatacreate.d.ts.map