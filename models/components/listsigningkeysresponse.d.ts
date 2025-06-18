import * as z from "zod";
/**
 * A response to a list signing keys method
 */
export type ListSigningKeysResponse = {
    /**
     * The returned collection of all currently valid signing keys
     */
    keys?: Array<{
        [k: string]: any;
    }> | undefined;
    /**
     * Page token used for pagination; Supplying a page token returns the next page of results
     */
    nextPageToken?: string | undefined;
};
/** @internal */
export declare const ListSigningKeysResponse$inboundSchema: z.ZodType<ListSigningKeysResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListSigningKeysResponse$Outbound = {
    keys?: Array<{
        [k: string]: any;
    }> | undefined;
    next_page_token?: string | undefined;
};
/** @internal */
export declare const ListSigningKeysResponse$outboundSchema: z.ZodType<ListSigningKeysResponse$Outbound, z.ZodTypeDef, ListSigningKeysResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListSigningKeysResponse$ {
    /** @deprecated use `ListSigningKeysResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListSigningKeysResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListSigningKeysResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListSigningKeysResponse$Outbound, z.ZodTypeDef, ListSigningKeysResponse>;
    /** @deprecated use `ListSigningKeysResponse$Outbound` instead. */
    type Outbound = ListSigningKeysResponse$Outbound;
}
//# sourceMappingURL=listsigningkeysresponse.d.ts.map