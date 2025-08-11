import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DecimalCreate, DecimalCreate$Outbound } from "./decimalcreate.js";
import { RetirementContributionCreate, RetirementContributionCreate$Outbound } from "./retirementcontributioncreate.js";
import { RetirementDistributionCreate, RetirementDistributionCreate$Outbound } from "./retirementdistributioncreate.js";
/**
 * A cash journal transfer. Funds are moved from a source account to a destination account
 */
export type CashJournalCreate = {
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
     * The external identifier supplied by the API caller Each request must have a unique pairing of `client_transfer_id` and `source_account`
     */
    clientTransferId: string;
    /**
     * The account that funds will be moved to
     */
    destinationAccount: string;
    /**
     * Whether the entire source account balance is being withdrawn Must not be true if the `amount` is specified
     */
    fullDisbursement?: boolean | undefined;
    /**
     * A contribution to a retirement account.
     */
    retirementContribution?: RetirementContributionCreate | undefined;
    /**
     * A distribution from a retirement account.
     */
    retirementDistribution?: RetirementDistributionCreate | undefined;
    /**
     * The account that funds will be moved from
     */
    sourceAccount: string;
};
/** @internal */
export declare const CashJournalCreate$inboundSchema: z.ZodType<CashJournalCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type CashJournalCreate$Outbound = {
    amount?: DecimalCreate$Outbound | undefined;
    client_transfer_id: string;
    destination_account: string;
    full_disbursement?: boolean | undefined;
    retirement_contribution?: RetirementContributionCreate$Outbound | undefined;
    retirement_distribution?: RetirementDistributionCreate$Outbound | undefined;
    source_account: string;
};
/** @internal */
export declare const CashJournalCreate$outboundSchema: z.ZodType<CashJournalCreate$Outbound, z.ZodTypeDef, CashJournalCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CashJournalCreate$ {
    /** @deprecated use `CashJournalCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CashJournalCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `CashJournalCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CashJournalCreate$Outbound, z.ZodTypeDef, CashJournalCreate>;
    /** @deprecated use `CashJournalCreate$Outbound` instead. */
    type Outbound = CashJournalCreate$Outbound;
}
export declare function cashJournalCreateToJSON(cashJournalCreate: CashJournalCreate): string;
export declare function cashJournalCreateFromJSON(jsonString: string): SafeParseResult<CashJournalCreate, SDKValidationError>;
//# sourceMappingURL=cashjournalcreate.d.ts.map