import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { CustomerReferralSourceCreate, CustomerReferralSourceCreate$Outbound } from "./customerreferralsourcecreate.js";
import { NegativeNewsCreate, NegativeNewsCreate$Outbound } from "./negativenewscreate.js";
import { OtherSourcesOfWealthCreate, OtherSourcesOfWealthCreate$Outbound } from "./othersourcesofwealthcreate.js";
/**
 * Foreign Due Diligence for Legal Natural Persons required when a Legal Natural Person is the Primary Owner on a non-resident/non-citizen Account.
 */
export type NaturalPersonFddCreate = {
    /**
     * Customer Non-referral Source
     */
    customerNonReferralSource?: string | undefined;
    /**
     * Customer Referral Source
     */
    customerReferralSource?: CustomerReferralSourceCreate | undefined;
    /**
     * The description of the applicant's source of wealth
     */
    employmentAndEmployerDescription: string;
    /**
     * Negative News detail.
     */
    negativeNews: NegativeNewsCreate;
    /**
     * Applicant's other source of wealth
     */
    otherSourcesOfWealth: OtherSourcesOfWealthCreate;
};
/** @internal */
export declare const NaturalPersonFddCreate$inboundSchema: z.ZodType<NaturalPersonFddCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type NaturalPersonFddCreate$Outbound = {
    customer_non_referral_source?: string | undefined;
    customer_referral_source?: CustomerReferralSourceCreate$Outbound | undefined;
    employment_and_employer_description: string;
    negative_news: NegativeNewsCreate$Outbound;
    other_sources_of_wealth: OtherSourcesOfWealthCreate$Outbound;
};
/** @internal */
export declare const NaturalPersonFddCreate$outboundSchema: z.ZodType<NaturalPersonFddCreate$Outbound, z.ZodTypeDef, NaturalPersonFddCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace NaturalPersonFddCreate$ {
    /** @deprecated use `NaturalPersonFddCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<NaturalPersonFddCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `NaturalPersonFddCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<NaturalPersonFddCreate$Outbound, z.ZodTypeDef, NaturalPersonFddCreate>;
    /** @deprecated use `NaturalPersonFddCreate$Outbound` instead. */
    type Outbound = NaturalPersonFddCreate$Outbound;
}
export declare function naturalPersonFddCreateToJSON(naturalPersonFddCreate: NaturalPersonFddCreate): string;
export declare function naturalPersonFddCreateFromJSON(jsonString: string): SafeParseResult<NaturalPersonFddCreate, SDKValidationError>;
//# sourceMappingURL=naturalpersonfddcreate.d.ts.map