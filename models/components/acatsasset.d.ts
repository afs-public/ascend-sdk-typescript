import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * The NSCC asset category
 */
export declare enum AssetCategory {
    AssetCategoryUnspecified = "ASSET_CATEGORY_UNSPECIFIED",
    AlternativeInvestment = "ALTERNATIVE_INVESTMENT",
    Annuity = "ANNUITY",
    AuctionRatePreferredUit = "AUCTION_RATE_PREFERRED_UIT",
    CdAndCommercialPaper = "CD_AND_COMMERCIAL_PAPER",
    CorporateBond = "CORPORATE_BOND",
    DeferredSaleChargeUit = "DEFERRED_SALE_CHARGE_UIT",
    Equity = "EQUITY",
    ForeignCurrency = "FOREIGN_CURRENCY",
    ForeignDebt = "FOREIGN_DEBT",
    ForeignEquity = "FOREIGN_EQUITY",
    LifeInsurance = "LIFE_INSURANCE",
    LimitedPartnership = "LIMITED_PARTNERSHIP",
    MortgageBackedSecurity = "MORTGAGE_BACKED_SECURITY",
    MutualFundMoneyMarket = "MUTUAL_FUND_MONEY_MARKET",
    MutualFundNonMoneyMarket = "MUTUAL_FUND_NON_MONEY_MARKET",
    MunicipalBond = "MUNICIPAL_BOND",
    Option = "OPTION",
    RealEstateInvestmentTrust = "REAL_ESTATE_INVESTMENT_TRUST",
    Right = "RIGHT",
    UsGovernment = "US_GOVERNMENT",
    UnitInvestmentTrust = "UNIT_INVESTMENT_TRUST",
    Unit = "UNIT",
    Warrant = "WARRANT",
    ZeroCouponBond = "ZERO_COUPON_BOND"
}
/**
 * The NSCC asset category
 */
export type AssetCategoryOpen = OpenEnum<typeof AssetCategory>;
/**
 * The quantity of the asset, or the amount if the asset is cash; negative quantity denotes short position or a DEBIT cash balance. Fractional amounts only supported for certain asset types
 */
export type AcatsAssetQuantity = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The position or amount of the asset
 */
export type AcatsAssetPosition = {
    /**
     * The quantity of the asset, or the amount if the asset is cash; negative quantity denotes short position or a DEBIT cash balance. Fractional amounts only supported for certain asset types
     */
    quantity?: AcatsAssetQuantity | null | undefined;
};
/**
 * The asset identifier type
 */
export declare enum AcatsAssetType {
    IdentifierTypeUnspecified = "IDENTIFIER_TYPE_UNSPECIFIED",
    CurrencyCode = "CURRENCY_CODE",
    Cusip = "CUSIP",
    Symbol = "SYMBOL",
    Isin = "ISIN",
    AssetId = "ASSET_ID"
}
/**
 * The asset identifier type
 */
export type AcatsAssetTypeOpen = OpenEnum<typeof AcatsAssetType>;
/**
 * The asset being transferred If cash, the asset_id is the currency code (e.g. USD) and the position is the amount
 */
export type AcatsAsset = {
    /**
     * The NSCC asset category
     */
    assetCategory?: AssetCategoryOpen | undefined;
    /**
     * The asset identifier
     */
    assetId?: string | undefined;
    /**
     * The asset identifier
     */
    identifier?: string | undefined;
    /**
     * The position or amount of the asset
     */
    position?: AcatsAssetPosition | null | undefined;
    /**
     * The asset identifier type
     */
    type?: AcatsAssetTypeOpen | undefined;
};
/** @internal */
export declare const AssetCategory$inboundSchema: z.ZodType<AssetCategoryOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AssetCategory$outboundSchema: z.ZodType<AssetCategoryOpen, z.ZodTypeDef, AssetCategoryOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AssetCategory$ {
    /** @deprecated use `AssetCategory$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AssetCategoryOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AssetCategory$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AssetCategoryOpen, z.ZodTypeDef, AssetCategoryOpen>;
}
/** @internal */
export declare const AcatsAssetQuantity$inboundSchema: z.ZodType<AcatsAssetQuantity, z.ZodTypeDef, unknown>;
/** @internal */
export type AcatsAssetQuantity$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const AcatsAssetQuantity$outboundSchema: z.ZodType<AcatsAssetQuantity$Outbound, z.ZodTypeDef, AcatsAssetQuantity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AcatsAssetQuantity$ {
    /** @deprecated use `AcatsAssetQuantity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AcatsAssetQuantity, z.ZodTypeDef, unknown>;
    /** @deprecated use `AcatsAssetQuantity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AcatsAssetQuantity$Outbound, z.ZodTypeDef, AcatsAssetQuantity>;
    /** @deprecated use `AcatsAssetQuantity$Outbound` instead. */
    type Outbound = AcatsAssetQuantity$Outbound;
}
/** @internal */
export declare const AcatsAssetPosition$inboundSchema: z.ZodType<AcatsAssetPosition, z.ZodTypeDef, unknown>;
/** @internal */
export type AcatsAssetPosition$Outbound = {
    quantity?: AcatsAssetQuantity$Outbound | null | undefined;
};
/** @internal */
export declare const AcatsAssetPosition$outboundSchema: z.ZodType<AcatsAssetPosition$Outbound, z.ZodTypeDef, AcatsAssetPosition>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AcatsAssetPosition$ {
    /** @deprecated use `AcatsAssetPosition$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AcatsAssetPosition, z.ZodTypeDef, unknown>;
    /** @deprecated use `AcatsAssetPosition$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AcatsAssetPosition$Outbound, z.ZodTypeDef, AcatsAssetPosition>;
    /** @deprecated use `AcatsAssetPosition$Outbound` instead. */
    type Outbound = AcatsAssetPosition$Outbound;
}
/** @internal */
export declare const AcatsAssetType$inboundSchema: z.ZodType<AcatsAssetTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AcatsAssetType$outboundSchema: z.ZodType<AcatsAssetTypeOpen, z.ZodTypeDef, AcatsAssetTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AcatsAssetType$ {
    /** @deprecated use `AcatsAssetType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AcatsAssetTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AcatsAssetType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AcatsAssetTypeOpen, z.ZodTypeDef, AcatsAssetTypeOpen>;
}
/** @internal */
export declare const AcatsAsset$inboundSchema: z.ZodType<AcatsAsset, z.ZodTypeDef, unknown>;
/** @internal */
export type AcatsAsset$Outbound = {
    asset_category?: string | undefined;
    asset_id?: string | undefined;
    identifier?: string | undefined;
    position?: AcatsAssetPosition$Outbound | null | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const AcatsAsset$outboundSchema: z.ZodType<AcatsAsset$Outbound, z.ZodTypeDef, AcatsAsset>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AcatsAsset$ {
    /** @deprecated use `AcatsAsset$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AcatsAsset, z.ZodTypeDef, unknown>;
    /** @deprecated use `AcatsAsset$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AcatsAsset$Outbound, z.ZodTypeDef, AcatsAsset>;
    /** @deprecated use `AcatsAsset$Outbound` instead. */
    type Outbound = AcatsAsset$Outbound;
}
//# sourceMappingURL=acatsasset.d.ts.map