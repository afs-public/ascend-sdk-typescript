import * as z from "zod";
import { PostalAddressCreate, PostalAddressCreate$Outbound } from "./postaladdresscreate.js";
/**
 * Travel rule party
 */
export type TravelRulePartyCreate = {
    /**
     * Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains).
     *
     * @remarks
     *
     *  In typical usage an address would be created via user input or from importing existing data, depending on the type of process.
     *
     *  Advice on address input / editing: - Use an i18n-ready address widget such as  https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of  fields outside countries where that field is used.
     *
     *  For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478
     */
    address: PostalAddressCreate;
    /**
     * The last name of the party
     */
    familyName: string;
    /**
     * The first name of the party as well as any non-primary given names (e.g. middle names)
     */
    givenNames: Array<string>;
};
/** @internal */
export declare const TravelRulePartyCreate$inboundSchema: z.ZodType<TravelRulePartyCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type TravelRulePartyCreate$Outbound = {
    address: PostalAddressCreate$Outbound;
    family_name: string;
    given_names: Array<string>;
};
/** @internal */
export declare const TravelRulePartyCreate$outboundSchema: z.ZodType<TravelRulePartyCreate$Outbound, z.ZodTypeDef, TravelRulePartyCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TravelRulePartyCreate$ {
    /** @deprecated use `TravelRulePartyCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TravelRulePartyCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `TravelRulePartyCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TravelRulePartyCreate$Outbound, z.ZodTypeDef, TravelRulePartyCreate>;
    /** @deprecated use `TravelRulePartyCreate$Outbound` instead. */
    type Outbound = TravelRulePartyCreate$Outbound;
}
//# sourceMappingURL=travelrulepartycreate.d.ts.map