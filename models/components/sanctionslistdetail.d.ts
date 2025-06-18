import * as z from "zod";
/**
 * Sanctions list detail used for Dow Jones Profile details
 */
export type SanctionsListDetail = {
    /**
     * Dow Jones day persons will be taken off sanctions list
     */
    endDay?: string | undefined;
    /**
     * Dow Jones month persons will be taken off sanctions list
     */
    endMonth?: string | undefined;
    /**
     * Dow Jones year persons will be taken off sanctions list
     */
    endYear?: string | undefined;
    /**
     * Dow Jones persons sanctions ref id
     */
    sanctionsReferenceDescription?: string | undefined;
    /**
     * Dow Jones day persons were added to the sanctions list
     */
    startDay?: string | undefined;
    /**
     * Dow Jones month persons were added to the sanctions list
     */
    startMonth?: string | undefined;
    /**
     * Dow Jones year persons were added to the sanctions list
     */
    startYear?: string | undefined;
};
/** @internal */
export declare const SanctionsListDetail$inboundSchema: z.ZodType<SanctionsListDetail, z.ZodTypeDef, unknown>;
/** @internal */
export type SanctionsListDetail$Outbound = {
    end_day?: string | undefined;
    end_month?: string | undefined;
    end_year?: string | undefined;
    sanctions_reference_description?: string | undefined;
    start_day?: string | undefined;
    start_month?: string | undefined;
    start_year?: string | undefined;
};
/** @internal */
export declare const SanctionsListDetail$outboundSchema: z.ZodType<SanctionsListDetail$Outbound, z.ZodTypeDef, SanctionsListDetail>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SanctionsListDetail$ {
    /** @deprecated use `SanctionsListDetail$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SanctionsListDetail, z.ZodTypeDef, unknown>;
    /** @deprecated use `SanctionsListDetail$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SanctionsListDetail$Outbound, z.ZodTypeDef, SanctionsListDetail>;
    /** @deprecated use `SanctionsListDetail$Outbound` instead. */
    type Outbound = SanctionsListDetail$Outbound;
}
//# sourceMappingURL=sanctionslistdetail.d.ts.map