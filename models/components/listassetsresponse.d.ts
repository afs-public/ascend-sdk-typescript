import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Asset, Asset$Outbound } from "./asset.js";
/**
 * ListAssetsResponse is the response message for ListAssets method.
 */
export type ListAssetsResponse = {
    /**
     * The assets returned in the response.
     */
    assets?: Array<Asset> | undefined;
    /**
     * The next_page_token value to include in a subsequent ListAssets request to retrieve the next page of results.
     */
    nextPageToken?: string | undefined;
};
/** @internal */
export declare const ListAssetsResponse$inboundSchema: z.ZodType<ListAssetsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAssetsResponse$Outbound = {
    assets?: Array<Asset$Outbound> | undefined;
    next_page_token?: string | undefined;
};
/** @internal */
export declare const ListAssetsResponse$outboundSchema: z.ZodType<ListAssetsResponse$Outbound, z.ZodTypeDef, ListAssetsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListAssetsResponse$ {
    /** @deprecated use `ListAssetsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListAssetsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListAssetsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListAssetsResponse$Outbound, z.ZodTypeDef, ListAssetsResponse>;
    /** @deprecated use `ListAssetsResponse$Outbound` instead. */
    type Outbound = ListAssetsResponse$Outbound;
}
export declare function listAssetsResponseToJSON(listAssetsResponse: ListAssetsResponse): string;
export declare function listAssetsResponseFromJSON(jsonString: string): SafeParseResult<ListAssetsResponse, SDKValidationError>;
//# sourceMappingURL=listassetsresponse.d.ts.map