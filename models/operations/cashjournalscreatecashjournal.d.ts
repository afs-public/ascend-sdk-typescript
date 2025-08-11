import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CashJournalsCreateCashJournalResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    cashJournal?: components.CashJournal | undefined;
    /**
     * INVALID_ARGUMENT: The request has an invalid argument.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const CashJournalsCreateCashJournalResponse$inboundSchema: z.ZodType<CashJournalsCreateCashJournalResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CashJournalsCreateCashJournalResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    CashJournal?: components.CashJournal$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const CashJournalsCreateCashJournalResponse$outboundSchema: z.ZodType<CashJournalsCreateCashJournalResponse$Outbound, z.ZodTypeDef, CashJournalsCreateCashJournalResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CashJournalsCreateCashJournalResponse$ {
    /** @deprecated use `CashJournalsCreateCashJournalResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CashJournalsCreateCashJournalResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CashJournalsCreateCashJournalResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CashJournalsCreateCashJournalResponse$Outbound, z.ZodTypeDef, CashJournalsCreateCashJournalResponse>;
    /** @deprecated use `CashJournalsCreateCashJournalResponse$Outbound` instead. */
    type Outbound = CashJournalsCreateCashJournalResponse$Outbound;
}
export declare function cashJournalsCreateCashJournalResponseToJSON(cashJournalsCreateCashJournalResponse: CashJournalsCreateCashJournalResponse): string;
export declare function cashJournalsCreateCashJournalResponseFromJSON(jsonString: string): SafeParseResult<CashJournalsCreateCashJournalResponse, SDKValidationError>;
//# sourceMappingURL=cashjournalscreatecashjournal.d.ts.map