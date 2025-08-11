import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { BankRelationship, BankRelationship$Outbound } from "./bankrelationship.js";
/**
 * Returns bank relationships for a parent account.
 */
export type ListBankRelationshipsResponse = {
    /**
     * The bank relationships from the specified account.
     */
    bankRelationships?: Array<BankRelationship> | undefined;
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | undefined;
};
/** @internal */
export declare const ListBankRelationshipsResponse$inboundSchema: z.ZodType<ListBankRelationshipsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListBankRelationshipsResponse$Outbound = {
    bank_relationships?: Array<BankRelationship$Outbound> | undefined;
    next_page_token?: string | undefined;
};
/** @internal */
export declare const ListBankRelationshipsResponse$outboundSchema: z.ZodType<ListBankRelationshipsResponse$Outbound, z.ZodTypeDef, ListBankRelationshipsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListBankRelationshipsResponse$ {
    /** @deprecated use `ListBankRelationshipsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListBankRelationshipsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListBankRelationshipsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListBankRelationshipsResponse$Outbound, z.ZodTypeDef, ListBankRelationshipsResponse>;
    /** @deprecated use `ListBankRelationshipsResponse$Outbound` instead. */
    type Outbound = ListBankRelationshipsResponse$Outbound;
}
export declare function listBankRelationshipsResponseToJSON(listBankRelationshipsResponse: ListBankRelationshipsResponse): string;
export declare function listBankRelationshipsResponseFromJSON(jsonString: string): SafeParseResult<ListBankRelationshipsResponse, SDKValidationError>;
//# sourceMappingURL=listbankrelationshipsresponse.d.ts.map