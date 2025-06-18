import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { ForeignNaturalPersonAccountEnrollmentMetadataCreate, ForeignNaturalPersonAccountEnrollmentMetadataCreate$Outbound } from "./foreignnaturalpersonaccountenrollmentmetadatacreate.js";
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export declare enum ForeignJointAccountEnrollmentMetadataCreateDividendReinvestmentPlan {
    AutoEnrollDividendReinvestmentUnspecified = "AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED",
    DividendReinvestmentEnroll = "DIVIDEND_REINVESTMENT_ENROLL",
    DividendReinvestmentDecline = "DIVIDEND_REINVESTMENT_DECLINE"
}
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export type ForeignJointAccountEnrollmentMetadataCreateDividendReinvestmentPlanOpen = OpenEnum<typeof ForeignJointAccountEnrollmentMetadataCreateDividendReinvestmentPlan>;
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export declare enum ForeignJointAccountEnrollmentMetadataCreateFdicCashSweep {
    AutoEnrollFdicCashSweepUnspecified = "AUTO_ENROLL_FDIC_CASH_SWEEP_UNSPECIFIED",
    FdicCashSweepEnroll = "FDIC_CASH_SWEEP_ENROLL",
    FdicCashSweepDecline = "FDIC_CASH_SWEEP_DECLINE"
}
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export type ForeignJointAccountEnrollmentMetadataCreateFdicCashSweepOpen = OpenEnum<typeof ForeignJointAccountEnrollmentMetadataCreateFdicCashSweep>;
/**
 * Enrollment metadata for the FOREIGN_JOINT_WROS enrollment type
 */
export type ForeignJointAccountEnrollmentMetadataCreate = {
    /**
     * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
     */
    dividendReinvestmentPlan?: ForeignJointAccountEnrollmentMetadataCreateDividendReinvestmentPlanOpen | undefined;
    /**
     * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
     */
    fdicCashSweep?: ForeignJointAccountEnrollmentMetadataCreateFdicCashSweepOpen | undefined;
    /**
     * Enrollment metadata for Accounts that have a foreign Legal Natural Person owner.
     */
    foreignNaturalPersonAccountEnrollmentMetadata: ForeignNaturalPersonAccountEnrollmentMetadataCreate;
};
/** @internal */
export declare const ForeignJointAccountEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema: z.ZodType<ForeignJointAccountEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const ForeignJointAccountEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema: z.ZodType<ForeignJointAccountEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, ForeignJointAccountEnrollmentMetadataCreateDividendReinvestmentPlanOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForeignJointAccountEnrollmentMetadataCreateDividendReinvestmentPlan$ {
    /** @deprecated use `ForeignJointAccountEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ForeignJointAccountEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `ForeignJointAccountEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ForeignJointAccountEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, ForeignJointAccountEnrollmentMetadataCreateDividendReinvestmentPlanOpen>;
}
/** @internal */
export declare const ForeignJointAccountEnrollmentMetadataCreateFdicCashSweep$inboundSchema: z.ZodType<ForeignJointAccountEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const ForeignJointAccountEnrollmentMetadataCreateFdicCashSweep$outboundSchema: z.ZodType<ForeignJointAccountEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, ForeignJointAccountEnrollmentMetadataCreateFdicCashSweepOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForeignJointAccountEnrollmentMetadataCreateFdicCashSweep$ {
    /** @deprecated use `ForeignJointAccountEnrollmentMetadataCreateFdicCashSweep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ForeignJointAccountEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `ForeignJointAccountEnrollmentMetadataCreateFdicCashSweep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ForeignJointAccountEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, ForeignJointAccountEnrollmentMetadataCreateFdicCashSweepOpen>;
}
/** @internal */
export declare const ForeignJointAccountEnrollmentMetadataCreate$inboundSchema: z.ZodType<ForeignJointAccountEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type ForeignJointAccountEnrollmentMetadataCreate$Outbound = {
    dividend_reinvestment_plan?: string | undefined;
    fdic_cash_sweep?: string | undefined;
    foreign_natural_person_account_enrollment_metadata: ForeignNaturalPersonAccountEnrollmentMetadataCreate$Outbound;
};
/** @internal */
export declare const ForeignJointAccountEnrollmentMetadataCreate$outboundSchema: z.ZodType<ForeignJointAccountEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, ForeignJointAccountEnrollmentMetadataCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForeignJointAccountEnrollmentMetadataCreate$ {
    /** @deprecated use `ForeignJointAccountEnrollmentMetadataCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ForeignJointAccountEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `ForeignJointAccountEnrollmentMetadataCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ForeignJointAccountEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, ForeignJointAccountEnrollmentMetadataCreate>;
    /** @deprecated use `ForeignJointAccountEnrollmentMetadataCreate$Outbound` instead. */
    type Outbound = ForeignJointAccountEnrollmentMetadataCreate$Outbound;
}
//# sourceMappingURL=foreignjointaccountenrollmentmetadatacreate.d.ts.map