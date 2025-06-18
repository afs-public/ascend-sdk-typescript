import * as z from "zod";
import { AddressCreate, AddressCreate$Outbound } from "./addresscreate.js";
/**
 * An intermediary party
 */
export type WireWithdrawalIntermediaryCreate = {
    /**
     * The account number of the intermediary party
     */
    account: string;
    /**
     * The name of the intermediary party
     */
    accountTitle: string;
    /**
     * The data structure containing attributes describing the location of an underlying entity.
     */
    address: AddressCreate;
};
/** @internal */
export declare const WireWithdrawalIntermediaryCreate$inboundSchema: z.ZodType<WireWithdrawalIntermediaryCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalIntermediaryCreate$Outbound = {
    account: string;
    account_title: string;
    address: AddressCreate$Outbound;
};
/** @internal */
export declare const WireWithdrawalIntermediaryCreate$outboundSchema: z.ZodType<WireWithdrawalIntermediaryCreate$Outbound, z.ZodTypeDef, WireWithdrawalIntermediaryCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalIntermediaryCreate$ {
    /** @deprecated use `WireWithdrawalIntermediaryCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalIntermediaryCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalIntermediaryCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalIntermediaryCreate$Outbound, z.ZodTypeDef, WireWithdrawalIntermediaryCreate>;
    /** @deprecated use `WireWithdrawalIntermediaryCreate$Outbound` instead. */
    type Outbound = WireWithdrawalIntermediaryCreate$Outbound;
}
//# sourceMappingURL=wirewithdrawalintermediarycreate.d.ts.map