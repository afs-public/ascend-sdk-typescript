import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export declare enum CustodialEnrollmentMetadataCreateDividendReinvestmentPlan {
    AutoEnrollDividendReinvestmentUnspecified = "AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED",
    DividendReinvestmentEnroll = "DIVIDEND_REINVESTMENT_ENROLL",
    DividendReinvestmentDecline = "DIVIDEND_REINVESTMENT_DECLINE"
}
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export type CustodialEnrollmentMetadataCreateDividendReinvestmentPlanOpen = OpenEnum<typeof CustodialEnrollmentMetadataCreateDividendReinvestmentPlan>;
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export declare enum CustodialEnrollmentMetadataCreateFdicCashSweep {
    AutoEnrollFdicCashSweepUnspecified = "AUTO_ENROLL_FDIC_CASH_SWEEP_UNSPECIFIED",
    FdicCashSweepEnroll = "FDIC_CASH_SWEEP_ENROLL",
    FdicCashSweepDecline = "FDIC_CASH_SWEEP_DECLINE"
}
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export type CustodialEnrollmentMetadataCreateFdicCashSweepOpen = OpenEnum<typeof CustodialEnrollmentMetadataCreateFdicCashSweep>;
/**
 * Enrollment metadata for the CUSTODIAL enrollment type
 */
export type CustodialEnrollmentMetadataCreate = {
    /**
     * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
     */
    dividendReinvestmentPlan?: CustodialEnrollmentMetadataCreateDividendReinvestmentPlanOpen | undefined;
    /**
     * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
     */
    fdicCashSweep?: CustodialEnrollmentMetadataCreateFdicCashSweepOpen | undefined;
};
/** @internal */
export declare const CustodialEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema: z.ZodType<CustodialEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CustodialEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema: z.ZodType<CustodialEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, CustodialEnrollmentMetadataCreateDividendReinvestmentPlanOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CustodialEnrollmentMetadataCreateDividendReinvestmentPlan$ {
    /** @deprecated use `CustodialEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CustodialEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CustodialEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CustodialEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, CustodialEnrollmentMetadataCreateDividendReinvestmentPlanOpen>;
}
/** @internal */
export declare const CustodialEnrollmentMetadataCreateFdicCashSweep$inboundSchema: z.ZodType<CustodialEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CustodialEnrollmentMetadataCreateFdicCashSweep$outboundSchema: z.ZodType<CustodialEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, CustodialEnrollmentMetadataCreateFdicCashSweepOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CustodialEnrollmentMetadataCreateFdicCashSweep$ {
    /** @deprecated use `CustodialEnrollmentMetadataCreateFdicCashSweep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CustodialEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CustodialEnrollmentMetadataCreateFdicCashSweep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CustodialEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, CustodialEnrollmentMetadataCreateFdicCashSweepOpen>;
}
/** @internal */
export declare const CustodialEnrollmentMetadataCreate$inboundSchema: z.ZodType<CustodialEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type CustodialEnrollmentMetadataCreate$Outbound = {
    dividend_reinvestment_plan?: string | undefined;
    fdic_cash_sweep?: string | undefined;
};
/** @internal */
export declare const CustodialEnrollmentMetadataCreate$outboundSchema: z.ZodType<CustodialEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, CustodialEnrollmentMetadataCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CustodialEnrollmentMetadataCreate$ {
    /** @deprecated use `CustodialEnrollmentMetadataCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CustodialEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `CustodialEnrollmentMetadataCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CustodialEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, CustodialEnrollmentMetadataCreate>;
    /** @deprecated use `CustodialEnrollmentMetadataCreate$Outbound` instead. */
    type Outbound = CustodialEnrollmentMetadataCreate$Outbound;
}
export declare function custodialEnrollmentMetadataCreateToJSON(custodialEnrollmentMetadataCreate: CustodialEnrollmentMetadataCreate): string;
export declare function custodialEnrollmentMetadataCreateFromJSON(jsonString: string): SafeParseResult<CustodialEnrollmentMetadataCreate, SDKValidationError>;
//# sourceMappingURL=custodialenrollmentmetadatacreate.d.ts.map