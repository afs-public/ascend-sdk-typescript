import * as z from "zod";
import { LegalEntity, LegalEntity$Outbound } from "./legalentity.js";
/**
 * The response to list Legal Entities.
 */
export type ListLegalEntitiesResponse = {
    /**
     * The list of available legal entities
     */
    legalEntities?: Array<LegalEntity> | undefined;
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | undefined;
};
/** @internal */
export declare const ListLegalEntitiesResponse$inboundSchema: z.ZodType<ListLegalEntitiesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListLegalEntitiesResponse$Outbound = {
    legal_entities?: Array<LegalEntity$Outbound> | undefined;
    next_page_token?: string | undefined;
};
/** @internal */
export declare const ListLegalEntitiesResponse$outboundSchema: z.ZodType<ListLegalEntitiesResponse$Outbound, z.ZodTypeDef, ListLegalEntitiesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListLegalEntitiesResponse$ {
    /** @deprecated use `ListLegalEntitiesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListLegalEntitiesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListLegalEntitiesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListLegalEntitiesResponse$Outbound, z.ZodTypeDef, ListLegalEntitiesResponse>;
    /** @deprecated use `ListLegalEntitiesResponse$Outbound` instead. */
    type Outbound = ListLegalEntitiesResponse$Outbound;
}
//# sourceMappingURL=listlegalentitiesresponse.d.ts.map