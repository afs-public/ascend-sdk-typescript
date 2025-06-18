import * as z from "zod";
import { PhoneNumberCreate, PhoneNumberCreate$Outbound } from "./phonenumbercreate.js";
import { PostalAddressCreate, PostalAddressCreate$Outbound } from "./postaladdresscreate.js";
/**
 * A Trusted Contact is a person designated to verify the well being of the account holder. Only one form of contact information is required; An account may contain zero, one, or many.
 */
export type TrustedContactCreate = {
    /**
     * An email address indicated for account communications.
     */
    emailAddress?: string | undefined;
    /**
     * Family name of a natural person.
     */
    familyName: string;
    /**
     * The given name of a natural person; Conventionally known as 'first name' in most English-speaking countries.
     */
    givenName: string;
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
    mailingAddress?: PostalAddressCreate | undefined;
    /**
     * Non-primary names representing a natural person; Name attributed to a person other than "Given" and "Family" names.
     */
    middleNames?: string | undefined;
    /**
     * An object representing a phone number, suitable as an API wire format.
     *
     * @remarks
     *
     *  This representation:
     *
     *  - should not be used for locale-specific formatting of a phone number, such  as "+1 (650) 253-0000 ext. 123"
     *
     *  - is not designed for efficient storage - may not be suitable for dialing - specialized libraries (see references)  should be used to parse the number for that purpose
     *
     *  To do something meaningful with this number, such as format it for various use-cases, convert it to an `i18n.phonenumbers.PhoneNumber` object first.
     *
     *  For instance, in Java this would be:
     *
     *   com.google.type.PhoneNumber wireProto =    com.google.type.PhoneNumber.newBuilder().build();  com.google.i18n.phonenumbers.Phonenumber.PhoneNumber phoneNumber =    PhoneNumberUtil.getInstance().parse(wireProto.getE164Number(), "ZZ");  if (!wireProto.getExtension().isEmpty()) {   phoneNumber.setExtension(wireProto.getExtension());  }
     *
     *  Reference(s):
     *   - https://github.com/google/libphonenumber
     */
    phoneNumber?: PhoneNumberCreate | undefined;
};
/** @internal */
export declare const TrustedContactCreate$inboundSchema: z.ZodType<TrustedContactCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type TrustedContactCreate$Outbound = {
    email_address?: string | undefined;
    family_name: string;
    given_name: string;
    mailing_address?: PostalAddressCreate$Outbound | undefined;
    middle_names?: string | undefined;
    phone_number?: PhoneNumberCreate$Outbound | undefined;
};
/** @internal */
export declare const TrustedContactCreate$outboundSchema: z.ZodType<TrustedContactCreate$Outbound, z.ZodTypeDef, TrustedContactCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TrustedContactCreate$ {
    /** @deprecated use `TrustedContactCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TrustedContactCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `TrustedContactCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TrustedContactCreate$Outbound, z.ZodTypeDef, TrustedContactCreate>;
    /** @deprecated use `TrustedContactCreate$Outbound` instead. */
    type Outbound = TrustedContactCreate$Outbound;
}
//# sourceMappingURL=trustedcontactcreate.d.ts.map