import * as z from "zod";
/**
 * Negative News detail.
 */
export type NegativeNewsCreate = {
    /**
     * Indicates whether there is negative news against related parties
     */
    negativeNewsAgainstRelatedParties: boolean;
    /**
     * Description of the negative news against related parties
     */
    negativeNewsAgainstRelatedPartiesDescription?: string | undefined;
};
/** @internal */
export declare const NegativeNewsCreate$inboundSchema: z.ZodType<NegativeNewsCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type NegativeNewsCreate$Outbound = {
    negative_news_against_related_parties: boolean;
    negative_news_against_related_parties_description?: string | undefined;
};
/** @internal */
export declare const NegativeNewsCreate$outboundSchema: z.ZodType<NegativeNewsCreate$Outbound, z.ZodTypeDef, NegativeNewsCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace NegativeNewsCreate$ {
    /** @deprecated use `NegativeNewsCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<NegativeNewsCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `NegativeNewsCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<NegativeNewsCreate$Outbound, z.ZodTypeDef, NegativeNewsCreate>;
    /** @deprecated use `NegativeNewsCreate$Outbound` instead. */
    type Outbound = NegativeNewsCreate$Outbound;
}
//# sourceMappingURL=negativenewscreate.d.ts.map