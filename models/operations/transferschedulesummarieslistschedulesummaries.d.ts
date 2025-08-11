import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type TransferScheduleSummariesListScheduleSummariesRequest = {
    /**
     * A CEL string to filter results; See the [CEL Search](https://developer.apexclearing.com/apex-fintech-solutions/docs/cel-search) page in Guides for more information; Filter options include:
     *
     * @remarks
     *  `account`
     *  `mechanism`
     *  `direction`
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
export type TransferScheduleSummariesListScheduleSummariesResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    listScheduleSummariesResponse?: components.ListScheduleSummariesResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request has an invalid argument.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const TransferScheduleSummariesListScheduleSummariesRequest$inboundSchema: z.ZodType<TransferScheduleSummariesListScheduleSummariesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type TransferScheduleSummariesListScheduleSummariesRequest$Outbound = {
    filter?: string | undefined;
    page_size?: number | undefined;
    page_token?: string | undefined;
};
/** @internal */
export declare const TransferScheduleSummariesListScheduleSummariesRequest$outboundSchema: z.ZodType<TransferScheduleSummariesListScheduleSummariesRequest$Outbound, z.ZodTypeDef, TransferScheduleSummariesListScheduleSummariesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TransferScheduleSummariesListScheduleSummariesRequest$ {
    /** @deprecated use `TransferScheduleSummariesListScheduleSummariesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TransferScheduleSummariesListScheduleSummariesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `TransferScheduleSummariesListScheduleSummariesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TransferScheduleSummariesListScheduleSummariesRequest$Outbound, z.ZodTypeDef, TransferScheduleSummariesListScheduleSummariesRequest>;
    /** @deprecated use `TransferScheduleSummariesListScheduleSummariesRequest$Outbound` instead. */
    type Outbound = TransferScheduleSummariesListScheduleSummariesRequest$Outbound;
}
export declare function transferScheduleSummariesListScheduleSummariesRequestToJSON(transferScheduleSummariesListScheduleSummariesRequest: TransferScheduleSummariesListScheduleSummariesRequest): string;
export declare function transferScheduleSummariesListScheduleSummariesRequestFromJSON(jsonString: string): SafeParseResult<TransferScheduleSummariesListScheduleSummariesRequest, SDKValidationError>;
/** @internal */
export declare const TransferScheduleSummariesListScheduleSummariesResponse$inboundSchema: z.ZodType<TransferScheduleSummariesListScheduleSummariesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type TransferScheduleSummariesListScheduleSummariesResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    ListScheduleSummariesResponse?: components.ListScheduleSummariesResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const TransferScheduleSummariesListScheduleSummariesResponse$outboundSchema: z.ZodType<TransferScheduleSummariesListScheduleSummariesResponse$Outbound, z.ZodTypeDef, TransferScheduleSummariesListScheduleSummariesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TransferScheduleSummariesListScheduleSummariesResponse$ {
    /** @deprecated use `TransferScheduleSummariesListScheduleSummariesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TransferScheduleSummariesListScheduleSummariesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `TransferScheduleSummariesListScheduleSummariesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TransferScheduleSummariesListScheduleSummariesResponse$Outbound, z.ZodTypeDef, TransferScheduleSummariesListScheduleSummariesResponse>;
    /** @deprecated use `TransferScheduleSummariesListScheduleSummariesResponse$Outbound` instead. */
    type Outbound = TransferScheduleSummariesListScheduleSummariesResponse$Outbound;
}
export declare function transferScheduleSummariesListScheduleSummariesResponseToJSON(transferScheduleSummariesListScheduleSummariesResponse: TransferScheduleSummariesListScheduleSummariesResponse): string;
export declare function transferScheduleSummariesListScheduleSummariesResponseFromJSON(jsonString: string): SafeParseResult<TransferScheduleSummariesListScheduleSummariesResponse, SDKValidationError>;
//# sourceMappingURL=transferschedulesummarieslistschedulesummaries.d.ts.map