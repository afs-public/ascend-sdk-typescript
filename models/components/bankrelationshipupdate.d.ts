import * as z from "zod";
import { BankAccountUpdate, BankAccountUpdate$Outbound } from "./bankaccountupdate.js";
/**
 * A relationship between a bank account and an Apex account.
 */
export type BankRelationshipUpdate = {
    /**
     * A representation of a bank account.
     */
    bankAccount?: BankAccountUpdate | undefined;
    /**
     * The nickname of the bank relationship.
     */
    nickname?: string | undefined;
    /**
     * A processor token from Plaid (vendor). Required if using `PLAID_TOKEN` verification method.
     */
    plaidProcessorToken?: string | undefined;
};
/** @internal */
export declare const BankRelationshipUpdate$inboundSchema: z.ZodType<BankRelationshipUpdate, z.ZodTypeDef, unknown>;
/** @internal */
export type BankRelationshipUpdate$Outbound = {
    bank_account?: BankAccountUpdate$Outbound | undefined;
    nickname?: string | undefined;
    plaid_processor_token?: string | undefined;
};
/** @internal */
export declare const BankRelationshipUpdate$outboundSchema: z.ZodType<BankRelationshipUpdate$Outbound, z.ZodTypeDef, BankRelationshipUpdate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BankRelationshipUpdate$ {
    /** @deprecated use `BankRelationshipUpdate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BankRelationshipUpdate, z.ZodTypeDef, unknown>;
    /** @deprecated use `BankRelationshipUpdate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BankRelationshipUpdate$Outbound, z.ZodTypeDef, BankRelationshipUpdate>;
    /** @deprecated use `BankRelationshipUpdate$Outbound` instead. */
    type Outbound = BankRelationshipUpdate$Outbound;
}
//# sourceMappingURL=bankrelationshipupdate.d.ts.map