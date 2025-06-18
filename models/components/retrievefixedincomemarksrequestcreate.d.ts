import * as z from "zod";
import { RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreate, RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreate$Outbound } from "./retrievefixedincomemarksrequestsecurityidentifierscreate.js";
/**
 * Request object for retrieving fixed income marks
 */
export type RetrieveFixedIncomeMarksRequestCreate = {
    /**
     * The parent resource where this price will be sourced under. Format: correspondents/{correspondent_id}
     */
    parent: string;
    /**
     * Identifiers specifying for which assets mark data should be returned. A maximum of 100 identifiers are allowed. At least one identifier must be provided in the request.
     */
    securityIdentifiers: Array<RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreate>;
};
/** @internal */
export declare const RetrieveFixedIncomeMarksRequestCreate$inboundSchema: z.ZodType<RetrieveFixedIncomeMarksRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type RetrieveFixedIncomeMarksRequestCreate$Outbound = {
    parent: string;
    security_identifiers: Array<RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreate$Outbound>;
};
/** @internal */
export declare const RetrieveFixedIncomeMarksRequestCreate$outboundSchema: z.ZodType<RetrieveFixedIncomeMarksRequestCreate$Outbound, z.ZodTypeDef, RetrieveFixedIncomeMarksRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RetrieveFixedIncomeMarksRequestCreate$ {
    /** @deprecated use `RetrieveFixedIncomeMarksRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RetrieveFixedIncomeMarksRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `RetrieveFixedIncomeMarksRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RetrieveFixedIncomeMarksRequestCreate$Outbound, z.ZodTypeDef, RetrieveFixedIncomeMarksRequestCreate>;
    /** @deprecated use `RetrieveFixedIncomeMarksRequestCreate$Outbound` instead. */
    type Outbound = RetrieveFixedIncomeMarksRequestCreate$Outbound;
}
//# sourceMappingURL=retrievefixedincomemarksrequestcreate.d.ts.map