import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * An object representing a short code, which is a phone number that is typically much shorter than regular phone numbers and can be used to address messages in MMS and SMS systems, as well as for abbreviated dialing (e.g. "Text 611 to see how many minutes you have remaining on your plan.").
 *
 * @remarks
 *
 *  Short codes are restricted to a region and are not internationally dialable, which means the same short code can exist in different regions, with different usage and pricing, even if those regions share the same country calling code (e.g. US and CA).
 */
export type PhoneNumberShortCodeCreate = {
    /**
     * Required. The short code digits, without a leading plus ('+') or country calling code, e.g. "611".
     */
    number?: string | undefined;
    /**
     * Required. The BCP-47 region code of the location where calls to this short code can be made, such as "US" and "BB".
     *
     * @remarks
     *
     *  Reference(s):
     *  - http://www.unicode.org/reports/tr35/#unicode_region_subtag
     */
    regionCode?: string | undefined;
};
/** @internal */
export declare const PhoneNumberShortCodeCreate$inboundSchema: z.ZodType<PhoneNumberShortCodeCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type PhoneNumberShortCodeCreate$Outbound = {
    number?: string | undefined;
    region_code?: string | undefined;
};
/** @internal */
export declare const PhoneNumberShortCodeCreate$outboundSchema: z.ZodType<PhoneNumberShortCodeCreate$Outbound, z.ZodTypeDef, PhoneNumberShortCodeCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PhoneNumberShortCodeCreate$ {
    /** @deprecated use `PhoneNumberShortCodeCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PhoneNumberShortCodeCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `PhoneNumberShortCodeCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PhoneNumberShortCodeCreate$Outbound, z.ZodTypeDef, PhoneNumberShortCodeCreate>;
    /** @deprecated use `PhoneNumberShortCodeCreate$Outbound` instead. */
    type Outbound = PhoneNumberShortCodeCreate$Outbound;
}
export declare function phoneNumberShortCodeCreateToJSON(phoneNumberShortCodeCreate: PhoneNumberShortCodeCreate): string;
export declare function phoneNumberShortCodeCreateFromJSON(jsonString: string): SafeParseResult<PhoneNumberShortCodeCreate, SDKValidationError>;
//# sourceMappingURL=phonenumbershortcodecreate.d.ts.map