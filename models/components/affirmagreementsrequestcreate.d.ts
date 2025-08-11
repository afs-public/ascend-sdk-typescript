import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The request to affirm Agreements for an Account.
 */
export type AffirmAgreementsRequestCreate = {
    /**
     * Repeated string of account_agreement_ids UUID for the specific account agreement(s) being affirmed
     */
    accountAgreementIds: Array<string>;
};
/** @internal */
export declare const AffirmAgreementsRequestCreate$inboundSchema: z.ZodType<AffirmAgreementsRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type AffirmAgreementsRequestCreate$Outbound = {
    account_agreement_ids: Array<string>;
};
/** @internal */
export declare const AffirmAgreementsRequestCreate$outboundSchema: z.ZodType<AffirmAgreementsRequestCreate$Outbound, z.ZodTypeDef, AffirmAgreementsRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AffirmAgreementsRequestCreate$ {
    /** @deprecated use `AffirmAgreementsRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AffirmAgreementsRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `AffirmAgreementsRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AffirmAgreementsRequestCreate$Outbound, z.ZodTypeDef, AffirmAgreementsRequestCreate>;
    /** @deprecated use `AffirmAgreementsRequestCreate$Outbound` instead. */
    type Outbound = AffirmAgreementsRequestCreate$Outbound;
}
export declare function affirmAgreementsRequestCreateToJSON(affirmAgreementsRequestCreate: AffirmAgreementsRequestCreate): string;
export declare function affirmAgreementsRequestCreateFromJSON(jsonString: string): SafeParseResult<AffirmAgreementsRequestCreate, SDKValidationError>;
//# sourceMappingURL=affirmagreementsrequestcreate.d.ts.map