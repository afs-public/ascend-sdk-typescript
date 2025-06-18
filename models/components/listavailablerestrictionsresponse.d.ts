import * as z from "zod";
import { AvailableRestriction, AvailableRestriction$Outbound } from "./availablerestriction.js";
/**
 * The response to list available Restrictions for an Account.
 */
export type ListAvailableRestrictionsResponse = {
    /**
     * The available restrictions on an account
     */
    availableRestrictions?: Array<AvailableRestriction> | undefined;
};
/** @internal */
export declare const ListAvailableRestrictionsResponse$inboundSchema: z.ZodType<ListAvailableRestrictionsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAvailableRestrictionsResponse$Outbound = {
    available_restrictions?: Array<AvailableRestriction$Outbound> | undefined;
};
/** @internal */
export declare const ListAvailableRestrictionsResponse$outboundSchema: z.ZodType<ListAvailableRestrictionsResponse$Outbound, z.ZodTypeDef, ListAvailableRestrictionsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListAvailableRestrictionsResponse$ {
    /** @deprecated use `ListAvailableRestrictionsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListAvailableRestrictionsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListAvailableRestrictionsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListAvailableRestrictionsResponse$Outbound, z.ZodTypeDef, ListAvailableRestrictionsResponse>;
    /** @deprecated use `ListAvailableRestrictionsResponse$Outbound` instead. */
    type Outbound = ListAvailableRestrictionsResponse$Outbound;
}
//# sourceMappingURL=listavailablerestrictionsresponse.d.ts.map