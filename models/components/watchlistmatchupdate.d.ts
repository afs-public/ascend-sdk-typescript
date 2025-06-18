import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * Match state - whether or not the match is confirmed
 */
export declare enum WatchlistMatchUpdateMatchState {
    MatchUnspecified = "MATCH_UNSPECIFIED",
    ConfirmedMatch = "CONFIRMED_MATCH",
    PotentialMatch = "POTENTIAL_MATCH",
    NoMatch = "NO_MATCH",
    Inconclusive = "INCONCLUSIVE"
}
/**
 * Match state - whether or not the match is confirmed
 */
export type WatchlistMatchUpdateMatchStateOpen = OpenEnum<typeof WatchlistMatchUpdateMatchState>;
/**
 * Matched profile details
 */
export type WatchlistMatchUpdate = {
    /**
     * Identifies that a confirmed watchlist match can be excluded when calculating the related screen state
     */
    excludeFromScreening?: boolean | undefined;
    /**
     * Match state - whether or not the match is confirmed
     */
    matchState?: WatchlistMatchUpdateMatchStateOpen | undefined;
    /**
     * Indicates the watchlist source for a given match
     */
    watchlistId?: string | undefined;
    /**
     * Identification number for the watchlist item that was matched
     */
    watchlistItemId?: number | undefined;
};
/** @internal */
export declare const WatchlistMatchUpdateMatchState$inboundSchema: z.ZodType<WatchlistMatchUpdateMatchStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const WatchlistMatchUpdateMatchState$outboundSchema: z.ZodType<WatchlistMatchUpdateMatchStateOpen, z.ZodTypeDef, WatchlistMatchUpdateMatchStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WatchlistMatchUpdateMatchState$ {
    /** @deprecated use `WatchlistMatchUpdateMatchState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WatchlistMatchUpdateMatchStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `WatchlistMatchUpdateMatchState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WatchlistMatchUpdateMatchStateOpen, z.ZodTypeDef, WatchlistMatchUpdateMatchStateOpen>;
}
/** @internal */
export declare const WatchlistMatchUpdate$inboundSchema: z.ZodType<WatchlistMatchUpdate, z.ZodTypeDef, unknown>;
/** @internal */
export type WatchlistMatchUpdate$Outbound = {
    exclude_from_screening?: boolean | undefined;
    match_state?: string | undefined;
    watchlist_id?: string | undefined;
    watchlist_item_id?: number | undefined;
};
/** @internal */
export declare const WatchlistMatchUpdate$outboundSchema: z.ZodType<WatchlistMatchUpdate$Outbound, z.ZodTypeDef, WatchlistMatchUpdate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WatchlistMatchUpdate$ {
    /** @deprecated use `WatchlistMatchUpdate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WatchlistMatchUpdate, z.ZodTypeDef, unknown>;
    /** @deprecated use `WatchlistMatchUpdate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WatchlistMatchUpdate$Outbound, z.ZodTypeDef, WatchlistMatchUpdate>;
    /** @deprecated use `WatchlistMatchUpdate$Outbound` instead. */
    type Outbound = WatchlistMatchUpdate$Outbound;
}
//# sourceMappingURL=watchlistmatchupdate.d.ts.map