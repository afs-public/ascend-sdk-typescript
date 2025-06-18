import * as z from "zod";
import { AddressCreate, AddressCreate$Outbound } from "./addresscreate.js";
/**
 * Bank details
 */
export type RecipientBankBankDetailsCreate = {
    /**
     * Any additional information to be communicated to the recipient bank, such as intermediary banks to be used.
     */
    additionalInfo?: string | undefined;
    /**
     * The data structure containing attributes describing the location of an underlying entity.
     */
    address: AddressCreate;
    /**
     * The name of the recipient bank / financial institution
     */
    bankName: string;
};
/** @internal */
export declare const RecipientBankBankDetailsCreate$inboundSchema: z.ZodType<RecipientBankBankDetailsCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type RecipientBankBankDetailsCreate$Outbound = {
    additional_info?: string | undefined;
    address: AddressCreate$Outbound;
    bank_name: string;
};
/** @internal */
export declare const RecipientBankBankDetailsCreate$outboundSchema: z.ZodType<RecipientBankBankDetailsCreate$Outbound, z.ZodTypeDef, RecipientBankBankDetailsCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RecipientBankBankDetailsCreate$ {
    /** @deprecated use `RecipientBankBankDetailsCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RecipientBankBankDetailsCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `RecipientBankBankDetailsCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RecipientBankBankDetailsCreate$Outbound, z.ZodTypeDef, RecipientBankBankDetailsCreate>;
    /** @deprecated use `RecipientBankBankDetailsCreate$Outbound` instead. */
    type Outbound = RecipientBankBankDetailsCreate$Outbound;
}
//# sourceMappingURL=recipientbankbankdetailscreate.d.ts.map