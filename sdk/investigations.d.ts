import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class Investigations extends ClientSDK {
    /**
     * Get Investigations
     *
     * @remarks
     * Use this endpoint to get the current state of an investigation by request reference UUID.
     */
    getInvestigation(investigationId: string, options?: RequestOptions): Promise<operations.InvestigationServiceGetInvestigationResponse>;
    /**
     * Update Investigation
     *
     * @remarks
     * Use this endpoint to update the details of an investigation by request reference UUID.
     */
    updateInvestigation(investigationUpdate: components.InvestigationUpdate, investigationId: string, updateMask?: string | undefined, options?: RequestOptions): Promise<operations.InvestigationServiceUpdateInvestigationResponse>;
    /**
     * List Investigations
     *
     * @remarks
     * Use this endpoint to retrieve a list of investigation summaries based on optional search parameters
     */
    listInvestigations(pageSize?: number | undefined, pageToken?: string | undefined, filter?: string | undefined, options?: RequestOptions): Promise<operations.InvestigationServiceListInvestigationsResponse>;
    /**
     * Link Documents
     *
     * @remarks
     * Use this endpoint to update identity verification document IDs.
     */
    linkDocuments(linkDocumentsRequestCreate: components.LinkDocumentsRequestCreate, investigationId: string, options?: RequestOptions): Promise<operations.InvestigationServiceLinkDocumentsResponse>;
    /**
     * Get Watchlist Item
     *
     * @remarks
     * Gets the details of an investigation by watchlist type and valid watchlist id
     */
    getWatchlistItem(watchlistId: string, itemId: string, options?: RequestOptions): Promise<operations.WatchlistServiceGetWatchlistItemResponse>;
    /**
     * Get Identity Verification
     *
     * @remarks
     * Gets a CustomerIdentification by CustomerIdentification ID.
     */
    getCustomerIdentification(correspondentId: string, customerIdentificationId: string, view?: operations.CustomerIdentificationResultServiceGetCustomerIdentificationQueryParamView | undefined, options?: RequestOptions): Promise<operations.CustomerIdentificationResultServiceGetCustomerIdentificationResponse>;
}
//# sourceMappingURL=investigations.d.ts.map