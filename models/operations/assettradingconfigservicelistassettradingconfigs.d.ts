import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AssetTradingConfigServiceListAssetTradingConfigsRequest = {
    /**
     * The correspondent id.
     */
    correspondentId: string;
    /**
     * The asset id.
     */
    assetId: string;
    /**
     * The maximum number of asset trading configs to return. The service may return fewer than this value. Default is 100 (subject to change) The maximum is 1000, values exceeding this will be set to 1000 (subject to change)
     */
    pageSize?: number | undefined;
    /**
     * A page token, received from a previous `ListAssetTradingConfigRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAssetTradingConfigRequest` must match the call that provided the page token in order to maintain a stable result set.
     */
    pageToken?: string | undefined;
    /**
     * A CEL string to filter results; See the [CEL Search](https://developer.apexclearing.com/apex-fintech-solutions/docs/cel-search) page in Guides for more information; symbol, cusip, isin, and asset_type are available in the CEL string. Additional fields will be available in the future. This is subject to change.
     */
    filter?: string | undefined;
};
export type AssetTradingConfigServiceListAssetTradingConfigsResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    listAssetTradingConfigsResponse?: components.ListAssetTradingConfigsResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AssetTradingConfigServiceListAssetTradingConfigsRequest$inboundSchema: z.ZodType<AssetTradingConfigServiceListAssetTradingConfigsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AssetTradingConfigServiceListAssetTradingConfigsRequest$Outbound = {
    correspondent_id: string;
    asset_id: string;
    page_size?: number | undefined;
    page_token?: string | undefined;
    filter?: string | undefined;
};
/** @internal */
export declare const AssetTradingConfigServiceListAssetTradingConfigsRequest$outboundSchema: z.ZodType<AssetTradingConfigServiceListAssetTradingConfigsRequest$Outbound, z.ZodTypeDef, AssetTradingConfigServiceListAssetTradingConfigsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AssetTradingConfigServiceListAssetTradingConfigsRequest$ {
    /** @deprecated use `AssetTradingConfigServiceListAssetTradingConfigsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AssetTradingConfigServiceListAssetTradingConfigsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AssetTradingConfigServiceListAssetTradingConfigsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AssetTradingConfigServiceListAssetTradingConfigsRequest$Outbound, z.ZodTypeDef, AssetTradingConfigServiceListAssetTradingConfigsRequest>;
    /** @deprecated use `AssetTradingConfigServiceListAssetTradingConfigsRequest$Outbound` instead. */
    type Outbound = AssetTradingConfigServiceListAssetTradingConfigsRequest$Outbound;
}
export declare function assetTradingConfigServiceListAssetTradingConfigsRequestToJSON(assetTradingConfigServiceListAssetTradingConfigsRequest: AssetTradingConfigServiceListAssetTradingConfigsRequest): string;
export declare function assetTradingConfigServiceListAssetTradingConfigsRequestFromJSON(jsonString: string): SafeParseResult<AssetTradingConfigServiceListAssetTradingConfigsRequest, SDKValidationError>;
/** @internal */
export declare const AssetTradingConfigServiceListAssetTradingConfigsResponse$inboundSchema: z.ZodType<AssetTradingConfigServiceListAssetTradingConfigsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AssetTradingConfigServiceListAssetTradingConfigsResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    ListAssetTradingConfigsResponse?: components.ListAssetTradingConfigsResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AssetTradingConfigServiceListAssetTradingConfigsResponse$outboundSchema: z.ZodType<AssetTradingConfigServiceListAssetTradingConfigsResponse$Outbound, z.ZodTypeDef, AssetTradingConfigServiceListAssetTradingConfigsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AssetTradingConfigServiceListAssetTradingConfigsResponse$ {
    /** @deprecated use `AssetTradingConfigServiceListAssetTradingConfigsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AssetTradingConfigServiceListAssetTradingConfigsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AssetTradingConfigServiceListAssetTradingConfigsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AssetTradingConfigServiceListAssetTradingConfigsResponse$Outbound, z.ZodTypeDef, AssetTradingConfigServiceListAssetTradingConfigsResponse>;
    /** @deprecated use `AssetTradingConfigServiceListAssetTradingConfigsResponse$Outbound` instead. */
    type Outbound = AssetTradingConfigServiceListAssetTradingConfigsResponse$Outbound;
}
export declare function assetTradingConfigServiceListAssetTradingConfigsResponseToJSON(assetTradingConfigServiceListAssetTradingConfigsResponse: AssetTradingConfigServiceListAssetTradingConfigsResponse): string;
export declare function assetTradingConfigServiceListAssetTradingConfigsResponseFromJSON(jsonString: string): SafeParseResult<AssetTradingConfigServiceListAssetTradingConfigsResponse, SDKValidationError>;
//# sourceMappingURL=assettradingconfigservicelistassettradingconfigs.d.ts.map