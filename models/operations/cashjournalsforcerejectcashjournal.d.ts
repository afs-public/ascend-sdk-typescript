import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CashJournalsForceRejectCashJournalRequest = {
    /**
     * The cashJournal id.
     */
    cashJournalId: string;
    forceRejectCashJournalRequestCreate: components.ForceRejectCashJournalRequestCreate;
};
export type CashJournalsForceRejectCashJournalResponse = {
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
export declare const CashJournalsForceRejectCashJournalRequest$inboundSchema: z.ZodType<CashJournalsForceRejectCashJournalRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CashJournalsForceRejectCashJournalRequest$Outbound = {
    cashJournal_id: string;
    ForceRejectCashJournalRequestCreate: components.ForceRejectCashJournalRequestCreate$Outbound;
};
/** @internal */
export declare const CashJournalsForceRejectCashJournalRequest$outboundSchema: z.ZodType<CashJournalsForceRejectCashJournalRequest$Outbound, z.ZodTypeDef, CashJournalsForceRejectCashJournalRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CashJournalsForceRejectCashJournalRequest$ {
    /** @deprecated use `CashJournalsForceRejectCashJournalRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CashJournalsForceRejectCashJournalRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `CashJournalsForceRejectCashJournalRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CashJournalsForceRejectCashJournalRequest$Outbound, z.ZodTypeDef, CashJournalsForceRejectCashJournalRequest>;
    /** @deprecated use `CashJournalsForceRejectCashJournalRequest$Outbound` instead. */
    type Outbound = CashJournalsForceRejectCashJournalRequest$Outbound;
}
export declare function cashJournalsForceRejectCashJournalRequestToJSON(cashJournalsForceRejectCashJournalRequest: CashJournalsForceRejectCashJournalRequest): string;
export declare function cashJournalsForceRejectCashJournalRequestFromJSON(jsonString: string): SafeParseResult<CashJournalsForceRejectCashJournalRequest, SDKValidationError>;
/** @internal */
export declare const CashJournalsForceRejectCashJournalResponse$inboundSchema: z.ZodType<CashJournalsForceRejectCashJournalResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CashJournalsForceRejectCashJournalResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    CashJournal?: components.CashJournal$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const CashJournalsForceRejectCashJournalResponse$outboundSchema: z.ZodType<CashJournalsForceRejectCashJournalResponse$Outbound, z.ZodTypeDef, CashJournalsForceRejectCashJournalResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CashJournalsForceRejectCashJournalResponse$ {
    /** @deprecated use `CashJournalsForceRejectCashJournalResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CashJournalsForceRejectCashJournalResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CashJournalsForceRejectCashJournalResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CashJournalsForceRejectCashJournalResponse$Outbound, z.ZodTypeDef, CashJournalsForceRejectCashJournalResponse>;
    /** @deprecated use `CashJournalsForceRejectCashJournalResponse$Outbound` instead. */
    type Outbound = CashJournalsForceRejectCashJournalResponse$Outbound;
}
export declare function cashJournalsForceRejectCashJournalResponseToJSON(cashJournalsForceRejectCashJournalResponse: CashJournalsForceRejectCashJournalResponse): string;
export declare function cashJournalsForceRejectCashJournalResponseFromJSON(jsonString: string): SafeParseResult<CashJournalsForceRejectCashJournalResponse, SDKValidationError>;
//# sourceMappingURL=cashjournalsforcerejectcashjournal.d.ts.map