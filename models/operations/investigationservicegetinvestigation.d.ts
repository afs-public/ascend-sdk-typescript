import * as z from "zod";
import * as components from "../components/index.js";
export type InvestigationServiceGetInvestigationRequest = {
    /**
     * The investigation id.
     */
    investigationId: string;
};
export type InvestigationServiceGetInvestigationResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    investigation?: components.Investigation | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const InvestigationServiceGetInvestigationRequest$inboundSchema: z.ZodType<InvestigationServiceGetInvestigationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type InvestigationServiceGetInvestigationRequest$Outbound = {
    investigation_id: string;
};
/** @internal */
export declare const InvestigationServiceGetInvestigationRequest$outboundSchema: z.ZodType<InvestigationServiceGetInvestigationRequest$Outbound, z.ZodTypeDef, InvestigationServiceGetInvestigationRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InvestigationServiceGetInvestigationRequest$ {
    /** @deprecated use `InvestigationServiceGetInvestigationRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InvestigationServiceGetInvestigationRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `InvestigationServiceGetInvestigationRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InvestigationServiceGetInvestigationRequest$Outbound, z.ZodTypeDef, InvestigationServiceGetInvestigationRequest>;
    /** @deprecated use `InvestigationServiceGetInvestigationRequest$Outbound` instead. */
    type Outbound = InvestigationServiceGetInvestigationRequest$Outbound;
}
/** @internal */
export declare const InvestigationServiceGetInvestigationResponse$inboundSchema: z.ZodType<InvestigationServiceGetInvestigationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type InvestigationServiceGetInvestigationResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    Investigation?: components.Investigation$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const InvestigationServiceGetInvestigationResponse$outboundSchema: z.ZodType<InvestigationServiceGetInvestigationResponse$Outbound, z.ZodTypeDef, InvestigationServiceGetInvestigationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InvestigationServiceGetInvestigationResponse$ {
    /** @deprecated use `InvestigationServiceGetInvestigationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InvestigationServiceGetInvestigationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `InvestigationServiceGetInvestigationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InvestigationServiceGetInvestigationResponse$Outbound, z.ZodTypeDef, InvestigationServiceGetInvestigationResponse>;
    /** @deprecated use `InvestigationServiceGetInvestigationResponse$Outbound` instead. */
    type Outbound = InvestigationServiceGetInvestigationResponse$Outbound;
}
//# sourceMappingURL=investigationservicegetinvestigation.d.ts.map