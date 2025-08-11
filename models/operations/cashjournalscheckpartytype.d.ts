import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CashJournalsCheckPartyTypeResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    checkPartyTypeResponse?: components.CheckPartyTypeResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request has an invalid argument.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const CashJournalsCheckPartyTypeResponse$inboundSchema: z.ZodType<CashJournalsCheckPartyTypeResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CashJournalsCheckPartyTypeResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    CheckPartyTypeResponse?: components.CheckPartyTypeResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const CashJournalsCheckPartyTypeResponse$outboundSchema: z.ZodType<CashJournalsCheckPartyTypeResponse$Outbound, z.ZodTypeDef, CashJournalsCheckPartyTypeResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CashJournalsCheckPartyTypeResponse$ {
    /** @deprecated use `CashJournalsCheckPartyTypeResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CashJournalsCheckPartyTypeResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CashJournalsCheckPartyTypeResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CashJournalsCheckPartyTypeResponse$Outbound, z.ZodTypeDef, CashJournalsCheckPartyTypeResponse>;
    /** @deprecated use `CashJournalsCheckPartyTypeResponse$Outbound` instead. */
    type Outbound = CashJournalsCheckPartyTypeResponse$Outbound;
}
export declare function cashJournalsCheckPartyTypeResponseToJSON(cashJournalsCheckPartyTypeResponse: CashJournalsCheckPartyTypeResponse): string;
export declare function cashJournalsCheckPartyTypeResponseFromJSON(jsonString: string): SafeParseResult<CashJournalsCheckPartyTypeResponse, SDKValidationError>;
//# sourceMappingURL=cashjournalscheckpartytype.d.ts.map