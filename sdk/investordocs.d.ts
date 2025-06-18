import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
export declare class InvestorDocs extends ClientSDK {
    /**
     * Batch Create Upload Links
     *
     * @remarks
     * Create a batch of signed links that can be used to upload files.
     */
    batchCreateUploadLinks(request: components.BatchCreateUploadLinksRequestCreate, options?: RequestOptions): Promise<operations.InvestorCommunicationServiceBatchCreateUploadLinksResponse>;
    /**
     * List Documents
     *
     * @remarks
     * List documents that match search parameters.
     */
    listDocuments(pageSize?: number | undefined, pageToken?: string | undefined, filter?: string | undefined, options?: RequestOptions): Promise<operations.InvestorCommunicationServiceListDocumentsResponse>;
}
//# sourceMappingURL=investordocs.d.ts.map