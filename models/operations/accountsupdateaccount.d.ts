import * as z from "zod";
import * as components from "../components/index.js";
export type AccountsUpdateAccountRequest = {
    /**
     * The account id.
     */
    accountId: string;
    /**
     * The list of fields to update. Updatable Fields  `advised`  `cat_account_holder_type`  `primary_registered_rep_id`  `investment_profile.account_goals.investment_objective`  `investment_profile.account_goals.risk_tolerance`  `investment_profile.account_goals.liquidity_needs`  `investment_profile.account_goals.time_horizon`  `investment_profile.customer_profile.annual_income_range_usd`  `investment_profile.customer_profile.liquid_net_worth_range_usd`  `investment_profile.customer_profile.total_net_worth_range_usd`  `investment_profile.customer_profile.federal_tax_bracket`  `wrap_fee_billed`  `managed`
     */
    updateMask?: string | undefined;
    accountRequestUpdate: components.AccountRequestUpdate;
};
export type AccountsUpdateAccountResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    account?: components.Account | undefined;
    /**
     * INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details.
     */
    status?: components.Status | undefined;
};
/** @internal */
export declare const AccountsUpdateAccountRequest$inboundSchema: z.ZodType<AccountsUpdateAccountRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsUpdateAccountRequest$Outbound = {
    account_id: string;
    update_mask?: string | undefined;
    AccountRequestUpdate: components.AccountRequestUpdate$Outbound;
};
/** @internal */
export declare const AccountsUpdateAccountRequest$outboundSchema: z.ZodType<AccountsUpdateAccountRequest$Outbound, z.ZodTypeDef, AccountsUpdateAccountRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsUpdateAccountRequest$ {
    /** @deprecated use `AccountsUpdateAccountRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsUpdateAccountRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsUpdateAccountRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsUpdateAccountRequest$Outbound, z.ZodTypeDef, AccountsUpdateAccountRequest>;
    /** @deprecated use `AccountsUpdateAccountRequest$Outbound` instead. */
    type Outbound = AccountsUpdateAccountRequest$Outbound;
}
/** @internal */
export declare const AccountsUpdateAccountResponse$inboundSchema: z.ZodType<AccountsUpdateAccountResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountsUpdateAccountResponse$Outbound = {
    HttpMeta: components.HTTPMetadata$Outbound;
    Account?: components.Account$Outbound | undefined;
    Status?: components.Status$Outbound | undefined;
};
/** @internal */
export declare const AccountsUpdateAccountResponse$outboundSchema: z.ZodType<AccountsUpdateAccountResponse$Outbound, z.ZodTypeDef, AccountsUpdateAccountResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountsUpdateAccountResponse$ {
    /** @deprecated use `AccountsUpdateAccountResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountsUpdateAccountResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountsUpdateAccountResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountsUpdateAccountResponse$Outbound, z.ZodTypeDef, AccountsUpdateAccountResponse>;
    /** @deprecated use `AccountsUpdateAccountResponse$Outbound` instead. */
    type Outbound = AccountsUpdateAccountResponse$Outbound;
}
//# sourceMappingURL=accountsupdateaccount.d.ts.map