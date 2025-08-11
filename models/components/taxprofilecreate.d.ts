import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Federal tax classification.
 */
export declare enum FederalTaxClassification {
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
export type FederalTaxClassificationOpen = OpenEnum<typeof FederalTaxClassification>;
/**
 * IRS form type.
 */
export declare enum IrsFormType {
    IrsFormTypeUnspecified = "IRS_FORM_TYPE_UNSPECIFIED",
    W9 = "W_9",
    W8Ben = "W_8BEN"
}
/**
 * IRS form type.
 */
export type IrsFormTypeOpen = OpenEnum<typeof IrsFormType>;
/**
 * United States Individual Taxpayer Identification Number (ITIN) status.
 */
export declare enum UsTinStatus {
    UsTinStatusUnspecified = "US_TIN_STATUS_UNSPECIFIED",
    Passing = "PASSING",
    Failing = "FAILING"
}
/**
 * United States Individual Taxpayer Identification Number (ITIN) status.
 */
export type UsTinStatusOpen = OpenEnum<typeof UsTinStatus>;
/**
 * Tax Profile pertaining to the Legal Entity or Natural Person.
 */
export type TaxProfileCreate = {
    /**
     * Federal tax classification.
     */
    federalTaxClassification: FederalTaxClassificationOpen;
    /**
     * IRS form type.
     */
    irsFormType: IrsFormTypeOpen;
    /**
     * Legal tax region must be "US" if provided W-9, otherwise must be a non-US country.
     */
    legalTaxRegionCode: string;
    /**
     * United States Individual Taxpayer Identification Number (ITIN) status.
     */
    usTinStatus: UsTinStatusOpen;
};
/** @internal */
export declare const FederalTaxClassification$inboundSchema: z.ZodType<FederalTaxClassificationOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const FederalTaxClassification$outboundSchema: z.ZodType<FederalTaxClassificationOpen, z.ZodTypeDef, FederalTaxClassificationOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FederalTaxClassification$ {
    /** @deprecated use `FederalTaxClassification$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FederalTaxClassificationOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `FederalTaxClassification$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FederalTaxClassificationOpen, z.ZodTypeDef, FederalTaxClassificationOpen>;
}
/** @internal */
export declare const IrsFormType$inboundSchema: z.ZodType<IrsFormTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const IrsFormType$outboundSchema: z.ZodType<IrsFormTypeOpen, z.ZodTypeDef, IrsFormTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IrsFormType$ {
    /** @deprecated use `IrsFormType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IrsFormTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `IrsFormType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IrsFormTypeOpen, z.ZodTypeDef, IrsFormTypeOpen>;
}
/** @internal */
export declare const UsTinStatus$inboundSchema: z.ZodType<UsTinStatusOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const UsTinStatus$outboundSchema: z.ZodType<UsTinStatusOpen, z.ZodTypeDef, UsTinStatusOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UsTinStatus$ {
    /** @deprecated use `UsTinStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UsTinStatusOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `UsTinStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UsTinStatusOpen, z.ZodTypeDef, UsTinStatusOpen>;
}
/** @internal */
export declare const TaxProfileCreate$inboundSchema: z.ZodType<TaxProfileCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type TaxProfileCreate$Outbound = {
    federal_tax_classification: string;
    irs_form_type: string;
    legal_tax_region_code: string;
    us_tin_status: string;
};
/** @internal */
export declare const TaxProfileCreate$outboundSchema: z.ZodType<TaxProfileCreate$Outbound, z.ZodTypeDef, TaxProfileCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaxProfileCreate$ {
    /** @deprecated use `TaxProfileCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaxProfileCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaxProfileCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaxProfileCreate$Outbound, z.ZodTypeDef, TaxProfileCreate>;
    /** @deprecated use `TaxProfileCreate$Outbound` instead. */
    type Outbound = TaxProfileCreate$Outbound;
}
export declare function taxProfileCreateToJSON(taxProfileCreate: TaxProfileCreate): string;
export declare function taxProfileCreateFromJSON(jsonString: string): SafeParseResult<TaxProfileCreate, SDKValidationError>;
//# sourceMappingURL=taxprofilecreate.d.ts.map