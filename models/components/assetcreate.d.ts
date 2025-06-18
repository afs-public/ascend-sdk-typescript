import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { PositionCreate, PositionCreate$Outbound } from "./positioncreate.js";
/**
 * The asset identifier type
 */
export declare enum AssetCreateType {
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
export type AssetCreateTypeOpen = OpenEnum<typeof AssetCreateType>;
/**
 * The asset being transferred If cash, the asset_id is the currency code (e.g. USD) and the position is the amount
 */
export type AssetCreate = {
    /**
     * The asset identifier
     */
    identifier: string;
    /**
     * The position or amount of the asset
     */
    position: PositionCreate;
    /**
     * The asset identifier type
     */
    type: AssetCreateTypeOpen;
};
/** @internal */
export declare const AssetCreateType$inboundSchema: z.ZodType<AssetCreateTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AssetCreateType$outboundSchema: z.ZodType<AssetCreateTypeOpen, z.ZodTypeDef, AssetCreateTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AssetCreateType$ {
    /** @deprecated use `AssetCreateType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AssetCreateTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AssetCreateType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AssetCreateTypeOpen, z.ZodTypeDef, AssetCreateTypeOpen>;
}
/** @internal */
export declare const AssetCreate$inboundSchema: z.ZodType<AssetCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type AssetCreate$Outbound = {
    identifier: string;
    position: PositionCreate$Outbound;
    type: string;
};
/** @internal */
export declare const AssetCreate$outboundSchema: z.ZodType<AssetCreate$Outbound, z.ZodTypeDef, AssetCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AssetCreate$ {
    /** @deprecated use `AssetCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AssetCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `AssetCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AssetCreate$Outbound, z.ZodTypeDef, AssetCreate>;
    /** @deprecated use `AssetCreate$Outbound` instead. */
    type Outbound = AssetCreate$Outbound;
}
//# sourceMappingURL=assetcreate.d.ts.map