import * as z from "zod";
/**
 * Address detail used for Dow Jones Profile details
 */
export type AddressDetail = {
    /**
     * Dow Jones persons address city
     */
    addressCity?: string | undefined;
    /**
     * Dow Jones persons address line
     */
    addressLine?: string | undefined;
    /**
     * Dow Jones persons address administrative area
     */
    administrativeArea?: string | undefined;
    /**
     * Dow Jones persons address postal code
     */
    postalCode?: string | undefined;
    /**
     * Two character region code, complies with https://cldr.unicode.org/index Example values: "US", "CA"
     */
    regionCode?: string | undefined;
};
/** @internal */
export declare const AddressDetail$inboundSchema: z.ZodType<AddressDetail, z.ZodTypeDef, unknown>;
/** @internal */
export type AddressDetail$Outbound = {
    address_city?: string | undefined;
    address_line?: string | undefined;
    administrative_area?: string | undefined;
    postal_code?: string | undefined;
    region_code?: string | undefined;
};
/** @internal */
export declare const AddressDetail$outboundSchema: z.ZodType<AddressDetail$Outbound, z.ZodTypeDef, AddressDetail>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AddressDetail$ {
    /** @deprecated use `AddressDetail$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AddressDetail, z.ZodTypeDef, unknown>;
    /** @deprecated use `AddressDetail$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AddressDetail$Outbound, z.ZodTypeDef, AddressDetail>;
    /** @deprecated use `AddressDetail$Outbound` instead. */
    type Outbound = AddressDetail$Outbound;
}
//# sourceMappingURL=addressdetail.d.ts.map