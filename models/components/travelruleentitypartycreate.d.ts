import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { PostalAddressCreate, PostalAddressCreate$Outbound } from "./postaladdresscreate.js";
/**
 * Travel rule entity party
 */
export type TravelRuleEntityPartyCreate = {
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
     * The tax identification number of the entity
     */
    taxId?: string | undefined;
    /**
     * The name of the entity
     */
    title: string;
};
/** @internal */
export declare const TravelRuleEntityPartyCreate$inboundSchema: z.ZodType<TravelRuleEntityPartyCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type TravelRuleEntityPartyCreate$Outbound = {
    address: PostalAddressCreate$Outbound;
    tax_id?: string | undefined;
    title: string;
};
/** @internal */
export declare const TravelRuleEntityPartyCreate$outboundSchema: z.ZodType<TravelRuleEntityPartyCreate$Outbound, z.ZodTypeDef, TravelRuleEntityPartyCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TravelRuleEntityPartyCreate$ {
    /** @deprecated use `TravelRuleEntityPartyCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TravelRuleEntityPartyCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `TravelRuleEntityPartyCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TravelRuleEntityPartyCreate$Outbound, z.ZodTypeDef, TravelRuleEntityPartyCreate>;
    /** @deprecated use `TravelRuleEntityPartyCreate$Outbound` instead. */
    type Outbound = TravelRuleEntityPartyCreate$Outbound;
}
export declare function travelRuleEntityPartyCreateToJSON(travelRuleEntityPartyCreate: TravelRuleEntityPartyCreate): string;
export declare function travelRuleEntityPartyCreateFromJSON(jsonString: string): SafeParseResult<TravelRuleEntityPartyCreate, SDKValidationError>;
//# sourceMappingURL=travelruleentitypartycreate.d.ts.map