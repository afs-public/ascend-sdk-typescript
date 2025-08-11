import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { OptionDeliverable, OptionDeliverable$Outbound } from "./optiondeliverable.js";
/**
 * Indicates the type of currency
 */
export declare enum CurrencyType {
    CurrencyTypeUnspecified = "CURRENCY_TYPE_UNSPECIFIED",
    Currency = "CURRENCY",
    CurrencyEquivalent = "CURRENCY_EQUIVALENT"
}
/**
 * Indicates the type of currency
 */
export type CurrencyTypeOpen = OpenEnum<typeof CurrencyType>;
/**
 * Currency specific asset details
 */
export type Currency = {
    /**
     * Indicates the type of currency
     */
    currencyType?: CurrencyTypeOpen | undefined;
    /**
     * Indicates the name of asset for the underlying payment_currency when the `currency_type` is `CURRENCY_EQUIVALENT`
     */
    paymentCurrency?: string | undefined;
};
/**
 * the code indicating the type of associated security.
 */
export declare enum AssetEquityType {
    EquityTypeUnspecified = "EQUITY_TYPE_UNSPECIFIED",
    CommonStock = "COMMON_STOCK",
    PreferredStock = "PREFERRED_STOCK",
    PreferredAdr = "PREFERRED_ADR",
    SpecialStock = "SPECIAL_STOCK",
    Index = "INDEX",
    Warrant = "WARRANT",
    Adr = "ADR",
    Rights = "RIGHTS",
    SharesOfBeneficialInterest = "SHARES_OF_BENEFICIAL_INTEREST",
    Certificates = "CERTIFICATES",
    Units = "UNITS",
    DebtIssue = "DEBT_ISSUE",
    EquityTypeOption = "EQUITY_TYPE_OPTION",
    Etf = "ETF"
}
/**
 * the code indicating the type of associated security.
 */
export type AssetEquityTypeOpen = OpenEnum<typeof AssetEquityType>;
/**
 * Equity specific asset details
 */
export type Equity = {
    /**
     * Indicates whether the symbol is eligible for fractional or notional execution for orders at Apex
     */
    fractionable?: boolean | undefined;
    /**
     * Indicates whether the symbol is designated as “Liquidate Only,” and, if so, the system rejects purchases
     */
    liquidate?: boolean | undefined;
    /**
     * the code indicating the type of associated security.
     */
    type?: AssetEquityTypeOpen | undefined;
};
/**
 * The type of call
 */
export declare enum CallType {
    CallTypeUnspecified = "CALL_TYPE_UNSPECIFIED",
    Ordinary = "ORDINARY",
    Special = "SPECIAL",
    MakeWhole = "MAKE_WHOLE",
    Regulatory = "REGULATORY"
}
/**
 * The type of call
 */
export type CallTypeOpen = OpenEnum<typeof CallType>;
/**
 * Frequency of payments
 */
export declare enum CouponFrequency {
    CouponFrequencyUnspecified = "COUPON_FREQUENCY_UNSPECIFIED",
    SemiAnnual = "SEMI_ANNUAL",
    Monthly = "MONTHLY",
    AtMaturity = "AT_MATURITY",
    Zero = "ZERO",
    Quarterly = "QUARTERLY",
    Annual = "ANNUAL"
}
/**
 * Frequency of payments
 */
export type CouponFrequencyOpen = OpenEnum<typeof CouponFrequency>;
/**
 * A measure of income an investor can expect to receive expressed as a percent
 */
export type CouponRate = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Type of coupon rate
 */
export declare enum CouponType {
    CouponTypeUnspecified = "COUPON_TYPE_UNSPECIFIED",
    CouponTypeFixed = "COUPON_TYPE_FIXED",
    CouponTypeZero = "COUPON_TYPE_ZERO"
}
/**
 * Type of coupon rate
 */
export type CouponTypeOpen = OpenEnum<typeof CouponType>;
/**
 * Weighted average time until a bond’s cash flows are received in years
 */
export type Duration = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * date of first coupon
 */
export type FirstCouponDate = {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | undefined;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | undefined;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | undefined;
};
/**
 * The status of the fixed income
 */
export declare enum FixedIncomeStatus {
    FixedIncomeStatusUnspecified = "FIXED_INCOME_STATUS_UNSPECIFIED",
    Outstanding = "OUTSTANDING",
    Matured = "MATURED",
    Called = "CALLED",
    Unknown = "UNKNOWN",
    Defaulted = "DEFAULTED",
    Converted = "CONVERTED",
    Tendered = "TENDERED",
    PreIssuance = "PRE_ISSUANCE",
    Liquidated = "LIQUIDATED",
    Repurchased = "REPURCHASED",
    Repaid = "REPAID",
    Restructured = "RESTRUCTURED",
    Put = "PUT",
    Funged = "FUNGED"
}
/**
 * The status of the fixed income
 */
export type FixedIncomeStatusOpen = OpenEnum<typeof FixedIncomeStatus>;
/**
 * The type of treasury
 */
export declare enum FixedIncomeSubtype {
    FixedIncomeSubtypeUnspecified = "FIXED_INCOME_SUBTYPE_UNSPECIFIED",
    Bond = "BOND",
    Strips = "STRIPS",
    Bill = "BILL",
    Note = "NOTE",
    Tips = "TIPS"
}
/**
 * The type of treasury
 */
export type FixedIncomeSubtypeOpen = OpenEnum<typeof FixedIncomeSubtype>;
/**
 * Type of fixed income security
 */
export declare enum FixedIncomeType {
    FixedIncomeTypeUnspecified = "FIXED_INCOME_TYPE_UNSPECIFIED",
    Municipal = "MUNICIPAL",
    Corporate = "CORPORATE",
    Cd = "CD",
    Agency = "AGENCY",
    Treasury = "TREASURY",
    Government = "GOVERNMENT",
    ForeignGovernment = "FOREIGN_GOVERNMENT"
}
/**
 * Type of fixed income security
 */
export type FixedIncomeTypeOpen = OpenEnum<typeof FixedIncomeType>;
/**
 * The date of issuance
 */
export type AssetIssueDate = {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | undefined;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | undefined;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | undefined;
};
/**
 * Total size of the bond issue in the issuing currency
 */
export type IssueSize = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * date of last coupon
 */
export type LastCouponDate = {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | undefined;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | undefined;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | undefined;
};
/**
 * The date the fixed income security matures
 */
export type MaturityDate = {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | undefined;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | undefined;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | undefined;
};
/**
 * The date of the next call
 */
export type NextCallDate = {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | undefined;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | undefined;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | undefined;
};
/**
 * Date of next coupon payment
 */
export type NextCouponDate = {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | undefined;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | undefined;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | undefined;
};
/**
 * The amount the issuer agrees to pay the investor upon maturity
 */
export type ParValue = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The price at which fixed income security was issued as a percentage of par value in %
 */
export type PriceAtIssuance = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Standard & Poor's (S&P) rating of the creditworthiness of borrowers. Correspondents must be configured to view this field.
 */
export declare enum SpRating {
    SpRatingUnspecified = "SP_RATING_UNSPECIFIED",
    Aaa = "AAA",
    AaPlus = "AA_PLUS",
    Aa = "AA",
    AaMinus = "AA_MINUS",
    APlus = "A_PLUS",
    A = "A",
    AMinus = "A_MINUS",
    BbbPlus = "BBB_PLUS",
    Bbb = "BBB",
    BbbMinus = "BBB_MINUS",
    BbPlus = "BB_PLUS",
    Bb = "BB",
    BbMinus = "BB_MINUS",
    BPlus = "B_PLUS",
    B = "B",
    BMinus = "B_MINUS",
    CccPlus = "CCC_PLUS",
    Ccc = "CCC",
    CccMinus = "CCC_MINUS",
    Cc = "CC",
    C = "C",
    D = "D",
    Nr = "NR",
    Sp1Plus = "SP_1_PLUS",
    Sp1 = "SP_1",
    Sp1Minus = "SP_1_MINUS",
    A1Plus = "A_1_PLUS",
    A1 = "A_1",
    A1Minus = "A_1_MINUS"
}
/**
 * Standard & Poor's (S&P) rating of the creditworthiness of borrowers. Correspondents must be configured to view this field.
 */
export type SpRatingOpen = OpenEnum<typeof SpRating>;
/**
 * The date of Standard & Poor's (S&P) rating of the creditworthiness of borrowers. Correspondents must be configured to view this field.
 */
export type SpRatingDate = {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | undefined;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | undefined;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | undefined;
};
/**
 * FixedIncome specific asset details
 */
export type FixedIncome = {
    /**
     * The type of call
     */
    callType?: CallTypeOpen | undefined;
    /**
     * Boolean that indicates whether an issuer may redeem the security before its maturity date
     */
    callable?: boolean | undefined;
    /**
     * Boolean that indicates whether an investor may convert to a number of shares of issuer common stock
     */
    convertible?: boolean | undefined;
    /**
     * Frequency of payments
     */
    couponFrequency?: CouponFrequencyOpen | undefined;
    /**
     * A measure of income an investor can expect to receive expressed as a percent
     */
    couponRate?: CouponRate | null | undefined;
    /**
     * Type of coupon rate
     */
    couponType?: CouponTypeOpen | undefined;
    /**
     * Weighted average time until a bond’s cash flows are received in years
     */
    duration?: Duration | null | undefined;
    /**
     * date of first coupon
     */
    firstCouponDate?: FirstCouponDate | null | undefined;
    /**
     * The status of the fixed income
     */
    fixedIncomeStatus?: FixedIncomeStatusOpen | undefined;
    /**
     * The type of treasury
     */
    fixedIncomeSubtype?: FixedIncomeSubtypeOpen | undefined;
    /**
     * Type of fixed income security
     */
    fixedIncomeType?: FixedIncomeTypeOpen | undefined;
    /**
     * Boolean that indicates whether a security is backed by an insurance policy
     */
    insured?: boolean | undefined;
    /**
     * The date of issuance
     */
    issueDate?: AssetIssueDate | null | undefined;
    /**
     * Total size of the bond issue in the issuing currency
     */
    issueSize?: IssueSize | null | undefined;
    /**
     * Name of the bond issuer
     */
    issuer?: string | undefined;
    /**
     * date of last coupon
     */
    lastCouponDate?: LastCouponDate | null | undefined;
    /**
     * The date the fixed income security matures
     */
    maturityDate?: MaturityDate | null | undefined;
    /**
     * The date of the next call
     */
    nextCallDate?: NextCallDate | null | undefined;
    /**
     * Date of next coupon payment
     */
    nextCouponDate?: NextCouponDate | null | undefined;
    /**
     * The amount the issuer agrees to pay the investor upon maturity
     */
    parValue?: ParValue | null | undefined;
    /**
     * Indicates whether the bond is perpetual
     */
    perpetual?: boolean | undefined;
    /**
     * The price at which fixed income security was issued as a percentage of par value in %
     */
    priceAtIssuance?: PriceAtIssuance | null | undefined;
    /**
     * Standard & Poor's (S&P) rating of the creditworthiness of borrowers. Correspondents must be configured to view this field.
     */
    spRating?: SpRatingOpen | undefined;
    /**
     * The date of Standard & Poor's (S&P) rating of the creditworthiness of borrowers. Correspondents must be configured to view this field.
     */
    spRatingDate?: SpRatingDate | null | undefined;
    /**
     * The symbol for the issuer’s equity
     */
    underlyingSymbol?: string | undefined;
};
/**
 * Index specific asset details
 */
export type Index = {};
/**
 * The threshold at which Apex would need to notify the fund family of an incoming large order.
 */
export type LargeOrderNotificationAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Identifies type of mutual fund
 */
export declare enum MutualFundType {
    MutualFundTypeUnspecified = "MUTUAL_FUND_TYPE_UNSPECIFIED",
    Bond = "BOND",
    MoneyMarketFund = "MONEY_MARKET_FUND",
    Equity = "EQUITY"
}
/**
 * Identifies type of mutual fund
 */
export type MutualFundTypeOpen = OpenEnum<typeof MutualFundType>;
/**
 * MutualFund specific asset details
 */
export type MutualFund = {
    /**
     * Name of the fund company
     */
    fundFamily?: string | undefined;
    /**
     * The threshold at which Apex would need to notify the fund family of an incoming large order.
     */
    largeOrderNotificationAmount?: LargeOrderNotificationAmount | null | undefined;
    /**
     * Identifies type of mutual fund
     */
    mutualFundType?: MutualFundTypeOpen | undefined;
    /**
     * Indicates the type and number of fees charged for the shares in a fund
     */
    shareClass?: string | undefined;
};
/**
 * Indicates whether the option is a Call or a Put. A Put entitles the holder to sell shares at the specified strike_price, while a Call entitles the holder to buy shares at the specified strike_price.
 */
export declare enum CallPut {
    CallPutUnspecified = "CALL_PUT_UNSPECIFIED",
    Call = "CALL",
    Put = "PUT"
}
/**
 * Indicates whether the option is a Call or a Put. A Put entitles the holder to sell shares at the specified strike_price, while a Call entitles the holder to buy shares at the specified strike_price.
 */
export type CallPutOpen = OpenEnum<typeof CallPut>;
/**
 * Indicates how and when an option can be exercised, either American (exercise any time before expiration) or European (exercise only at expiration).
 */
export declare enum ExerciseStyle {
    ExerciseStyleUnspecified = "EXERCISE_STYLE_UNSPECIFIED",
    American = "AMERICAN",
    European = "EUROPEAN"
}
/**
 * Indicates how and when an option can be exercised, either American (exercise any time before expiration) or European (exercise only at expiration).
 */
export type ExerciseStyleOpen = OpenEnum<typeof ExerciseStyle>;
/**
 * The date when the option contract expires. This will typically match the series_date but can vary when the option expiration is accelerated for a given series. This field will represent the actual expiration date.
 */
export type AssetExpirationDate = {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | undefined;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | undefined;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | undefined;
};
/**
 * Classification is the category of option that the option falls into These are based on how the contract was written. Only STANDARD is supported at this time.
 */
export declare enum Classification {
    ClassificationUnspecified = "CLASSIFICATION_UNSPECIFIED",
    Standard = "STANDARD",
    Flex = "FLEX"
}
/**
 * Classification is the category of option that the option falls into These are based on how the contract was written. Only STANDARD is supported at this time.
 */
export type ClassificationOpen = OpenEnum<typeof Classification>;
/**
 * The penny pilot indicator of the option
 */
export declare enum PennyPilotIndicator {
    PennyPilotIndicatorUnspecified = "PENNY_PILOT_INDICATOR_UNSPECIFIED",
    PennyPilot = "PENNY_PILOT",
    NonPennyPilot = "NON_PENNY_PILOT"
}
/**
 * The penny pilot indicator of the option
 */
export type PennyPilotIndicatorOpen = OpenEnum<typeof PennyPilotIndicator>;
/**
 * The position Limit for a given option set at the OCC.
 */
export type PositionLimit = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Indicates whether the option is designated to settle at the market's opening price on the expiration date.
 */
export declare enum SettlementStyle {
    SettlementStyleUnspecified = "SETTLEMENT_STYLE_UNSPECIFIED",
    SettleOnOpen = "SETTLE_ON_OPEN",
    SettleOnClose = "SETTLE_ON_CLOSE"
}
/**
 * Indicates whether the option is designated to settle at the market's opening price on the expiration date.
 */
export type SettlementStyleOpen = OpenEnum<typeof SettlementStyle>;
/**
 * A number that identifies where the decimal for a strike price should be within the OSI.  For example, in the OSI: AAPL 210416C00120000,   a strike_multiplier of 1 indicates that the strike price is $120.000 and a strike_multiplier of .1 indicates that the strike price is $12.00.
 *
 * @remarks
 *
 *  strike_multiplier is: always 1.0 for Equity Options, usually 1.0 for Index Options, but is 0.1 for “half-point” Index Options.
 */
export type StrikeMultiplier = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * A number defined as 1 unit of strike value.  For example, if the strike price multiplier = 100, then a strike of $17 equals $1,700. This field is used for  calculating extended strike values.  The number of units represented by the Strike Price Multiplier is comprised of:
 *
 * @remarks
 *    1) Number of shares for Equity Options
 *    2) A dollar amount for Index Options
 *  The typical value of this multiplier for Equity and Index options is 100
 *  For mini options the typical value is 10
 */
export type StrikePriceMultiplier = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * A number defined as 1 unit of trade premium value.  For example, if the multiplier = 100, then a premium of $1.50 equals $150. This field is used for calculating premium money extensions.  The number of units represented by the multiplier is comprised of:
 *
 * @remarks
 *   1) Number of shares for Equity Options
 *   2) A dollar amount for Index Options
 *  The typical value of this multiplier for Equity and Index options is 100. In the majority of cases,
 *  the Trade Premium has to be extended to the same base as the Strike Price. Therefore, the
 *   Trade Value is usually the same as the Strike Value.
 *  For mini options the typical value is 10
 */
export type TradeValueMultiplier = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The full option root information
 */
export type OptionRoot = {
    /**
     * Classification is the category of option that the option falls into These are based on how the contract was written. Only STANDARD is supported at this time.
     */
    classification?: ClassificationOpen | undefined;
    /**
     * deliverables is the deliverables of the option More than 20 deliverable assets are not supported.
     */
    deliverables?: Array<OptionDeliverable> | undefined;
    /**
     * The penny pilot indicator of the option
     */
    pennyPilotIndicator?: PennyPilotIndicatorOpen | undefined;
    /**
     * The position Limit for a given option set at the OCC.
     */
    positionLimit?: PositionLimit | null | undefined;
    /**
     * Unique identifier for the underlying asset and its associated option contracts, which reflects any changes to the underlying asset caused by corporate actions such as mergers, splits, or spin-offs by updating the root with a numerical value to reflect the adjusted terms or entity.
     */
    rootSymbol?: string | undefined;
    /**
     * Indicates whether the option is designated to settle at the market's opening price on the expiration date.
     */
    settlementStyle?: SettlementStyleOpen | undefined;
    /**
     * A number that identifies where the decimal for a strike price should be within the OSI.  For example, in the OSI: AAPL 210416C00120000,   a strike_multiplier of 1 indicates that the strike price is $120.000 and a strike_multiplier of .1 indicates that the strike price is $12.00.
     *
     * @remarks
     *
     *  strike_multiplier is: always 1.0 for Equity Options, usually 1.0 for Index Options, but is 0.1 for “half-point” Index Options.
     */
    strikeMultiplier?: StrikeMultiplier | null | undefined;
    /**
     * A number defined as 1 unit of strike value.  For example, if the strike price multiplier = 100, then a strike of $17 equals $1,700. This field is used for  calculating extended strike values.  The number of units represented by the Strike Price Multiplier is comprised of:
     *
     * @remarks
     *    1) Number of shares for Equity Options
     *    2) A dollar amount for Index Options
     *  The typical value of this multiplier for Equity and Index options is 100
     *  For mini options the typical value is 10
     */
    strikePriceMultiplier?: StrikePriceMultiplier | null | undefined;
    /**
     * A number defined as 1 unit of trade premium value.  For example, if the multiplier = 100, then a premium of $1.50 equals $150. This field is used for calculating premium money extensions.  The number of units represented by the multiplier is comprised of:
     *
     * @remarks
     *   1) Number of shares for Equity Options
     *   2) A dollar amount for Index Options
     *  The typical value of this multiplier for Equity and Index options is 100. In the majority of cases,
     *  the Trade Premium has to be extended to the same base as the Strike Price. Therefore, the
     *   Trade Value is usually the same as the Strike Value.
     *  For mini options the typical value is 10
     */
    tradeValueMultiplier?: TradeValueMultiplier | null | undefined;
};
/**
 * Type of deliverable asset the option is set to deliver upon expiry.
 */
export declare enum OptionType {
    OptionTypeUnspecified = "OPTION_TYPE_UNSPECIFIED",
    Equity = "EQUITY",
    Index = "INDEX"
}
/**
 * Type of deliverable asset the option is set to deliver upon expiry.
 */
export type OptionTypeOpen = OpenEnum<typeof OptionType>;
/**
 * The date of the option contract this is the value in the OSI and is typically the same as the expiration_date but can vary when the option expiration is accelerated.
 */
export type SeriesDate = {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | undefined;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | undefined;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | undefined;
};
/**
 * Specifies how an option is settled at expiration, either Physical (delivery of the underlying asset) or Cash (payment of the cash difference).
 */
export declare enum SettlementMethod {
    SettlementMethodUnspecified = "SETTLEMENT_METHOD_UNSPECIFIED",
    Cash = "CASH",
    Physical = "PHYSICAL"
}
/**
 * Specifies how an option is settled at expiration, either Physical (delivery of the underlying asset) or Cash (payment of the cash difference).
 */
export type SettlementMethodOpen = OpenEnum<typeof SettlementMethod>;
/**
 * Indicates whether an option follows Standard settlement terms or has Non-Standard terms, often due to adjustments like corporate actions.
 */
export declare enum SettlementType {
    SettlementTypeUnspecified = "SETTLEMENT_TYPE_UNSPECIFIED",
    Standard = "STANDARD",
    NonStandard = "NON_STANDARD"
}
/**
 * Indicates whether an option follows Standard settlement terms or has Non-Standard terms, often due to adjustments like corporate actions.
 */
export type SettlementTypeOpen = OpenEnum<typeof SettlementType>;
/**
 * The price at which the option holder can buy or sell the deliverable asset(s)
 */
export type StrikePrice = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Option specific asset details
 */
export type Option = {
    /**
     * Indicates whether the option is a Call or a Put. A Put entitles the holder to sell shares at the specified strike_price, while a Call entitles the holder to buy shares at the specified strike_price.
     */
    callPut?: CallPutOpen | undefined;
    /**
     * Indicates how and when an option can be exercised, either American (exercise any time before expiration) or European (exercise only at expiration).
     */
    exerciseStyle?: ExerciseStyleOpen | undefined;
    /**
     * The date when the option contract expires. This will typically match the series_date but can vary when the option expiration is accelerated for a given series. This field will represent the actual expiration date.
     */
    expirationDate?: AssetExpirationDate | null | undefined;
    /**
     * The full option root information
     */
    optionRoot?: OptionRoot | null | undefined;
    /**
     * Type of deliverable asset the option is set to deliver upon expiry.
     */
    optionType?: OptionTypeOpen | undefined;
    /**
     * The leading segment of the OSI, which is typically the original deliverable symbol of the option. There are frequent exceptions to this rule, such as when there are multiple deliverables or the deliverable goes through a corporate action.
     */
    rootSymbol?: string | undefined;
    /**
     * The date of the option contract this is the value in the OSI and is typically the same as the expiration_date but can vary when the option expiration is accelerated.
     */
    seriesDate?: SeriesDate | null | undefined;
    /**
     * Specifies how an option is settled at expiration, either Physical (delivery of the underlying asset) or Cash (payment of the cash difference).
     */
    settlementMethod?: SettlementMethodOpen | undefined;
    /**
     * Indicates whether an option follows Standard settlement terms or has Non-Standard terms, often due to adjustments like corporate actions.
     */
    settlementType?: SettlementTypeOpen | undefined;
    /**
     * The price at which the option holder can buy or sell the deliverable asset(s)
     */
    strikePrice?: StrikePrice | null | undefined;
};
/**
 * The type or category of the asset
 */
export declare enum AssetType1 {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Equity = "EQUITY",
    Option = "OPTION",
    Currency = "CURRENCY",
    Digital = "DIGITAL",
    FdicSynthetic = "FDIC_SYNTHETIC",
    FixedIncome = "FIXED_INCOME",
    MutualFund = "MUTUAL_FUND",
    Index = "INDEX"
}
/**
 * The type or category of the asset
 */
export type AssetType1Open = OpenEnum<typeof AssetType1>;
/**
 * Asset is the Apex representation of a security
 */
export type Asset = {
    /**
     * Apex internal identifier assigned upon entry to every security.
     */
    assetId?: string | undefined;
    /**
     * Currency specific asset details
     */
    currency?: Currency | null | undefined;
    /**
     * Identifier assigned to a security by the CUSIP Service Bureau of Standard & Poor’s Corporation
     */
    cusip?: string | undefined;
    /**
     * Name of the issuer of a security and additional descriptive information about the particular issue
     */
    description?: string | undefined;
    /**
     * Equity specific asset details
     */
    equity?: Equity | null | undefined;
    /**
     * FixedIncome specific asset details
     */
    fixedIncome?: FixedIncome | null | undefined;
    /**
     * Index specific asset details
     */
    index?: Index | null | undefined;
    /**
     * isin is the International Securities Identification Number
     */
    isin?: string | undefined;
    /**
     * A string attribute denoting the country of issuance or where the asset is trading.
     */
    issuingRegionCode?: string | undefined;
    /**
     * MutualFund specific asset details
     */
    mutualFund?: MutualFund | null | undefined;
    /**
     * assets/{asset_id}
     */
    name?: string | undefined;
    /**
     * Option specific asset details
     */
    option?: Option | null | undefined;
    /**
     * ISO code identifying the region in which the entity was incorporated
     */
    originatingRegionCode?: string | undefined;
    /**
     * An arrangement of characters—usually letters and or numbers — usually representing securities on an exchange
     */
    symbol?: string | undefined;
    /**
     * The type or category of the asset
     */
    type?: AssetType1Open | undefined;
    /**
     * A usable asset is active in its respective market and can be traded and/or transferred
     */
    usable?: boolean | undefined;
};
/** @internal */
export declare const CurrencyType$inboundSchema: z.ZodType<CurrencyTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CurrencyType$outboundSchema: z.ZodType<CurrencyTypeOpen, z.ZodTypeDef, CurrencyTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CurrencyType$ {
    /** @deprecated use `CurrencyType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CurrencyTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CurrencyType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CurrencyTypeOpen, z.ZodTypeDef, CurrencyTypeOpen>;
}
/** @internal */
export declare const Currency$inboundSchema: z.ZodType<Currency, z.ZodTypeDef, unknown>;
/** @internal */
export type Currency$Outbound = {
    currency_type?: string | undefined;
    payment_currency?: string | undefined;
};
/** @internal */
export declare const Currency$outboundSchema: z.ZodType<Currency$Outbound, z.ZodTypeDef, Currency>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Currency$ {
    /** @deprecated use `Currency$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Currency, z.ZodTypeDef, unknown>;
    /** @deprecated use `Currency$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Currency$Outbound, z.ZodTypeDef, Currency>;
    /** @deprecated use `Currency$Outbound` instead. */
    type Outbound = Currency$Outbound;
}
export declare function currencyToJSON(currency: Currency): string;
export declare function currencyFromJSON(jsonString: string): SafeParseResult<Currency, SDKValidationError>;
/** @internal */
export declare const AssetEquityType$inboundSchema: z.ZodType<AssetEquityTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AssetEquityType$outboundSchema: z.ZodType<AssetEquityTypeOpen, z.ZodTypeDef, AssetEquityTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AssetEquityType$ {
    /** @deprecated use `AssetEquityType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AssetEquityTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `AssetEquityType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AssetEquityTypeOpen, z.ZodTypeDef, AssetEquityTypeOpen>;
}
/** @internal */
export declare const Equity$inboundSchema: z.ZodType<Equity, z.ZodTypeDef, unknown>;
/** @internal */
export type Equity$Outbound = {
    fractionable?: boolean | undefined;
    liquidate?: boolean | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const Equity$outboundSchema: z.ZodType<Equity$Outbound, z.ZodTypeDef, Equity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Equity$ {
    /** @deprecated use `Equity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Equity, z.ZodTypeDef, unknown>;
    /** @deprecated use `Equity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Equity$Outbound, z.ZodTypeDef, Equity>;
    /** @deprecated use `Equity$Outbound` instead. */
    type Outbound = Equity$Outbound;
}
export declare function equityToJSON(equity: Equity): string;
export declare function equityFromJSON(jsonString: string): SafeParseResult<Equity, SDKValidationError>;
/** @internal */
export declare const CallType$inboundSchema: z.ZodType<CallTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CallType$outboundSchema: z.ZodType<CallTypeOpen, z.ZodTypeDef, CallTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CallType$ {
    /** @deprecated use `CallType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CallTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CallType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CallTypeOpen, z.ZodTypeDef, CallTypeOpen>;
}
/** @internal */
export declare const CouponFrequency$inboundSchema: z.ZodType<CouponFrequencyOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CouponFrequency$outboundSchema: z.ZodType<CouponFrequencyOpen, z.ZodTypeDef, CouponFrequencyOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CouponFrequency$ {
    /** @deprecated use `CouponFrequency$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CouponFrequencyOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CouponFrequency$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CouponFrequencyOpen, z.ZodTypeDef, CouponFrequencyOpen>;
}
/** @internal */
export declare const CouponRate$inboundSchema: z.ZodType<CouponRate, z.ZodTypeDef, unknown>;
/** @internal */
export type CouponRate$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const CouponRate$outboundSchema: z.ZodType<CouponRate$Outbound, z.ZodTypeDef, CouponRate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CouponRate$ {
    /** @deprecated use `CouponRate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CouponRate, z.ZodTypeDef, unknown>;
    /** @deprecated use `CouponRate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CouponRate$Outbound, z.ZodTypeDef, CouponRate>;
    /** @deprecated use `CouponRate$Outbound` instead. */
    type Outbound = CouponRate$Outbound;
}
export declare function couponRateToJSON(couponRate: CouponRate): string;
export declare function couponRateFromJSON(jsonString: string): SafeParseResult<CouponRate, SDKValidationError>;
/** @internal */
export declare const CouponType$inboundSchema: z.ZodType<CouponTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CouponType$outboundSchema: z.ZodType<CouponTypeOpen, z.ZodTypeDef, CouponTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CouponType$ {
    /** @deprecated use `CouponType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CouponTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CouponType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CouponTypeOpen, z.ZodTypeDef, CouponTypeOpen>;
}
/** @internal */
export declare const Duration$inboundSchema: z.ZodType<Duration, z.ZodTypeDef, unknown>;
/** @internal */
export type Duration$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const Duration$outboundSchema: z.ZodType<Duration$Outbound, z.ZodTypeDef, Duration>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Duration$ {
    /** @deprecated use `Duration$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Duration, z.ZodTypeDef, unknown>;
    /** @deprecated use `Duration$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Duration$Outbound, z.ZodTypeDef, Duration>;
    /** @deprecated use `Duration$Outbound` instead. */
    type Outbound = Duration$Outbound;
}
export declare function durationToJSON(duration: Duration): string;
export declare function durationFromJSON(jsonString: string): SafeParseResult<Duration, SDKValidationError>;
/** @internal */
export declare const FirstCouponDate$inboundSchema: z.ZodType<FirstCouponDate, z.ZodTypeDef, unknown>;
/** @internal */
export type FirstCouponDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const FirstCouponDate$outboundSchema: z.ZodType<FirstCouponDate$Outbound, z.ZodTypeDef, FirstCouponDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FirstCouponDate$ {
    /** @deprecated use `FirstCouponDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FirstCouponDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `FirstCouponDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FirstCouponDate$Outbound, z.ZodTypeDef, FirstCouponDate>;
    /** @deprecated use `FirstCouponDate$Outbound` instead. */
    type Outbound = FirstCouponDate$Outbound;
}
export declare function firstCouponDateToJSON(firstCouponDate: FirstCouponDate): string;
export declare function firstCouponDateFromJSON(jsonString: string): SafeParseResult<FirstCouponDate, SDKValidationError>;
/** @internal */
export declare const FixedIncomeStatus$inboundSchema: z.ZodType<FixedIncomeStatusOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const FixedIncomeStatus$outboundSchema: z.ZodType<FixedIncomeStatusOpen, z.ZodTypeDef, FixedIncomeStatusOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FixedIncomeStatus$ {
    /** @deprecated use `FixedIncomeStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FixedIncomeStatusOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `FixedIncomeStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FixedIncomeStatusOpen, z.ZodTypeDef, FixedIncomeStatusOpen>;
}
/** @internal */
export declare const FixedIncomeSubtype$inboundSchema: z.ZodType<FixedIncomeSubtypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const FixedIncomeSubtype$outboundSchema: z.ZodType<FixedIncomeSubtypeOpen, z.ZodTypeDef, FixedIncomeSubtypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FixedIncomeSubtype$ {
    /** @deprecated use `FixedIncomeSubtype$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FixedIncomeSubtypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `FixedIncomeSubtype$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FixedIncomeSubtypeOpen, z.ZodTypeDef, FixedIncomeSubtypeOpen>;
}
/** @internal */
export declare const FixedIncomeType$inboundSchema: z.ZodType<FixedIncomeTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const FixedIncomeType$outboundSchema: z.ZodType<FixedIncomeTypeOpen, z.ZodTypeDef, FixedIncomeTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FixedIncomeType$ {
    /** @deprecated use `FixedIncomeType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FixedIncomeTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `FixedIncomeType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FixedIncomeTypeOpen, z.ZodTypeDef, FixedIncomeTypeOpen>;
}
/** @internal */
export declare const AssetIssueDate$inboundSchema: z.ZodType<AssetIssueDate, z.ZodTypeDef, unknown>;
/** @internal */
export type AssetIssueDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const AssetIssueDate$outboundSchema: z.ZodType<AssetIssueDate$Outbound, z.ZodTypeDef, AssetIssueDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AssetIssueDate$ {
    /** @deprecated use `AssetIssueDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AssetIssueDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `AssetIssueDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AssetIssueDate$Outbound, z.ZodTypeDef, AssetIssueDate>;
    /** @deprecated use `AssetIssueDate$Outbound` instead. */
    type Outbound = AssetIssueDate$Outbound;
}
export declare function assetIssueDateToJSON(assetIssueDate: AssetIssueDate): string;
export declare function assetIssueDateFromJSON(jsonString: string): SafeParseResult<AssetIssueDate, SDKValidationError>;
/** @internal */
export declare const IssueSize$inboundSchema: z.ZodType<IssueSize, z.ZodTypeDef, unknown>;
/** @internal */
export type IssueSize$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const IssueSize$outboundSchema: z.ZodType<IssueSize$Outbound, z.ZodTypeDef, IssueSize>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace IssueSize$ {
    /** @deprecated use `IssueSize$inboundSchema` instead. */
    const inboundSchema: z.ZodType<IssueSize, z.ZodTypeDef, unknown>;
    /** @deprecated use `IssueSize$outboundSchema` instead. */
    const outboundSchema: z.ZodType<IssueSize$Outbound, z.ZodTypeDef, IssueSize>;
    /** @deprecated use `IssueSize$Outbound` instead. */
    type Outbound = IssueSize$Outbound;
}
export declare function issueSizeToJSON(issueSize: IssueSize): string;
export declare function issueSizeFromJSON(jsonString: string): SafeParseResult<IssueSize, SDKValidationError>;
/** @internal */
export declare const LastCouponDate$inboundSchema: z.ZodType<LastCouponDate, z.ZodTypeDef, unknown>;
/** @internal */
export type LastCouponDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const LastCouponDate$outboundSchema: z.ZodType<LastCouponDate$Outbound, z.ZodTypeDef, LastCouponDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LastCouponDate$ {
    /** @deprecated use `LastCouponDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LastCouponDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `LastCouponDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LastCouponDate$Outbound, z.ZodTypeDef, LastCouponDate>;
    /** @deprecated use `LastCouponDate$Outbound` instead. */
    type Outbound = LastCouponDate$Outbound;
}
export declare function lastCouponDateToJSON(lastCouponDate: LastCouponDate): string;
export declare function lastCouponDateFromJSON(jsonString: string): SafeParseResult<LastCouponDate, SDKValidationError>;
/** @internal */
export declare const MaturityDate$inboundSchema: z.ZodType<MaturityDate, z.ZodTypeDef, unknown>;
/** @internal */
export type MaturityDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const MaturityDate$outboundSchema: z.ZodType<MaturityDate$Outbound, z.ZodTypeDef, MaturityDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MaturityDate$ {
    /** @deprecated use `MaturityDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<MaturityDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `MaturityDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<MaturityDate$Outbound, z.ZodTypeDef, MaturityDate>;
    /** @deprecated use `MaturityDate$Outbound` instead. */
    type Outbound = MaturityDate$Outbound;
}
export declare function maturityDateToJSON(maturityDate: MaturityDate): string;
export declare function maturityDateFromJSON(jsonString: string): SafeParseResult<MaturityDate, SDKValidationError>;
/** @internal */
export declare const NextCallDate$inboundSchema: z.ZodType<NextCallDate, z.ZodTypeDef, unknown>;
/** @internal */
export type NextCallDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const NextCallDate$outboundSchema: z.ZodType<NextCallDate$Outbound, z.ZodTypeDef, NextCallDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace NextCallDate$ {
    /** @deprecated use `NextCallDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<NextCallDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `NextCallDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<NextCallDate$Outbound, z.ZodTypeDef, NextCallDate>;
    /** @deprecated use `NextCallDate$Outbound` instead. */
    type Outbound = NextCallDate$Outbound;
}
export declare function nextCallDateToJSON(nextCallDate: NextCallDate): string;
export declare function nextCallDateFromJSON(jsonString: string): SafeParseResult<NextCallDate, SDKValidationError>;
/** @internal */
export declare const NextCouponDate$inboundSchema: z.ZodType<NextCouponDate, z.ZodTypeDef, unknown>;
/** @internal */
export type NextCouponDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const NextCouponDate$outboundSchema: z.ZodType<NextCouponDate$Outbound, z.ZodTypeDef, NextCouponDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace NextCouponDate$ {
    /** @deprecated use `NextCouponDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<NextCouponDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `NextCouponDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<NextCouponDate$Outbound, z.ZodTypeDef, NextCouponDate>;
    /** @deprecated use `NextCouponDate$Outbound` instead. */
    type Outbound = NextCouponDate$Outbound;
}
export declare function nextCouponDateToJSON(nextCouponDate: NextCouponDate): string;
export declare function nextCouponDateFromJSON(jsonString: string): SafeParseResult<NextCouponDate, SDKValidationError>;
/** @internal */
export declare const ParValue$inboundSchema: z.ZodType<ParValue, z.ZodTypeDef, unknown>;
/** @internal */
export type ParValue$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const ParValue$outboundSchema: z.ZodType<ParValue$Outbound, z.ZodTypeDef, ParValue>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ParValue$ {
    /** @deprecated use `ParValue$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ParValue, z.ZodTypeDef, unknown>;
    /** @deprecated use `ParValue$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ParValue$Outbound, z.ZodTypeDef, ParValue>;
    /** @deprecated use `ParValue$Outbound` instead. */
    type Outbound = ParValue$Outbound;
}
export declare function parValueToJSON(parValue: ParValue): string;
export declare function parValueFromJSON(jsonString: string): SafeParseResult<ParValue, SDKValidationError>;
/** @internal */
export declare const PriceAtIssuance$inboundSchema: z.ZodType<PriceAtIssuance, z.ZodTypeDef, unknown>;
/** @internal */
export type PriceAtIssuance$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const PriceAtIssuance$outboundSchema: z.ZodType<PriceAtIssuance$Outbound, z.ZodTypeDef, PriceAtIssuance>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PriceAtIssuance$ {
    /** @deprecated use `PriceAtIssuance$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PriceAtIssuance, z.ZodTypeDef, unknown>;
    /** @deprecated use `PriceAtIssuance$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PriceAtIssuance$Outbound, z.ZodTypeDef, PriceAtIssuance>;
    /** @deprecated use `PriceAtIssuance$Outbound` instead. */
    type Outbound = PriceAtIssuance$Outbound;
}
export declare function priceAtIssuanceToJSON(priceAtIssuance: PriceAtIssuance): string;
export declare function priceAtIssuanceFromJSON(jsonString: string): SafeParseResult<PriceAtIssuance, SDKValidationError>;
/** @internal */
export declare const SpRating$inboundSchema: z.ZodType<SpRatingOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const SpRating$outboundSchema: z.ZodType<SpRatingOpen, z.ZodTypeDef, SpRatingOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SpRating$ {
    /** @deprecated use `SpRating$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SpRatingOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `SpRating$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SpRatingOpen, z.ZodTypeDef, SpRatingOpen>;
}
/** @internal */
export declare const SpRatingDate$inboundSchema: z.ZodType<SpRatingDate, z.ZodTypeDef, unknown>;
/** @internal */
export type SpRatingDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const SpRatingDate$outboundSchema: z.ZodType<SpRatingDate$Outbound, z.ZodTypeDef, SpRatingDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SpRatingDate$ {
    /** @deprecated use `SpRatingDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SpRatingDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `SpRatingDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SpRatingDate$Outbound, z.ZodTypeDef, SpRatingDate>;
    /** @deprecated use `SpRatingDate$Outbound` instead. */
    type Outbound = SpRatingDate$Outbound;
}
export declare function spRatingDateToJSON(spRatingDate: SpRatingDate): string;
export declare function spRatingDateFromJSON(jsonString: string): SafeParseResult<SpRatingDate, SDKValidationError>;
/** @internal */
export declare const FixedIncome$inboundSchema: z.ZodType<FixedIncome, z.ZodTypeDef, unknown>;
/** @internal */
export type FixedIncome$Outbound = {
    call_type?: string | undefined;
    callable?: boolean | undefined;
    convertible?: boolean | undefined;
    coupon_frequency?: string | undefined;
    coupon_rate?: CouponRate$Outbound | null | undefined;
    coupon_type?: string | undefined;
    duration?: Duration$Outbound | null | undefined;
    first_coupon_date?: FirstCouponDate$Outbound | null | undefined;
    fixed_income_status?: string | undefined;
    fixed_income_subtype?: string | undefined;
    fixed_income_type?: string | undefined;
    insured?: boolean | undefined;
    issue_date?: AssetIssueDate$Outbound | null | undefined;
    issue_size?: IssueSize$Outbound | null | undefined;
    issuer?: string | undefined;
    last_coupon_date?: LastCouponDate$Outbound | null | undefined;
    maturity_date?: MaturityDate$Outbound | null | undefined;
    next_call_date?: NextCallDate$Outbound | null | undefined;
    next_coupon_date?: NextCouponDate$Outbound | null | undefined;
    par_value?: ParValue$Outbound | null | undefined;
    perpetual?: boolean | undefined;
    price_at_issuance?: PriceAtIssuance$Outbound | null | undefined;
    sp_rating?: string | undefined;
    sp_rating_date?: SpRatingDate$Outbound | null | undefined;
    underlying_symbol?: string | undefined;
};
/** @internal */
export declare const FixedIncome$outboundSchema: z.ZodType<FixedIncome$Outbound, z.ZodTypeDef, FixedIncome>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FixedIncome$ {
    /** @deprecated use `FixedIncome$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FixedIncome, z.ZodTypeDef, unknown>;
    /** @deprecated use `FixedIncome$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FixedIncome$Outbound, z.ZodTypeDef, FixedIncome>;
    /** @deprecated use `FixedIncome$Outbound` instead. */
    type Outbound = FixedIncome$Outbound;
}
export declare function fixedIncomeToJSON(fixedIncome: FixedIncome): string;
export declare function fixedIncomeFromJSON(jsonString: string): SafeParseResult<FixedIncome, SDKValidationError>;
/** @internal */
export declare const Index$inboundSchema: z.ZodType<Index, z.ZodTypeDef, unknown>;
/** @internal */
export type Index$Outbound = {};
/** @internal */
export declare const Index$outboundSchema: z.ZodType<Index$Outbound, z.ZodTypeDef, Index>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Index$ {
    /** @deprecated use `Index$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Index, z.ZodTypeDef, unknown>;
    /** @deprecated use `Index$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Index$Outbound, z.ZodTypeDef, Index>;
    /** @deprecated use `Index$Outbound` instead. */
    type Outbound = Index$Outbound;
}
export declare function indexToJSON(index: Index): string;
export declare function indexFromJSON(jsonString: string): SafeParseResult<Index, SDKValidationError>;
/** @internal */
export declare const LargeOrderNotificationAmount$inboundSchema: z.ZodType<LargeOrderNotificationAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type LargeOrderNotificationAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const LargeOrderNotificationAmount$outboundSchema: z.ZodType<LargeOrderNotificationAmount$Outbound, z.ZodTypeDef, LargeOrderNotificationAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LargeOrderNotificationAmount$ {
    /** @deprecated use `LargeOrderNotificationAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LargeOrderNotificationAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `LargeOrderNotificationAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LargeOrderNotificationAmount$Outbound, z.ZodTypeDef, LargeOrderNotificationAmount>;
    /** @deprecated use `LargeOrderNotificationAmount$Outbound` instead. */
    type Outbound = LargeOrderNotificationAmount$Outbound;
}
export declare function largeOrderNotificationAmountToJSON(largeOrderNotificationAmount: LargeOrderNotificationAmount): string;
export declare function largeOrderNotificationAmountFromJSON(jsonString: string): SafeParseResult<LargeOrderNotificationAmount, SDKValidationError>;
/** @internal */
export declare const MutualFundType$inboundSchema: z.ZodType<MutualFundTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const MutualFundType$outboundSchema: z.ZodType<MutualFundTypeOpen, z.ZodTypeDef, MutualFundTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MutualFundType$ {
    /** @deprecated use `MutualFundType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<MutualFundTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `MutualFundType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<MutualFundTypeOpen, z.ZodTypeDef, MutualFundTypeOpen>;
}
/** @internal */
export declare const MutualFund$inboundSchema: z.ZodType<MutualFund, z.ZodTypeDef, unknown>;
/** @internal */
export type MutualFund$Outbound = {
    fund_family?: string | undefined;
    large_order_notification_amount?: LargeOrderNotificationAmount$Outbound | null | undefined;
    mutual_fund_type?: string | undefined;
    share_class?: string | undefined;
};
/** @internal */
export declare const MutualFund$outboundSchema: z.ZodType<MutualFund$Outbound, z.ZodTypeDef, MutualFund>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MutualFund$ {
    /** @deprecated use `MutualFund$inboundSchema` instead. */
    const inboundSchema: z.ZodType<MutualFund, z.ZodTypeDef, unknown>;
    /** @deprecated use `MutualFund$outboundSchema` instead. */
    const outboundSchema: z.ZodType<MutualFund$Outbound, z.ZodTypeDef, MutualFund>;
    /** @deprecated use `MutualFund$Outbound` instead. */
    type Outbound = MutualFund$Outbound;
}
export declare function mutualFundToJSON(mutualFund: MutualFund): string;
export declare function mutualFundFromJSON(jsonString: string): SafeParseResult<MutualFund, SDKValidationError>;
/** @internal */
export declare const CallPut$inboundSchema: z.ZodType<CallPutOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CallPut$outboundSchema: z.ZodType<CallPutOpen, z.ZodTypeDef, CallPutOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CallPut$ {
    /** @deprecated use `CallPut$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CallPutOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CallPut$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CallPutOpen, z.ZodTypeDef, CallPutOpen>;
}
/** @internal */
export declare const ExerciseStyle$inboundSchema: z.ZodType<ExerciseStyleOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const ExerciseStyle$outboundSchema: z.ZodType<ExerciseStyleOpen, z.ZodTypeDef, ExerciseStyleOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExerciseStyle$ {
    /** @deprecated use `ExerciseStyle$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExerciseStyleOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExerciseStyle$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExerciseStyleOpen, z.ZodTypeDef, ExerciseStyleOpen>;
}
/** @internal */
export declare const AssetExpirationDate$inboundSchema: z.ZodType<AssetExpirationDate, z.ZodTypeDef, unknown>;
/** @internal */
export type AssetExpirationDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const AssetExpirationDate$outboundSchema: z.ZodType<AssetExpirationDate$Outbound, z.ZodTypeDef, AssetExpirationDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AssetExpirationDate$ {
    /** @deprecated use `AssetExpirationDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AssetExpirationDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `AssetExpirationDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AssetExpirationDate$Outbound, z.ZodTypeDef, AssetExpirationDate>;
    /** @deprecated use `AssetExpirationDate$Outbound` instead. */
    type Outbound = AssetExpirationDate$Outbound;
}
export declare function assetExpirationDateToJSON(assetExpirationDate: AssetExpirationDate): string;
export declare function assetExpirationDateFromJSON(jsonString: string): SafeParseResult<AssetExpirationDate, SDKValidationError>;
/** @internal */
export declare const Classification$inboundSchema: z.ZodType<ClassificationOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const Classification$outboundSchema: z.ZodType<ClassificationOpen, z.ZodTypeDef, ClassificationOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Classification$ {
    /** @deprecated use `Classification$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ClassificationOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `Classification$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ClassificationOpen, z.ZodTypeDef, ClassificationOpen>;
}
/** @internal */
export declare const PennyPilotIndicator$inboundSchema: z.ZodType<PennyPilotIndicatorOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PennyPilotIndicator$outboundSchema: z.ZodType<PennyPilotIndicatorOpen, z.ZodTypeDef, PennyPilotIndicatorOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PennyPilotIndicator$ {
    /** @deprecated use `PennyPilotIndicator$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PennyPilotIndicatorOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PennyPilotIndicator$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PennyPilotIndicatorOpen, z.ZodTypeDef, PennyPilotIndicatorOpen>;
}
/** @internal */
export declare const PositionLimit$inboundSchema: z.ZodType<PositionLimit, z.ZodTypeDef, unknown>;
/** @internal */
export type PositionLimit$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const PositionLimit$outboundSchema: z.ZodType<PositionLimit$Outbound, z.ZodTypeDef, PositionLimit>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PositionLimit$ {
    /** @deprecated use `PositionLimit$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PositionLimit, z.ZodTypeDef, unknown>;
    /** @deprecated use `PositionLimit$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PositionLimit$Outbound, z.ZodTypeDef, PositionLimit>;
    /** @deprecated use `PositionLimit$Outbound` instead. */
    type Outbound = PositionLimit$Outbound;
}
export declare function positionLimitToJSON(positionLimit: PositionLimit): string;
export declare function positionLimitFromJSON(jsonString: string): SafeParseResult<PositionLimit, SDKValidationError>;
/** @internal */
export declare const SettlementStyle$inboundSchema: z.ZodType<SettlementStyleOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const SettlementStyle$outboundSchema: z.ZodType<SettlementStyleOpen, z.ZodTypeDef, SettlementStyleOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SettlementStyle$ {
    /** @deprecated use `SettlementStyle$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SettlementStyleOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `SettlementStyle$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SettlementStyleOpen, z.ZodTypeDef, SettlementStyleOpen>;
}
/** @internal */
export declare const StrikeMultiplier$inboundSchema: z.ZodType<StrikeMultiplier, z.ZodTypeDef, unknown>;
/** @internal */
export type StrikeMultiplier$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const StrikeMultiplier$outboundSchema: z.ZodType<StrikeMultiplier$Outbound, z.ZodTypeDef, StrikeMultiplier>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace StrikeMultiplier$ {
    /** @deprecated use `StrikeMultiplier$inboundSchema` instead. */
    const inboundSchema: z.ZodType<StrikeMultiplier, z.ZodTypeDef, unknown>;
    /** @deprecated use `StrikeMultiplier$outboundSchema` instead. */
    const outboundSchema: z.ZodType<StrikeMultiplier$Outbound, z.ZodTypeDef, StrikeMultiplier>;
    /** @deprecated use `StrikeMultiplier$Outbound` instead. */
    type Outbound = StrikeMultiplier$Outbound;
}
export declare function strikeMultiplierToJSON(strikeMultiplier: StrikeMultiplier): string;
export declare function strikeMultiplierFromJSON(jsonString: string): SafeParseResult<StrikeMultiplier, SDKValidationError>;
/** @internal */
export declare const StrikePriceMultiplier$inboundSchema: z.ZodType<StrikePriceMultiplier, z.ZodTypeDef, unknown>;
/** @internal */
export type StrikePriceMultiplier$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const StrikePriceMultiplier$outboundSchema: z.ZodType<StrikePriceMultiplier$Outbound, z.ZodTypeDef, StrikePriceMultiplier>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace StrikePriceMultiplier$ {
    /** @deprecated use `StrikePriceMultiplier$inboundSchema` instead. */
    const inboundSchema: z.ZodType<StrikePriceMultiplier, z.ZodTypeDef, unknown>;
    /** @deprecated use `StrikePriceMultiplier$outboundSchema` instead. */
    const outboundSchema: z.ZodType<StrikePriceMultiplier$Outbound, z.ZodTypeDef, StrikePriceMultiplier>;
    /** @deprecated use `StrikePriceMultiplier$Outbound` instead. */
    type Outbound = StrikePriceMultiplier$Outbound;
}
export declare function strikePriceMultiplierToJSON(strikePriceMultiplier: StrikePriceMultiplier): string;
export declare function strikePriceMultiplierFromJSON(jsonString: string): SafeParseResult<StrikePriceMultiplier, SDKValidationError>;
/** @internal */
export declare const TradeValueMultiplier$inboundSchema: z.ZodType<TradeValueMultiplier, z.ZodTypeDef, unknown>;
/** @internal */
export type TradeValueMultiplier$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const TradeValueMultiplier$outboundSchema: z.ZodType<TradeValueMultiplier$Outbound, z.ZodTypeDef, TradeValueMultiplier>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TradeValueMultiplier$ {
    /** @deprecated use `TradeValueMultiplier$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TradeValueMultiplier, z.ZodTypeDef, unknown>;
    /** @deprecated use `TradeValueMultiplier$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TradeValueMultiplier$Outbound, z.ZodTypeDef, TradeValueMultiplier>;
    /** @deprecated use `TradeValueMultiplier$Outbound` instead. */
    type Outbound = TradeValueMultiplier$Outbound;
}
export declare function tradeValueMultiplierToJSON(tradeValueMultiplier: TradeValueMultiplier): string;
export declare function tradeValueMultiplierFromJSON(jsonString: string): SafeParseResult<TradeValueMultiplier, SDKValidationError>;
/** @internal */
export declare const OptionRoot$inboundSchema: z.ZodType<OptionRoot, z.ZodTypeDef, unknown>;
/** @internal */
export type OptionRoot$Outbound = {
    classification?: string | undefined;
    deliverables?: Array<OptionDeliverable$Outbound> | undefined;
    penny_pilot_indicator?: string | undefined;
    position_limit?: PositionLimit$Outbound | null | undefined;
    root_symbol?: string | undefined;
    settlement_style?: string | undefined;
    strike_multiplier?: StrikeMultiplier$Outbound | null | undefined;
    strike_price_multiplier?: StrikePriceMultiplier$Outbound | null | undefined;
    trade_value_multiplier?: TradeValueMultiplier$Outbound | null | undefined;
};
/** @internal */
export declare const OptionRoot$outboundSchema: z.ZodType<OptionRoot$Outbound, z.ZodTypeDef, OptionRoot>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OptionRoot$ {
    /** @deprecated use `OptionRoot$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OptionRoot, z.ZodTypeDef, unknown>;
    /** @deprecated use `OptionRoot$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OptionRoot$Outbound, z.ZodTypeDef, OptionRoot>;
    /** @deprecated use `OptionRoot$Outbound` instead. */
    type Outbound = OptionRoot$Outbound;
}
export declare function optionRootToJSON(optionRoot: OptionRoot): string;
export declare function optionRootFromJSON(jsonString: string): SafeParseResult<OptionRoot, SDKValidationError>;
/** @internal */
export declare const OptionType$inboundSchema: z.ZodType<OptionTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const OptionType$outboundSchema: z.ZodType<OptionTypeOpen, z.ZodTypeDef, OptionTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OptionType$ {
    /** @deprecated use `OptionType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OptionTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `OptionType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OptionTypeOpen, z.ZodTypeDef, OptionTypeOpen>;
}
/** @internal */
export declare const SeriesDate$inboundSchema: z.ZodType<SeriesDate, z.ZodTypeDef, unknown>;
/** @internal */
export type SeriesDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const SeriesDate$outboundSchema: z.ZodType<SeriesDate$Outbound, z.ZodTypeDef, SeriesDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SeriesDate$ {
    /** @deprecated use `SeriesDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SeriesDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `SeriesDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SeriesDate$Outbound, z.ZodTypeDef, SeriesDate>;
    /** @deprecated use `SeriesDate$Outbound` instead. */
    type Outbound = SeriesDate$Outbound;
}
export declare function seriesDateToJSON(seriesDate: SeriesDate): string;
export declare function seriesDateFromJSON(jsonString: string): SafeParseResult<SeriesDate, SDKValidationError>;
/** @internal */
export declare const SettlementMethod$inboundSchema: z.ZodType<SettlementMethodOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const SettlementMethod$outboundSchema: z.ZodType<SettlementMethodOpen, z.ZodTypeDef, SettlementMethodOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SettlementMethod$ {
    /** @deprecated use `SettlementMethod$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SettlementMethodOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `SettlementMethod$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SettlementMethodOpen, z.ZodTypeDef, SettlementMethodOpen>;
}
/** @internal */
export declare const SettlementType$inboundSchema: z.ZodType<SettlementTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const SettlementType$outboundSchema: z.ZodType<SettlementTypeOpen, z.ZodTypeDef, SettlementTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SettlementType$ {
    /** @deprecated use `SettlementType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SettlementTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `SettlementType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SettlementTypeOpen, z.ZodTypeDef, SettlementTypeOpen>;
}
/** @internal */
export declare const StrikePrice$inboundSchema: z.ZodType<StrikePrice, z.ZodTypeDef, unknown>;
/** @internal */
export type StrikePrice$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const StrikePrice$outboundSchema: z.ZodType<StrikePrice$Outbound, z.ZodTypeDef, StrikePrice>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace StrikePrice$ {
    /** @deprecated use `StrikePrice$inboundSchema` instead. */
    const inboundSchema: z.ZodType<StrikePrice, z.ZodTypeDef, unknown>;
    /** @deprecated use `StrikePrice$outboundSchema` instead. */
    const outboundSchema: z.ZodType<StrikePrice$Outbound, z.ZodTypeDef, StrikePrice>;
    /** @deprecated use `StrikePrice$Outbound` instead. */
    type Outbound = StrikePrice$Outbound;
}
export declare function strikePriceToJSON(strikePrice: StrikePrice): string;
export declare function strikePriceFromJSON(jsonString: string): SafeParseResult<StrikePrice, SDKValidationError>;
/** @internal */
export declare const Option$inboundSchema: z.ZodType<Option, z.ZodTypeDef, unknown>;
/** @internal */
export type Option$Outbound = {
    call_put?: string | undefined;
    exercise_style?: string | undefined;
    expiration_date?: AssetExpirationDate$Outbound | null | undefined;
    option_root?: OptionRoot$Outbound | null | undefined;
    option_type?: string | undefined;
    root_symbol?: string | undefined;
    series_date?: SeriesDate$Outbound | null | undefined;
    settlement_method?: string | undefined;
    settlement_type?: string | undefined;
    strike_price?: StrikePrice$Outbound | null | undefined;
};
/** @internal */
export declare const Option$outboundSchema: z.ZodType<Option$Outbound, z.ZodTypeDef, Option>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Option$ {
    /** @deprecated use `Option$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Option, z.ZodTypeDef, unknown>;
    /** @deprecated use `Option$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Option$Outbound, z.ZodTypeDef, Option>;
    /** @deprecated use `Option$Outbound` instead. */
    type Outbound = Option$Outbound;
}
export declare function optionToJSON(option: Option): string;
export declare function optionFromJSON(jsonString: string): SafeParseResult<Option, SDKValidationError>;
/** @internal */
export declare const AssetType1$inboundSchema: z.ZodType<AssetType1Open, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AssetType1$outboundSchema: z.ZodType<AssetType1Open, z.ZodTypeDef, AssetType1Open>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AssetType1$ {
    /** @deprecated use `AssetType1$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AssetType1Open, z.ZodTypeDef, unknown>;
    /** @deprecated use `AssetType1$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AssetType1Open, z.ZodTypeDef, AssetType1Open>;
}
/** @internal */
export declare const Asset$inboundSchema: z.ZodType<Asset, z.ZodTypeDef, unknown>;
/** @internal */
export type Asset$Outbound = {
    asset_id?: string | undefined;
    currency?: Currency$Outbound | null | undefined;
    cusip?: string | undefined;
    description?: string | undefined;
    equity?: Equity$Outbound | null | undefined;
    fixed_income?: FixedIncome$Outbound | null | undefined;
    index?: Index$Outbound | null | undefined;
    isin?: string | undefined;
    issuing_region_code?: string | undefined;
    mutual_fund?: MutualFund$Outbound | null | undefined;
    name?: string | undefined;
    option?: Option$Outbound | null | undefined;
    originating_region_code?: string | undefined;
    symbol?: string | undefined;
    type?: string | undefined;
    usable?: boolean | undefined;
};
/** @internal */
export declare const Asset$outboundSchema: z.ZodType<Asset$Outbound, z.ZodTypeDef, Asset>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Asset$ {
    /** @deprecated use `Asset$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Asset, z.ZodTypeDef, unknown>;
    /** @deprecated use `Asset$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Asset$Outbound, z.ZodTypeDef, Asset>;
    /** @deprecated use `Asset$Outbound` instead. */
    type Outbound = Asset$Outbound;
}
export declare function assetToJSON(asset: Asset): string;
export declare function assetFromJSON(jsonString: string): SafeParseResult<Asset, SDKValidationError>;
//# sourceMappingURL=asset.d.ts.map