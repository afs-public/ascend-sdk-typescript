import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { PageIterator } from "../types/operations.js";
export declare class Assets extends ClientSDK {
    /**
     * List Assets
     *
     * @remarks
     * Lists assets
     */
    listAssets(parent?: string | undefined, pageSize?: number | undefined, pageToken?: string | undefined, filter?: string | undefined, options?: RequestOptions): Promise<PageIterator<operations.AssetsListAssets1Response, {
        cursor: string;
    }>>;
    /**
     * Get Asset
     *
     * @remarks
     * Gets assets
     */
    getAsset(assetId: string, options?: RequestOptions): Promise<operations.AssetsGetAssetResponse>;
    /**
     * List Assets (By Correspondent)
     *
     * @remarks
     * Lists assets
     */
    listAssetsCorrespondent(correspondentId: string, pageSize?: number | undefined, pageToken?: string | undefined, filter?: string | undefined, options?: RequestOptions): Promise<PageIterator<operations.AssetsListAssetsCorrespondentResponse, {
        cursor: string;
    }>>;
    /**
     * Get Asset (By Correspondent)
     *
     * @remarks
     * Gets assets
     */
    getAssetCorrespondent(correspondentId: string, assetId: string, options?: RequestOptions): Promise<operations.AssetsGetAssetCorrespondentResponse>;
}
//# sourceMappingURL=assets.d.ts.map