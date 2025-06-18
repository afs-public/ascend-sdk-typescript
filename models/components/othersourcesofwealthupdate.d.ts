import * as z from "zod";
/**
 * Applicant's other source of wealth
 */
export type OtherSourcesOfWealthUpdate = {
    /**
     * Indicates whether the applicant has other sources of wealth.
     */
    applicantHasOtherSourcesOfWealth?: boolean | undefined;
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
export declare const OtherSourcesOfWealthUpdate$inboundSchema: z.ZodType<OtherSourcesOfWealthUpdate, z.ZodTypeDef, unknown>;
/** @internal */
export type OtherSourcesOfWealthUpdate$Outbound = {
    applicant_has_other_sources_of_wealth?: boolean | undefined;
    other_sources_of_wealth?: string | undefined;
    other_sources_of_wealth_verification?: string | undefined;
};
/** @internal */
export declare const OtherSourcesOfWealthUpdate$outboundSchema: z.ZodType<OtherSourcesOfWealthUpdate$Outbound, z.ZodTypeDef, OtherSourcesOfWealthUpdate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OtherSourcesOfWealthUpdate$ {
    /** @deprecated use `OtherSourcesOfWealthUpdate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OtherSourcesOfWealthUpdate, z.ZodTypeDef, unknown>;
    /** @deprecated use `OtherSourcesOfWealthUpdate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OtherSourcesOfWealthUpdate$Outbound, z.ZodTypeDef, OtherSourcesOfWealthUpdate>;
    /** @deprecated use `OtherSourcesOfWealthUpdate$Outbound` instead. */
    type Outbound = OtherSourcesOfWealthUpdate$Outbound;
}
//# sourceMappingURL=othersourcesofwealthupdate.d.ts.map