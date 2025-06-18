import * as z from "zod";
import { Position, Position$Outbound } from "./position.js";
/**
 * positions with 0 values will be returned if there are offsetting position deltas or a position was reduced to 0
 */
export type ListPositionsResponse = {
    /**
     * The next page token returned by this call. Can be provided in another request to retrieve the subsequent page
     */
    nextPageToken?: string | undefined;
    /**
     * The positions returned
     */
    positions?: Array<Position> | undefined;
};
/** @internal */
export declare const ListPositionsResponse$inboundSchema: z.ZodType<ListPositionsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListPositionsResponse$Outbound = {
    next_page_token?: string | undefined;
    positions?: Array<Position$Outbound> | undefined;
};
/** @internal */
export declare const ListPositionsResponse$outboundSchema: z.ZodType<ListPositionsResponse$Outbound, z.ZodTypeDef, ListPositionsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListPositionsResponse$ {
    /** @deprecated use `ListPositionsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListPositionsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListPositionsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListPositionsResponse$Outbound, z.ZodTypeDef, ListPositionsResponse>;
    /** @deprecated use `ListPositionsResponse$Outbound` instead. */
    type Outbound = ListPositionsResponse$Outbound;
}
//# sourceMappingURL=listpositionsresponse.d.ts.map