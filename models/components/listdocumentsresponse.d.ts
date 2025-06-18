import * as z from "zod";
import { Document, Document$Outbound } from "./document.js";
/**
 * List of documents that match a set of search parameters.
 */
export type ListDocumentsResponse = {
    /**
     * List of documents matching the request's search parameters
     */
    document?: Array<Document> | undefined;
    /**
     * Only returned if there are more results than currently listed on the page; Use as page_token with subsequent requests
     */
    nextPageToken?: string | undefined;
};
/** @internal */
export declare const ListDocumentsResponse$inboundSchema: z.ZodType<ListDocumentsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListDocumentsResponse$Outbound = {
    document?: Array<Document$Outbound> | undefined;
    next_page_token?: string | undefined;
};
/** @internal */
export declare const ListDocumentsResponse$outboundSchema: z.ZodType<ListDocumentsResponse$Outbound, z.ZodTypeDef, ListDocumentsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListDocumentsResponse$ {
    /** @deprecated use `ListDocumentsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListDocumentsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListDocumentsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListDocumentsResponse$Outbound, z.ZodTypeDef, ListDocumentsResponse>;
    /** @deprecated use `ListDocumentsResponse$Outbound` instead. */
    type Outbound = ListDocumentsResponse$Outbound;
}
//# sourceMappingURL=listdocumentsresponse.d.ts.map