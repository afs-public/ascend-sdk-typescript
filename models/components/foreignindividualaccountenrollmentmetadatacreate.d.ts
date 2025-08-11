import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ForeignNaturalPersonAccountEnrollmentMetadataCreate, ForeignNaturalPersonAccountEnrollmentMetadataCreate$Outbound } from "./foreignnaturalpersonaccountenrollmentmetadatacreate.js";
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export declare enum ForeignIndividualAccountEnrollmentMetadataCreateDividendReinvestmentPlan {
    AutoEnrollDividendReinvestmentUnspecified = "AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED",
    DividendReinvestmentEnroll = "DIVIDEND_REINVESTMENT_ENROLL",
    DividendReinvestmentDecline = "DIVIDEND_REINVESTMENT_DECLINE"
}
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export type ForeignIndividualAccountEnrollmentMetadataCreateDividendReinvestmentPlanOpen = OpenEnum<typeof ForeignIndividualAccountEnrollmentMetadataCreateDividendReinvestmentPlan>;
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export declare enum ForeignIndividualAccountEnrollmentMetadataCreateFdicCashSweep {
    AutoEnrollFdicCashSweepUnspecified = "AUTO_ENROLL_FDIC_CASH_SWEEP_UNSPECIFIED",
    FdicCashSweepEnroll = "FDIC_CASH_SWEEP_ENROLL",
    FdicCashSweepDecline = "FDIC_CASH_SWEEP_DECLINE"
}
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export type ForeignIndividualAccountEnrollmentMetadataCreateFdicCashSweepOpen = OpenEnum<typeof ForeignIndividualAccountEnrollmentMetadataCreateFdicCashSweep>;
export type ForeignIndividualAccountEnrollmentMetadataCreate = {
    /**
     * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
     */
    dividendReinvestmentPlan?: ForeignIndividualAccountEnrollmentMetadataCreateDividendReinvestmentPlanOpen | undefined;
    /**
     * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
     */
    fdicCashSweep?: ForeignIndividualAccountEnrollmentMetadataCreateFdicCashSweepOpen | undefined;
    /**
     * Enrollment metadata for Accounts that have a foreign Legal Natural Person owner.
     */
    foreignNaturalPersonAccountEnrollmentMetadata: ForeignNaturalPersonAccountEnrollmentMetadataCreate;
};
/** @internal */
export declare const ForeignIndividualAccountEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema: z.ZodType<ForeignIndividualAccountEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const ForeignIndividualAccountEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema: z.ZodType<ForeignIndividualAccountEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, ForeignIndividualAccountEnrollmentMetadataCreateDividendReinvestmentPlanOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForeignIndividualAccountEnrollmentMetadataCreateDividendReinvestmentPlan$ {
    /** @deprecated use `ForeignIndividualAccountEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ForeignIndividualAccountEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `ForeignIndividualAccountEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ForeignIndividualAccountEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, ForeignIndividualAccountEnrollmentMetadataCreateDividendReinvestmentPlanOpen>;
}
/** @internal */
export declare const ForeignIndividualAccountEnrollmentMetadataCreateFdicCashSweep$inboundSchema: z.ZodType<ForeignIndividualAccountEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const ForeignIndividualAccountEnrollmentMetadataCreateFdicCashSweep$outboundSchema: z.ZodType<ForeignIndividualAccountEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, ForeignIndividualAccountEnrollmentMetadataCreateFdicCashSweepOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForeignIndividualAccountEnrollmentMetadataCreateFdicCashSweep$ {
    /** @deprecated use `ForeignIndividualAccountEnrollmentMetadataCreateFdicCashSweep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ForeignIndividualAccountEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `ForeignIndividualAccountEnrollmentMetadataCreateFdicCashSweep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ForeignIndividualAccountEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, ForeignIndividualAccountEnrollmentMetadataCreateFdicCashSweepOpen>;
}
/** @internal */
export declare const ForeignIndividualAccountEnrollmentMetadataCreate$inboundSchema: z.ZodType<ForeignIndividualAccountEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type ForeignIndividualAccountEnrollmentMetadataCreate$Outbound = {
    dividend_reinvestment_plan?: string | undefined;
    fdic_cash_sweep?: string | undefined;
    foreign_natural_person_account_enrollment_metadata: ForeignNaturalPersonAccountEnrollmentMetadataCreate$Outbound;
};
/** @internal */
export declare const ForeignIndividualAccountEnrollmentMetadataCreate$outboundSchema: z.ZodType<ForeignIndividualAccountEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, ForeignIndividualAccountEnrollmentMetadataCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForeignIndividualAccountEnrollmentMetadataCreate$ {
    /** @deprecated use `ForeignIndividualAccountEnrollmentMetadataCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ForeignIndividualAccountEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `ForeignIndividualAccountEnrollmentMetadataCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ForeignIndividualAccountEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, ForeignIndividualAccountEnrollmentMetadataCreate>;
    /** @deprecated use `ForeignIndividualAccountEnrollmentMetadataCreate$Outbound` instead. */
    type Outbound = ForeignIndividualAccountEnrollmentMetadataCreate$Outbound;
}
export declare function foreignIndividualAccountEnrollmentMetadataCreateToJSON(foreignIndividualAccountEnrollmentMetadataCreate: ForeignIndividualAccountEnrollmentMetadataCreate): string;
export declare function foreignIndividualAccountEnrollmentMetadataCreateFromJSON(jsonString: string): SafeParseResult<ForeignIndividualAccountEnrollmentMetadataCreate, SDKValidationError>;
//# sourceMappingURL=foreignindividualaccountenrollmentmetadatacreate.d.ts.map