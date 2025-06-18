import * as z from "zod";
import { UploadLink, UploadLink$Outbound } from "./uploadlink.js";
/**
 * List of signed links to upload documents.
 */
export type BatchCreateUploadLinksResponse = {
    /**
     * The list of signed links used to upload documents
     */
    uploadLink?: Array<UploadLink> | undefined;
};
/** @internal */
export declare const BatchCreateUploadLinksResponse$inboundSchema: z.ZodType<BatchCreateUploadLinksResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type BatchCreateUploadLinksResponse$Outbound = {
    upload_link?: Array<UploadLink$Outbound> | undefined;
};
/** @internal */
export declare const BatchCreateUploadLinksResponse$outboundSchema: z.ZodType<BatchCreateUploadLinksResponse$Outbound, z.ZodTypeDef, BatchCreateUploadLinksResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BatchCreateUploadLinksResponse$ {
    /** @deprecated use `BatchCreateUploadLinksResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BatchCreateUploadLinksResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `BatchCreateUploadLinksResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BatchCreateUploadLinksResponse$Outbound, z.ZodTypeDef, BatchCreateUploadLinksResponse>;
    /** @deprecated use `BatchCreateUploadLinksResponse$Outbound` instead. */
    type Outbound = BatchCreateUploadLinksResponse$Outbound;
}
//# sourceMappingURL=batchcreateuploadlinksresponse.d.ts.map