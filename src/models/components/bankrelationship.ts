/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";

/**
 * The bank account type.
 */
export enum BankRelationshipType {
  TypeUnspecified = "TYPE_UNSPECIFIED",
  Checking = "CHECKING",
  Savings = "SAVINGS",
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
export enum BankRelationshipStateState {
  StateUnspecified = "STATE_UNSPECIFIED",
  Pending = "PENDING",
  Approved = "APPROVED",
  Canceled = "CANCELED",
  Rejected = "REJECTED",
}
/**
 * The high level state of the bank relationship.
 */
export type BankRelationshipStateStateOpen = OpenEnum<
  typeof BankRelationshipStateState
>;

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
  metadata?: { [k: string]: any } | null | undefined;
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
export enum BankRelationshipVerificationMethod {
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
  PlaidToken = "PLAID_TOKEN",
}
/**
 * The verification method of the bank relationship.
 */
export type BankRelationshipVerificationMethodOpen = OpenEnum<
  typeof BankRelationshipVerificationMethod
>;

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
export const BankRelationshipType$inboundSchema: z.ZodType<
  BankRelationshipTypeOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(BankRelationshipType),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const BankRelationshipType$outboundSchema: z.ZodType<
  BankRelationshipTypeOpen,
  z.ZodTypeDef,
  BankRelationshipTypeOpen
> = z.union([
  z.nativeEnum(BankRelationshipType),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BankRelationshipType$ {
  /** @deprecated use `BankRelationshipType$inboundSchema` instead. */
  export const inboundSchema = BankRelationshipType$inboundSchema;
  /** @deprecated use `BankRelationshipType$outboundSchema` instead. */
  export const outboundSchema = BankRelationshipType$outboundSchema;
}

/** @internal */
export const BankAccount$inboundSchema: z.ZodType<
  BankAccount,
  z.ZodTypeDef,
  unknown
> = z.object({
  account_number: z.string().optional(),
  owner: z.string().optional(),
  routing_number: z.string().optional(),
  type: BankRelationshipType$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "account_number": "accountNumber",
    "routing_number": "routingNumber",
  });
});

/** @internal */
export type BankAccount$Outbound = {
  account_number?: string | undefined;
  owner?: string | undefined;
  routing_number?: string | undefined;
  type?: string | undefined;
};

/** @internal */
export const BankAccount$outboundSchema: z.ZodType<
  BankAccount$Outbound,
  z.ZodTypeDef,
  BankAccount
> = z.object({
  accountNumber: z.string().optional(),
  owner: z.string().optional(),
  routingNumber: z.string().optional(),
  type: BankRelationshipType$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    accountNumber: "account_number",
    routingNumber: "routing_number",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BankAccount$ {
  /** @deprecated use `BankAccount$inboundSchema` instead. */
  export const inboundSchema = BankAccount$inboundSchema;
  /** @deprecated use `BankAccount$outboundSchema` instead. */
  export const outboundSchema = BankAccount$outboundSchema;
  /** @deprecated use `BankAccount$Outbound` instead. */
  export type Outbound = BankAccount$Outbound;
}

/** @internal */
export const BankRelationshipStateState$inboundSchema: z.ZodType<
  BankRelationshipStateStateOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(BankRelationshipStateState),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const BankRelationshipStateState$outboundSchema: z.ZodType<
  BankRelationshipStateStateOpen,
  z.ZodTypeDef,
  BankRelationshipStateStateOpen
> = z.union([
  z.nativeEnum(BankRelationshipStateState),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BankRelationshipStateState$ {
  /** @deprecated use `BankRelationshipStateState$inboundSchema` instead. */
  export const inboundSchema = BankRelationshipStateState$inboundSchema;
  /** @deprecated use `BankRelationshipStateState$outboundSchema` instead. */
  export const outboundSchema = BankRelationshipStateState$outboundSchema;
}

/** @internal */
export const BankRelationshipState$inboundSchema: z.ZodType<
  BankRelationshipState,
  z.ZodTypeDef,
  unknown
> = z.object({
  actor: z.string().optional(),
  metadata: z.nullable(z.record(z.any())).optional(),
  state: BankRelationshipStateState$inboundSchema.optional(),
  update_time: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "update_time": "updateTime",
  });
});

/** @internal */
export type BankRelationshipState$Outbound = {
  actor?: string | undefined;
  metadata?: { [k: string]: any } | null | undefined;
  state?: string | undefined;
  update_time?: string | null | undefined;
};

/** @internal */
export const BankRelationshipState$outboundSchema: z.ZodType<
  BankRelationshipState$Outbound,
  z.ZodTypeDef,
  BankRelationshipState
> = z.object({
  actor: z.string().optional(),
  metadata: z.nullable(z.record(z.any())).optional(),
  state: BankRelationshipStateState$outboundSchema.optional(),
  updateTime: z.nullable(z.date().transform(v => v.toISOString())).optional(),
}).transform((v) => {
  return remap$(v, {
    updateTime: "update_time",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BankRelationshipState$ {
  /** @deprecated use `BankRelationshipState$inboundSchema` instead. */
  export const inboundSchema = BankRelationshipState$inboundSchema;
  /** @deprecated use `BankRelationshipState$outboundSchema` instead. */
  export const outboundSchema = BankRelationshipState$outboundSchema;
  /** @deprecated use `BankRelationshipState$Outbound` instead. */
  export type Outbound = BankRelationshipState$Outbound;
}

/** @internal */
export const BankRelationshipVerificationMethod$inboundSchema: z.ZodType<
  BankRelationshipVerificationMethodOpen,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(BankRelationshipVerificationMethod),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const BankRelationshipVerificationMethod$outboundSchema: z.ZodType<
  BankRelationshipVerificationMethodOpen,
  z.ZodTypeDef,
  BankRelationshipVerificationMethodOpen
> = z.union([
  z.nativeEnum(BankRelationshipVerificationMethod),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BankRelationshipVerificationMethod$ {
  /** @deprecated use `BankRelationshipVerificationMethod$inboundSchema` instead. */
  export const inboundSchema = BankRelationshipVerificationMethod$inboundSchema;
  /** @deprecated use `BankRelationshipVerificationMethod$outboundSchema` instead. */
  export const outboundSchema =
    BankRelationshipVerificationMethod$outboundSchema;
}

/** @internal */
export const BankRelationship$inboundSchema: z.ZodType<
  BankRelationship,
  z.ZodTypeDef,
  unknown
> = z.object({
  bank_account: z.nullable(z.lazy(() => BankAccount$inboundSchema)).optional(),
  create_time: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  name: z.string().optional(),
  nickname: z.string().optional(),
  plaid_processor_token: z.string().optional(),
  state: z.nullable(z.lazy(() => BankRelationshipState$inboundSchema))
    .optional(),
  verification_method: BankRelationshipVerificationMethod$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "bank_account": "bankAccount",
    "create_time": "createTime",
    "plaid_processor_token": "plaidProcessorToken",
    "verification_method": "verificationMethod",
  });
});

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
export const BankRelationship$outboundSchema: z.ZodType<
  BankRelationship$Outbound,
  z.ZodTypeDef,
  BankRelationship
> = z.object({
  bankAccount: z.nullable(z.lazy(() => BankAccount$outboundSchema)).optional(),
  createTime: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  name: z.string().optional(),
  nickname: z.string().optional(),
  plaidProcessorToken: z.string().optional(),
  state: z.nullable(z.lazy(() => BankRelationshipState$outboundSchema))
    .optional(),
  verificationMethod: BankRelationshipVerificationMethod$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    bankAccount: "bank_account",
    createTime: "create_time",
    plaidProcessorToken: "plaid_processor_token",
    verificationMethod: "verification_method",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BankRelationship$ {
  /** @deprecated use `BankRelationship$inboundSchema` instead. */
  export const inboundSchema = BankRelationship$inboundSchema;
  /** @deprecated use `BankRelationship$outboundSchema` instead. */
  export const outboundSchema = BankRelationship$outboundSchema;
  /** @deprecated use `BankRelationship$Outbound` instead. */
  export type Outbound = BankRelationship$Outbound;
}
