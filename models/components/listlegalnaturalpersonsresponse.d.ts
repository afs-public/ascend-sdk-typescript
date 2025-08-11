import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { LegalNaturalPerson, LegalNaturalPerson$Outbound } from "./legalnaturalperson.js";
/**
 * The response to list Legal Natural Persons.
 */
export type ListLegalNaturalPersonsResponse = {
    /**
     * The list of available legal natural persons
     */
    legalNaturalPersons?: Array<LegalNaturalPerson> | undefined;
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string | undefined;
};
/** @internal */
export declare const ListLegalNaturalPersonsResponse$inboundSchema: z.ZodType<ListLegalNaturalPersonsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListLegalNaturalPersonsResponse$Outbound = {
    legal_natural_persons?: Array<LegalNaturalPerson$Outbound> | undefined;
    next_page_token?: string | undefined;
};
/** @internal */
export declare const ListLegalNaturalPersonsResponse$outboundSchema: z.ZodType<ListLegalNaturalPersonsResponse$Outbound, z.ZodTypeDef, ListLegalNaturalPersonsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListLegalNaturalPersonsResponse$ {
    /** @deprecated use `ListLegalNaturalPersonsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListLegalNaturalPersonsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListLegalNaturalPersonsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListLegalNaturalPersonsResponse$Outbound, z.ZodTypeDef, ListLegalNaturalPersonsResponse>;
    /** @deprecated use `ListLegalNaturalPersonsResponse$Outbound` instead. */
    type Outbound = ListLegalNaturalPersonsResponse$Outbound;
}
export declare function listLegalNaturalPersonsResponseToJSON(listLegalNaturalPersonsResponse: ListLegalNaturalPersonsResponse): string;
export declare function listLegalNaturalPersonsResponseFromJSON(jsonString: string): SafeParseResult<ListLegalNaturalPersonsResponse, SDKValidationError>;
//# sourceMappingURL=listlegalnaturalpersonsresponse.d.ts.map