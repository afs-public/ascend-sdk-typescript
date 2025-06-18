import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class Ledger extends ClientSDK {
    /**
     * List Entries
     *
     * @remarks
     * List all Entries based on a filter
     */
    listEntries(accountId: string, pageSize?: number | undefined, pageToken?: string | undefined, filter?: string | undefined, options?: RequestOptions): Promise<operations.LedgerListEntriesResponse>;
    /**
     * List Activities
     *
     * @remarks
     * List all Completed Activities based on a filter
     */
    listActivities(accountId: string, pageSize?: number | undefined, pageToken?: string | undefined, filter?: string | undefined, options?: RequestOptions): Promise<operations.LedgerListActivitiesResponse>;
    /**
     * List Positions
     *
     * @remarks
     * List positions based on a filter
     */
    listPositions(accountId: string, pageSize?: number | undefined, pageToken?: string | undefined, filter?: string | undefined, options?: RequestOptions): Promise<operations.LedgerListPositionsResponse>;
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