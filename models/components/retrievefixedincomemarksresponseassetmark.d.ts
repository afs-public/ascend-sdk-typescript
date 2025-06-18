import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { MarkPrice, MarkPrice$Outbound } from "./markprice.js";
/**
 * The amount of accrued interest estimated to be exchanged given the requested quantity. Measured in a USD value with 2-decimal places of precision.
 */
export type RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The identifier type of the asset being sought. This will be the same value as what was sent on the request.
 */
export declare enum RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType {
    AssetId = "ASSET_ID",
    Cusip = "CUSIP",
    Isin = "ISIN"
}
/**
 * The identifier type of the asset being sought. This will be the same value as what was sent on the request.
 */
export type RetrieveFixedIncomeMarksResponseAssetMarkIdentifierTypeOpen = OpenEnum<typeof RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType>;
/**
 * When marks are found and returned, this will be unspecified. If the asset was found, but no pricing data is returned, then: this will denote the reason, the marks[] list will be empty, and the accrued_interest_amount will not be present.
 */
export declare enum MarkAbsenceReason {
    MarkAbsenceReasonUnspecified = "MARK_ABSENCE_REASON_UNSPECIFIED",
    NotPriced = "NOT_PRICED",
    NotTradable = "NOT_TRADABLE"
}
/**
 * When marks are found and returned, this will be unspecified. If the asset was found, but no pricing data is returned, then: this will denote the reason, the marks[] list will be empty, and the accrued_interest_amount will not be present.
 */
export type MarkAbsenceReasonOpen = OpenEnum<typeof MarkAbsenceReason>;
/**
 * Mark data for a specific asset
 */
export type RetrieveFixedIncomeMarksResponseAssetMark = {
    /**
     * The amount of accrued interest estimated to be exchanged given the requested quantity. Measured in a USD value with 2-decimal places of precision.
     */
    accruedInterestAmount?: RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount | null | undefined;
    /**
     * Apex Asset ID for this asset.
     */
    assetId?: string | undefined;
    /**
     * Identifier of the asset (of the type specified in `identifier_type`).
     */
    identifier?: string | undefined;
    /**
     * The identifier type of the asset being sought. This will be the same value as what was sent on the request.
     */
    identifierType?: RetrieveFixedIncomeMarksResponseAssetMarkIdentifierTypeOpen | undefined;
    /**
     * When marks are found and returned, this will be unspecified. If the asset was found, but no pricing data is returned, then: this will denote the reason, the marks[] list will be empty, and the accrued_interest_amount will not be present.
     */
    markAbsenceReason?: MarkAbsenceReasonOpen | undefined;
    /**
     * The time this mark data was generated
     */
    markGenerationTime?: Date | null | undefined;
    /**
     * The set of marks available for this asset. If this is non-empty, then it will always contain a PERCENTAGE_OF_PAR typed price in it. Yield prices may not always be available, but never be present without a percentage of par value also returned.
     */
    marks?: Array<MarkPrice> | undefined;
};
/** @internal */
export declare const RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$inboundSchema: z.ZodType<RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$outboundSchema: z.ZodType<RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$Outbound, z.ZodTypeDef, RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$ {
    /** @deprecated use `RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$Outbound, z.ZodTypeDef, RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount>;
    /** @deprecated use `RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$Outbound` instead. */
    type Outbound = RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$Outbound;
}
/** @internal */
export declare const RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType$inboundSchema: z.ZodType<RetrieveFixedIncomeMarksResponseAssetMarkIdentifierTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType$outboundSchema: z.ZodType<RetrieveFixedIncomeMarksResponseAssetMarkIdentifierTypeOpen, z.ZodTypeDef, RetrieveFixedIncomeMarksResponseAssetMarkIdentifierTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType$ {
    /** @deprecated use `RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RetrieveFixedIncomeMarksResponseAssetMarkIdentifierTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RetrieveFixedIncomeMarksResponseAssetMarkIdentifierTypeOpen, z.ZodTypeDef, RetrieveFixedIncomeMarksResponseAssetMarkIdentifierTypeOpen>;
}
/** @internal */
export declare const MarkAbsenceReason$inboundSchema: z.ZodType<MarkAbsenceReasonOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const MarkAbsenceReason$outboundSchema: z.ZodType<MarkAbsenceReasonOpen, z.ZodTypeDef, MarkAbsenceReasonOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MarkAbsenceReason$ {
    /** @deprecated use `MarkAbsenceReason$inboundSchema` instead. */
    const inboundSchema: z.ZodType<MarkAbsenceReasonOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `MarkAbsenceReason$outboundSchema` instead. */
    const outboundSchema: z.ZodType<MarkAbsenceReasonOpen, z.ZodTypeDef, MarkAbsenceReasonOpen>;
}
/** @internal */
export declare const RetrieveFixedIncomeMarksResponseAssetMark$inboundSchema: z.ZodType<RetrieveFixedIncomeMarksResponseAssetMark, z.ZodTypeDef, unknown>;
/** @internal */
export type RetrieveFixedIncomeMarksResponseAssetMark$Outbound = {
    accrued_interest_amount?: RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount$Outbound | null | undefined;
    asset_id?: string | undefined;
    identifier?: string | undefined;
    identifier_type?: string | undefined;
    mark_absence_reason?: string | undefined;
    mark_generation_time?: string | null | undefined;
    marks?: Array<MarkPrice$Outbound> | undefined;
};
/** @internal */
export declare const RetrieveFixedIncomeMarksResponseAssetMark$outboundSchema: z.ZodType<RetrieveFixedIncomeMarksResponseAssetMark$Outbound, z.ZodTypeDef, RetrieveFixedIncomeMarksResponseAssetMark>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RetrieveFixedIncomeMarksResponseAssetMark$ {
    /** @deprecated use `RetrieveFixedIncomeMarksResponseAssetMark$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RetrieveFixedIncomeMarksResponseAssetMark, z.ZodTypeDef, unknown>;
    /** @deprecated use `RetrieveFixedIncomeMarksResponseAssetMark$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RetrieveFixedIncomeMarksResponseAssetMark$Outbound, z.ZodTypeDef, RetrieveFixedIncomeMarksResponseAssetMark>;
    /** @deprecated use `RetrieveFixedIncomeMarksResponseAssetMark$Outbound` instead. */
    type Outbound = RetrieveFixedIncomeMarksResponseAssetMark$Outbound;
}
//# sourceMappingURL=retrievefixedincomemarksresponseassetmark.d.ts.map