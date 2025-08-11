import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AssetsListAssetsCorrespondentRequest = {
    /**
     * The correspondent id.
     */
    correspondentId: string;
    /**
     * The maximum number of assets to return. The service may return fewer than this value. Default is 100 (subject to change) The maximum is 1000, values exceeding this will be set to 1000 (subject to change)
     */
    pageSize?: number | undefined;
    /**
     * A page token, received from a previous `ListAssets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAssets` must match the call that provided the page token in order to maintain a stable result set.
     */
    pageToken?: string | undefined;
    /**
     * A CEL string to filter results; See the [CEL Search](https://developer.apexclearing.com/apex-fintech-solutions/docs/cel-search) page in Guides for more information;
     */
    filter?: string | undefined;
};
export type AssetsListAssetsCorrespondentResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    listAssetsResponse?: components.ListAssetsResponse | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AssetsListAssetsCorrespondentRequest$inboundSchema: z.ZodType<AssetsListAssetsCorrespondentRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AssetsListAssetsCorrespondentRequest$Outbound = {
    correspondent_id: string;
    page_size?: number | undefined;
    page_token?: string | undefined;
    filter?: string | undefined;
};
/** @internal */
export declare const AssetsListAssetsCorrespondentRequest$outboundSchema: z.ZodType<AssetsListAssetsCorrespondentRequest$Outbound, z.ZodTypeDef, AssetsListAssetsCorrespondentRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AssetsListAssetsCorrespondentRequest$ {
    /** @deprecated use `AssetsListAssetsCorrespondentRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AssetsListAssetsCorrespondentRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AssetsListAssetsCorrespondentRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AssetsListAssetsCorrespondentRequest$Outbound, z.ZodTypeDef, AssetsListAssetsCorrespondentRequest>;
    /** @deprecated use `AssetsListAssetsCorrespondentRequest$Outbound` instead. */
    type Outbound = AssetsListAssetsCorrespondentRequest$Outbound;
}
export declare function assetsListAssetsCorrespondentRequestToJSON(assetsListAssetsCorrespondentRequest: AssetsListAssetsCorrespondentRequest): string;
export declare function assetsListAssetsCorrespondentRequestFromJSON(jsonString: string): SafeParseResult<AssetsListAssetsCorrespondentRequest, SDKValidationError>;
/** @internal */
export declare const AssetsListAssetsCorrespondentResponse$inboundSchema: z.ZodType<AssetsListAssetsCorrespondentResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AssetsListAssetsCorrespondentResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    ListAssetsResponse?: components.ListAssetsResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AssetsListAssetsCorrespondentResponse$outboundSchema: z.ZodType<AssetsListAssetsCorrespondentResponse$Outbound, z.ZodTypeDef, AssetsListAssetsCorrespondentResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AssetsListAssetsCorrespondentResponse$ {
    /** @deprecated use `AssetsListAssetsCorrespondentResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AssetsListAssetsCorrespondentResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AssetsListAssetsCorrespondentResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AssetsListAssetsCorrespondentResponse$Outbound, z.ZodTypeDef, AssetsListAssetsCorrespondentResponse>;
    /** @deprecated use `AssetsListAssetsCorrespondentResponse$Outbound` instead. */
    type Outbound = AssetsListAssetsCorrespondentResponse$Outbound;
}
export declare function assetsListAssetsCorrespondentResponseToJSON(assetsListAssetsCorrespondentResponse: AssetsListAssetsCorrespondentResponse): string;
export declare function assetsListAssetsCorrespondentResponseFromJSON(jsonString: string): SafeParseResult<AssetsListAssetsCorrespondentResponse, SDKValidationError>;
//# sourceMappingURL=assetslistassetscorrespondent.d.ts.map