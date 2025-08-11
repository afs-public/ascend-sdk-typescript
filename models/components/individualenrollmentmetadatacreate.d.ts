import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export declare enum IndividualEnrollmentMetadataCreateDividendReinvestmentPlan {
    AutoEnrollDividendReinvestmentUnspecified = "AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED",
    DividendReinvestmentEnroll = "DIVIDEND_REINVESTMENT_ENROLL",
    DividendReinvestmentDecline = "DIVIDEND_REINVESTMENT_DECLINE"
}
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export type IndividualEnrollmentMetadataCreateDividendReinvestmentPlanOpen = OpenEnum<typeof IndividualEnrollmentMetadataCreateDividendReinvestmentPlan>;
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export declare enum IndividualEnrollmentMetadataCreateFdicCashSweep {
    AutoEnrollFdicCashSweepUnspecified = "AUTO_ENROLL_FDIC_CASH_SWEEP_UNSPECIFIED",
    FdicCashSweepEnroll = "FDIC_CASH_SWEEP_ENROLL",
    FdicCashSweepDecline = "FDIC_CASH_SWEEP_DECLINE"
}
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export type IndividualEnrollmentMetadataCreateFdicCashSweepOpen = OpenEnum<typeof IndividualEnrollmentMetadataCreateFdicCashSweep>;
/**
 * Enrollment metadata for Individual accounts enrollment type
 */
export type IndividualEnrollmentMetadataCreate = {
    /**
     * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
     */
    dividendReinvestmentPlan?: IndividualEnrollmentMetadataCreateDividendReinvestmentPlanOpen | undefined;
    /**
     * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
     */
    fdicCashSweep?: IndividualEnrollmentMetadataCreateFdicCashSweepOpen | undefined;
};
/** @internal */
export declare const IndividualEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema: z.ZodType<IndividualEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const IndividualEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema: z.ZodType<IndividualEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, IndividualEnrollmentMetadataCreateDividendReinvestmentPlanOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IndividualEnrollmentMetadataCreateDividendReinvestmentPlan$ {
    /** @deprecated use `IndividualEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IndividualEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `IndividualEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IndividualEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, IndividualEnrollmentMetadataCreateDividendReinvestmentPlanOpen>;
}
/** @internal */
export declare const IndividualEnrollmentMetadataCreateFdicCashSweep$inboundSchema: z.ZodType<IndividualEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const IndividualEnrollmentMetadataCreateFdicCashSweep$outboundSchema: z.ZodType<IndividualEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, IndividualEnrollmentMetadataCreateFdicCashSweepOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IndividualEnrollmentMetadataCreateFdicCashSweep$ {
    /** @deprecated use `IndividualEnrollmentMetadataCreateFdicCashSweep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IndividualEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `IndividualEnrollmentMetadataCreateFdicCashSweep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IndividualEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, IndividualEnrollmentMetadataCreateFdicCashSweepOpen>;
}
/** @internal */
export declare const IndividualEnrollmentMetadataCreate$inboundSchema: z.ZodType<IndividualEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type IndividualEnrollmentMetadataCreate$Outbound = {
    dividend_reinvestment_plan?: string | undefined;
    fdic_cash_sweep?: string | undefined;
};
/** @internal */
export declare const IndividualEnrollmentMetadataCreate$outboundSchema: z.ZodType<IndividualEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, IndividualEnrollmentMetadataCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IndividualEnrollmentMetadataCreate$ {
    /** @deprecated use `IndividualEnrollmentMetadataCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IndividualEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `IndividualEnrollmentMetadataCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IndividualEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, IndividualEnrollmentMetadataCreate>;
    /** @deprecated use `IndividualEnrollmentMetadataCreate$Outbound` instead. */
    type Outbound = IndividualEnrollmentMetadataCreate$Outbound;
}
export declare function individualEnrollmentMetadataCreateToJSON(individualEnrollmentMetadataCreate: IndividualEnrollmentMetadataCreate): string;
export declare function individualEnrollmentMetadataCreateFromJSON(jsonString: string): SafeParseResult<IndividualEnrollmentMetadataCreate, SDKValidationError>;
//# sourceMappingURL=individualenrollmentmetadatacreate.d.ts.map