import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Annual income range; the low number is exclusive, the high number is inclusive
 */
export declare enum CustomerProfileUpdateAnnualIncomeRangeUsd {
    UsdRangeUnspecified = "USD_RANGE_UNSPECIFIED",
    Under25K = "UNDER_25K",
    From25KTo50K = "FROM_25K_TO_50K",
    From50KTo100K = "FROM_50K_TO_100K",
    From100KTo200K = "FROM_100K_TO_200K",
    From200KTo300K = "FROM_200K_TO_300K",
    From300KTo500K = "FROM_300K_TO_500K",
    From500KTo1M = "FROM_500K_TO_1M",
    From1MTo5M = "FROM_1M_TO_5M",
    Over5M = "OVER_5M"
}
/**
 * Annual income range; the low number is exclusive, the high number is inclusive
 */
export type CustomerProfileUpdateAnnualIncomeRangeUsdOpen = OpenEnum<typeof CustomerProfileUpdateAnnualIncomeRangeUsd>;
/**
 * Investment experience.
 */
export declare enum CustomerProfileUpdateInvestmentExperience {
    InvestmentExperienceUnspecified = "INVESTMENT_EXPERIENCE_UNSPECIFIED",
    None = "NONE",
    Limited = "LIMITED",
    Good = "GOOD",
    Extensive = "EXTENSIVE"
}
/**
 * Investment experience.
 */
export type CustomerProfileUpdateInvestmentExperienceOpen = OpenEnum<typeof CustomerProfileUpdateInvestmentExperience>;
/**
 * Liquid net worth range; the low number is exclusive, the high number is inclusive
 */
export declare enum CustomerProfileUpdateLiquidNetWorthRangeUsd {
    UsdRangeUnspecified = "USD_RANGE_UNSPECIFIED",
    Under25K = "UNDER_25K",
    From25KTo50K = "FROM_25K_TO_50K",
    From50KTo100K = "FROM_50K_TO_100K",
    From100KTo200K = "FROM_100K_TO_200K",
    From200KTo300K = "FROM_200K_TO_300K",
    From300KTo500K = "FROM_300K_TO_500K",
    From500KTo1M = "FROM_500K_TO_1M",
    From1MTo5M = "FROM_1M_TO_5M",
    Over5M = "OVER_5M"
}
/**
 * Liquid net worth range; the low number is exclusive, the high number is inclusive
 */
export type CustomerProfileUpdateLiquidNetWorthRangeUsdOpen = OpenEnum<typeof CustomerProfileUpdateLiquidNetWorthRangeUsd>;
/**
 * Total net worth range; the low number is exclusive, the high number is inclusive
 */
export declare enum CustomerProfileUpdateTotalNetWorthRangeUsd {
    UsdRangeUnspecified = "USD_RANGE_UNSPECIFIED",
    Under25K = "UNDER_25K",
    From25KTo50K = "FROM_25K_TO_50K",
    From50KTo100K = "FROM_50K_TO_100K",
    From100KTo200K = "FROM_100K_TO_200K",
    From200KTo300K = "FROM_200K_TO_300K",
    From300KTo500K = "FROM_300K_TO_500K",
    From500KTo1M = "FROM_500K_TO_1M",
    From1MTo5M = "FROM_1M_TO_5M",
    Over5M = "OVER_5M"
}
/**
 * Total net worth range; the low number is exclusive, the high number is inclusive
 */
export type CustomerProfileUpdateTotalNetWorthRangeUsdOpen = OpenEnum<typeof CustomerProfileUpdateTotalNetWorthRangeUsd>;
/**
 * A detailed summary of financial and personal details of an investor, to help understand the investor's financial standing, investment experience and risk tolerance.
 */
export type CustomerProfileUpdate = {
    /**
     * Annual income range; the low number is exclusive, the high number is inclusive
     */
    annualIncomeRangeUsd?: CustomerProfileUpdateAnnualIncomeRangeUsdOpen | undefined;
    /**
     * Federal tax bracket percent.
     */
    federalTaxBracket?: number | undefined;
    /**
     * Investment experience.
     */
    investmentExperience?: CustomerProfileUpdateInvestmentExperienceOpen | undefined;
    /**
     * Liquid net worth range; the low number is exclusive, the high number is inclusive
     */
    liquidNetWorthRangeUsd?: CustomerProfileUpdateLiquidNetWorthRangeUsdOpen | undefined;
    /**
     * Total net worth range; the low number is exclusive, the high number is inclusive
     */
    totalNetWorthRangeUsd?: CustomerProfileUpdateTotalNetWorthRangeUsdOpen | undefined;
};
/** @internal */
export declare const CustomerProfileUpdateAnnualIncomeRangeUsd$inboundSchema: z.ZodType<CustomerProfileUpdateAnnualIncomeRangeUsdOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CustomerProfileUpdateAnnualIncomeRangeUsd$outboundSchema: z.ZodType<CustomerProfileUpdateAnnualIncomeRangeUsdOpen, z.ZodTypeDef, CustomerProfileUpdateAnnualIncomeRangeUsdOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CustomerProfileUpdateAnnualIncomeRangeUsd$ {
    /** @deprecated use `CustomerProfileUpdateAnnualIncomeRangeUsd$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CustomerProfileUpdateAnnualIncomeRangeUsdOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CustomerProfileUpdateAnnualIncomeRangeUsd$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CustomerProfileUpdateAnnualIncomeRangeUsdOpen, z.ZodTypeDef, CustomerProfileUpdateAnnualIncomeRangeUsdOpen>;
}
/** @internal */
export declare const CustomerProfileUpdateInvestmentExperience$inboundSchema: z.ZodType<CustomerProfileUpdateInvestmentExperienceOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CustomerProfileUpdateInvestmentExperience$outboundSchema: z.ZodType<CustomerProfileUpdateInvestmentExperienceOpen, z.ZodTypeDef, CustomerProfileUpdateInvestmentExperienceOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CustomerProfileUpdateInvestmentExperience$ {
    /** @deprecated use `CustomerProfileUpdateInvestmentExperience$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CustomerProfileUpdateInvestmentExperienceOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CustomerProfileUpdateInvestmentExperience$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CustomerProfileUpdateInvestmentExperienceOpen, z.ZodTypeDef, CustomerProfileUpdateInvestmentExperienceOpen>;
}
/** @internal */
export declare const CustomerProfileUpdateLiquidNetWorthRangeUsd$inboundSchema: z.ZodType<CustomerProfileUpdateLiquidNetWorthRangeUsdOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CustomerProfileUpdateLiquidNetWorthRangeUsd$outboundSchema: z.ZodType<CustomerProfileUpdateLiquidNetWorthRangeUsdOpen, z.ZodTypeDef, CustomerProfileUpdateLiquidNetWorthRangeUsdOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CustomerProfileUpdateLiquidNetWorthRangeUsd$ {
    /** @deprecated use `CustomerProfileUpdateLiquidNetWorthRangeUsd$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CustomerProfileUpdateLiquidNetWorthRangeUsdOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CustomerProfileUpdateLiquidNetWorthRangeUsd$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CustomerProfileUpdateLiquidNetWorthRangeUsdOpen, z.ZodTypeDef, CustomerProfileUpdateLiquidNetWorthRangeUsdOpen>;
}
/** @internal */
export declare const CustomerProfileUpdateTotalNetWorthRangeUsd$inboundSchema: z.ZodType<CustomerProfileUpdateTotalNetWorthRangeUsdOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CustomerProfileUpdateTotalNetWorthRangeUsd$outboundSchema: z.ZodType<CustomerProfileUpdateTotalNetWorthRangeUsdOpen, z.ZodTypeDef, CustomerProfileUpdateTotalNetWorthRangeUsdOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CustomerProfileUpdateTotalNetWorthRangeUsd$ {
    /** @deprecated use `CustomerProfileUpdateTotalNetWorthRangeUsd$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CustomerProfileUpdateTotalNetWorthRangeUsdOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CustomerProfileUpdateTotalNetWorthRangeUsd$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CustomerProfileUpdateTotalNetWorthRangeUsdOpen, z.ZodTypeDef, CustomerProfileUpdateTotalNetWorthRangeUsdOpen>;
}
/** @internal */
export declare const CustomerProfileUpdate$inboundSchema: z.ZodType<CustomerProfileUpdate, z.ZodTypeDef, unknown>;
/** @internal */
export type CustomerProfileUpdate$Outbound = {
    annual_income_range_usd?: string | undefined;
    federal_tax_bracket?: number | undefined;
    investment_experience?: string | undefined;
    liquid_net_worth_range_usd?: string | undefined;
    total_net_worth_range_usd?: string | undefined;
};
/** @internal */
export declare const CustomerProfileUpdate$outboundSchema: z.ZodType<CustomerProfileUpdate$Outbound, z.ZodTypeDef, CustomerProfileUpdate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CustomerProfileUpdate$ {
    /** @deprecated use `CustomerProfileUpdate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CustomerProfileUpdate, z.ZodTypeDef, unknown>;
    /** @deprecated use `CustomerProfileUpdate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CustomerProfileUpdate$Outbound, z.ZodTypeDef, CustomerProfileUpdate>;
    /** @deprecated use `CustomerProfileUpdate$Outbound` instead. */
    type Outbound = CustomerProfileUpdate$Outbound;
}
export declare function customerProfileUpdateToJSON(customerProfileUpdate: CustomerProfileUpdate): string;
export declare function customerProfileUpdateFromJSON(jsonString: string): SafeParseResult<CustomerProfileUpdate, SDKValidationError>;
//# sourceMappingURL=customerprofileupdate.d.ts.map