import * as z from "zod";
import { CreateUploadLinkRequestCreate, CreateUploadLinkRequestCreate$Outbound } from "./createuploadlinkrequestcreate.js";
/**
 * List of documents to get upload signed links for.
 */
export type BatchCreateUploadLinksRequestCreate = {
    /**
     * List of documents to get upload signed links for
     */
    createDocumentUploadLinkRequest?: Array<CreateUploadLinkRequestCreate> | undefined;
};
/** @internal */
export declare const BatchCreateUploadLinksRequestCreate$inboundSchema: z.ZodType<BatchCreateUploadLinksRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type BatchCreateUploadLinksRequestCreate$Outbound = {
    create_document_upload_link_request?: Array<CreateUploadLinkRequestCreate$Outbound> | undefined;
};
/** @internal */
export declare const BatchCreateUploadLinksRequestCreate$outboundSchema: z.ZodType<BatchCreateUploadLinksRequestCreate$Outbound, z.ZodTypeDef, BatchCreateUploadLinksRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BatchCreateUploadLinksRequestCreate$ {
    /** @deprecated use `BatchCreateUploadLinksRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BatchCreateUploadLinksRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `BatchCreateUploadLinksRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BatchCreateUploadLinksRequestCreate$Outbound, z.ZodTypeDef, BatchCreateUploadLinksRequestCreate>;
    /** @deprecated use `BatchCreateUploadLinksRequestCreate$Outbound` instead. */
    type Outbound = BatchCreateUploadLinksRequestCreate$Outbound;
}
//# sourceMappingURL=batchcreateuploadlinksrequestcreate.d.ts.map