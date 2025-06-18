import * as z from "zod";
/**
 * Country detail used for Dow Jones Profile details
 */
export type CountryDetail = {
    /**
     * Dow Jones persons country type
     */
    countryType?: string | undefined;
    /**
     * Two character region code, complies with https://cldr.unicode.org/index Example values: "US", "CA"
     */
    regionCode?: string | undefined;
};
/** @internal */
export declare const CountryDetail$inboundSchema: z.ZodType<CountryDetail, z.ZodTypeDef, unknown>;
/** @internal */
export type CountryDetail$Outbound = {
    country_type?: string | undefined;
    region_code?: string | undefined;
};
/** @internal */
export declare const CountryDetail$outboundSchema: z.ZodType<CountryDetail$Outbound, z.ZodTypeDef, CountryDetail>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CountryDetail$ {
    /** @deprecated use `CountryDetail$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CountryDetail, z.ZodTypeDef, unknown>;
    /** @deprecated use `CountryDetail$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CountryDetail$Outbound, z.ZodTypeDef, CountryDetail>;
    /** @deprecated use `CountryDetail$Outbound` instead. */
    type Outbound = CountryDetail$Outbound;
}
//# sourceMappingURL=countrydetail.d.ts.map