import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Maps the correlation id to the signed link that can be used to upload the described document.
 */
export type UploadLink = {
    /**
     * User-provided identifier that relates this signed link with the request used to get it
     */
    clientBatchSourceId?: string | undefined;
    /**
     * Identifier for the upload link; This can be used to retrieve the document after it is uploaded
     */
    name?: string | undefined;
    /**
     * Signed link used to upload a document; The link expires one hour after being generated
     */
    uploadLink?: string | undefined;
};
/** @internal */
export declare const UploadLink$inboundSchema: z.ZodType<UploadLink, z.ZodTypeDef, unknown>;
/** @internal */
export type UploadLink$Outbound = {
    client_batch_source_id?: string | undefined;
    name?: string | undefined;
    upload_link?: string | undefined;
};
/** @internal */
export declare const UploadLink$outboundSchema: z.ZodType<UploadLink$Outbound, z.ZodTypeDef, UploadLink>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UploadLink$ {
    /** @deprecated use `UploadLink$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UploadLink, z.ZodTypeDef, unknown>;
    /** @deprecated use `UploadLink$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UploadLink$Outbound, z.ZodTypeDef, UploadLink>;
    /** @deprecated use `UploadLink$Outbound` instead. */
    type Outbound = UploadLink$Outbound;
}
export declare function uploadLinkToJSON(uploadLink: UploadLink): string;
export declare function uploadLinkFromJSON(jsonString: string): SafeParseResult<UploadLink, SDKValidationError>;
//# sourceMappingURL=uploadlink.d.ts.map