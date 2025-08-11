import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Agreement, Agreement$Outbound } from "./agreement.js";
/**
 * The response to list Agreements on an Account.
 */
export type ListAgreementsResponse = {
    /**
     * The list of Agreements on an Account
     */
    agreements?: Array<Agreement> | undefined;
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | undefined;
};
/** @internal */
export declare const ListAgreementsResponse$inboundSchema: z.ZodType<ListAgreementsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAgreementsResponse$Outbound = {
    agreements?: Array<Agreement$Outbound> | undefined;
    next_page_token?: string | undefined;
};
/** @internal */
export declare const ListAgreementsResponse$outboundSchema: z.ZodType<ListAgreementsResponse$Outbound, z.ZodTypeDef, ListAgreementsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListAgreementsResponse$ {
    /** @deprecated use `ListAgreementsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListAgreementsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListAgreementsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListAgreementsResponse$Outbound, z.ZodTypeDef, ListAgreementsResponse>;
    /** @deprecated use `ListAgreementsResponse$Outbound` instead. */
    type Outbound = ListAgreementsResponse$Outbound;
}
export declare function listAgreementsResponseToJSON(listAgreementsResponse: ListAgreementsResponse): string;
export declare function listAgreementsResponseFromJSON(jsonString: string): SafeParseResult<ListAgreementsResponse, SDKValidationError>;
//# sourceMappingURL=listagreementsresponse.d.ts.map