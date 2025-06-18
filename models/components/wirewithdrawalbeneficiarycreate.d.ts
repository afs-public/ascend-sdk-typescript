import * as z from "zod";
import { AddressCreate, AddressCreate$Outbound } from "./addresscreate.js";
/**
 * The person or entity taking receipt of the wired funds
 */
export type WireWithdrawalBeneficiaryCreate = {
    /**
     * The bank account of the person or entity taking receipt of the wired funds. Limited to 25 characters if intermediaryDetails.account is set
     */
    account: string;
    /**
     * The name of the person or entity taking receipt of the wired funds. This field defaults to the name of the account owner and should only be populated when performing a third party wire transfer
     */
    accountTitle?: string | undefined;
    /**
     * The data structure containing attributes describing the location of an underlying entity.
     */
    address?: AddressCreate | undefined;
    /**
     * Indicates if this beneficiary is a third party beneficiary. A wire transfer is considered third party if the beneficiary is not the exact same person and/or entity that the funds originated from. This includes wire transfers where the originator account is an individual account and the beneficiary account is a joint account
     */
    thirdParty?: boolean | undefined;
};
/** @internal */
export declare const WireWithdrawalBeneficiaryCreate$inboundSchema: z.ZodType<WireWithdrawalBeneficiaryCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalBeneficiaryCreate$Outbound = {
    account: string;
    account_title?: string | undefined;
    address?: AddressCreate$Outbound | undefined;
    third_party?: boolean | undefined;
};
/** @internal */
export declare const WireWithdrawalBeneficiaryCreate$outboundSchema: z.ZodType<WireWithdrawalBeneficiaryCreate$Outbound, z.ZodTypeDef, WireWithdrawalBeneficiaryCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalBeneficiaryCreate$ {
    /** @deprecated use `WireWithdrawalBeneficiaryCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalBeneficiaryCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalBeneficiaryCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalBeneficiaryCreate$Outbound, z.ZodTypeDef, WireWithdrawalBeneficiaryCreate>;
    /** @deprecated use `WireWithdrawalBeneficiaryCreate$Outbound` instead. */
    type Outbound = WireWithdrawalBeneficiaryCreate$Outbound;
}
//# sourceMappingURL=wirewithdrawalbeneficiarycreate.d.ts.map