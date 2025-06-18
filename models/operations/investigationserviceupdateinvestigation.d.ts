import * as z from "zod";
import * as components from "../components/index.js";
export type InvestigationServiceUpdateInvestigationRequest = {
    /**
     * The investigation id.
     */
    investigationId: string;
    /**
     * The list of fields to update. Updatable Fields:
     *
     * @remarks
     *   - identity_verification
     *   - investigation_request_state
     *   - watchlist_matches
     *    - watchlist_id
     *    - watchlist_item_id
     *    - match_state
     *    - exclude_from_screening
     *   - comment
     */
    updateMask?: string | undefined;
    investigationUpdate: components.InvestigationUpdate;
};
export type InvestigationServiceUpdateInvestigationResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    investigation?: components.Investigation | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     *
     * @remarks
     * FAILED_PRECONDITION: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const InvestigationServiceUpdateInvestigationRequest$inboundSchema: z.ZodType<InvestigationServiceUpdateInvestigationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type InvestigationServiceUpdateInvestigationRequest$Outbound = {
    investigation_id: string;
    update_mask?: string | undefined;
    InvestigationUpdate: components.InvestigationUpdate$Outbound;
};
/** @internal */
export declare const InvestigationServiceUpdateInvestigationRequest$outboundSchema: z.ZodType<InvestigationServiceUpdateInvestigationRequest$Outbound, z.ZodTypeDef, InvestigationServiceUpdateInvestigationRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InvestigationServiceUpdateInvestigationRequest$ {
    /** @deprecated use `InvestigationServiceUpdateInvestigationRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InvestigationServiceUpdateInvestigationRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `InvestigationServiceUpdateInvestigationRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InvestigationServiceUpdateInvestigationRequest$Outbound, z.ZodTypeDef, InvestigationServiceUpdateInvestigationRequest>;
    /** @deprecated use `InvestigationServiceUpdateInvestigationRequest$Outbound` instead. */
    type Outbound = InvestigationServiceUpdateInvestigationRequest$Outbound;
}
/** @internal */
export declare const InvestigationServiceUpdateInvestigationResponse$inboundSchema: z.ZodType<InvestigationServiceUpdateInvestigationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type InvestigationServiceUpdateInvestigationResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    Investigation?: components.Investigation$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const InvestigationServiceUpdateInvestigationResponse$outboundSchema: z.ZodType<InvestigationServiceUpdateInvestigationResponse$Outbound, z.ZodTypeDef, InvestigationServiceUpdateInvestigationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InvestigationServiceUpdateInvestigationResponse$ {
    /** @deprecated use `InvestigationServiceUpdateInvestigationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InvestigationServiceUpdateInvestigationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `InvestigationServiceUpdateInvestigationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InvestigationServiceUpdateInvestigationResponse$Outbound, z.ZodTypeDef, InvestigationServiceUpdateInvestigationResponse>;
    /** @deprecated use `InvestigationServiceUpdateInvestigationResponse$Outbound` instead. */
    type Outbound = InvestigationServiceUpdateInvestigationResponse$Outbound;
}
//# sourceMappingURL=investigationserviceupdateinvestigation.d.ts.map