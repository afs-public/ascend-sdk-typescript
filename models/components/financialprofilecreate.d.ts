import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { OtherAccountsCreate, OtherAccountsCreate$Outbound } from "./otheraccountscreate.js";
/**
 * Disclosure of the entity account owner's financial relationships and source of brokerage funds; facilitates the creation of the overall customer risk profile
 */
export type FinancialProfileCreate = {
    /**
     * Bank names with whom the entity maintains a relationship with (e.g., accounts held with the bank)
     */
    bankingRelationships: Array<string>;
    /**
     * A customer-disclosed list of other Apex-held accounts owned by the Entity applicant at the time of this account's application; expressed as zero, one, or many account numbers
     */
    otherAccounts: OtherAccountsCreate;
    /**
     * The primary source of funds that will be deposited to this account
     */
    primarySourceOfDepositedFunds?: string | undefined;
};
/** @internal */
export declare const FinancialProfileCreate$inboundSchema: z.ZodType<FinancialProfileCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type FinancialProfileCreate$Outbound = {
    banking_relationships: Array<string>;
    other_accounts: OtherAccountsCreate$Outbound;
    primary_source_of_deposited_funds?: string | undefined;
};
/** @internal */
export declare const FinancialProfileCreate$outboundSchema: z.ZodType<FinancialProfileCreate$Outbound, z.ZodTypeDef, FinancialProfileCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FinancialProfileCreate$ {
    /** @deprecated use `FinancialProfileCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FinancialProfileCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `FinancialProfileCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FinancialProfileCreate$Outbound, z.ZodTypeDef, FinancialProfileCreate>;
    /** @deprecated use `FinancialProfileCreate$Outbound` instead. */
    type Outbound = FinancialProfileCreate$Outbound;
}
export declare function financialProfileCreateToJSON(financialProfileCreate: FinancialProfileCreate): string;
export declare function financialProfileCreateFromJSON(jsonString: string): SafeParseResult<FinancialProfileCreate, SDKValidationError>;
//# sourceMappingURL=financialprofilecreate.d.ts.map