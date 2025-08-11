import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type WireWithdrawalSchedulesListWireWithdrawalSchedulesRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * A CEL string to filter results; See the [CEL Search](https://developer.apexclearing.com/apex-fintech-solutions/docs/cel-search) page in Guides for more information; Filter options include:
     *
     * @remarks
     *  `state`
     *  `start_date`
     *  `end_date`
     */
    filter?: string | undefined;
    /**
     * The maximum number of schedules to return. The service may return fewer than this value. If unspecified, at most 25 schedules will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number | undefined;
    /**
     * The page token to request
     */
    pageToken?: string | undefined;
};
export type WireWithdrawalSchedulesListWireWithdrawalSchedulesResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    listWireWithdrawalSchedulesResponse?: components.ListWireWithdrawalSchedulesResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request has an invalid argument.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const WireWithdrawalSchedulesListWireWithdrawalSchedulesRequest$inboundSchema: z.ZodType<WireWithdrawalSchedulesListWireWithdrawalSchedulesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalSchedulesListWireWithdrawalSchedulesRequest$Outbound = {
    account_id: string;
    filter?: string | undefined;
    page_size?: number | undefined;
    page_token?: string | undefined;
};
/** @internal */
export declare const WireWithdrawalSchedulesListWireWithdrawalSchedulesRequest$outboundSchema: z.ZodType<WireWithdrawalSchedulesListWireWithdrawalSchedulesRequest$Outbound, z.ZodTypeDef, WireWithdrawalSchedulesListWireWithdrawalSchedulesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalSchedulesListWireWithdrawalSchedulesRequest$ {
    /** @deprecated use `WireWithdrawalSchedulesListWireWithdrawalSchedulesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalSchedulesListWireWithdrawalSchedulesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalSchedulesListWireWithdrawalSchedulesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalSchedulesListWireWithdrawalSchedulesRequest$Outbound, z.ZodTypeDef, WireWithdrawalSchedulesListWireWithdrawalSchedulesRequest>;
    /** @deprecated use `WireWithdrawalSchedulesListWireWithdrawalSchedulesRequest$Outbound` instead. */
    type Outbound = WireWithdrawalSchedulesListWireWithdrawalSchedulesRequest$Outbound;
}
export declare function wireWithdrawalSchedulesListWireWithdrawalSchedulesRequestToJSON(wireWithdrawalSchedulesListWireWithdrawalSchedulesRequest: WireWithdrawalSchedulesListWireWithdrawalSchedulesRequest): string;
export declare function wireWithdrawalSchedulesListWireWithdrawalSchedulesRequestFromJSON(jsonString: string): SafeParseResult<WireWithdrawalSchedulesListWireWithdrawalSchedulesRequest, SDKValidationError>;
/** @internal */
export declare const WireWithdrawalSchedulesListWireWithdrawalSchedulesResponse$inboundSchema: z.ZodType<WireWithdrawalSchedulesListWireWithdrawalSchedulesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalSchedulesListWireWithdrawalSchedulesResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    ListWireWithdrawalSchedulesResponse?: components.ListWireWithdrawalSchedulesResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const WireWithdrawalSchedulesListWireWithdrawalSchedulesResponse$outboundSchema: z.ZodType<WireWithdrawalSchedulesListWireWithdrawalSchedulesResponse$Outbound, z.ZodTypeDef, WireWithdrawalSchedulesListWireWithdrawalSchedulesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalSchedulesListWireWithdrawalSchedulesResponse$ {
    /** @deprecated use `WireWithdrawalSchedulesListWireWithdrawalSchedulesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalSchedulesListWireWithdrawalSchedulesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalSchedulesListWireWithdrawalSchedulesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalSchedulesListWireWithdrawalSchedulesResponse$Outbound, z.ZodTypeDef, WireWithdrawalSchedulesListWireWithdrawalSchedulesResponse>;
    /** @deprecated use `WireWithdrawalSchedulesListWireWithdrawalSchedulesResponse$Outbound` instead. */
    type Outbound = WireWithdrawalSchedulesListWireWithdrawalSchedulesResponse$Outbound;
}
export declare function wireWithdrawalSchedulesListWireWithdrawalSchedulesResponseToJSON(wireWithdrawalSchedulesListWireWithdrawalSchedulesResponse: WireWithdrawalSchedulesListWireWithdrawalSchedulesResponse): string;
export declare function wireWithdrawalSchedulesListWireWithdrawalSchedulesResponseFromJSON(jsonString: string): SafeParseResult<WireWithdrawalSchedulesListWireWithdrawalSchedulesResponse, SDKValidationError>;
//# sourceMappingURL=wirewithdrawalscheduleslistwirewithdrawalschedules.d.ts.map