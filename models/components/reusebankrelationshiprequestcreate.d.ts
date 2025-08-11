import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Request to reuse a bank relationship.
 */
export type ReuseBankRelationshipRequestCreate = {
    /**
     * The account to create the reused bank relationship under. The account must be related to the parent account of the `source_bank_relationship`. Format: `accounts/{account}`
     */
    parent: string;
    /**
     * The source bank relationship to reuse. The bank relationship must be in an approved state. Format: `accounts/{account}/bankRelationships/{bank_relationship}`
     */
    sourceBankRelationship: string;
};
/** @internal */
export declare const ReuseBankRelationshipRequestCreate$inboundSchema: z.ZodType<ReuseBankRelationshipRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type ReuseBankRelationshipRequestCreate$Outbound = {
    parent: string;
    source_bank_relationship: string;
};
/** @internal */
export declare const ReuseBankRelationshipRequestCreate$outboundSchema: z.ZodType<ReuseBankRelationshipRequestCreate$Outbound, z.ZodTypeDef, ReuseBankRelationshipRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ReuseBankRelationshipRequestCreate$ {
    /** @deprecated use `ReuseBankRelationshipRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ReuseBankRelationshipRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `ReuseBankRelationshipRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ReuseBankRelationshipRequestCreate$Outbound, z.ZodTypeDef, ReuseBankRelationshipRequestCreate>;
    /** @deprecated use `ReuseBankRelationshipRequestCreate$Outbound` instead. */
    type Outbound = ReuseBankRelationshipRequestCreate$Outbound;
}
export declare function reuseBankRelationshipRequestCreateToJSON(reuseBankRelationshipRequestCreate: ReuseBankRelationshipRequestCreate): string;
export declare function reuseBankRelationshipRequestCreateFromJSON(jsonString: string): SafeParseResult<ReuseBankRelationshipRequestCreate, SDKValidationError>;
//# sourceMappingURL=reusebankrelationshiprequestcreate.d.ts.map