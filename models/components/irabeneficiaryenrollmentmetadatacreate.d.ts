import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { DateCreate, DateCreate$Outbound } from "./datecreate.js";
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export declare enum IRABeneficiaryEnrollmentMetadataCreateDividendReinvestmentPlan {
    AutoEnrollDividendReinvestmentUnspecified = "AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED",
    DividendReinvestmentEnroll = "DIVIDEND_REINVESTMENT_ENROLL",
    DividendReinvestmentDecline = "DIVIDEND_REINVESTMENT_DECLINE"
}
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export type IRABeneficiaryEnrollmentMetadataCreateDividendReinvestmentPlanOpen = OpenEnum<typeof IRABeneficiaryEnrollmentMetadataCreateDividendReinvestmentPlan>;
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export declare enum IRABeneficiaryEnrollmentMetadataCreateFdicCashSweep {
    AutoEnrollFdicCashSweepUnspecified = "AUTO_ENROLL_FDIC_CASH_SWEEP_UNSPECIFIED",
    FdicCashSweepEnroll = "FDIC_CASH_SWEEP_ENROLL",
    FdicCashSweepDecline = "FDIC_CASH_SWEEP_DECLINE"
}
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export type IRABeneficiaryEnrollmentMetadataCreateFdicCashSweepOpen = OpenEnum<typeof IRABeneficiaryEnrollmentMetadataCreateFdicCashSweep>;
/**
 * Enrollment metadata for beneficiary IRA accounts enrollment type
 */
export type IRABeneficiaryEnrollmentMetadataCreate = {
    /**
     * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
     */
    dividendReinvestmentPlan?: IRABeneficiaryEnrollmentMetadataCreateDividendReinvestmentPlanOpen | undefined;
    /**
     * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
     */
    fdicCashSweep?: IRABeneficiaryEnrollmentMetadataCreateFdicCashSweepOpen | undefined;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following:
     *
     * @remarks
     *
     *  * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date
     *
     *  Related types are [google.type.TimeOfDay][google.type.TimeOfDay] and `google.protobuf.Timestamp`.
     */
    inheritedFromOwnerBirthDate?: DateCreate | undefined;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following:
     *
     * @remarks
     *
     *  * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date
     *
     *  Related types are [google.type.TimeOfDay][google.type.TimeOfDay] and `google.protobuf.Timestamp`.
     */
    inheritedFromOwnerDeathDate?: DateCreate | undefined;
    /**
     * The name of the owner from whom the account is inherited
     */
    inheritedFromOwnerName: string;
    /**
     * Indicates if the customer is the spouse of the decedent
     */
    inheritorIsDecedentsSpouse: boolean;
};
/** @internal */
export declare const IRABeneficiaryEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema: z.ZodType<IRABeneficiaryEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const IRABeneficiaryEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema: z.ZodType<IRABeneficiaryEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, IRABeneficiaryEnrollmentMetadataCreateDividendReinvestmentPlanOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IRABeneficiaryEnrollmentMetadataCreateDividendReinvestmentPlan$ {
    /** @deprecated use `IRABeneficiaryEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IRABeneficiaryEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `IRABeneficiaryEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IRABeneficiaryEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, IRABeneficiaryEnrollmentMetadataCreateDividendReinvestmentPlanOpen>;
}
/** @internal */
export declare const IRABeneficiaryEnrollmentMetadataCreateFdicCashSweep$inboundSchema: z.ZodType<IRABeneficiaryEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const IRABeneficiaryEnrollmentMetadataCreateFdicCashSweep$outboundSchema: z.ZodType<IRABeneficiaryEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, IRABeneficiaryEnrollmentMetadataCreateFdicCashSweepOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IRABeneficiaryEnrollmentMetadataCreateFdicCashSweep$ {
    /** @deprecated use `IRABeneficiaryEnrollmentMetadataCreateFdicCashSweep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IRABeneficiaryEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `IRABeneficiaryEnrollmentMetadataCreateFdicCashSweep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IRABeneficiaryEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, IRABeneficiaryEnrollmentMetadataCreateFdicCashSweepOpen>;
}
/** @internal */
export declare const IRABeneficiaryEnrollmentMetadataCreate$inboundSchema: z.ZodType<IRABeneficiaryEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type IRABeneficiaryEnrollmentMetadataCreate$Outbound = {
    dividend_reinvestment_plan?: string | undefined;
    fdic_cash_sweep?: string | undefined;
    inherited_from_owner_birth_date?: DateCreate$Outbound | undefined;
    inherited_from_owner_death_date?: DateCreate$Outbound | undefined;
    inherited_from_owner_name: string;
    inheritor_is_decedents_spouse: boolean;
};
/** @internal */
export declare const IRABeneficiaryEnrollmentMetadataCreate$outboundSchema: z.ZodType<IRABeneficiaryEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, IRABeneficiaryEnrollmentMetadataCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IRABeneficiaryEnrollmentMetadataCreate$ {
    /** @deprecated use `IRABeneficiaryEnrollmentMetadataCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IRABeneficiaryEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `IRABeneficiaryEnrollmentMetadataCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IRABeneficiaryEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, IRABeneficiaryEnrollmentMetadataCreate>;
    /** @deprecated use `IRABeneficiaryEnrollmentMetadataCreate$Outbound` instead. */
    type Outbound = IRABeneficiaryEnrollmentMetadataCreate$Outbound;
}
//# sourceMappingURL=irabeneficiaryenrollmentmetadatacreate.d.ts.map