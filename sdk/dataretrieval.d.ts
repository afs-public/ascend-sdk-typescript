import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
export declare class DataRetrieval extends ClientSDK {
    /**
     * List Snapshots
     *
     * @remarks
     * Returns details of a list of snapshots.
     */
    listSnapshots(filter?: string | undefined, pageSize?: number | undefined, pageToken?: string | undefined, options?: RequestOptions): Promise<operations.SnapshotsListSnapshotsResponse>;
}
//# sourceMappingURL=dataretrieval.d.ts.map