import * as z from "zod";
import * as components from "../components/index.js";
export type AssetsGetAssetCorrespondentRequest = {
    /**
     * The correspondent id.
     */
    correspondentId: string;
    /**
     * The asset id.
     */
    assetId: string;
};
export type AssetsGetAssetCorrespondentResponse = {
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
export declare const AssetsGetAssetCorrespondentRequest$inboundSchema: z.ZodType<AssetsGetAssetCorrespondentRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AssetsGetAssetCorrespondentRequest$Outbound = {
    correspondent_id: string;
    asset_id: string;
};
/** @internal */
export declare const AssetsGetAssetCorrespondentRequest$outboundSchema: z.ZodType<AssetsGetAssetCorrespondentRequest$Outbound, z.ZodTypeDef, AssetsGetAssetCorrespondentRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AssetsGetAssetCorrespondentRequest$ {
    /** @deprecated use `AssetsGetAssetCorrespondentRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AssetsGetAssetCorrespondentRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AssetsGetAssetCorrespondentRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AssetsGetAssetCorrespondentRequest$Outbound, z.ZodTypeDef, AssetsGetAssetCorrespondentRequest>;
    /** @deprecated use `AssetsGetAssetCorrespondentRequest$Outbound` instead. */
    type Outbound = AssetsGetAssetCorrespondentRequest$Outbound;
}
/** @internal */
export declare const AssetsGetAssetCorrespondentResponse$inboundSchema: z.ZodType<AssetsGetAssetCorrespondentResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AssetsGetAssetCorrespondentResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    Asset?: components.Asset$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AssetsGetAssetCorrespondentResponse$outboundSchema: z.ZodType<AssetsGetAssetCorrespondentResponse$Outbound, z.ZodTypeDef, AssetsGetAssetCorrespondentResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AssetsGetAssetCorrespondentResponse$ {
    /** @deprecated use `AssetsGetAssetCorrespondentResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AssetsGetAssetCorrespondentResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AssetsGetAssetCorrespondentResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AssetsGetAssetCorrespondentResponse$Outbound, z.ZodTypeDef, AssetsGetAssetCorrespondentResponse>;
    /** @deprecated use `AssetsGetAssetCorrespondentResponse$Outbound` instead. */
    type Outbound = AssetsGetAssetCorrespondentResponse$Outbound;
}
//# sourceMappingURL=assetsgetassetcorrespondent.d.ts.map