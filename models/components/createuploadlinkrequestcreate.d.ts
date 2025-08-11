import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AccountDocumentUploadRequestCreate, AccountDocumentUploadRequestCreate$Outbound } from "./accountdocumentuploadrequestcreate.js";
import { IDDocumentUploadRequestCreate, IDDocumentUploadRequestCreate$Outbound } from "./iddocumentuploadrequestcreate.js";
/**
 * Document to be uploaded; These descriptions allow the document to be searched for after it is uploaded.
 */
export type CreateUploadLinkRequestCreate = {
    /**
     * Account document to be uploaded;
     */
    accountDocumentUploadRequest?: AccountDocumentUploadRequestCreate | undefined;
    /**
     * User-provided identifier that relates this document with the signed link that will be generated for it; Required for all documents; Must be unique for each document in the request
     */
    clientBatchSourceId: string;
    /**
     * Identity document to be uploaded;
     */
    idDocumentUploadRequest?: IDDocumentUploadRequestCreate | undefined;
    /**
     * Media type for the document to be uploaded; Required for all documents; Must be one of: application/json, application/pdf, image/jpeg, image/png, text/csv, or text/plain
     */
    mimeType: string;
};
/** @internal */
export declare const CreateUploadLinkRequestCreate$inboundSchema: z.ZodType<CreateUploadLinkRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateUploadLinkRequestCreate$Outbound = {
    account_document_upload_request?: AccountDocumentUploadRequestCreate$Outbound | undefined;
    client_batch_source_id: string;
    id_document_upload_request?: IDDocumentUploadRequestCreate$Outbound | undefined;
    mime_type: string;
};
/** @internal */
export declare const CreateUploadLinkRequestCreate$outboundSchema: z.ZodType<CreateUploadLinkRequestCreate$Outbound, z.ZodTypeDef, CreateUploadLinkRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateUploadLinkRequestCreate$ {
    /** @deprecated use `CreateUploadLinkRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateUploadLinkRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateUploadLinkRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateUploadLinkRequestCreate$Outbound, z.ZodTypeDef, CreateUploadLinkRequestCreate>;
    /** @deprecated use `CreateUploadLinkRequestCreate$Outbound` instead. */
    type Outbound = CreateUploadLinkRequestCreate$Outbound;
}
export declare function createUploadLinkRequestCreateToJSON(createUploadLinkRequestCreate: CreateUploadLinkRequestCreate): string;
export declare function createUploadLinkRequestCreateFromJSON(jsonString: string): SafeParseResult<CreateUploadLinkRequestCreate, SDKValidationError>;
//# sourceMappingURL=createuploadlinkrequestcreate.d.ts.map