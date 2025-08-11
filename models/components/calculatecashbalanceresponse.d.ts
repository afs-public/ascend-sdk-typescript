import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { CalculateCashBalanceResponseOpenOrderSummary, CalculateCashBalanceResponseOpenOrderSummary$Outbound } from "./calculatecashbalanceresponseopenordersummary.js";
import { CalculateCashBalanceResponseTradeSummary, CalculateCashBalanceResponseTradeSummary$Outbound } from "./calculatecashbalanceresponsetradesummary.js";
import { CalculateCashBalanceResponseTransferSummary, CalculateCashBalanceResponseTransferSummary$Outbound } from "./calculatecashbalanceresponsetransfersummary.js";
/**
 * The account's available cash to withdraw in USD. It is calculated based on the `open_balance_amount` and account activity. This value is always non-negative. If `unadjusted_available_cash_to_withdraw_amount` is negative, this value will be `0`.
 */
export type AvailableCashToWithdrawAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The account's available liquidity in USD including the value of cash and equity positions. It is calculated based on the `open_liquidity_amount` and account activity. This value can be negative.
 */
export type AvailableLiquidityAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The account's fully paid unsettled funds in USD. Fully paid unsettled funds are proceeds from sales of assets paid for with cash and not bought on margin. If `include_fully_paid_unsettled_funds` is `false`, this value is **subtracted** from `open_balance_amount` and `open_liquidity_amount` to calculate `available_cash_to_withdraw_amount` and `available_liquidity_amount`. This value is always non-negative.
 */
export type FullyPaidUnsettledFundsAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The account's starting cash balance for the day in USD as calculated by the margin system. It is used as the base to calculate `available_cash_to_withdraw_amount`. This value is always non-negative.
 */
export type OpenBalanceAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The account's starting liquidity for the day in USD as calculated by the margin system. It includes the value of all asset positions (e.g. cash, equities, fixed income, etc). It is used as the base to calculate `available_liquidity_amount`. This value can be negative.
 */
export type OpenLiquidityAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The account's pending debit dividends in USD. The value is **subtracted** from `open_balance_amount` and `open_liquidity_amount` to calculate `available_cash_to_withdraw_amount` and `available_liquidity_amount`. This value is always non-negative.
 */
export type PendingDebitDividendsAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The account's pending debit interest in USD. The value is **subtracted** from `open_balance_amount` and `open_liquidity_amount` to calculate `available_cash_to_withdraw_amount` and `available_liquidity_amount`. This value is always non-negative.
 */
export type PendingDebitInterestAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The account's unadjusted available cash to withdraw in USD. It is calculated based on the `open_balance_amount` and account activity. This value can be negative.
 */
export type UnadjustedAvailableCashToWithdrawAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The account's withheld deposit threshold. Amounts in `withheld_deposits` up to this threshold will be not be subtracted to calculate `available_cash_to_withdraw_amount` and `available_liquidity_amount`. This value is always non-negative.
 */
export type WithheldDepositThresholdAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The cash balance of an account.
 */
export type CalculateCashBalanceResponse = {
    /**
     * The account.
     */
    account?: string | undefined;
    /**
     * The account's available cash to withdraw in USD. It is calculated based on the `open_balance_amount` and account activity. This value is always non-negative. If `unadjusted_available_cash_to_withdraw_amount` is negative, this value will be `0`.
     */
    availableCashToWithdrawAmount?: AvailableCashToWithdrawAmount | null | undefined;
    /**
     * The account's available liquidity in USD including the value of cash and equity positions. It is calculated based on the `open_liquidity_amount` and account activity. This value can be negative.
     */
    availableLiquidityAmount?: AvailableLiquidityAmount | null | undefined;
    /**
     * The account's fully paid unsettled funds in USD. Fully paid unsettled funds are proceeds from sales of assets paid for with cash and not bought on margin. If `include_fully_paid_unsettled_funds` is `false`, this value is **subtracted** from `open_balance_amount` and `open_liquidity_amount` to calculate `available_cash_to_withdraw_amount` and `available_liquidity_amount`. This value is always non-negative.
     */
    fullyPaidUnsettledFundsAmount?: FullyPaidUnsettledFundsAmount | null | undefined;
    /**
     * Whether fully paid unsettled funds are included in balances.
     */
    includeFullyPaidUnsettledFunds?: boolean | undefined;
    /**
     * The account's intraday buy trades. The net amounts are **subtracted** from `open_balance_amount` and `open_liquidity_amount` to calculate `available_cash_to_withdraw_amount` and `available_liquidity_amount`. Since trades have positive amounts, the calculated values will **decrease**.
     */
    intradayBuyTrades?: Array<CalculateCashBalanceResponseTradeSummary> | undefined;
    /**
     * The account's eligible intraday deposits that have posted to the ledger. Intraday deposits may be eligible based on mechanism (e.g. intraday ICT deposits are eligible for ICT withdrawals, but not ACH withdrawals). The amounts are **added** to `open_balance_amount` and `open_liquidity_amount` to calculate `available_cash_to_withdraw_amount` and `available_liquidity_amount`. Since deposits have positive amounts, the calculated values will **increase**.
     */
    intradayDeposits?: Array<CalculateCashBalanceResponseTransferSummary> | undefined;
    /**
     * The account's intraday returns. The amounts are **subtracted** from `open_balance_amount` and `open_liquidity_amount` to calculate `available_cash_to_withdraw_amount` and `available_liquidity_amount`. Returned deposits will **decrease** calculated values because they have positive amounts and returned withdrawals will **increase** calculated values because they have negative amounts.
     */
    intradayReturns?: Array<CalculateCashBalanceResponseTransferSummary> | undefined;
    /**
     * The account's intraday withdrawals that have posted to the ledger. The amounts are **added** to `open_balance_amount` and `open_liquidity_amount` to calculate `available_cash_to_withdraw_amount` and `available_liquidity_amount`. Since withdrawals have negative amounts, the calculated values will **decrease**.
     */
    intradayWithdrawals?: Array<CalculateCashBalanceResponseTransferSummary> | undefined;
    /**
     * The account's starting cash balance for the day in USD as calculated by the margin system. It is used as the base to calculate `available_cash_to_withdraw_amount`. This value is always non-negative.
     */
    openBalanceAmount?: OpenBalanceAmount | null | undefined;
    /**
     * The account's open buy orders. The expected notional ceilings are **subtracted** from `open_balance_amount` and `open_liquidity_amount` to calculate `available_cash_to_withdraw_amount` and `available_liquidity_amount`. Since open orders have positive expected notional ceilings, the calculated values will **decrease**.
     */
    openBuyOrders?: Array<CalculateCashBalanceResponseOpenOrderSummary> | undefined;
    /**
     * The account's starting liquidity for the day in USD as calculated by the margin system. It includes the value of all asset positions (e.g. cash, equities, fixed income, etc). It is used as the base to calculate `available_liquidity_amount`. This value can be negative.
     */
    openLiquidityAmount?: OpenLiquidityAmount | null | undefined;
    /**
     * The account's pending debit dividends in USD. The value is **subtracted** from `open_balance_amount` and `open_liquidity_amount` to calculate `available_cash_to_withdraw_amount` and `available_liquidity_amount`. This value is always non-negative.
     */
    pendingDebitDividendsAmount?: PendingDebitDividendsAmount | null | undefined;
    /**
     * The account's pending debit interest in USD. The value is **subtracted** from `open_balance_amount` and `open_liquidity_amount` to calculate `available_cash_to_withdraw_amount` and `available_liquidity_amount`. This value is always non-negative.
     */
    pendingDebitInterestAmount?: PendingDebitInterestAmount | null | undefined;
    /**
     * The account's pending withdrawals. Pending withdrawals may need review and have yet to post to the ledger. The amounts are **added** to `open_balance_amount` and `open_liquidity_amount` to calculate `available_cash_to_withdraw_amount` and `available_liquidity_amount`. Since withdrawals have negative amounts, the calculated values will **decrease**.
     */
    pendingWithdrawals?: Array<CalculateCashBalanceResponseTransferSummary> | undefined;
    /**
     * The account's unadjusted available cash to withdraw in USD. It is calculated based on the `open_balance_amount` and account activity. This value can be negative.
     */
    unadjustedAvailableCashToWithdrawAmount?: UnadjustedAvailableCashToWithdrawAmount | null | undefined;
    /**
     * The account's withheld deposit threshold. Amounts in `withheld_deposits` up to this threshold will be not be subtracted to calculate `available_cash_to_withdraw_amount` and `available_liquidity_amount`. This value is always non-negative.
     */
    withheldDepositThresholdAmount?: WithheldDepositThresholdAmount | null | undefined;
    /**
     * The account's withheld deposits. Deposits are withheld if there is a risk of a return (e.g. ACH deposits). Typically, they are withheld for 5 business days after completing. The amounts are **subtracted** from `open_balance_amount` and `open_liquidity_amount` to calculate `available_cash_to_withdraw_amount` and `available_liquidity_amount`. Since deposits have positive amounts, the calculated values will **decrease**. However, withheld deposits will not be subtracted up to the `withheld_deposit_threshold_amount`.
     */
    withheldDeposits?: Array<CalculateCashBalanceResponseTransferSummary> | undefined;
};
/** @internal */
export declare const AvailableCashToWithdrawAmount$inboundSchema: z.ZodType<AvailableCashToWithdrawAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type AvailableCashToWithdrawAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const AvailableCashToWithdrawAmount$outboundSchema: z.ZodType<AvailableCashToWithdrawAmount$Outbound, z.ZodTypeDef, AvailableCashToWithdrawAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AvailableCashToWithdrawAmount$ {
    /** @deprecated use `AvailableCashToWithdrawAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AvailableCashToWithdrawAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `AvailableCashToWithdrawAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AvailableCashToWithdrawAmount$Outbound, z.ZodTypeDef, AvailableCashToWithdrawAmount>;
    /** @deprecated use `AvailableCashToWithdrawAmount$Outbound` instead. */
    type Outbound = AvailableCashToWithdrawAmount$Outbound;
}
export declare function availableCashToWithdrawAmountToJSON(availableCashToWithdrawAmount: AvailableCashToWithdrawAmount): string;
export declare function availableCashToWithdrawAmountFromJSON(jsonString: string): SafeParseResult<AvailableCashToWithdrawAmount, SDKValidationError>;
/** @internal */
export declare const AvailableLiquidityAmount$inboundSchema: z.ZodType<AvailableLiquidityAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type AvailableLiquidityAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const AvailableLiquidityAmount$outboundSchema: z.ZodType<AvailableLiquidityAmount$Outbound, z.ZodTypeDef, AvailableLiquidityAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AvailableLiquidityAmount$ {
    /** @deprecated use `AvailableLiquidityAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AvailableLiquidityAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `AvailableLiquidityAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AvailableLiquidityAmount$Outbound, z.ZodTypeDef, AvailableLiquidityAmount>;
    /** @deprecated use `AvailableLiquidityAmount$Outbound` instead. */
    type Outbound = AvailableLiquidityAmount$Outbound;
}
export declare function availableLiquidityAmountToJSON(availableLiquidityAmount: AvailableLiquidityAmount): string;
export declare function availableLiquidityAmountFromJSON(jsonString: string): SafeParseResult<AvailableLiquidityAmount, SDKValidationError>;
/** @internal */
export declare const FullyPaidUnsettledFundsAmount$inboundSchema: z.ZodType<FullyPaidUnsettledFundsAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type FullyPaidUnsettledFundsAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const FullyPaidUnsettledFundsAmount$outboundSchema: z.ZodType<FullyPaidUnsettledFundsAmount$Outbound, z.ZodTypeDef, FullyPaidUnsettledFundsAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FullyPaidUnsettledFundsAmount$ {
    /** @deprecated use `FullyPaidUnsettledFundsAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FullyPaidUnsettledFundsAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `FullyPaidUnsettledFundsAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FullyPaidUnsettledFundsAmount$Outbound, z.ZodTypeDef, FullyPaidUnsettledFundsAmount>;
    /** @deprecated use `FullyPaidUnsettledFundsAmount$Outbound` instead. */
    type Outbound = FullyPaidUnsettledFundsAmount$Outbound;
}
export declare function fullyPaidUnsettledFundsAmountToJSON(fullyPaidUnsettledFundsAmount: FullyPaidUnsettledFundsAmount): string;
export declare function fullyPaidUnsettledFundsAmountFromJSON(jsonString: string): SafeParseResult<FullyPaidUnsettledFundsAmount, SDKValidationError>;
/** @internal */
export declare const OpenBalanceAmount$inboundSchema: z.ZodType<OpenBalanceAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type OpenBalanceAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const OpenBalanceAmount$outboundSchema: z.ZodType<OpenBalanceAmount$Outbound, z.ZodTypeDef, OpenBalanceAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OpenBalanceAmount$ {
    /** @deprecated use `OpenBalanceAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OpenBalanceAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `OpenBalanceAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OpenBalanceAmount$Outbound, z.ZodTypeDef, OpenBalanceAmount>;
    /** @deprecated use `OpenBalanceAmount$Outbound` instead. */
    type Outbound = OpenBalanceAmount$Outbound;
}
export declare function openBalanceAmountToJSON(openBalanceAmount: OpenBalanceAmount): string;
export declare function openBalanceAmountFromJSON(jsonString: string): SafeParseResult<OpenBalanceAmount, SDKValidationError>;
/** @internal */
export declare const OpenLiquidityAmount$inboundSchema: z.ZodType<OpenLiquidityAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type OpenLiquidityAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const OpenLiquidityAmount$outboundSchema: z.ZodType<OpenLiquidityAmount$Outbound, z.ZodTypeDef, OpenLiquidityAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OpenLiquidityAmount$ {
    /** @deprecated use `OpenLiquidityAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OpenLiquidityAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `OpenLiquidityAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OpenLiquidityAmount$Outbound, z.ZodTypeDef, OpenLiquidityAmount>;
    /** @deprecated use `OpenLiquidityAmount$Outbound` instead. */
    type Outbound = OpenLiquidityAmount$Outbound;
}
export declare function openLiquidityAmountToJSON(openLiquidityAmount: OpenLiquidityAmount): string;
export declare function openLiquidityAmountFromJSON(jsonString: string): SafeParseResult<OpenLiquidityAmount, SDKValidationError>;
/** @internal */
export declare const PendingDebitDividendsAmount$inboundSchema: z.ZodType<PendingDebitDividendsAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type PendingDebitDividendsAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const PendingDebitDividendsAmount$outboundSchema: z.ZodType<PendingDebitDividendsAmount$Outbound, z.ZodTypeDef, PendingDebitDividendsAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PendingDebitDividendsAmount$ {
    /** @deprecated use `PendingDebitDividendsAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PendingDebitDividendsAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `PendingDebitDividendsAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PendingDebitDividendsAmount$Outbound, z.ZodTypeDef, PendingDebitDividendsAmount>;
    /** @deprecated use `PendingDebitDividendsAmount$Outbound` instead. */
    type Outbound = PendingDebitDividendsAmount$Outbound;
}
export declare function pendingDebitDividendsAmountToJSON(pendingDebitDividendsAmount: PendingDebitDividendsAmount): string;
export declare function pendingDebitDividendsAmountFromJSON(jsonString: string): SafeParseResult<PendingDebitDividendsAmount, SDKValidationError>;
/** @internal */
export declare const PendingDebitInterestAmount$inboundSchema: z.ZodType<PendingDebitInterestAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type PendingDebitInterestAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const PendingDebitInterestAmount$outboundSchema: z.ZodType<PendingDebitInterestAmount$Outbound, z.ZodTypeDef, PendingDebitInterestAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PendingDebitInterestAmount$ {
    /** @deprecated use `PendingDebitInterestAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PendingDebitInterestAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `PendingDebitInterestAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PendingDebitInterestAmount$Outbound, z.ZodTypeDef, PendingDebitInterestAmount>;
    /** @deprecated use `PendingDebitInterestAmount$Outbound` instead. */
    type Outbound = PendingDebitInterestAmount$Outbound;
}
export declare function pendingDebitInterestAmountToJSON(pendingDebitInterestAmount: PendingDebitInterestAmount): string;
export declare function pendingDebitInterestAmountFromJSON(jsonString: string): SafeParseResult<PendingDebitInterestAmount, SDKValidationError>;
/** @internal */
export declare const UnadjustedAvailableCashToWithdrawAmount$inboundSchema: z.ZodType<UnadjustedAvailableCashToWithdrawAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type UnadjustedAvailableCashToWithdrawAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const UnadjustedAvailableCashToWithdrawAmount$outboundSchema: z.ZodType<UnadjustedAvailableCashToWithdrawAmount$Outbound, z.ZodTypeDef, UnadjustedAvailableCashToWithdrawAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UnadjustedAvailableCashToWithdrawAmount$ {
    /** @deprecated use `UnadjustedAvailableCashToWithdrawAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UnadjustedAvailableCashToWithdrawAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `UnadjustedAvailableCashToWithdrawAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UnadjustedAvailableCashToWithdrawAmount$Outbound, z.ZodTypeDef, UnadjustedAvailableCashToWithdrawAmount>;
    /** @deprecated use `UnadjustedAvailableCashToWithdrawAmount$Outbound` instead. */
    type Outbound = UnadjustedAvailableCashToWithdrawAmount$Outbound;
}
export declare function unadjustedAvailableCashToWithdrawAmountToJSON(unadjustedAvailableCashToWithdrawAmount: UnadjustedAvailableCashToWithdrawAmount): string;
export declare function unadjustedAvailableCashToWithdrawAmountFromJSON(jsonString: string): SafeParseResult<UnadjustedAvailableCashToWithdrawAmount, SDKValidationError>;
/** @internal */
export declare const WithheldDepositThresholdAmount$inboundSchema: z.ZodType<WithheldDepositThresholdAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type WithheldDepositThresholdAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const WithheldDepositThresholdAmount$outboundSchema: z.ZodType<WithheldDepositThresholdAmount$Outbound, z.ZodTypeDef, WithheldDepositThresholdAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WithheldDepositThresholdAmount$ {
    /** @deprecated use `WithheldDepositThresholdAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WithheldDepositThresholdAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `WithheldDepositThresholdAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WithheldDepositThresholdAmount$Outbound, z.ZodTypeDef, WithheldDepositThresholdAmount>;
    /** @deprecated use `WithheldDepositThresholdAmount$Outbound` instead. */
    type Outbound = WithheldDepositThresholdAmount$Outbound;
}
export declare function withheldDepositThresholdAmountToJSON(withheldDepositThresholdAmount: WithheldDepositThresholdAmount): string;
export declare function withheldDepositThresholdAmountFromJSON(jsonString: string): SafeParseResult<WithheldDepositThresholdAmount, SDKValidationError>;
/** @internal */
export declare const CalculateCashBalanceResponse$inboundSchema: z.ZodType<CalculateCashBalanceResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CalculateCashBalanceResponse$Outbound = {
    account?: string | undefined;
    available_cash_to_withdraw_amount?: AvailableCashToWithdrawAmount$Outbound | null | undefined;
    available_liquidity_amount?: AvailableLiquidityAmount$Outbound | null | undefined;
    fully_paid_unsettled_funds_amount?: FullyPaidUnsettledFundsAmount$Outbound | null | undefined;
    include_fully_paid_unsettled_funds?: boolean | undefined;
    intraday_buy_trades?: Array<CalculateCashBalanceResponseTradeSummary$Outbound> | undefined;
    intraday_deposits?: Array<CalculateCashBalanceResponseTransferSummary$Outbound> | undefined;
    intraday_returns?: Array<CalculateCashBalanceResponseTransferSummary$Outbound> | undefined;
    intraday_withdrawals?: Array<CalculateCashBalanceResponseTransferSummary$Outbound> | undefined;
    open_balance_amount?: OpenBalanceAmount$Outbound | null | undefined;
    open_buy_orders?: Array<CalculateCashBalanceResponseOpenOrderSummary$Outbound> | undefined;
    open_liquidity_amount?: OpenLiquidityAmount$Outbound | null | undefined;
    pending_debit_dividends_amount?: PendingDebitDividendsAmount$Outbound | null | undefined;
    pending_debit_interest_amount?: PendingDebitInterestAmount$Outbound | null | undefined;
    pending_withdrawals?: Array<CalculateCashBalanceResponseTransferSummary$Outbound> | undefined;
    unadjusted_available_cash_to_withdraw_amount?: UnadjustedAvailableCashToWithdrawAmount$Outbound | null | undefined;
    withheld_deposit_threshold_amount?: WithheldDepositThresholdAmount$Outbound | null | undefined;
    withheld_deposits?: Array<CalculateCashBalanceResponseTransferSummary$Outbound> | undefined;
};
/** @internal */
export declare const CalculateCashBalanceResponse$outboundSchema: z.ZodType<CalculateCashBalanceResponse$Outbound, z.ZodTypeDef, CalculateCashBalanceResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CalculateCashBalanceResponse$ {
    /** @deprecated use `CalculateCashBalanceResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CalculateCashBalanceResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CalculateCashBalanceResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CalculateCashBalanceResponse$Outbound, z.ZodTypeDef, CalculateCashBalanceResponse>;
    /** @deprecated use `CalculateCashBalanceResponse$Outbound` instead. */
    type Outbound = CalculateCashBalanceResponse$Outbound;
}
export declare function calculateCashBalanceResponseToJSON(calculateCashBalanceResponse: CalculateCashBalanceResponse): string;
export declare function calculateCashBalanceResponseFromJSON(jsonString: string): SafeParseResult<CalculateCashBalanceResponse, SDKValidationError>;
//# sourceMappingURL=calculatecashbalanceresponse.d.ts.map