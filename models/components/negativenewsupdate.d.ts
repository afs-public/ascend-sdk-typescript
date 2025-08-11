import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Negative News detail.
 */
export type NegativeNewsUpdate = {
    /**
     * Indicates whether there is negative news against related parties
     */
    negativeNewsAgainstRelatedParties?: boolean | undefined;
    /**
     * Description of the negative news against related parties
     */
    negativeNewsAgainstRelatedPartiesDescription?: string | undefined;
};
/** @internal */
export declare const NegativeNewsUpdate$inboundSchema: z.ZodType<NegativeNewsUpdate, z.ZodTypeDef, unknown>;
/** @internal */
export type NegativeNewsUpdate$Outbound = {
    negative_news_against_related_parties?: boolean | undefined;
    negative_news_against_related_parties_description?: string | undefined;
};
/** @internal */
export declare const NegativeNewsUpdate$outboundSchema: z.ZodType<NegativeNewsUpdate$Outbound, z.ZodTypeDef, NegativeNewsUpdate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace NegativeNewsUpdate$ {
    /** @deprecated use `NegativeNewsUpdate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<NegativeNewsUpdate, z.ZodTypeDef, unknown>;
    /** @deprecated use `NegativeNewsUpdate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<NegativeNewsUpdate$Outbound, z.ZodTypeDef, NegativeNewsUpdate>;
    /** @deprecated use `NegativeNewsUpdate$Outbound` instead. */
    type Outbound = NegativeNewsUpdate$Outbound;
}
export declare function negativeNewsUpdateToJSON(negativeNewsUpdate: NegativeNewsUpdate): string;
export declare function negativeNewsUpdateFromJSON(jsonString: string): SafeParseResult<NegativeNewsUpdate, SDKValidationError>;
//# sourceMappingURL=negativenewsupdate.d.ts.map