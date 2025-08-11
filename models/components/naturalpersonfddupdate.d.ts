import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { CustomerReferralSourceUpdate, CustomerReferralSourceUpdate$Outbound } from "./customerreferralsourceupdate.js";
import { NegativeNewsUpdate, NegativeNewsUpdate$Outbound } from "./negativenewsupdate.js";
import { OtherSourcesOfWealthUpdate, OtherSourcesOfWealthUpdate$Outbound } from "./othersourcesofwealthupdate.js";
/**
 * Foreign Due Diligence for Legal Natural Persons required when a Legal Natural Person is the Primary Owner on a non-resident/non-citizen Account.
 */
export type NaturalPersonFddUpdate = {
    /**
     * Customer Non-referral Source
     */
    customerNonReferralSource?: string | undefined;
    /**
     * Customer Referral Source
     */
    customerReferralSource?: CustomerReferralSourceUpdate | undefined;
    /**
     * The description of the applicant's source of wealth
     */
    employmentAndEmployerDescription?: string | undefined;
    /**
     * Negative News detail.
     */
    negativeNews?: NegativeNewsUpdate | undefined;
    /**
     * Applicant's other source of wealth
     */
    otherSourcesOfWealth?: OtherSourcesOfWealthUpdate | undefined;
};
/** @internal */
export declare const NaturalPersonFddUpdate$inboundSchema: z.ZodType<NaturalPersonFddUpdate, z.ZodTypeDef, unknown>;
/** @internal */
export type NaturalPersonFddUpdate$Outbound = {
    customer_non_referral_source?: string | undefined;
    customer_referral_source?: CustomerReferralSourceUpdate$Outbound | undefined;
    employment_and_employer_description?: string | undefined;
    negative_news?: NegativeNewsUpdate$Outbound | undefined;
    other_sources_of_wealth?: OtherSourcesOfWealthUpdate$Outbound | undefined;
};
/** @internal */
export declare const NaturalPersonFddUpdate$outboundSchema: z.ZodType<NaturalPersonFddUpdate$Outbound, z.ZodTypeDef, NaturalPersonFddUpdate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace NaturalPersonFddUpdate$ {
    /** @deprecated use `NaturalPersonFddUpdate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<NaturalPersonFddUpdate, z.ZodTypeDef, unknown>;
    /** @deprecated use `NaturalPersonFddUpdate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<NaturalPersonFddUpdate$Outbound, z.ZodTypeDef, NaturalPersonFddUpdate>;
    /** @deprecated use `NaturalPersonFddUpdate$Outbound` instead. */
    type Outbound = NaturalPersonFddUpdate$Outbound;
}
export declare function naturalPersonFddUpdateToJSON(naturalPersonFddUpdate: NaturalPersonFddUpdate): string;
export declare function naturalPersonFddUpdateFromJSON(jsonString: string): SafeParseResult<NaturalPersonFddUpdate, SDKValidationError>;
//# sourceMappingURL=naturalpersonfddupdate.d.ts.map