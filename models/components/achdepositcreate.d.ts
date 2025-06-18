import * as z from "zod";
import { DecimalCreate, DecimalCreate$Outbound } from "./decimalcreate.js";
import { RetirementContributionCreate, RetirementContributionCreate$Outbound } from "./retirementcontributioncreate.js";
/**
 * A deposit transfer using the ACH mechanism.
 */
export type AchDepositCreate = {
    /**
     * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal][] or Python's [decimal.Decimal][].
     *
     * @remarks
     *
     *  [BigDecimal]:
     *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
     *  [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
     */
    amount: DecimalCreate;
    /**
     * The bank relationship to be used for the ACH deposit.
     */
    bankRelationship: string;
    /**
     * The external identifier supplied by the API caller. Each request must have a unique pairing of `client_transfer_id` and `account`.
     */
    clientTransferId: string;
    /**
     * The memo that will appear on the customer's bank statement.
     */
    memo?: string | undefined;
    /**
     * A contribution to a retirement account.
     */
    retirementContribution?: RetirementContributionCreate | undefined;
};
/** @internal */
export declare const AchDepositCreate$inboundSchema: z.ZodType<AchDepositCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type AchDepositCreate$Outbound = {
    amount: DecimalCreate$Outbound;
    bank_relationship: string;
    client_transfer_id: string;
    memo?: string | undefined;
    retirement_contribution?: RetirementContributionCreate$Outbound | undefined;
};
/** @internal */
export declare const AchDepositCreate$outboundSchema: z.ZodType<AchDepositCreate$Outbound, z.ZodTypeDef, AchDepositCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AchDepositCreate$ {
    /** @deprecated use `AchDepositCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AchDepositCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `AchDepositCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AchDepositCreate$Outbound, z.ZodTypeDef, AchDepositCreate>;
    /** @deprecated use `AchDepositCreate$Outbound` instead. */
    type Outbound = AchDepositCreate$Outbound;
}
//# sourceMappingURL=achdepositcreate.d.ts.map