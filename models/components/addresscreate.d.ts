import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The data structure containing attributes describing the location of an underlying entity.
 */
export type AddressCreate = {
    /**
     * Required: Describes the city in which the entity is located.
     */
    city?: string | undefined;
    /**
     * Required: The country code used for geolocation, identity verification, and/or mail delivery purposes.
     */
    country?: string | undefined;
    /**
     * Required: The postal code used for geolocation, identity verification, and/or mail delivery purposes.
     */
    postalCode?: string | undefined;
    /**
     * Required: The state code used for geolocation, identity verification, and/or mail delivery purposes.
     */
    state?: string | undefined;
    /**
     * The street name and number relating to a party's legal or mailing address.
     */
    streetAddress?: Array<string> | undefined;
};
/** @internal */
export declare const AddressCreate$inboundSchema: z.ZodType<AddressCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type AddressCreate$Outbound = {
    city?: string | undefined;
    country?: string | undefined;
    postal_code?: string | undefined;
    state?: string | undefined;
    streetAddress?: Array<string> | undefined;
};
/** @internal */
export declare const AddressCreate$outboundSchema: z.ZodType<AddressCreate$Outbound, z.ZodTypeDef, AddressCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AddressCreate$ {
    /** @deprecated use `AddressCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AddressCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `AddressCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AddressCreate$Outbound, z.ZodTypeDef, AddressCreate>;
    /** @deprecated use `AddressCreate$Outbound` instead. */
    type Outbound = AddressCreate$Outbound;
}
export declare function addressCreateToJSON(addressCreate: AddressCreate): string;
export declare function addressCreateFromJSON(jsonString: string): SafeParseResult<AddressCreate, SDKValidationError>;
//# sourceMappingURL=addresscreate.d.ts.map