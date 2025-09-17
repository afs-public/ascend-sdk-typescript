import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { PageIterator } from "../types/operations.js";
export declare class Retirements extends ClientSDK {
    /**
     * List Contribution Summaries
     *
     * @remarks
     * Lists the aggregated retirement contribution summaries by tax year
     */
    listContributionSummaries(accountId: string, pageSize?: number | undefined, pageToken?: string | undefined, options?: RequestOptions): Promise<PageIterator<operations.RetirementConstraintsListContributionSummariesResponse, {
        cursor: string;
    }>>;
    /**
     * Retrieve Contribution Constraints
     *
     * @remarks
     * Retrieves retirement contribution constraints for an account
     */
    retrieveContributionConstraints(retrieveContributionConstraintsRequestCreate: components.RetrieveContributionConstraintsRequestCreate, accountId: string, options?: RequestOptions): Promise<operations.RetirementConstraintsRetrieveContributionConstraintsResponse>;
    /**
     * List Distribution Summaries
     *
     * @remarks
     * Lists the aggregated retirement distribution summaries by tax year
     */
    listDistributionSummaries(accountId: string, pageSize?: number | undefined, pageToken?: string | undefined, options?: RequestOptions): Promise<PageIterator<operations.RetirementConstraintsListDistributionSummariesResponse, {
        cursor: string;
    }>>;
    /**
     * Retrieve Distribution Constraints
     *
     * @remarks
     * Retrieves retirement distribution constraints for an account
     */
    retrieveDistributionConstraints(retrieveDistributionConstraintsRequestCreate: components.RetrieveDistributionConstraintsRequestCreate, accountId: string, options?: RequestOptions): Promise<operations.RetirementConstraintsRetrieveDistributionConstraintsResponse>;
}
//# sourceMappingURL=retirements.d.ts.map