import * as z from "zod";
import * as components from "../components/index.js";
export type AssetsGetAssetRequest = {
    /**
     * The asset id.
     */
    assetId: string;
};
export type AssetsGetAssetResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    asset?: components.Asset | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AssetsGetAssetRequest$inboundSchema: z.ZodType<AssetsGetAssetRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AssetsGetAssetRequest$Outbound = {
    asset_id: string;
};
/** @internal */
export declare const AssetsGetAssetRequest$outboundSchema: z.ZodType<AssetsGetAssetRequest$Outbound, z.ZodTypeDef, AssetsGetAssetRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AssetsGetAssetRequest$ {
    /** @deprecated use `AssetsGetAssetRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AssetsGetAssetRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AssetsGetAssetRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AssetsGetAssetRequest$Outbound, z.ZodTypeDef, AssetsGetAssetRequest>;
    /** @deprecated use `AssetsGetAssetRequest$Outbound` instead. */
    type Outbound = AssetsGetAssetRequest$Outbound;
}
/** @internal */
export declare const AssetsGetAssetResponse$inboundSchema: z.ZodType<AssetsGetAssetResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AssetsGetAssetResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    Asset?: components.Asset$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AssetsGetAssetResponse$outboundSchema: z.ZodType<AssetsGetAssetResponse$Outbound, z.ZodTypeDef, AssetsGetAssetResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AssetsGetAssetResponse$ {
    /** @deprecated use `AssetsGetAssetResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AssetsGetAssetResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AssetsGetAssetResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AssetsGetAssetResponse$Outbound, z.ZodTypeDef, AssetsGetAssetResponse>;
    /** @deprecated use `AssetsGetAssetResponse$Outbound` instead. */
    type Outbound = AssetsGetAssetResponse$Outbound;
}
//# sourceMappingURL=assetsgetasset.d.ts.map