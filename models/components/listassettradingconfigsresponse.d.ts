import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AssetTradingConfig, AssetTradingConfig$Outbound } from "./assettradingconfig.js";
/**
 * ListAssetTradingConfigsResponse is the response message for ListAssetTradingConfig method.
 */
export type ListAssetTradingConfigsResponse = {
    /**
     * The asset trading configs returned in the response.
     */
    assetTradingConfigs?: Array<AssetTradingConfig> | undefined;
    /**
     * The next_page_token value to include in a subsequent ListAssetTradingConfigs request to retrieve the next page of results.
     */
    nextPageToken?: string | undefined;
};
/** @internal */
export declare const ListAssetTradingConfigsResponse$inboundSchema: z.ZodType<ListAssetTradingConfigsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAssetTradingConfigsResponse$Outbound = {
    asset_trading_configs?: Array<AssetTradingConfig$Outbound> | undefined;
    next_page_token?: string | undefined;
};
/** @internal */
export declare const ListAssetTradingConfigsResponse$outboundSchema: z.ZodType<ListAssetTradingConfigsResponse$Outbound, z.ZodTypeDef, ListAssetTradingConfigsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListAssetTradingConfigsResponse$ {
    /** @deprecated use `ListAssetTradingConfigsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListAssetTradingConfigsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListAssetTradingConfigsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListAssetTradingConfigsResponse$Outbound, z.ZodTypeDef, ListAssetTradingConfigsResponse>;
    /** @deprecated use `ListAssetTradingConfigsResponse$Outbound` instead. */
    type Outbound = ListAssetTradingConfigsResponse$Outbound;
}
export declare function listAssetTradingConfigsResponseToJSON(listAssetTradingConfigsResponse: ListAssetTradingConfigsResponse): string;
export declare function listAssetTradingConfigsResponseFromJSON(jsonString: string): SafeParseResult<ListAssetTradingConfigsResponse, SDKValidationError>;
//# sourceMappingURL=listassettradingconfigsresponse.d.ts.map