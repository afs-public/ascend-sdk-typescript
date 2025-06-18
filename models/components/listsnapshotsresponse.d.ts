import * as z from "zod";
import { Snapshot, Snapshot$Outbound } from "./snapshot.js";
/**
 * Returns the requested snapshots.
 */
export type ListSnapshotsResponse = {
    /**
     * The token for retrieving the next page of snapshots. This is only returned where total_size is greater than page_size.
     */
    nextPageToken?: string | undefined;
    /**
     * The returned snapshots, with pagination and filtering applied.
     */
    snapshots?: Array<Snapshot> | undefined;
    /**
     * The total number of snapshots matching the request criteria. All available snapshots may not be contained in a single response. If this number is greater than the page_size in the request, pagination will need to be applied to retrieve all snapshots.
     */
    totalSize?: string | undefined;
};
/** @internal */
export declare const ListSnapshotsResponse$inboundSchema: z.ZodType<ListSnapshotsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListSnapshotsResponse$Outbound = {
    next_page_token?: string | undefined;
    snapshots?: Array<Snapshot$Outbound> | undefined;
    total_size?: string | undefined;
};
/** @internal */
export declare const ListSnapshotsResponse$outboundSchema: z.ZodType<ListSnapshotsResponse$Outbound, z.ZodTypeDef, ListSnapshotsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListSnapshotsResponse$ {
    /** @deprecated use `ListSnapshotsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListSnapshotsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListSnapshotsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListSnapshotsResponse$Outbound, z.ZodTypeDef, ListSnapshotsResponse>;
    /** @deprecated use `ListSnapshotsResponse$Outbound` instead. */
    type Outbound = ListSnapshotsResponse$Outbound;
}
//# sourceMappingURL=listsnapshotsresponse.d.ts.map