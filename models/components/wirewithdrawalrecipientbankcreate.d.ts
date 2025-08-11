import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { RecipientBankBankDetailsCreate, RecipientBankBankDetailsCreate$Outbound } from "./recipientbankbankdetailscreate.js";
import { RecipientBankBankIdCreate, RecipientBankBankIdCreate$Outbound } from "./recipientbankbankidcreate.js";
/**
 * A recipient bank / financial institution
 */
export type WireWithdrawalRecipientBankCreate = {
    /**
     * A bank identifier
     */
    bankId: RecipientBankBankIdCreate;
    /**
     * Bank details
     */
    internationalBankDetails?: RecipientBankBankDetailsCreate | undefined;
};
/** @internal */
export declare const WireWithdrawalRecipientBankCreate$inboundSchema: z.ZodType<WireWithdrawalRecipientBankCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalRecipientBankCreate$Outbound = {
    bank_id: RecipientBankBankIdCreate$Outbound;
    international_bank_details?: RecipientBankBankDetailsCreate$Outbound | undefined;
};
/** @internal */
export declare const WireWithdrawalRecipientBankCreate$outboundSchema: z.ZodType<WireWithdrawalRecipientBankCreate$Outbound, z.ZodTypeDef, WireWithdrawalRecipientBankCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalRecipientBankCreate$ {
    /** @deprecated use `WireWithdrawalRecipientBankCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalRecipientBankCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalRecipientBankCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalRecipientBankCreate$Outbound, z.ZodTypeDef, WireWithdrawalRecipientBankCreate>;
    /** @deprecated use `WireWithdrawalRecipientBankCreate$Outbound` instead. */
    type Outbound = WireWithdrawalRecipientBankCreate$Outbound;
}
export declare function wireWithdrawalRecipientBankCreateToJSON(wireWithdrawalRecipientBankCreate: WireWithdrawalRecipientBankCreate): string;
export declare function wireWithdrawalRecipientBankCreateFromJSON(jsonString: string): SafeParseResult<WireWithdrawalRecipientBankCreate, SDKValidationError>;
//# sourceMappingURL=wirewithdrawalrecipientbankcreate.d.ts.map