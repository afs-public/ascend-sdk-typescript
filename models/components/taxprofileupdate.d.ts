import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * Federal tax classification.
 */
export declare enum TaxProfileUpdateFederalTaxClassification {
    FederalTaxClassificationUnspecified = "FEDERAL_TAX_CLASSIFICATION_UNSPECIFIED",
    IndivSolepropOrSinglememberllc = "INDIV_SOLEPROP_OR_SINGLEMEMBERLLC",
    Partnership = "PARTNERSHIP",
    CCorporation = "C_CORPORATION",
    SCorporation = "S_CORPORATION",
    TrustEstate = "TRUST_ESTATE",
    LlcTaxedAsCCorp = "LLC_TAXED_AS_C_CORP",
    LlcTaxedAsSCorp = "LLC_TAXED_AS_S_CORP",
    LlcTaxedAsPartnership = "LLC_TAXED_AS_PARTNERSHIP",
    Other = "OTHER"
}
/**
 * Federal tax classification.
 */
export type TaxProfileUpdateFederalTaxClassificationOpen = OpenEnum<typeof TaxProfileUpdateFederalTaxClassification>;
/**
 * IRS form type.
 */
export declare enum TaxProfileUpdateIrsFormType {
    IrsFormTypeUnspecified = "IRS_FORM_TYPE_UNSPECIFIED",
    W9 = "W_9",
    W8Ben = "W_8BEN"
}
/**
 * IRS form type.
 */
export type TaxProfileUpdateIrsFormTypeOpen = OpenEnum<typeof TaxProfileUpdateIrsFormType>;
/**
 * United States Individual Taxpayer Identification Number (ITIN) status.
 */
export declare enum TaxProfileUpdateUsTinStatus {
    UsTinStatusUnspecified = "US_TIN_STATUS_UNSPECIFIED",
    Passing = "PASSING",
    Failing = "FAILING"
}
/**
 * United States Individual Taxpayer Identification Number (ITIN) status.
 */
export type TaxProfileUpdateUsTinStatusOpen = OpenEnum<typeof TaxProfileUpdateUsTinStatus>;
/**
 * Tax Profile pertaining to the Legal Entity or Natural Person.
 */
export type TaxProfileUpdate = {
    /**
     * Federal tax classification.
     */
    federalTaxClassification?: TaxProfileUpdateFederalTaxClassificationOpen | undefined;
    /**
     * IRS form type.
     */
    irsFormType?: TaxProfileUpdateIrsFormTypeOpen | undefined;
    /**
     * Legal tax region must be "US" if provided W-9, otherwise must be a non-US country.
     */
    legalTaxRegionCode?: string | undefined;
    /**
     * United States Individual Taxpayer Identification Number (ITIN) status.
     */
    usTinStatus?: TaxProfileUpdateUsTinStatusOpen | undefined;
};
/** @internal */
export declare const TaxProfileUpdateFederalTaxClassification$inboundSchema: z.ZodType<TaxProfileUpdateFederalTaxClassificationOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TaxProfileUpdateFederalTaxClassification$outboundSchema: z.ZodType<TaxProfileUpdateFederalTaxClassificationOpen, z.ZodTypeDef, TaxProfileUpdateFederalTaxClassificationOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaxProfileUpdateFederalTaxClassification$ {
    /** @deprecated use `TaxProfileUpdateFederalTaxClassification$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaxProfileUpdateFederalTaxClassificationOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaxProfileUpdateFederalTaxClassification$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaxProfileUpdateFederalTaxClassificationOpen, z.ZodTypeDef, TaxProfileUpdateFederalTaxClassificationOpen>;
}
/** @internal */
export declare const TaxProfileUpdateIrsFormType$inboundSchema: z.ZodType<TaxProfileUpdateIrsFormTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TaxProfileUpdateIrsFormType$outboundSchema: z.ZodType<TaxProfileUpdateIrsFormTypeOpen, z.ZodTypeDef, TaxProfileUpdateIrsFormTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaxProfileUpdateIrsFormType$ {
    /** @deprecated use `TaxProfileUpdateIrsFormType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaxProfileUpdateIrsFormTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaxProfileUpdateIrsFormType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaxProfileUpdateIrsFormTypeOpen, z.ZodTypeDef, TaxProfileUpdateIrsFormTypeOpen>;
}
/** @internal */
export declare const TaxProfileUpdateUsTinStatus$inboundSchema: z.ZodType<TaxProfileUpdateUsTinStatusOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TaxProfileUpdateUsTinStatus$outboundSchema: z.ZodType<TaxProfileUpdateUsTinStatusOpen, z.ZodTypeDef, TaxProfileUpdateUsTinStatusOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaxProfileUpdateUsTinStatus$ {
    /** @deprecated use `TaxProfileUpdateUsTinStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaxProfileUpdateUsTinStatusOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaxProfileUpdateUsTinStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaxProfileUpdateUsTinStatusOpen, z.ZodTypeDef, TaxProfileUpdateUsTinStatusOpen>;
}
/** @internal */
export declare const TaxProfileUpdate$inboundSchema: z.ZodType<TaxProfileUpdate, z.ZodTypeDef, unknown>;
/** @internal */
export type TaxProfileUpdate$Outbound = {
    federal_tax_classification?: string | undefined;
    irs_form_type?: string | undefined;
    legal_tax_region_code?: string | undefined;
    us_tin_status?: string | undefined;
};
/** @internal */
export declare const TaxProfileUpdate$outboundSchema: z.ZodType<TaxProfileUpdate$Outbound, z.ZodTypeDef, TaxProfileUpdate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaxProfileUpdate$ {
    /** @deprecated use `TaxProfileUpdate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaxProfileUpdate, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaxProfileUpdate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaxProfileUpdate$Outbound, z.ZodTypeDef, TaxProfileUpdate>;
    /** @deprecated use `TaxProfileUpdate$Outbound` instead. */
    type Outbound = TaxProfileUpdate$Outbound;
}
//# sourceMappingURL=taxprofileupdate.d.ts.map