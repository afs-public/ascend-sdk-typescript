import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export declare enum TrustEnrollmentMetadataCreateDividendReinvestmentPlan {
    AutoEnrollDividendReinvestmentUnspecified = "AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED",
    DividendReinvestmentEnroll = "DIVIDEND_REINVESTMENT_ENROLL",
    DividendReinvestmentDecline = "DIVIDEND_REINVESTMENT_DECLINE"
}
/**
 * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
 */
export type TrustEnrollmentMetadataCreateDividendReinvestmentPlanOpen = OpenEnum<typeof TrustEnrollmentMetadataCreateDividendReinvestmentPlan>;
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export declare enum TrustEnrollmentMetadataCreateFdicCashSweep {
    AutoEnrollFdicCashSweepUnspecified = "AUTO_ENROLL_FDIC_CASH_SWEEP_UNSPECIFIED",
    FdicCashSweepEnroll = "FDIC_CASH_SWEEP_ENROLL",
    FdicCashSweepDecline = "FDIC_CASH_SWEEP_DECLINE"
}
/**
 * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
 */
export type TrustEnrollmentMetadataCreateFdicCashSweepOpen = OpenEnum<typeof TrustEnrollmentMetadataCreateFdicCashSweep>;
/**
 * Trust account is opened on behalf of
 */
export declare enum OpenedOnBehalfOf {
    OpenedOnBehalfOfUnspecified = "OPENED_ON_BEHALF_OF_UNSPECIFIED",
    PersonalTrust = "PERSONAL_TRUST",
    BusinessTrust = "BUSINESS_TRUST",
    ThirdPartyAdministrator = "THIRD_PARTY_ADMINISTRATOR"
}
/**
 * Trust account is opened on behalf of
 */
export type OpenedOnBehalfOfOpen = OpenEnum<typeof OpenedOnBehalfOf>;
export type TrustEnrollmentMetadataCreate = {
    /**
     * Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL
     */
    dividendReinvestmentPlan?: TrustEnrollmentMetadataCreateDividendReinvestmentPlanOpen | undefined;
    /**
     * Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL
     */
    fdicCashSweep?: TrustEnrollmentMetadataCreateFdicCashSweepOpen | undefined;
    /**
     * Trust account is opened on behalf of
     */
    openedOnBehalfOf: OpenedOnBehalfOfOpen;
};
/** @internal */
export declare const TrustEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema: z.ZodType<TrustEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TrustEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema: z.ZodType<TrustEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, TrustEnrollmentMetadataCreateDividendReinvestmentPlanOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TrustEnrollmentMetadataCreateDividendReinvestmentPlan$ {
    /** @deprecated use `TrustEnrollmentMetadataCreateDividendReinvestmentPlan$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TrustEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TrustEnrollmentMetadataCreateDividendReinvestmentPlan$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TrustEnrollmentMetadataCreateDividendReinvestmentPlanOpen, z.ZodTypeDef, TrustEnrollmentMetadataCreateDividendReinvestmentPlanOpen>;
}
/** @internal */
export declare const TrustEnrollmentMetadataCreateFdicCashSweep$inboundSchema: z.ZodType<TrustEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TrustEnrollmentMetadataCreateFdicCashSweep$outboundSchema: z.ZodType<TrustEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, TrustEnrollmentMetadataCreateFdicCashSweepOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TrustEnrollmentMetadataCreateFdicCashSweep$ {
    /** @deprecated use `TrustEnrollmentMetadataCreateFdicCashSweep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TrustEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TrustEnrollmentMetadataCreateFdicCashSweep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TrustEnrollmentMetadataCreateFdicCashSweepOpen, z.ZodTypeDef, TrustEnrollmentMetadataCreateFdicCashSweepOpen>;
}
/** @internal */
export declare const OpenedOnBehalfOf$inboundSchema: z.ZodType<OpenedOnBehalfOfOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const OpenedOnBehalfOf$outboundSchema: z.ZodType<OpenedOnBehalfOfOpen, z.ZodTypeDef, OpenedOnBehalfOfOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OpenedOnBehalfOf$ {
    /** @deprecated use `OpenedOnBehalfOf$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OpenedOnBehalfOfOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `OpenedOnBehalfOf$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OpenedOnBehalfOfOpen, z.ZodTypeDef, OpenedOnBehalfOfOpen>;
}
/** @internal */
export declare const TrustEnrollmentMetadataCreate$inboundSchema: z.ZodType<TrustEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type TrustEnrollmentMetadataCreate$Outbound = {
    dividend_reinvestment_plan?: string | undefined;
    fdic_cash_sweep?: string | undefined;
    opened_on_behalf_of: string;
};
/** @internal */
export declare const TrustEnrollmentMetadataCreate$outboundSchema: z.ZodType<TrustEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, TrustEnrollmentMetadataCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TrustEnrollmentMetadataCreate$ {
    /** @deprecated use `TrustEnrollmentMetadataCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TrustEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `TrustEnrollmentMetadataCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TrustEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, TrustEnrollmentMetadataCreate>;
    /** @deprecated use `TrustEnrollmentMetadataCreate$Outbound` instead. */
    type Outbound = TrustEnrollmentMetadataCreate$Outbound;
}
export declare function trustEnrollmentMetadataCreateToJSON(trustEnrollmentMetadataCreate: TrustEnrollmentMetadataCreate): string;
export declare function trustEnrollmentMetadataCreateFromJSON(jsonString: string): SafeParseResult<TrustEnrollmentMetadataCreate, SDKValidationError>;
//# sourceMappingURL=trustenrollmentmetadatacreate.d.ts.map