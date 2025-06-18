import * as z from "zod";
/**
 * Request to cancel an existing bank relationship.
 */
export type CancelBankRelationshipRequestCreate = {
    /**
     * Comment when canceling the bank relationship.
     */
    comment: string;
    /**
     * The name of the bank relationship to be canceled.
     */
    name: string;
};
/** @internal */
export declare const CancelBankRelationshipRequestCreate$inboundSchema: z.ZodType<CancelBankRelationshipRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelBankRelationshipRequestCreate$Outbound = {
    comment: string;
    name: string;
};
/** @internal */
export declare const CancelBankRelationshipRequestCreate$outboundSchema: z.ZodType<CancelBankRelationshipRequestCreate$Outbound, z.ZodTypeDef, CancelBankRelationshipRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelBankRelationshipRequestCreate$ {
    /** @deprecated use `CancelBankRelationshipRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelBankRelationshipRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelBankRelationshipRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelBankRelationshipRequestCreate$Outbound, z.ZodTypeDef, CancelBankRelationshipRequestCreate>;
    /** @deprecated use `CancelBankRelationshipRequestCreate$Outbound` instead. */
    type Outbound = CancelBankRelationshipRequestCreate$Outbound;
}
//# sourceMappingURL=cancelbankrelationshiprequestcreate.d.ts.map