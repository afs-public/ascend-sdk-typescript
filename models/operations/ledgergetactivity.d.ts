import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type LedgerGetActivityRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The activity id.
     */
    activityId: string;
};
export type LedgerGetActivityResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    activity?: components.Activity | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const LedgerGetActivityRequest$inboundSchema: z.ZodType<LedgerGetActivityRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type LedgerGetActivityRequest$Outbound = {
    account_id: string;
    activity_id: string;
};
/** @internal */
export declare const LedgerGetActivityRequest$outboundSchema: z.ZodType<LedgerGetActivityRequest$Outbound, z.ZodTypeDef, LedgerGetActivityRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LedgerGetActivityRequest$ {
    /** @deprecated use `LedgerGetActivityRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LedgerGetActivityRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `LedgerGetActivityRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LedgerGetActivityRequest$Outbound, z.ZodTypeDef, LedgerGetActivityRequest>;
    /** @deprecated use `LedgerGetActivityRequest$Outbound` instead. */
    type Outbound = LedgerGetActivityRequest$Outbound;
}
export declare function ledgerGetActivityRequestToJSON(ledgerGetActivityRequest: LedgerGetActivityRequest): string;
export declare function ledgerGetActivityRequestFromJSON(jsonString: string): SafeParseResult<LedgerGetActivityRequest, SDKValidationError>;
/** @internal */
export declare const LedgerGetActivityResponse$inboundSchema: z.ZodType<LedgerGetActivityResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type LedgerGetActivityResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    Activity?: components.Activity$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const LedgerGetActivityResponse$outboundSchema: z.ZodType<LedgerGetActivityResponse$Outbound, z.ZodTypeDef, LedgerGetActivityResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LedgerGetActivityResponse$ {
    /** @deprecated use `LedgerGetActivityResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LedgerGetActivityResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `LedgerGetActivityResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LedgerGetActivityResponse$Outbound, z.ZodTypeDef, LedgerGetActivityResponse>;
    /** @deprecated use `LedgerGetActivityResponse$Outbound` instead. */
    type Outbound = LedgerGetActivityResponse$Outbound;
}
export declare function ledgerGetActivityResponseToJSON(ledgerGetActivityResponse: LedgerGetActivityResponse): string;
export declare function ledgerGetActivityResponseFromJSON(jsonString: string): SafeParseResult<LedgerGetActivityResponse, SDKValidationError>;
//# sourceMappingURL=ledgergetactivity.d.ts.map