import * as z from "zod";
import * as components from "../components/index.js";
export type WatchlistServiceGetWatchlistItemRequest = {
    /**
     * The watchlist id.
     */
    watchlistId: string;
    /**
     * The item id.
     */
    itemId: string;
};
export type WatchlistServiceGetWatchlistItemResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    watchlistItem?: components.WatchlistItem | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const WatchlistServiceGetWatchlistItemRequest$inboundSchema: z.ZodType<WatchlistServiceGetWatchlistItemRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type WatchlistServiceGetWatchlistItemRequest$Outbound = {
    watchlist_id: string;
    item_id: string;
};
/** @internal */
export declare const WatchlistServiceGetWatchlistItemRequest$outboundSchema: z.ZodType<WatchlistServiceGetWatchlistItemRequest$Outbound, z.ZodTypeDef, WatchlistServiceGetWatchlistItemRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WatchlistServiceGetWatchlistItemRequest$ {
    /** @deprecated use `WatchlistServiceGetWatchlistItemRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WatchlistServiceGetWatchlistItemRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `WatchlistServiceGetWatchlistItemRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WatchlistServiceGetWatchlistItemRequest$Outbound, z.ZodTypeDef, WatchlistServiceGetWatchlistItemRequest>;
    /** @deprecated use `WatchlistServiceGetWatchlistItemRequest$Outbound` instead. */
    type Outbound = WatchlistServiceGetWatchlistItemRequest$Outbound;
}
/** @internal */
export declare const WatchlistServiceGetWatchlistItemResponse$inboundSchema: z.ZodType<WatchlistServiceGetWatchlistItemResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type WatchlistServiceGetWatchlistItemResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    WatchlistItem?: components.WatchlistItem$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const WatchlistServiceGetWatchlistItemResponse$outboundSchema: z.ZodType<WatchlistServiceGetWatchlistItemResponse$Outbound, z.ZodTypeDef, WatchlistServiceGetWatchlistItemResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WatchlistServiceGetWatchlistItemResponse$ {
    /** @deprecated use `WatchlistServiceGetWatchlistItemResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WatchlistServiceGetWatchlistItemResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `WatchlistServiceGetWatchlistItemResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WatchlistServiceGetWatchlistItemResponse$Outbound, z.ZodTypeDef, WatchlistServiceGetWatchlistItemResponse>;
    /** @deprecated use `WatchlistServiceGetWatchlistItemResponse$Outbound` instead. */
    type Outbound = WatchlistServiceGetWatchlistItemResponse$Outbound;
}
//# sourceMappingURL=watchlistservicegetwatchlistitem.d.ts.map