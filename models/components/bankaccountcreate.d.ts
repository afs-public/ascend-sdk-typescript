import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * The bank account type.
 */
export declare enum BankAccountCreateType {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Checking = "CHECKING",
    Savings = "SAVINGS"
}
/**
 * The bank account type.
 */
export type BankAccountCreateTypeOpen = OpenEnum<typeof BankAccountCreateType>;
/**
 * A representation of a bank account.
 */
export type BankAccountCreate = {
    /**
     * The bank account number. This value will be masked in responses.
     */
    accountNumber: string;
    /**
     * The name of the bank account owner.
     */
    owner: string;
    /**
     * The bank routing number (either ABA or BIC).
     */
    routingNumber: string;
    /**
     * The bank account type.
     */
    type: BankAccountCreateTypeOpen;
};
/** @internal */
export declare const BankAccountCreateType$inboundSchema: z.ZodType<BankAccountCreateTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BankAccountCreateType$outboundSchema: z.ZodType<BankAccountCreateTypeOpen, z.ZodTypeDef, BankAccountCreateTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BankAccountCreateType$ {
    /** @deprecated use `BankAccountCreateType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BankAccountCreateTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BankAccountCreateType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BankAccountCreateTypeOpen, z.ZodTypeDef, BankAccountCreateTypeOpen>;
}
/** @internal */
export declare const BankAccountCreate$inboundSchema: z.ZodType<BankAccountCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type BankAccountCreate$Outbound = {
    account_number: string;
    owner: string;
    routing_number: string;
    type: string;
};
/** @internal */
export declare const BankAccountCreate$outboundSchema: z.ZodType<BankAccountCreate$Outbound, z.ZodTypeDef, BankAccountCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BankAccountCreate$ {
    /** @deprecated use `BankAccountCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BankAccountCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `BankAccountCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BankAccountCreate$Outbound, z.ZodTypeDef, BankAccountCreate>;
    /** @deprecated use `BankAccountCreate$Outbound` instead. */
    type Outbound = BankAccountCreate$Outbound;
}
//# sourceMappingURL=bankaccountcreate.d.ts.map