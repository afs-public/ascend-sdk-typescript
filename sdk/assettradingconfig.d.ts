import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class AssetTradingConfig extends ClientSDK {
    /**
     * Get Asset Trading Config
     *
     * @remarks
     * Gets an asset trading config by asset_id `/assettradingconfig/v1/correspondents/{correspondent_id}/assets/{asset_id}/tradingConfig`
     */
    getAssetTradingConfig(correspondentId: string, assetId: string, options?: RequestOptions): Promise<operations.AssetTradingConfigServiceGetAssetTradingConfigResponse>;
    /**
     * List Asset Trading Configs
     *
     * @remarks
     * Retrieve a list of asset trading configs `/assettradingconfig/v1/correspondents/{correspondent_id}/assets/-/tradingConfigs`
     */
    listAssetTradingConfigs(request: operations.AssetTradingConfigServiceListAssetTradingConfigsRequest, options?: RequestOptions): Promise<operations.AssetTradingConfigServiceListAssetTradingConfigsResponse>;
}
//# sourceMappingURL=assettradingconfig.d.ts.map