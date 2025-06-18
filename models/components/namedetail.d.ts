import * as z from "zod";
/**
 * Name detail used for Dow Jones Profile details
 */
export type NameDetail = {
    /**
     * Dow Jones persons first name
     */
    givenName?: string | undefined;
    /**
     * Dow Jones persons middle name
     */
    middleNames?: string | undefined;
    /**
     * Dow Jones persons name suffix
     */
    nameSuffix?: string | undefined;
    /**
     * Dow Jones persons name type
     */
    nameType?: string | undefined;
    /**
     * Dow Jones persons last name
     */
    surname?: string | undefined;
    /**
     * Dow Jones persons title
     */
    titleHonorific?: string | undefined;
};
/** @internal */
export declare const NameDetail$inboundSchema: z.ZodType<NameDetail, z.ZodTypeDef, unknown>;
/** @internal */
export type NameDetail$Outbound = {
    given_name?: string | undefined;
    middle_names?: string | undefined;
    name_suffix?: string | undefined;
    name_type?: string | undefined;
    surname?: string | undefined;
    title_honorific?: string | undefined;
};
/** @internal */
export declare const NameDetail$outboundSchema: z.ZodType<NameDetail$Outbound, z.ZodTypeDef, NameDetail>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace NameDetail$ {
    /** @deprecated use `NameDetail$inboundSchema` instead. */
    const inboundSchema: z.ZodType<NameDetail, z.ZodTypeDef, unknown>;
    /** @deprecated use `NameDetail$outboundSchema` instead. */
    const outboundSchema: z.ZodType<NameDetail$Outbound, z.ZodTypeDef, NameDetail>;
    /** @deprecated use `NameDetail$Outbound` instead. */
    type Outbound = NameDetail$Outbound;
}
//# sourceMappingURL=namedetail.d.ts.map