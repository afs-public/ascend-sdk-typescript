import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AchWithdrawalSchedulesListAchWithdrawalSchedulesRequest = {
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
export type AchWithdrawalSchedulesListAchWithdrawalSchedulesResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    listAchWithdrawalSchedulesResponse?: components.ListAchWithdrawalSchedulesResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request has an invalid argument.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AchWithdrawalSchedulesListAchWithdrawalSchedulesRequest$inboundSchema: z.ZodType<AchWithdrawalSchedulesListAchWithdrawalSchedulesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalSchedulesListAchWithdrawalSchedulesRequest$Outbound = {
    account_id: string;
    filter?: string | undefined;
    page_size?: number | undefined;
    page_token?: string | undefined;
};
/** @internal */
export declare const AchWithdrawalSchedulesListAchWithdrawalSchedulesRequest$outboundSchema: z.ZodType<AchWithdrawalSchedulesListAchWithdrawalSchedulesRequest$Outbound, z.ZodTypeDef, AchWithdrawalSchedulesListAchWithdrawalSchedulesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalSchedulesListAchWithdrawalSchedulesRequest$ {
    /** @deprecated use `AchWithdrawalSchedulesListAchWithdrawalSchedulesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalSchedulesListAchWithdrawalSchedulesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalSchedulesListAchWithdrawalSchedulesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalSchedulesListAchWithdrawalSchedulesRequest$Outbound, z.ZodTypeDef, AchWithdrawalSchedulesListAchWithdrawalSchedulesRequest>;
    /** @deprecated use `AchWithdrawalSchedulesListAchWithdrawalSchedulesRequest$Outbound` instead. */
    type Outbound = AchWithdrawalSchedulesListAchWithdrawalSchedulesRequest$Outbound;
}
export declare function achWithdrawalSchedulesListAchWithdrawalSchedulesRequestToJSON(achWithdrawalSchedulesListAchWithdrawalSchedulesRequest: AchWithdrawalSchedulesListAchWithdrawalSchedulesRequest): string;
export declare function achWithdrawalSchedulesListAchWithdrawalSchedulesRequestFromJSON(jsonString: string): SafeParseResult<AchWithdrawalSchedulesListAchWithdrawalSchedulesRequest, SDKValidationError>;
/** @internal */
export declare const AchWithdrawalSchedulesListAchWithdrawalSchedulesResponse$inboundSchema: z.ZodType<AchWithdrawalSchedulesListAchWithdrawalSchedulesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalSchedulesListAchWithdrawalSchedulesResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    ListAchWithdrawalSchedulesResponse?: components.ListAchWithdrawalSchedulesResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AchWithdrawalSchedulesListAchWithdrawalSchedulesResponse$outboundSchema: z.ZodType<AchWithdrawalSchedulesListAchWithdrawalSchedulesResponse$Outbound, z.ZodTypeDef, AchWithdrawalSchedulesListAchWithdrawalSchedulesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalSchedulesListAchWithdrawalSchedulesResponse$ {
    /** @deprecated use `AchWithdrawalSchedulesListAchWithdrawalSchedulesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalSchedulesListAchWithdrawalSchedulesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalSchedulesListAchWithdrawalSchedulesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalSchedulesListAchWithdrawalSchedulesResponse$Outbound, z.ZodTypeDef, AchWithdrawalSchedulesListAchWithdrawalSchedulesResponse>;
    /** @deprecated use `AchWithdrawalSchedulesListAchWithdrawalSchedulesResponse$Outbound` instead. */
    type Outbound = AchWithdrawalSchedulesListAchWithdrawalSchedulesResponse$Outbound;
}
export declare function achWithdrawalSchedulesListAchWithdrawalSchedulesResponseToJSON(achWithdrawalSchedulesListAchWithdrawalSchedulesResponse: AchWithdrawalSchedulesListAchWithdrawalSchedulesResponse): string;
export declare function achWithdrawalSchedulesListAchWithdrawalSchedulesResponseFromJSON(jsonString: string): SafeParseResult<AchWithdrawalSchedulesListAchWithdrawalSchedulesResponse, SDKValidationError>;
//# sourceMappingURL=achwithdrawalscheduleslistachwithdrawalschedules.d.ts.map