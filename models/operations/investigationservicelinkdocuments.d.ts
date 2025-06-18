import * as z from "zod";
import * as components from "../components/index.js";
export type InvestigationServiceLinkDocumentsRequest = {
    /**
     * The investigation id.
     */
    investigationId: string;
    linkDocumentsRequestCreate: components.LinkDocumentsRequestCreate;
};
export type InvestigationServiceLinkDocumentsResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    linkDocumentsResponse?: components.LinkDocumentsResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const InvestigationServiceLinkDocumentsRequest$inboundSchema: z.ZodType<InvestigationServiceLinkDocumentsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type InvestigationServiceLinkDocumentsRequest$Outbound = {
    investigation_id: string;
    LinkDocumentsRequestCreate: components.LinkDocumentsRequestCreate$Outbound;
};
/** @internal */
export declare const InvestigationServiceLinkDocumentsRequest$outboundSchema: z.ZodType<InvestigationServiceLinkDocumentsRequest$Outbound, z.ZodTypeDef, InvestigationServiceLinkDocumentsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InvestigationServiceLinkDocumentsRequest$ {
    /** @deprecated use `InvestigationServiceLinkDocumentsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InvestigationServiceLinkDocumentsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `InvestigationServiceLinkDocumentsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InvestigationServiceLinkDocumentsRequest$Outbound, z.ZodTypeDef, InvestigationServiceLinkDocumentsRequest>;
    /** @deprecated use `InvestigationServiceLinkDocumentsRequest$Outbound` instead. */
    type Outbound = InvestigationServiceLinkDocumentsRequest$Outbound;
}
/** @internal */
export declare const InvestigationServiceLinkDocumentsResponse$inboundSchema: z.ZodType<InvestigationServiceLinkDocumentsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type InvestigationServiceLinkDocumentsResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    LinkDocumentsResponse?: components.LinkDocumentsResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const InvestigationServiceLinkDocumentsResponse$outboundSchema: z.ZodType<InvestigationServiceLinkDocumentsResponse$Outbound, z.ZodTypeDef, InvestigationServiceLinkDocumentsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InvestigationServiceLinkDocumentsResponse$ {
    /** @deprecated use `InvestigationServiceLinkDocumentsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InvestigationServiceLinkDocumentsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `InvestigationServiceLinkDocumentsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InvestigationServiceLinkDocumentsResponse$Outbound, z.ZodTypeDef, InvestigationServiceLinkDocumentsResponse>;
    /** @deprecated use `InvestigationServiceLinkDocumentsResponse$Outbound` instead. */
    type Outbound = InvestigationServiceLinkDocumentsResponse$Outbound;
}
//# sourceMappingURL=investigationservicelinkdocuments.d.ts.map