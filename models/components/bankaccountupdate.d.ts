import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The bank account type.
 */
export declare enum BankAccountUpdateType {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Checking = "CHECKING",
    Savings = "SAVINGS"
}
/**
 * The bank account type.
 */
export type BankAccountUpdateTypeOpen = OpenEnum<typeof BankAccountUpdateType>;
/**
 * A representation of a bank account.
 */
export type BankAccountUpdate = {
    /**
     * The bank account number. This value will be masked in responses.
     */
    accountNumber?: string | undefined;
    /**
     * The name of the bank account owner.
     */
    owner?: string | undefined;
    /**
     * The bank routing number (either ABA or BIC).
     */
    routingNumber?: string | undefined;
    /**
     * The bank account type.
     */
    type?: BankAccountUpdateTypeOpen | undefined;
};
/** @internal */
export declare const BankAccountUpdateType$inboundSchema: z.ZodType<BankAccountUpdateTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BankAccountUpdateType$outboundSchema: z.ZodType<BankAccountUpdateTypeOpen, z.ZodTypeDef, BankAccountUpdateTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BankAccountUpdateType$ {
    /** @deprecated use `BankAccountUpdateType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BankAccountUpdateTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BankAccountUpdateType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BankAccountUpdateTypeOpen, z.ZodTypeDef, BankAccountUpdateTypeOpen>;
}
/** @internal */
export declare const BankAccountUpdate$inboundSchema: z.ZodType<BankAccountUpdate, z.ZodTypeDef, unknown>;
/** @internal */
export type BankAccountUpdate$Outbound = {
    account_number?: string | undefined;
    owner?: string | undefined;
    routing_number?: string | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const BankAccountUpdate$outboundSchema: z.ZodType<BankAccountUpdate$Outbound, z.ZodTypeDef, BankAccountUpdate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BankAccountUpdate$ {
    /** @deprecated use `BankAccountUpdate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BankAccountUpdate, z.ZodTypeDef, unknown>;
    /** @deprecated use `BankAccountUpdate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BankAccountUpdate$Outbound, z.ZodTypeDef, BankAccountUpdate>;
    /** @deprecated use `BankAccountUpdate$Outbound` instead. */
    type Outbound = BankAccountUpdate$Outbound;
}
export declare function bankAccountUpdateToJSON(bankAccountUpdate: BankAccountUpdate): string;
export declare function bankAccountUpdateFromJSON(jsonString: string): SafeParseResult<BankAccountUpdate, SDKValidationError>;
//# sourceMappingURL=bankaccountupdate.d.ts.map