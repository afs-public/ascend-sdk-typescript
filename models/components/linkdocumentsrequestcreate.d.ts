import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Custom request - adds identity verification documentIds to investigation request
 */
export type LinkDocumentsRequestCreate = {
    /**
     * Document ids to be added to identity verification result
     */
    identityVerificationDocumentIds: Array<string>;
};
/** @internal */
export declare const LinkDocumentsRequestCreate$inboundSchema: z.ZodType<LinkDocumentsRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type LinkDocumentsRequestCreate$Outbound = {
    identity_verification_document_ids: Array<string>;
};
/** @internal */
export declare const LinkDocumentsRequestCreate$outboundSchema: z.ZodType<LinkDocumentsRequestCreate$Outbound, z.ZodTypeDef, LinkDocumentsRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LinkDocumentsRequestCreate$ {
    /** @deprecated use `LinkDocumentsRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LinkDocumentsRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `LinkDocumentsRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LinkDocumentsRequestCreate$Outbound, z.ZodTypeDef, LinkDocumentsRequestCreate>;
    /** @deprecated use `LinkDocumentsRequestCreate$Outbound` instead. */
    type Outbound = LinkDocumentsRequestCreate$Outbound;
}
export declare function linkDocumentsRequestCreateToJSON(linkDocumentsRequestCreate: LinkDocumentsRequestCreate): string;
export declare function linkDocumentsRequestCreateFromJSON(jsonString: string): SafeParseResult<LinkDocumentsRequestCreate, SDKValidationError>;
//# sourceMappingURL=linkdocumentsrequestcreate.d.ts.map