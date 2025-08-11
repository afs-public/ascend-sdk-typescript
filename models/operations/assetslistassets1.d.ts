import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
export type AssetsListAssets1Request = {
    /**
     * The parent resource name, which is the correspondent ID.
     */
    parent?: string | undefined;
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
export type AssetsListAssets1Response = {
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
export declare const AssetsListAssets1Request$inboundSchema: z.ZodType<AssetsListAssets1Request, z.ZodTypeDef, unknown>;
/** @internal */
export type AssetsListAssets1Request$Outbound = {
    parent?: string | undefined;
    page_size?: number | undefined;
    page_token?: string | undefined;
    filter?: string | undefined;
};
/** @internal */
export declare const AssetsListAssets1Request$outboundSchema: z.ZodType<AssetsListAssets1Request$Outbound, z.ZodTypeDef, AssetsListAssets1Request>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AssetsListAssets1Request$ {
    /** @deprecated use `AssetsListAssets1Request$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AssetsListAssets1Request, z.ZodTypeDef, unknown>;
    /** @deprecated use `AssetsListAssets1Request$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AssetsListAssets1Request$Outbound, z.ZodTypeDef, AssetsListAssets1Request>;
    /** @deprecated use `AssetsListAssets1Request$Outbound` instead. */
    type Outbound = AssetsListAssets1Request$Outbound;
}
export declare function assetsListAssets1RequestToJSON(assetsListAssets1Request: AssetsListAssets1Request): string;
export declare function assetsListAssets1RequestFromJSON(jsonString: string): SafeParseResult<AssetsListAssets1Request, SDKValidationError>;
/** @internal */
export declare const AssetsListAssets1Response$inboundSchema: z.ZodType<AssetsListAssets1Response, z.ZodTypeDef, unknown>;
/** @internal */
export type AssetsListAssets1Response$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    ListAssetsResponse?: components.ListAssetsResponse$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AssetsListAssets1Response$outboundSchema: z.ZodType<AssetsListAssets1Response$Outbound, z.ZodTypeDef, AssetsListAssets1Response>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AssetsListAssets1Response$ {
    /** @deprecated use `AssetsListAssets1Response$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AssetsListAssets1Response, z.ZodTypeDef, unknown>;
    /** @deprecated use `AssetsListAssets1Response$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AssetsListAssets1Response$Outbound, z.ZodTypeDef, AssetsListAssets1Response>;
    /** @deprecated use `AssetsListAssets1Response$Outbound` instead. */
    type Outbound = AssetsListAssets1Response$Outbound;
}
export declare function assetsListAssets1ResponseToJSON(assetsListAssets1Response: AssetsListAssets1Response): string;
export declare function assetsListAssets1ResponseFromJSON(jsonString: string): SafeParseResult<AssetsListAssets1Response, SDKValidationError>;
//# sourceMappingURL=assetslistassets1.d.ts.map