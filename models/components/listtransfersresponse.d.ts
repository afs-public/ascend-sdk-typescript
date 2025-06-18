import * as z from "zod";
import { AcatsTransfer, AcatsTransfer$Outbound } from "./acatstransfer.js";
/**
 * Response to list existing transfers.
 */
export type ListTransfersResponse = {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | undefined;
    /**
     * transfers resulting from filter query
     */
    transfers?: Array<AcatsTransfer> | undefined;
};
/** @internal */
export declare const ListTransfersResponse$inboundSchema: z.ZodType<ListTransfersResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListTransfersResponse$Outbound = {
    next_page_token?: string | undefined;
    transfers?: Array<AcatsTransfer$Outbound> | undefined;
};
/** @internal */
export declare const ListTransfersResponse$outboundSchema: z.ZodType<ListTransfersResponse$Outbound, z.ZodTypeDef, ListTransfersResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListTransfersResponse$ {
    /** @deprecated use `ListTransfersResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListTransfersResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListTransfersResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListTransfersResponse$Outbound, z.ZodTypeDef, ListTransfersResponse>;
    /** @deprecated use `ListTransfersResponse$Outbound` instead. */
    type Outbound = ListTransfersResponse$Outbound;
}
//# sourceMappingURL=listtransfersresponse.d.ts.map