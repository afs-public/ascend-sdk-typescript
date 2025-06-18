import * as z from "zod";
import { DecimalCreate, DecimalCreate$Outbound } from "./decimalcreate.js";
import { RetirementDistributionCreate, RetirementDistributionCreate$Outbound } from "./retirementdistributioncreate.js";
/**
 * A withdrawal transfer using the ACH mechanism.
 */
export type AchWithdrawalCreate = {
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
     * The bank relationship to be used for the ACH withdrawal.
     */
    bankRelationship: string;
    /**
     * The external identifier supplied by the API caller. Each request must have a unique pairing of `client_transfer_id` and `account`.
     */
    clientTransferId: string;
    /**
     * Whether the entire account balance is being withdrawn. Must not be true if the `amount` is specified.
     */
    fullDisbursement?: boolean | undefined;
    /**
     * The memo that will appear on the customer's bank statement.
     */
    memo?: string | undefined;
    /**
     * A distribution from a retirement account.
     */
    retirementDistribution?: RetirementDistributionCreate | undefined;
};
/** @internal */
export declare const AchWithdrawalCreate$inboundSchema: z.ZodType<AchWithdrawalCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type AchWithdrawalCreate$Outbound = {
    amount?: DecimalCreate$Outbound | undefined;
    bank_relationship: string;
    client_transfer_id: string;
    full_disbursement?: boolean | undefined;
    memo?: string | undefined;
    retirement_distribution?: RetirementDistributionCreate$Outbound | undefined;
};
/** @internal */
export declare const AchWithdrawalCreate$outboundSchema: z.ZodType<AchWithdrawalCreate$Outbound, z.ZodTypeDef, AchWithdrawalCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchWithdrawalCreate$ {
    /** @deprecated use `AchWithdrawalCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchWithdrawalCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchWithdrawalCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchWithdrawalCreate$Outbound, z.ZodTypeDef, AchWithdrawalCreate>;
    /** @deprecated use `AchWithdrawalCreate$Outbound` instead. */
    type Outbound = AchWithdrawalCreate$Outbound;
}
//# sourceMappingURL=achwithdrawalcreate.d.ts.map