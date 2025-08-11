import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AchDepositSchedulesListAchDepositSchedulesRequest = {
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
export type AchDepositSchedulesListAchDepositSchedulesResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    listAchDepositSchedulesResponse?: components.ListAchDepositSchedulesResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request has an invalid argument.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AchDepositSchedulesListAchDepositSchedulesRequest$inboundSchema: z.ZodType<AchDepositSchedulesListAchDepositSchedulesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AchDepositSchedulesListAchDepositSchedulesRequest$Outbound = {
    account_id: string;
    filter?: string | undefined;
    page_size?: number | undefined;
    page_token?: string | undefined;
};
/** @internal */
export declare const AchDepositSchedulesListAchDepositSchedulesRequest$outboundSchema: z.ZodType<AchDepositSchedulesListAchDepositSchedulesRequest$Outbound, z.ZodTypeDef, AchDepositSchedulesListAchDepositSchedulesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositSchedulesListAchDepositSchedulesRequest$ {
    /** @deprecated use `AchDepositSchedulesListAchDepositSchedulesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositSchedulesListAchDepositSchedulesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositSchedulesListAchDepositSchedulesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositSchedulesListAchDepositSchedulesRequest$Outbound, z.ZodTypeDef, AchDepositSchedulesListAchDepositSchedulesRequest>;
    /** @deprecated use `AchDepositSchedulesListAchDepositSchedulesRequest$Outbound` instead. */
    type Outbound = AchDepositSchedulesListAchDepositSchedulesRequest$Outbound;
}
export declare function achDepositSchedulesListAchDepositSchedulesRequestToJSON(achDepositSchedulesListAchDepositSchedulesRequest: AchDepositSchedulesListAchDepositSchedulesRequest): string;
export declare function achDepositSchedulesListAchDepositSchedulesRequestFromJSON(jsonString: string): SafeParseResult<AchDepositSchedulesListAchDepositSchedulesRequest, SDKValidationError>;
/** @internal */
export declare const AchDepositSchedulesListAchDepositSchedulesResponse$inboundSchema: z.ZodType<AchDepositSchedulesListAchDepositSchedulesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AchDepositSchedulesListAchDepositSchedulesResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    ListAchDepositSchedulesResponse?: components.ListAchDepositSchedulesResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AchDepositSchedulesListAchDepositSchedulesResponse$outboundSchema: z.ZodType<AchDepositSchedulesListAchDepositSchedulesResponse$Outbound, z.ZodTypeDef, AchDepositSchedulesListAchDepositSchedulesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositSchedulesListAchDepositSchedulesResponse$ {
    /** @deprecated use `AchDepositSchedulesListAchDepositSchedulesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositSchedulesListAchDepositSchedulesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositSchedulesListAchDepositSchedulesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositSchedulesListAchDepositSchedulesResponse$Outbound, z.ZodTypeDef, AchDepositSchedulesListAchDepositSchedulesResponse>;
    /** @deprecated use `AchDepositSchedulesListAchDepositSchedulesResponse$Outbound` instead. */
    type Outbound = AchDepositSchedulesListAchDepositSchedulesResponse$Outbound;
}
export declare function achDepositSchedulesListAchDepositSchedulesResponseToJSON(achDepositSchedulesListAchDepositSchedulesResponse: AchDepositSchedulesListAchDepositSchedulesResponse): string;
export declare function achDepositSchedulesListAchDepositSchedulesResponseFromJSON(jsonString: string): SafeParseResult<AchDepositSchedulesListAchDepositSchedulesResponse, SDKValidationError>;
//# sourceMappingURL=achdepositscheduleslistachdepositschedules.d.ts.map