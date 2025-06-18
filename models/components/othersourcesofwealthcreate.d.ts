import * as z from "zod";
/**
 * Applicant's other source of wealth
 */
export type OtherSourcesOfWealthCreate = {
    /**
     * Indicates whether the applicant has other sources of wealth.
     */
    applicantHasOtherSourcesOfWealth: boolean;
    /**
     * The applicant's other source of wealth description. If the applicant has no other sources of wealth, they must specify "N/A."
     */
    otherSourcesOfWealth?: string | undefined;
    /**
     * The applicant's other source of wealth verification. If the applicant has no other sources of wealth, they must specify "N/A."
     */
    otherSourcesOfWealthVerification?: string | undefined;
};
/** @internal */
export declare const OtherSourcesOfWealthCreate$inboundSchema: z.ZodType<OtherSourcesOfWealthCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type OtherSourcesOfWealthCreate$Outbound = {
    applicant_has_other_sources_of_wealth: boolean;
    other_sources_of_wealth?: string | undefined;
    other_sources_of_wealth_verification?: string | undefined;
};
/** @internal */
export declare const OtherSourcesOfWealthCreate$outboundSchema: z.ZodType<OtherSourcesOfWealthCreate$Outbound, z.ZodTypeDef, OtherSourcesOfWealthCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OtherSourcesOfWealthCreate$ {
    /** @deprecated use `OtherSourcesOfWealthCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OtherSourcesOfWealthCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `OtherSourcesOfWealthCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OtherSourcesOfWealthCreate$Outbound, z.ZodTypeDef, OtherSourcesOfWealthCreate>;
    /** @deprecated use `OtherSourcesOfWealthCreate$Outbound` instead. */
    type Outbound = OtherSourcesOfWealthCreate$Outbound;
}
//# sourceMappingURL=othersourcesofwealthcreate.d.ts.map