import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * The bank account type.
 */
export declare enum BankRelationshipType {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Checking = "CHECKING",
    Savings = "SAVINGS"
}
/**
 * The bank account type.
 */
export type BankRelationshipTypeOpen = OpenEnum<typeof BankRelationshipType>;
/**
 * The bank account for the relationship. This field must be set on create requests **except** when using the `PLAID_TOKEN` verification method. In which case, the bank account will be retrieved by the service based on the `plaid_processor_token`.
 */
export type BankAccount = {
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
    type?: BankRelationshipTypeOpen | undefined;
};
/**
 * The high level state of the bank relationship.
 */
export declare enum BankRelationshipStateState {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Approved = "APPROVED",
    Canceled = "CANCELED",
    Rejected = "REJECTED"
}
/**
 * The high level state of the bank relationship.
 */
export type BankRelationshipStateStateOpen = OpenEnum<typeof BankRelationshipStateState>;
/**
 * The state of the bank relationship.
 */
export type BankRelationshipState = {
    /**
     * The user or service that triggered the state update.
     */
    actor?: string | undefined;
    /**
     * Additional metadata relating to the bank relationship state. Included data will depend on the state. Examples:
     *
     * @remarks
     *  - rejection reasons are included when the state is `REJECTED`
     *  - comment and reason are included when the state is `CANCELED`
     */
    metadata?: {
        [k: string]: any;
    } | null | undefined;
    /**
     * The high level state of the bank relationship.
     */
    state?: BankRelationshipStateStateOpen | undefined;
    /**
     * The time of the state update.
     */
    updateTime?: Date | null | undefined;
};
/**
 * The verification method of the bank relationship.
 */
export declare enum BankRelationshipVerificationMethod {
    VerificationMethodUnspecified = "VERIFICATION_METHOD_UNSPECIFIED",
    MicroDeposit = "MICRO_DEPOSIT",
    Yodlee = "YODLEE",
    Quovo = "QUOVO",
    Giact = "GIACT",
    Synapse = "SYNAPSE",
    Sophtron = "SOPHTRON",
    InternalBank = "INTERNAL_BANK",
    Mx = "MX",
    Fiserv = "FISERV",
    PlaidToken = "PLAID_TOKEN"
}
/**
 * The verification method of the bank relationship.
 */
export type BankRelationshipVerificationMethodOpen = OpenEnum<typeof BankRelationshipVerificationMethod>;
/**
 * A relationship between a bank account and an Apex account.
 */
export type BankRelationship = {
    /**
     * The bank account for the relationship. This field must be set on create requests **except** when using the `PLAID_TOKEN` verification method. In which case, the bank account will be retrieved by the service based on the `plaid_processor_token`.
     */
    bankAccount?: BankAccount | null | undefined;
    /**
     * Creation time of the bank relationship.
     */
    createTime?: Date | null | undefined;
    /**
     * The resource name of the bank relationship.
     */
    name?: string | undefined;
    /**
     * The nickname of the bank relationship.
     */
    nickname?: string | undefined;
    /**
     * A processor token from Plaid (vendor). Required if using `PLAID_TOKEN` verification method.
     */
    plaidProcessorToken?: string | undefined;
    /**
     * The state of the bank relationship.
     */
    state?: BankRelationshipState | null | undefined;
    /**
     * The verification method of the bank relationship.
     */
    verificationMethod?: BankRelationshipVerificationMethodOpen | undefined;
};
/** @internal */
export declare const BankRelationshipType$inboundSchema: z.ZodType<BankRelationshipTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BankRelationshipType$outboundSchema: z.ZodType<BankRelationshipTypeOpen, z.ZodTypeDef, BankRelationshipTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BankRelationshipType$ {
    /** @deprecated use `BankRelationshipType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BankRelationshipTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BankRelationshipType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BankRelationshipTypeOpen, z.ZodTypeDef, BankRelationshipTypeOpen>;
}
/** @internal */
export declare const BankAccount$inboundSchema: z.ZodType<BankAccount, z.ZodTypeDef, unknown>;
/** @internal */
export type BankAccount$Outbound = {
    account_number?: string | undefined;
    owner?: string | undefined;
    routing_number?: string | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const BankAccount$outboundSchema: z.ZodType<BankAccount$Outbound, z.ZodTypeDef, BankAccount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BankAccount$ {
    /** @deprecated use `BankAccount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BankAccount, z.ZodTypeDef, unknown>;
    /** @deprecated use `BankAccount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BankAccount$Outbound, z.ZodTypeDef, BankAccount>;
    /** @deprecated use `BankAccount$Outbound` instead. */
    type Outbound = BankAccount$Outbound;
}
/** @internal */
export declare const BankRelationshipStateState$inboundSchema: z.ZodType<BankRelationshipStateStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BankRelationshipStateState$outboundSchema: z.ZodType<BankRelationshipStateStateOpen, z.ZodTypeDef, BankRelationshipStateStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BankRelationshipStateState$ {
    /** @deprecated use `BankRelationshipStateState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BankRelationshipStateStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BankRelationshipStateState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BankRelationshipStateStateOpen, z.ZodTypeDef, BankRelationshipStateStateOpen>;
}
/** @internal */
export declare const BankRelationshipState$inboundSchema: z.ZodType<BankRelationshipState, z.ZodTypeDef, unknown>;
/** @internal */
export type BankRelationshipState$Outbound = {
    actor?: string | undefined;
    metadata?: {
        [k: string]: any;
    } | null | undefined;
    state?: string | undefined;
    update_time?: string | null | undefined;
};
/** @internal */
export declare const BankRelationshipState$outboundSchema: z.ZodType<BankRelationshipState$Outbound, z.ZodTypeDef, BankRelationshipState>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BankRelationshipState$ {
    /** @deprecated use `BankRelationshipState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BankRelationshipState, z.ZodTypeDef, unknown>;
    /** @deprecated use `BankRelationshipState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BankRelationshipState$Outbound, z.ZodTypeDef, BankRelationshipState>;
    /** @deprecated use `BankRelationshipState$Outbound` instead. */
    type Outbound = BankRelationshipState$Outbound;
}
/** @internal */
export declare const BankRelationshipVerificationMethod$inboundSchema: z.ZodType<BankRelationshipVerificationMethodOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BankRelationshipVerificationMethod$outboundSchema: z.ZodType<BankRelationshipVerificationMethodOpen, z.ZodTypeDef, BankRelationshipVerificationMethodOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BankRelationshipVerificationMethod$ {
    /** @deprecated use `BankRelationshipVerificationMethod$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BankRelationshipVerificationMethodOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BankRelationshipVerificationMethod$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BankRelationshipVerificationMethodOpen, z.ZodTypeDef, BankRelationshipVerificationMethodOpen>;
}
/** @internal */
export declare const BankRelationship$inboundSchema: z.ZodType<BankRelationship, z.ZodTypeDef, unknown>;
/** @internal */
export type BankRelationship$Outbound = {
    bank_account?: BankAccount$Outbound | null | undefined;
    create_time?: string | null | undefined;
    name?: string | undefined;
    nickname?: string | undefined;
    plaid_processor_token?: string | undefined;
    state?: BankRelationshipState$Outbound | null | undefined;
    verification_method?: string | undefined;
};
/** @internal */
export declare const BankRelationship$outboundSchema: z.ZodType<BankRelationship$Outbound, z.ZodTypeDef, BankRelationship>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BankRelationship$ {
    /** @deprecated use `BankRelationship$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BankRelationship, z.ZodTypeDef, unknown>;
    /** @deprecated use `BankRelationship$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BankRelationship$Outbound, z.ZodTypeDef, BankRelationship>;
    /** @deprecated use `BankRelationship$Outbound` instead. */
    type Outbound = BankRelationship$Outbound;
}
//# sourceMappingURL=bankrelationship.d.ts.map