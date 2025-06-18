import * as z from "zod";
/**
 * Custom response - returns identity verification documentIds added to investigation request
 */
export type LinkDocumentsResponse = {
    /**
     * Document IDs from identity verification result object
     */
    identityVerificationDocumentIds?: Array<string> | undefined;
    /**
     * Required: The ID of the investigation The format is "investigations/{investigation}"
     */
    name?: string | undefined;
};
/** @internal */
export declare const LinkDocumentsResponse$inboundSchema: z.ZodType<LinkDocumentsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type LinkDocumentsResponse$Outbound = {
    identity_verification_document_ids?: Array<string> | undefined;
    name?: string | undefined;
};
/** @internal */
export declare const LinkDocumentsResponse$outboundSchema: z.ZodType<LinkDocumentsResponse$Outbound, z.ZodTypeDef, LinkDocumentsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LinkDocumentsResponse$ {
    /** @deprecated use `LinkDocumentsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LinkDocumentsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `LinkDocumentsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LinkDocumentsResponse$Outbound, z.ZodTypeDef, LinkDocumentsResponse>;
    /** @deprecated use `LinkDocumentsResponse$Outbound` instead. */
    type Outbound = LinkDocumentsResponse$Outbound;
}
//# sourceMappingURL=linkdocumentsresponse.d.ts.map