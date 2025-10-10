import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Indicators to determine what types of orders allowed to be traded
 */
export type AssetTradability = {
    /**
     * Indicates whether fractional quantities are allowed to be closed
     */
    closeFractionalQuantityEnabled?: boolean | undefined;
    /**
     * Indicates whether notional quantities are allowed to be closed
     */
    closeNotionalQuantityEnabled?: boolean | undefined;
    /**
     * Indicates whether whole quantities are allowed to be closed
     */
    closeWholeQuantityEnabled?: boolean | undefined;
    /**
     * Indicates whether fractional quantities are allowed to be opened
     */
    openFractionalQuantityEnabled?: boolean | undefined;
    /**
     * Indicates whether notional quantities are allowed to be opened
     */
    openNotionalQuantityEnabled?: boolean | undefined;
    /**
     * Indicates whether whole quantities are allowed to be opened
     */
    openWholeQuantityEnabled?: boolean | undefined;
};
/**
 * Type of the asset
 */
export declare enum AssetTradingConfigAssetType {
    AssetTypeUnspecified = "ASSET_TYPE_UNSPECIFIED",
    Equity = "EQUITY",
    MutualFund = "MUTUAL_FUND",
    Option = "OPTION",
    Index = "INDEX"
}
/**
 * Type of the asset
 */
export type AssetTradingConfigAssetTypeOpen = OpenEnum<typeof AssetTradingConfigAssetType>;
/**
 * Indicators on an asset who has Options
 */
export type OptionRootTradability = {
    /**
     * Indicates whether whole quantities are allowed to be closed for Options
     */
    closeOptionsWholeQuantityEnabled?: boolean | undefined;
    /**
     * Indicates whether whole quantities are allowed to be opened for nonstandard Options
     */
    openNonstandardOptionsWholeQuantityEnabled?: boolean | undefined;
    /**
     * Indicates whether whole quantities are allowed to be opened for standard Options
     */
    openStandardOptionsWholeQuantityEnabled?: boolean | undefined;
};
/**
 * The message describing asset trading config
 */
export type AssetTradingConfig = {
    /**
     * Unique identifier for the asset
     */
    assetId?: string | undefined;
    /**
     * Indicators to determine what types of orders allowed to be traded
     */
    assetTradability?: AssetTradability | null | undefined;
    /**
     * Type of the asset
     */
    assetType?: AssetTradingConfigAssetTypeOpen | undefined;
    /**
     * Unique identifier for the correspondent
     */
    correspondentId?: string | undefined;
    /**
     * Identifier assigned to a security by the CUSIP Service Bureau of Standard & Poor’s Corporation Population of this field is determined by whether the correspondent has access to the data
     */
    cusip?: string | undefined;
    /**
     * Stands for the International Securities Identification Number Population of this field is determined by whether the correspondent has access to the data
     */
    isin?: string | undefined;
    /**
     * correspondents/{correspondent_id}/assets/{asset_id}/tradingConfig
     */
    name?: string | undefined;
    /**
     * Indicators on an asset who has Options
     */
    optionRootTradability?: OptionRootTradability | null | undefined;
    /**
     * An arrangement of characters—usually letters and or numbers — usually representing securities on an exchange. The format of the symbol is determined by the asset type.
     */
    symbol?: string | undefined;
};
/** @internal */
export declare const AssetTradability$inboundSchema: z.ZodType<AssetTradability, z.ZodTypeDef, unknown>;
/** @internal */
export type AssetTradability$Outbound = {
    close_fractional_quantity_enabled?: boolean | undefined;
    close_notional_quantity_enabled?: boolean | undefined;
    close_whole_quantity_enabled?: boolean | undefined;
    open_fractional_quantity_enabled?: boolean | undefined;
    open_notional_quantity_enabled?: boolean | undefined;
    open_whole_quantity_enabled?: boolean | undefined;
};
/** @internal */
export declare const AssetTradability$outboundSchema: z.ZodType<AssetTradability$Outbound, z.ZodTypeDef, AssetTradability>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AssetTradability$ {
    /** @deprecated use `AssetTradability$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AssetTradability, z.ZodTypeDef, unknown>;
    /** @deprecated use `AssetTradability$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AssetTradability$Outbound, z.ZodTypeDef, AssetTradability>;
    /** @deprecated use `AssetTradability$Outbound` instead. */
    type Outbound = AssetTradability$Outbound;
}
export declare function assetTradabilityToJSON(assetTradability: AssetTradability): string;
export declare function assetTradabilityFromJSON(jsonString: string): SafeParseResult<AssetTradability, SDKValidationError>;
/** @internal */
export declare const AssetTradingConfigAssetType$inboundSchema: z.ZodType<AssetTradingConfigAssetTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AssetTradingConfigAssetType$outboundSchema: z.ZodType<AssetTradingConfigAssetTypeOpen, z.ZodTypeDef, AssetTradingConfigAssetTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AssetTradingConfigAssetType$ {
    /** @deprecated use `AssetTradingConfigAssetType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AssetTradingConfigAssetTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AssetTradingConfigAssetType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AssetTradingConfigAssetTypeOpen, z.ZodTypeDef, AssetTradingConfigAssetTypeOpen>;
}
/** @internal */
export declare const OptionRootTradability$inboundSchema: z.ZodType<OptionRootTradability, z.ZodTypeDef, unknown>;
/** @internal */
export type OptionRootTradability$Outbound = {
    close_options_whole_quantity_enabled?: boolean | undefined;
    open_nonstandard_options_whole_quantity_enabled?: boolean | undefined;
    open_standard_options_whole_quantity_enabled?: boolean | undefined;
};
/** @internal */
export declare const OptionRootTradability$outboundSchema: z.ZodType<OptionRootTradability$Outbound, z.ZodTypeDef, OptionRootTradability>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OptionRootTradability$ {
    /** @deprecated use `OptionRootTradability$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OptionRootTradability, z.ZodTypeDef, unknown>;
    /** @deprecated use `OptionRootTradability$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OptionRootTradability$Outbound, z.ZodTypeDef, OptionRootTradability>;
    /** @deprecated use `OptionRootTradability$Outbound` instead. */
    type Outbound = OptionRootTradability$Outbound;
}
export declare function optionRootTradabilityToJSON(optionRootTradability: OptionRootTradability): string;
export declare function optionRootTradabilityFromJSON(jsonString: string): SafeParseResult<OptionRootTradability, SDKValidationError>;
/** @internal */
export declare const AssetTradingConfig$inboundSchema: z.ZodType<AssetTradingConfig, z.ZodTypeDef, unknown>;
/** @internal */
export type AssetTradingConfig$Outbound = {
    asset_id?: string | undefined;
    asset_tradability?: AssetTradability$Outbound | null | undefined;
    asset_type?: string | undefined;
    correspondent_id?: string | undefined;
    cusip?: string | undefined;
    isin?: string | undefined;
    name?: string | undefined;
    option_root_tradability?: OptionRootTradability$Outbound | null | undefined;
    symbol?: string | undefined;
};
/** @internal */
export declare const AssetTradingConfig$outboundSchema: z.ZodType<AssetTradingConfig$Outbound, z.ZodTypeDef, AssetTradingConfig>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AssetTradingConfig$ {
    /** @deprecated use `AssetTradingConfig$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AssetTradingConfig, z.ZodTypeDef, unknown>;
    /** @deprecated use `AssetTradingConfig$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AssetTradingConfig$Outbound, z.ZodTypeDef, AssetTradingConfig>;
    /** @deprecated use `AssetTradingConfig$Outbound` instead. */
    type Outbound = AssetTradingConfig$Outbound;
}
export declare function assetTradingConfigToJSON(assetTradingConfig: AssetTradingConfig): string;
export declare function assetTradingConfigFromJSON(jsonString: string): SafeParseResult<AssetTradingConfig, SDKValidationError>;
//# sourceMappingURL=assettradingconfig.d.ts.map