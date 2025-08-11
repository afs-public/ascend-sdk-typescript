import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Entitlement, Entitlement$Outbound } from "./entitlement.js";
/**
 * The response to list Entitlements on an Account.
 */
export type ListEntitlementsResponse = {
    /**
     * The list of Entitlements on an Account
     */
    entitlements?: Array<Entitlement> | undefined;
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | undefined;
};
/** @internal */
export declare const ListEntitlementsResponse$inboundSchema: z.ZodType<ListEntitlementsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListEntitlementsResponse$Outbound = {
    entitlements?: Array<Entitlement$Outbound> | undefined;
    next_page_token?: string | undefined;
};
/** @internal */
export declare const ListEntitlementsResponse$outboundSchema: z.ZodType<ListEntitlementsResponse$Outbound, z.ZodTypeDef, ListEntitlementsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListEntitlementsResponse$ {
    /** @deprecated use `ListEntitlementsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListEntitlementsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListEntitlementsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListEntitlementsResponse$Outbound, z.ZodTypeDef, ListEntitlementsResponse>;
    /** @deprecated use `ListEntitlementsResponse$Outbound` instead. */
    type Outbound = ListEntitlementsResponse$Outbound;
}
export declare function listEntitlementsResponseToJSON(listEntitlementsResponse: ListEntitlementsResponse): string;
export declare function listEntitlementsResponseFromJSON(jsonString: string): SafeParseResult<ListEntitlementsResponse, SDKValidationError>;
//# sourceMappingURL=listentitlementsresponse.d.ts.map