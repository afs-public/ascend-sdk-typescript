import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { BankAccountCreate, BankAccountCreate$Outbound } from "./bankaccountcreate.js";
/**
 * The verification method of the bank relationship.
 */
export declare enum VerificationMethod {
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
export type VerificationMethodOpen = OpenEnum<typeof VerificationMethod>;
/**
 * A relationship between a bank account and an Apex account.
 */
export type BankRelationshipCreate = {
    /**
     * A representation of a bank account.
     */
    bankAccount?: BankAccountCreate | undefined;
    /**
     * The nickname of the bank relationship.
     */
    nickname: string;
    /**
     * A processor token from Plaid (vendor). Required if using `PLAID_TOKEN` verification method.
     */
    plaidProcessorToken?: string | undefined;
    /**
     * The verification method of the bank relationship.
     */
    verificationMethod: VerificationMethodOpen;
};
/** @internal */
export declare const VerificationMethod$inboundSchema: z.ZodType<VerificationMethodOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const VerificationMethod$outboundSchema: z.ZodType<VerificationMethodOpen, z.ZodTypeDef, VerificationMethodOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace VerificationMethod$ {
    /** @deprecated use `VerificationMethod$inboundSchema` instead. */
    const inboundSchema: z.ZodType<VerificationMethodOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `VerificationMethod$outboundSchema` instead. */
    const outboundSchema: z.ZodType<VerificationMethodOpen, z.ZodTypeDef, VerificationMethodOpen>;
}
/** @internal */
export declare const BankRelationshipCreate$inboundSchema: z.ZodType<BankRelationshipCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type BankRelationshipCreate$Outbound = {
    bank_account?: BankAccountCreate$Outbound | undefined;
    nickname: string;
    plaid_processor_token?: string | undefined;
    verification_method: string;
};
/** @internal */
export declare const BankRelationshipCreate$outboundSchema: z.ZodType<BankRelationshipCreate$Outbound, z.ZodTypeDef, BankRelationshipCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BankRelationshipCreate$ {
    /** @deprecated use `BankRelationshipCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BankRelationshipCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `BankRelationshipCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BankRelationshipCreate$Outbound, z.ZodTypeDef, BankRelationshipCreate>;
    /** @deprecated use `BankRelationshipCreate$Outbound` instead. */
    type Outbound = BankRelationshipCreate$Outbound;
}
export declare function bankRelationshipCreateToJSON(bankRelationshipCreate: BankRelationshipCreate): string;
export declare function bankRelationshipCreateFromJSON(jsonString: string): SafeParseResult<BankRelationshipCreate, SDKValidationError>;
//# sourceMappingURL=bankrelationshipcreate.d.ts.map