import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type CashJournalsCancelCashJournalRequest = {
    /**
     * The cashJournal id.
     */
    cashJournalId: string;
    cancelCashJournalRequestCreate: components.CancelCashJournalRequestCreate;
};
export type CashJournalsCancelCashJournalResponse = {
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
export declare const CashJournalsCancelCashJournalRequest$inboundSchema: z.ZodType<CashJournalsCancelCashJournalRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CashJournalsCancelCashJournalRequest$Outbound = {
    cashJournal_id: string;
    CancelCashJournalRequestCreate: components.CancelCashJournalRequestCreate$Outbound;
};
/** @internal */
export declare const CashJournalsCancelCashJournalRequest$outboundSchema: z.ZodType<CashJournalsCancelCashJournalRequest$Outbound, z.ZodTypeDef, CashJournalsCancelCashJournalRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CashJournalsCancelCashJournalRequest$ {
    /** @deprecated use `CashJournalsCancelCashJournalRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CashJournalsCancelCashJournalRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `CashJournalsCancelCashJournalRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CashJournalsCancelCashJournalRequest$Outbound, z.ZodTypeDef, CashJournalsCancelCashJournalRequest>;
    /** @deprecated use `CashJournalsCancelCashJournalRequest$Outbound` instead. */
    type Outbound = CashJournalsCancelCashJournalRequest$Outbound;
}
export declare function cashJournalsCancelCashJournalRequestToJSON(cashJournalsCancelCashJournalRequest: CashJournalsCancelCashJournalRequest): string;
export declare function cashJournalsCancelCashJournalRequestFromJSON(jsonString: string): SafeParseResult<CashJournalsCancelCashJournalRequest, SDKValidationError>;
/** @internal */
export declare const CashJournalsCancelCashJournalResponse$inboundSchema: z.ZodType<CashJournalsCancelCashJournalResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CashJournalsCancelCashJournalResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    CashJournal?: components.CashJournal$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const CashJournalsCancelCashJournalResponse$outboundSchema: z.ZodType<CashJournalsCancelCashJournalResponse$Outbound, z.ZodTypeDef, CashJournalsCancelCashJournalResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CashJournalsCancelCashJournalResponse$ {
    /** @deprecated use `CashJournalsCancelCashJournalResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CashJournalsCancelCashJournalResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CashJournalsCancelCashJournalResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CashJournalsCancelCashJournalResponse$Outbound, z.ZodTypeDef, CashJournalsCancelCashJournalResponse>;
    /** @deprecated use `CashJournalsCancelCashJournalResponse$Outbound` instead. */
    type Outbound = CashJournalsCancelCashJournalResponse$Outbound;
}
export declare function cashJournalsCancelCashJournalResponseToJSON(cashJournalsCancelCashJournalResponse: CashJournalsCancelCashJournalResponse): string;
export declare function cashJournalsCancelCashJournalResponseFromJSON(jsonString: string): SafeParseResult<CashJournalsCancelCashJournalResponse, SDKValidationError>;
//# sourceMappingURL=cashjournalscancelcashjournal.d.ts.map