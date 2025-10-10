import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AssetTradingConfigServiceGetAssetTradingConfigRequest = {
    /**
     * The correspondent id.
     */
    correspondentId: string;
    /**
     * The asset id.
     */
    assetId: string;
};
export type AssetTradingConfigServiceGetAssetTradingConfigResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    assetTradingConfig?: components.AssetTradingConfig | undefined;
    /**
     * INVALID_ARGUMENT: The correspondent_id or the asset_id could not be determined for the request.
     *
     * @remarks
     * FAILED_PRECONDITION: The requested asset trading config was not found even though the asset exists.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AssetTradingConfigServiceGetAssetTradingConfigRequest$inboundSchema: z.ZodType<AssetTradingConfigServiceGetAssetTradingConfigRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AssetTradingConfigServiceGetAssetTradingConfigRequest$Outbound = {
    correspondent_id: string;
    asset_id: string;
};
/** @internal */
export declare const AssetTradingConfigServiceGetAssetTradingConfigRequest$outboundSchema: z.ZodType<AssetTradingConfigServiceGetAssetTradingConfigRequest$Outbound, z.ZodTypeDef, AssetTradingConfigServiceGetAssetTradingConfigRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AssetTradingConfigServiceGetAssetTradingConfigRequest$ {
    /** @deprecated use `AssetTradingConfigServiceGetAssetTradingConfigRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AssetTradingConfigServiceGetAssetTradingConfigRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AssetTradingConfigServiceGetAssetTradingConfigRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AssetTradingConfigServiceGetAssetTradingConfigRequest$Outbound, z.ZodTypeDef, AssetTradingConfigServiceGetAssetTradingConfigRequest>;
    /** @deprecated use `AssetTradingConfigServiceGetAssetTradingConfigRequest$Outbound` instead. */
    type Outbound = AssetTradingConfigServiceGetAssetTradingConfigRequest$Outbound;
}
export declare function assetTradingConfigServiceGetAssetTradingConfigRequestToJSON(assetTradingConfigServiceGetAssetTradingConfigRequest: AssetTradingConfigServiceGetAssetTradingConfigRequest): string;
export declare function assetTradingConfigServiceGetAssetTradingConfigRequestFromJSON(jsonString: string): SafeParseResult<AssetTradingConfigServiceGetAssetTradingConfigRequest, SDKValidationError>;
/** @internal */
export declare const AssetTradingConfigServiceGetAssetTradingConfigResponse$inboundSchema: z.ZodType<AssetTradingConfigServiceGetAssetTradingConfigResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AssetTradingConfigServiceGetAssetTradingConfigResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    AssetTradingConfig?: components.AssetTradingConfig$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AssetTradingConfigServiceGetAssetTradingConfigResponse$outboundSchema: z.ZodType<AssetTradingConfigServiceGetAssetTradingConfigResponse$Outbound, z.ZodTypeDef, AssetTradingConfigServiceGetAssetTradingConfigResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AssetTradingConfigServiceGetAssetTradingConfigResponse$ {
    /** @deprecated use `AssetTradingConfigServiceGetAssetTradingConfigResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AssetTradingConfigServiceGetAssetTradingConfigResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AssetTradingConfigServiceGetAssetTradingConfigResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AssetTradingConfigServiceGetAssetTradingConfigResponse$Outbound, z.ZodTypeDef, AssetTradingConfigServiceGetAssetTradingConfigResponse>;
    /** @deprecated use `AssetTradingConfigServiceGetAssetTradingConfigResponse$Outbound` instead. */
    type Outbound = AssetTradingConfigServiceGetAssetTradingConfigResponse$Outbound;
}
export declare function assetTradingConfigServiceGetAssetTradingConfigResponseToJSON(assetTradingConfigServiceGetAssetTradingConfigResponse: AssetTradingConfigServiceGetAssetTradingConfigResponse): string;
export declare function assetTradingConfigServiceGetAssetTradingConfigResponseFromJSON(jsonString: string): SafeParseResult<AssetTradingConfigServiceGetAssetTradingConfigResponse, SDKValidationError>;
//# sourceMappingURL=assettradingconfigservicegetassettradingconfig.d.ts.map