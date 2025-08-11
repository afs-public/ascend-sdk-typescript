import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Agreement, Agreement$Outbound } from "./agreement.js";
/**
 * The response for affirming agreements.
 */
export type AffirmAgreementsResponse = {
    /**
     * The collection of affirmed legal agreements belonging to a given account.
     */
    agreements?: Array<Agreement> | undefined;
};
/** @internal */
export declare const AffirmAgreementsResponse$inboundSchema: z.ZodType<AffirmAgreementsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AffirmAgreementsResponse$Outbound = {
    agreements?: Array<Agreement$Outbound> | undefined;
};
/** @internal */
export declare const AffirmAgreementsResponse$outboundSchema: z.ZodType<AffirmAgreementsResponse$Outbound, z.ZodTypeDef, AffirmAgreementsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AffirmAgreementsResponse$ {
    /** @deprecated use `AffirmAgreementsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AffirmAgreementsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AffirmAgreementsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AffirmAgreementsResponse$Outbound, z.ZodTypeDef, AffirmAgreementsResponse>;
    /** @deprecated use `AffirmAgreementsResponse$Outbound` instead. */
    type Outbound = AffirmAgreementsResponse$Outbound;
}
export declare function affirmAgreementsResponseToJSON(affirmAgreementsResponse: AffirmAgreementsResponse): string;
export declare function affirmAgreementsResponseFromJSON(jsonString: string): SafeParseResult<AffirmAgreementsResponse, SDKValidationError>;
//# sourceMappingURL=affirmagreementsresponse.d.ts.map