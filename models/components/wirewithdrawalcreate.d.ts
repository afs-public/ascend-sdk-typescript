import * as z from "zod";
import { DecimalCreate, DecimalCreate$Outbound } from "./decimalcreate.js";
import { RetirementDistributionCreate, RetirementDistributionCreate$Outbound } from "./retirementdistributioncreate.js";
import { WireWithdrawalBeneficiaryCreate, WireWithdrawalBeneficiaryCreate$Outbound } from "./wirewithdrawalbeneficiarycreate.js";
import { WireWithdrawalIntermediaryCreate, WireWithdrawalIntermediaryCreate$Outbound } from "./wirewithdrawalintermediarycreate.js";
import { WireWithdrawalRecipientBankCreate, WireWithdrawalRecipientBankCreate$Outbound } from "./wirewithdrawalrecipientbankcreate.js";
/**
 * A withdrawal transfer using the wire mechanism
 */
export type WireWithdrawalCreate = {
    /**
     * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal][] or Python's [decimal.Decimal][].
     *
     * @remarks
     *
     *  [BigDecimal]:
     *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
     *  [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
     */
    amount?: DecimalCreate | undefined;
    /**
     * The person or entity taking receipt of the wired funds
     */
    beneficiary: WireWithdrawalBeneficiaryCreate;
    /**
     * External identifier supplied by the API caller. Each request must have a unique pairing of client_transfer_id and account
     */
    clientTransferId: string;
    /**
     * Whether the entire account balance is being withdrawn. If this field is set to True, a transfer amount must not be specified
     */
    fullDisbursement?: boolean | undefined;
    /**
     * An intermediary party
     */
    intermediary?: WireWithdrawalIntermediaryCreate | undefined;
    /**
     * A distribution from a retirement account.
     */
    iraDistribution?: RetirementDistributionCreate | undefined;
    /**
     * A recipient bank / financial institution
     */
    recipientBank: WireWithdrawalRecipientBankCreate;
};
/** @internal */
export declare const WireWithdrawalCreate$inboundSchema: z.ZodType<WireWithdrawalCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type WireWithdrawalCreate$Outbound = {
    amount?: DecimalCreate$Outbound | undefined;
    beneficiary: WireWithdrawalBeneficiaryCreate$Outbound;
    client_transfer_id: string;
    full_disbursement?: boolean | undefined;
    intermediary?: WireWithdrawalIntermediaryCreate$Outbound | undefined;
    ira_distribution?: RetirementDistributionCreate$Outbound | undefined;
    recipient_bank: WireWithdrawalRecipientBankCreate$Outbound;
};
/** @internal */
export declare const WireWithdrawalCreate$outboundSchema: z.ZodType<WireWithdrawalCreate$Outbound, z.ZodTypeDef, WireWithdrawalCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WireWithdrawalCreate$ {
    /** @deprecated use `WireWithdrawalCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WireWithdrawalCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `WireWithdrawalCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WireWithdrawalCreate$Outbound, z.ZodTypeDef, WireWithdrawalCreate>;
    /** @deprecated use `WireWithdrawalCreate$Outbound` instead. */
    type Outbound = WireWithdrawalCreate$Outbound;
}
//# sourceMappingURL=wirewithdrawalcreate.d.ts.map