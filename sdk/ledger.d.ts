import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { PageIterator } from "../types/operations.js";
export declare class Ledger extends ClientSDK {
    /**
     * List Entries
     *
     * @remarks
     * List all Entries based on a filter
     */
    listEntries(accountId: string, pageSize?: number | undefined, pageToken?: string | undefined, filter?: string | undefined, options?: RequestOptions): Promise<PageIterator<operations.LedgerListEntriesResponse, {
        cursor: string;
    }>>;
    /**
     * List Activities
     *
     * @remarks
     * List all Completed Activities based on a filter
     */
    listActivities(accountId: string, pageSize?: number | undefined, pageToken?: string | undefined, filter?: string | undefined, options?: RequestOptions): Promise<PageIterator<operations.LedgerListActivitiesResponse, {
        cursor: string;
    }>>;
    /**
     * List Positions
     *
     * @remarks
     * List positions based on a filter
     */
    listPositions(accountId: string, pageSize?: number | undefined, pageToken?: string | undefined, filter?: string | undefined, options?: RequestOptions): Promise<PageIterator<operations.LedgerListPositionsResponse, {
        cursor: string;
    }>>;
    /**
     * Get Activity
     *
     * @remarks
     * Get an activity
     */
    getActivity(accountId: string, activityId: string, options?: RequestOptions): Promise<operations.LedgerGetActivityResponse>;
    /**
     * Get Entry
     *
     * @remarks
     * Get an entry
     */
    getEntry(accountId: string, entryId: string, options?: RequestOptions): Promise<operations.LedgerGetEntryResponse>;
}
//# sourceMappingURL=ledger.d.ts.map