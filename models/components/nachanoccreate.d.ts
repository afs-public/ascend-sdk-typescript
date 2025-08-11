import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The notice of change reason code.
 */
export declare enum Code {
    CodeUnspecified = "CODE_UNSPECIFIED",
    C01 = "C01",
    C02 = "C02",
    C03 = "C03",
    C04 = "C04",
    C05 = "C05",
    C06 = "C06",
    C07 = "C07",
    C08 = "C08",
    C09 = "C09",
    C13 = "C13",
    C14 = "C14",
    C61 = "C61",
    C62 = "C62",
    C63 = "C63",
    C64 = "C64",
    C65 = "C65",
    C66 = "C66",
    C67 = "C67",
    C68 = "C68",
    C69 = "C69"
}
/**
 * The notice of change reason code.
 */
export type CodeOpen = OpenEnum<typeof Code>;
/**
 * The updated bank account type. Should only be set when the code is for an incorrect transaction code.
 */
export declare enum UpdatedBankAccountType {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Checking = "CHECKING",
    Savings = "SAVINGS"
}
/**
 * The updated bank account type. Should only be set when the code is for an incorrect transaction code.
 */
export type UpdatedBankAccountTypeOpen = OpenEnum<typeof UpdatedBankAccountType>;
/**
 * A notice of change (NOC) on an ACH transfer from the Nacha network.
 */
export type NachaNocCreate = {
    /**
     * The notice of change reason code.
     */
    code: CodeOpen;
    /**
     * The updated bank account number. Should only be set when the code is for an incorrect DFI account number.
     */
    updatedBankAccountNumber?: string | undefined;
    /**
     * The updated bank account type. Should only be set when the code is for an incorrect transaction code.
     */
    updatedBankAccountType?: UpdatedBankAccountTypeOpen | undefined;
    /**
     * The updated bank routing number. Should only be set when the code is for an incorrect routing number.
     */
    updatedBankRoutingNumber?: string | undefined;
};
/** @internal */
export declare const Code$inboundSchema: z.ZodType<CodeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const Code$outboundSchema: z.ZodType<CodeOpen, z.ZodTypeDef, CodeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Code$ {
    /** @deprecated use `Code$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CodeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `Code$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CodeOpen, z.ZodTypeDef, CodeOpen>;
}
/** @internal */
export declare const UpdatedBankAccountType$inboundSchema: z.ZodType<UpdatedBankAccountTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const UpdatedBankAccountType$outboundSchema: z.ZodType<UpdatedBankAccountTypeOpen, z.ZodTypeDef, UpdatedBankAccountTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdatedBankAccountType$ {
    /** @deprecated use `UpdatedBankAccountType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdatedBankAccountTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdatedBankAccountType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdatedBankAccountTypeOpen, z.ZodTypeDef, UpdatedBankAccountTypeOpen>;
}
/** @internal */
export declare const NachaNocCreate$inboundSchema: z.ZodType<NachaNocCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type NachaNocCreate$Outbound = {
    code: string;
    updated_bank_account_number?: string | undefined;
    updated_bank_account_type?: string | undefined;
    updated_bank_routing_number?: string | undefined;
};
/** @internal */
export declare const NachaNocCreate$outboundSchema: z.ZodType<NachaNocCreate$Outbound, z.ZodTypeDef, NachaNocCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace NachaNocCreate$ {
    /** @deprecated use `NachaNocCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<NachaNocCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `NachaNocCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<NachaNocCreate$Outbound, z.ZodTypeDef, NachaNocCreate>;
    /** @deprecated use `NachaNocCreate$Outbound` instead. */
    type Outbound = NachaNocCreate$Outbound;
}
export declare function nachaNocCreateToJSON(nachaNocCreate: NachaNocCreate): string;
export declare function nachaNocCreateFromJSON(jsonString: string): SafeParseResult<NachaNocCreate, SDKValidationError>;
//# sourceMappingURL=nachanoccreate.d.ts.map