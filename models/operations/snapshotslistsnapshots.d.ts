import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type SnapshotsListSnapshotsRequest = {
    /**
     * A CEL string to filter snapshot results; See the [CEL Search](https://developer.apexclearing.com/apex-fintech-solutions/docs/cel-search) page in Guides for more information;
     */
    filter?: string | undefined;
    /**
     * The number of snapshots to be returned per page. Defaults to 500. Maximum is 1000.
     */
    pageSize?: number | undefined;
    /**
     * The token for retrieving the next page of snapshots, the value of which will have been returned in a previous response.
     */
    pageToken?: string | undefined;
};
export type SnapshotsListSnapshotsResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    listSnapshotsResponse?: components.ListSnapshotsResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request is invalid.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const SnapshotsListSnapshotsRequest$inboundSchema: z.ZodType<SnapshotsListSnapshotsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type SnapshotsListSnapshotsRequest$Outbound = {
    filter?: string | undefined;
    page_size?: number | undefined;
    page_token?: string | undefined;
};
/** @internal */
export declare const SnapshotsListSnapshotsRequest$outboundSchema: z.ZodType<SnapshotsListSnapshotsRequest$Outbound, z.ZodTypeDef, SnapshotsListSnapshotsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SnapshotsListSnapshotsRequest$ {
    /** @deprecated use `SnapshotsListSnapshotsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SnapshotsListSnapshotsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `SnapshotsListSnapshotsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SnapshotsListSnapshotsRequest$Outbound, z.ZodTypeDef, SnapshotsListSnapshotsRequest>;
    /** @deprecated use `SnapshotsListSnapshotsRequest$Outbound` instead. */
    type Outbound = SnapshotsListSnapshotsRequest$Outbound;
}
export declare function snapshotsListSnapshotsRequestToJSON(snapshotsListSnapshotsRequest: SnapshotsListSnapshotsRequest): string;
export declare function snapshotsListSnapshotsRequestFromJSON(jsonString: string): SafeParseResult<SnapshotsListSnapshotsRequest, SDKValidationError>;
/** @internal */
export declare const SnapshotsListSnapshotsResponse$inboundSchema: z.ZodType<SnapshotsListSnapshotsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type SnapshotsListSnapshotsResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    ListSnapshotsResponse?: components.ListSnapshotsResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const SnapshotsListSnapshotsResponse$outboundSchema: z.ZodType<SnapshotsListSnapshotsResponse$Outbound, z.ZodTypeDef, SnapshotsListSnapshotsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SnapshotsListSnapshotsResponse$ {
    /** @deprecated use `SnapshotsListSnapshotsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SnapshotsListSnapshotsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `SnapshotsListSnapshotsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SnapshotsListSnapshotsResponse$Outbound, z.ZodTypeDef, SnapshotsListSnapshotsResponse>;
    /** @deprecated use `SnapshotsListSnapshotsResponse$Outbound` instead. */
    type Outbound = SnapshotsListSnapshotsResponse$Outbound;
}
export declare function snapshotsListSnapshotsResponseToJSON(snapshotsListSnapshotsResponse: SnapshotsListSnapshotsResponse): string;
export declare function snapshotsListSnapshotsResponseFromJSON(jsonString: string): SafeParseResult<SnapshotsListSnapshotsResponse, SDKValidationError>;
//# sourceMappingURL=snapshotslistsnapshots.d.ts.map