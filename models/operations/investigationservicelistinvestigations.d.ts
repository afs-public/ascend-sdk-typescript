import * as z from "zod";
import * as components from "../components/index.js";
export type InvestigationServiceListInvestigationsRequest = {
    /**
     * The maximum number of records to return. Default is 50 The maximum is 200, values exceeding this will be set to 200
     */
    pageSize?: number | undefined;
    /**
     * The page token used to request a specific page of the search results
     */
    pageToken?: string | undefined;
    /**
     * A CEL string to filter results; See the [CEL Search](https://developer.apexclearing.com/apex-fintech-solutions/docs/cel-search) page in Guides for more information; Filter options include:
     *
     * @remarks
     *  ListInvestigationStatesResponse.investigation_states
     */
    filter?: string | undefined;
};
export type InvestigationServiceListInvestigationsResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    listInvestigationsResponse?: components.ListInvestigationsResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const InvestigationServiceListInvestigationsRequest$inboundSchema: z.ZodType<InvestigationServiceListInvestigationsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type InvestigationServiceListInvestigationsRequest$Outbound = {
    page_size?: number | undefined;
    page_token?: string | undefined;
    filter?: string | undefined;
};
/** @internal */
export declare const InvestigationServiceListInvestigationsRequest$outboundSchema: z.ZodType<InvestigationServiceListInvestigationsRequest$Outbound, z.ZodTypeDef, InvestigationServiceListInvestigationsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InvestigationServiceListInvestigationsRequest$ {
    /** @deprecated use `InvestigationServiceListInvestigationsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InvestigationServiceListInvestigationsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `InvestigationServiceListInvestigationsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InvestigationServiceListInvestigationsRequest$Outbound, z.ZodTypeDef, InvestigationServiceListInvestigationsRequest>;
    /** @deprecated use `InvestigationServiceListInvestigationsRequest$Outbound` instead. */
    type Outbound = InvestigationServiceListInvestigationsRequest$Outbound;
}
/** @internal */
export declare const InvestigationServiceListInvestigationsResponse$inboundSchema: z.ZodType<InvestigationServiceListInvestigationsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type InvestigationServiceListInvestigationsResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    ListInvestigationsResponse?: components.ListInvestigationsResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const InvestigationServiceListInvestigationsResponse$outboundSchema: z.ZodType<InvestigationServiceListInvestigationsResponse$Outbound, z.ZodTypeDef, InvestigationServiceListInvestigationsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InvestigationServiceListInvestigationsResponse$ {
    /** @deprecated use `InvestigationServiceListInvestigationsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InvestigationServiceListInvestigationsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `InvestigationServiceListInvestigationsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InvestigationServiceListInvestigationsResponse$Outbound, z.ZodTypeDef, InvestigationServiceListInvestigationsResponse>;
    /** @deprecated use `InvestigationServiceListInvestigationsResponse$Outbound` instead. */
    type Outbound = InvestigationServiceListInvestigationsResponse$Outbound;
}
//# sourceMappingURL=investigationservicelistinvestigations.d.ts.map