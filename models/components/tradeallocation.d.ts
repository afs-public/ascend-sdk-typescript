import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { BondYield, BondYield$Outbound } from "./bondyield.js";
import { BookingFee, BookingFee$Outbound } from "./bookingfee.js";
import { BookingLot, BookingLot$Outbound } from "./bookinglot.js";
/**
 * The amount of interest that has been accrued in the issuing currency for a single instrument.
 */
export type TradeAllocationAccruedInterestAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Type of the asset being traded.
 */
export declare enum TradeAllocationAssetType {
    AssetTypeUnspecified = "ASSET_TYPE_UNSPECIFIED",
    Equity = "EQUITY",
    FixedIncome = "FIXED_INCOME"
}
/**
 * Type of the asset being traded.
 */
export type TradeAllocationAssetTypeOpen = OpenEnum<typeof TradeAllocationAssetType>;
/**
 * Broker capacity for the trade.
 */
export declare enum TradeAllocationBrokerCapacity {
    CapacityUnspecified = "CAPACITY_UNSPECIFIED",
    Agency = "AGENCY",
    Principal = "PRINCIPAL",
    Mixed = "MIXED"
}
/**
 * Broker capacity for the trade.
 */
export type TradeAllocationBrokerCapacityOpen = OpenEnum<typeof TradeAllocationBrokerCapacity>;
/**
 * Commission amount of the trade allocation that will only be applied to the to_account_id.
 */
export type TradeAllocationCommissionAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Gross amount is calculated by the Booking service by multiplying price and quantity and fixing it to 2 fractional precision. Optionally specifiable. If present, will override the gross_amount calculated above.
 */
export type TradeAllocationGrossAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Identifier type for the asset being traded.
 */
export declare enum TradeAllocationIdentifierType {
    IdentifierTypeUnspecified = "IDENTIFIER_TYPE_UNSPECIFIED",
    AssetId = "ASSET_ID",
    Symbol = "SYMBOL",
    Cusip = "CUSIP",
    Isin = "ISIN"
}
/**
 * Identifier type for the asset being traded.
 */
export type TradeAllocationIdentifierTypeOpen = OpenEnum<typeof TradeAllocationIdentifierType>;
/**
 * The price for the instrument that is prevailing in the market. Required for FIXED_INCOME trade allocations when the broker_capacity is PRINCIPAL.
 */
export type TradeAllocationPrevailingMarketPrice = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Price with requirement of 8 or less integral number and 8 or less fractional precision.
 */
export type TradeAllocationPrice = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Total monetary value of the price_adjustment
 */
export type TradeAllocationPriceAdjustmentAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The type of price adjustment being applied by the broker to the net price of the security.
 */
export declare enum TradeAllocationPriceAdjustmentType {
    PriceAdjustmentTypeUnspecified = "PRICE_ADJUSTMENT_TYPE_UNSPECIFIED",
    Markup = "MARKUP",
    Markdown = "MARKDOWN",
    GrossCredit = "GROSS_CREDIT"
}
/**
 * The type of price adjustment being applied by the broker to the net price of the security.
 */
export type TradeAllocationPriceAdjustmentTypeOpen = OpenEnum<typeof TradeAllocationPriceAdjustmentType>;
/**
 * Price adjustment that will be applied to the net price of the security.
 */
export type TradeAllocationPriceAdjustment = {
    /**
     * Total monetary value of the price_adjustment
     */
    priceAdjustmentAmount?: TradeAllocationPriceAdjustmentAmount | null | undefined;
    /**
     * The type of price adjustment being applied by the broker to the net price of the security.
     */
    priceAdjustmentType?: TradeAllocationPriceAdjustmentTypeOpen | undefined;
};
/**
 * Quantity with requirement of 12 or less integral number and 5 or less fractional precision.
 */
export type TradeAllocationQuantity = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Defaults to T+1 for equities if this is not provided. Calculated using the execution_time field in Eastern Time.
 */
export type TradeAllocationSettlementDate = {
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
 * Side modifier for the trade allocation.
 */
export declare enum TradeAllocationSideModifier {
    SideModifierUnspecified = "SIDE_MODIFIER_UNSPECIFIED",
    Short = "SHORT",
    ShortExempt = "SHORT_EXEMPT",
    ShortCover = "SHORT_COVER",
    Open = "OPEN",
    Close = "CLOSE"
}
/**
 * Side modifier for the trade allocation.
 */
export type TradeAllocationSideModifierOpen = OpenEnum<typeof TradeAllocationSideModifier>;
export declare enum TradeAllocationSpecialInstructions {
    SpecialInstructionsUnspecified = "SPECIAL_INSTRUCTIONS_UNSPECIFIED",
    Rule144 = "RULE_144",
    WithDividend = "WITH_DIVIDEND",
    WithRights = "WITH_RIGHTS",
    CloseContract = "CLOSE_CONTRACT",
    CoverShort = "COVER_SHORT",
    CrossTrade = "CROSS_TRADE",
    OpenContractCovered = "OPEN_CONTRACT_COVERED",
    DiscretionExercised = "DISCRETION_EXERCISED",
    DiscretionNotExercised = "DISCRETION_NOT_EXERCISED",
    OptionAssignment = "OPTION_ASSIGNMENT",
    EmployeeStockOption = "EMPLOYEE_STOCK_OPTION",
    InvestmentBanking = "INVESTMENT_BANKING",
    BrokerDealerOrder = "BROKER_DEALER_ORDER",
    MakeMarketInSecurity = "MAKE_MARKET_IN_SECURITY",
    MakeMarketSolicited = "MAKE_MARKET_SOLICITED",
    MakeMarketUnsolicited = "MAKE_MARKET_UNSOLICITED",
    CustomerDirected = "CUSTOMER_DIRECTED",
    FullyRegistered = "FULLY_REGISTERED",
    OpenContract = "OPEN_CONTRACT",
    OddlotDiffOnRequest = "ODDLOT_DIFF_ON_REQUEST",
    ProspectusEnclosed = "PROSPECTUS_ENCLOSED",
    ProspectusSeparateMail = "PROSPECTUS_SEPARATE_MAIL",
    Solicited = "SOLICITED",
    Unsolicited = "UNSOLICITED",
    XDividend = "X_DIVIDEND",
    ActingAsPrincipal = "ACTING_AS_PRINCIPAL",
    AveragePrice = "AVERAGE_PRICE",
    BrokerLiquidation = "BROKER_LIQUIDATION",
    CouponBooks = "COUPON_BOOKS",
    HasPostageFee = "HAS_POSTAGE_FEE",
    InternetOrder = "INTERNET_ORDER",
    MarginSellout = "MARGIN_SELLOUT",
    MarketMakersAsPrincipal = "MARKET_MAKERS_AS_PRINCIPAL",
    NegativeNetProceed = "NEGATIVE_NET_PROCEED",
    PreFigIndicator = "PRE_FIG_INDICATOR",
    RisklessPrincipalInstruction = "RISKLESS_PRINCIPAL_INSTRUCTION",
    ShortInstruction = "SHORT_INSTRUCTION",
    ThirdMarket = "THIRD_MARKET",
    SuppressMsrbTransmission = "SUPPRESS_MSRB_TRANSMISSION",
    SuppressTraceReporting = "SUPPRESS_TRACE_REPORTING",
    SuppressEmailNotification = "SUPPRESS_EMAIL_NOTIFICATION",
    StockReward = "STOCK_REWARD",
    SuppressRegFees = "SUPPRESS_REG_FEES",
    SuppressSecFee = "SUPPRESS_SEC_FEE",
    SuppressTafFee = "SUPPRESS_TAF_FEE",
    DividendReinvestment = "DIVIDEND_REINVESTMENT"
}
export type TradeAllocationSpecialInstructionsOpen = OpenEnum<typeof TradeAllocationSpecialInstructions>;
/**
 * The state that the trade allocation is in.
 */
export declare enum TradeAllocationState {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Rebooking = "REBOOKING",
    Canceling = "CANCELING",
    Booked = "BOOKED",
    Rebooked = "REBOOKED",
    Canceled = "CANCELED",
    Failed = "FAILED"
}
/**
 * The state that the trade allocation is in.
 */
export type TradeAllocationStateOpen = OpenEnum<typeof TradeAllocationState>;
/**
 * Denotes the side of the position going into the to_account_id. A to_side of SELL indicates the position will be allocated with a BUY out of the from_account, and a SELL into the to_account.
 */
export declare enum TradeAllocationToSide {
    SideUnspecified = "SIDE_UNSPECIFIED",
    Buy = "BUY",
    Sell = "SELL"
}
/**
 * Denotes the side of the position going into the to_account_id. A to_side of SELL indicates the position will be allocated with a BUY out of the from_account, and a SELL into the to_account.
 */
export type TradeAllocationToSideOpen = OpenEnum<typeof TradeAllocationToSide>;
/**
 * Denotes that this trade allocation was either when_issued or when_distributed.
 */
export declare enum TradeAllocationWhenIssued {
    WhenIssuedTypeUnspecified = "WHEN_ISSUED_TYPE_UNSPECIFIED",
    WhenIssued = "WHEN_ISSUED",
    WhenDistributed = "WHEN_DISTRIBUTED"
}
/**
 * Denotes that this trade allocation was either when_issued or when_distributed.
 */
export type TradeAllocationWhenIssuedOpen = OpenEnum<typeof TradeAllocationWhenIssued>;
/**
 * A TradeAllocation represents the movement of positions between two ascend accounts.
 */
export type TradeAllocation = {
    /**
     * The amount of interest that has been accrued in the issuing currency for a single instrument.
     */
    accruedInterestAmount?: TradeAllocationAccruedInterestAmount | null | undefined;
    /**
     * Free form instructions that can be used to provide additional instructions (that are not captured by existing special instructions) and will be put on the trade confirm.
     */
    additionalInstructions?: string | undefined;
    /**
     * Type of the asset being traded.
     */
    assetType?: TradeAllocationAssetTypeOpen | undefined;
    /**
     * The yield associated with an individual fill of a fixed income trade. Required for FIXED_INCOME trades. Not allowed for trades of other instrument types.
     */
    bondYield?: Array<BondYield> | undefined;
    /**
     * Broker capacity for the trade.
     */
    brokerCapacity?: TradeAllocationBrokerCapacityOpen | undefined;
    /**
     * The unique identifier that is associated with an order. This is useful for associating the trade allocation with the original trade. This will be assigned a unique UUID if not provided.
     */
    clientOrderId?: string | undefined;
    /**
     * Commission amount of the trade allocation that will only be applied to the to_account_id.
     */
    commissionAmount?: TradeAllocationCommissionAmount | null | undefined;
    /**
     * Timestamp of when the trade allocation took place. If settlement_date is not provided, this field will be converted into Eastern Time and used to calculate settlement_date.
     */
    executionTime?: Date | null | undefined;
    /**
     * Client calculated fees that will only be applied to the to_account_id. Regulatory fees will be calculated automatically if they are not explicitly overwritten or suppressed.
     */
    fees?: Array<BookingFee> | undefined;
    /**
     * The ULID formatted account_id that the positions will be moved from.
     */
    fromAccountId?: string | undefined;
    /**
     * The current activity_id of the trade allocation that positions will be moved from in the Ledger.
     */
    fromActivityId?: string | undefined;
    /**
     * Gross amount is calculated by the Booking service by multiplying price and quantity and fixing it to 2 fractional precision. Optionally specifiable. If present, will override the gross_amount calculated above.
     */
    grossAmount?: TradeAllocationGrossAmount | null | undefined;
    /**
     * Identifier (of the type specified in `identifier_type`). Responses will supply the originally requested identifier.
     */
    identifier?: string | undefined;
    /**
     * Identifier type for the asset being traded.
     */
    identifierType?: TradeAllocationIdentifierTypeOpen | undefined;
    /**
     * Unicode CLDR region code. Issuing Region Code is required for some `identifier_type`s, especially CUSIP.
     */
    issuingRegionCode?: string | undefined;
    /**
     * One or many lot matching instructions for the trade allocation.
     */
    lotMatchingInstructions?: Array<BookingLot> | undefined;
    /**
     * Caller provided but can be used for booking-service to note original trade details when booking into the error account or using the error asset.
     */
    memo?: string | undefined;
    /**
     * The resource name of the trade allocation.
     */
    name?: string | undefined;
    /**
     * The price for the instrument that is prevailing in the market. Required for FIXED_INCOME trade allocations when the broker_capacity is PRINCIPAL.
     */
    prevailingMarketPrice?: TradeAllocationPrevailingMarketPrice | null | undefined;
    /**
     * Price with requirement of 8 or less integral number and 8 or less fractional precision.
     */
    price?: TradeAllocationPrice | null | undefined;
    /**
     * Price adjustment that will be applied to the net price of the security.
     */
    priceAdjustment?: TradeAllocationPriceAdjustment | null | undefined;
    /**
     * Quantity with requirement of 12 or less integral number and 5 or less fractional precision.
     */
    quantity?: TradeAllocationQuantity | null | undefined;
    /**
     * Defaults to T+1 for equities if this is not provided. Calculated using the execution_time field in Eastern Time.
     */
    settlementDate?: TradeAllocationSettlementDate | null | undefined;
    /**
     * Side modifier for the trade allocation.
     */
    sideModifier?: TradeAllocationSideModifierOpen | undefined;
    /**
     * The source of the submission.
     */
    sourceApplication?: string | undefined;
    /**
     * An enumerated list of values used to indicate certain attributes about a trade allocation (E.g. BROKER_LIQUIDATION) and/or trigger downstream processing rules (e.g. SUPPRESS_TRACE_REPORTING)
     */
    specialInstructions?: Array<TradeAllocationSpecialInstructionsOpen> | undefined;
    /**
     * The state that the trade allocation is in.
     */
    state?: TradeAllocationStateOpen | undefined;
    /**
     * The ULID formatted account_id that the positions will be moved to.
     */
    toAccountId?: string | undefined;
    /**
     * The current activity_id of the trade allocation that positions will be moved to in the Ledger.
     */
    toActivityId?: string | undefined;
    /**
     * Denotes the side of the position going into the to_account_id. A to_side of SELL indicates the position will be allocated with a BUY out of the from_account, and a SELL into the to_account.
     */
    toSide?: TradeAllocationToSideOpen | undefined;
    /**
     * A ULID to uniquely identify the trade allocation globally.
     */
    tradeAllocationId?: string | undefined;
    /**
     * Denotes that this trade allocation was either when_issued or when_distributed.
     */
    whenIssued?: TradeAllocationWhenIssuedOpen | undefined;
};
/** @internal */
export declare const TradeAllocationAccruedInterestAmount$inboundSchema: z.ZodType<TradeAllocationAccruedInterestAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type TradeAllocationAccruedInterestAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const TradeAllocationAccruedInterestAmount$outboundSchema: z.ZodType<TradeAllocationAccruedInterestAmount$Outbound, z.ZodTypeDef, TradeAllocationAccruedInterestAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TradeAllocationAccruedInterestAmount$ {
    /** @deprecated use `TradeAllocationAccruedInterestAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TradeAllocationAccruedInterestAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `TradeAllocationAccruedInterestAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TradeAllocationAccruedInterestAmount$Outbound, z.ZodTypeDef, TradeAllocationAccruedInterestAmount>;
    /** @deprecated use `TradeAllocationAccruedInterestAmount$Outbound` instead. */
    type Outbound = TradeAllocationAccruedInterestAmount$Outbound;
}
export declare function tradeAllocationAccruedInterestAmountToJSON(tradeAllocationAccruedInterestAmount: TradeAllocationAccruedInterestAmount): string;
export declare function tradeAllocationAccruedInterestAmountFromJSON(jsonString: string): SafeParseResult<TradeAllocationAccruedInterestAmount, SDKValidationError>;
/** @internal */
export declare const TradeAllocationAssetType$inboundSchema: z.ZodType<TradeAllocationAssetTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TradeAllocationAssetType$outboundSchema: z.ZodType<TradeAllocationAssetTypeOpen, z.ZodTypeDef, TradeAllocationAssetTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TradeAllocationAssetType$ {
    /** @deprecated use `TradeAllocationAssetType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TradeAllocationAssetTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TradeAllocationAssetType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TradeAllocationAssetTypeOpen, z.ZodTypeDef, TradeAllocationAssetTypeOpen>;
}
/** @internal */
export declare const TradeAllocationBrokerCapacity$inboundSchema: z.ZodType<TradeAllocationBrokerCapacityOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TradeAllocationBrokerCapacity$outboundSchema: z.ZodType<TradeAllocationBrokerCapacityOpen, z.ZodTypeDef, TradeAllocationBrokerCapacityOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TradeAllocationBrokerCapacity$ {
    /** @deprecated use `TradeAllocationBrokerCapacity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TradeAllocationBrokerCapacityOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TradeAllocationBrokerCapacity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TradeAllocationBrokerCapacityOpen, z.ZodTypeDef, TradeAllocationBrokerCapacityOpen>;
}
/** @internal */
export declare const TradeAllocationCommissionAmount$inboundSchema: z.ZodType<TradeAllocationCommissionAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type TradeAllocationCommissionAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const TradeAllocationCommissionAmount$outboundSchema: z.ZodType<TradeAllocationCommissionAmount$Outbound, z.ZodTypeDef, TradeAllocationCommissionAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TradeAllocationCommissionAmount$ {
    /** @deprecated use `TradeAllocationCommissionAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TradeAllocationCommissionAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `TradeAllocationCommissionAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TradeAllocationCommissionAmount$Outbound, z.ZodTypeDef, TradeAllocationCommissionAmount>;
    /** @deprecated use `TradeAllocationCommissionAmount$Outbound` instead. */
    type Outbound = TradeAllocationCommissionAmount$Outbound;
}
export declare function tradeAllocationCommissionAmountToJSON(tradeAllocationCommissionAmount: TradeAllocationCommissionAmount): string;
export declare function tradeAllocationCommissionAmountFromJSON(jsonString: string): SafeParseResult<TradeAllocationCommissionAmount, SDKValidationError>;
/** @internal */
export declare const TradeAllocationGrossAmount$inboundSchema: z.ZodType<TradeAllocationGrossAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type TradeAllocationGrossAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const TradeAllocationGrossAmount$outboundSchema: z.ZodType<TradeAllocationGrossAmount$Outbound, z.ZodTypeDef, TradeAllocationGrossAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TradeAllocationGrossAmount$ {
    /** @deprecated use `TradeAllocationGrossAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TradeAllocationGrossAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `TradeAllocationGrossAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TradeAllocationGrossAmount$Outbound, z.ZodTypeDef, TradeAllocationGrossAmount>;
    /** @deprecated use `TradeAllocationGrossAmount$Outbound` instead. */
    type Outbound = TradeAllocationGrossAmount$Outbound;
}
export declare function tradeAllocationGrossAmountToJSON(tradeAllocationGrossAmount: TradeAllocationGrossAmount): string;
export declare function tradeAllocationGrossAmountFromJSON(jsonString: string): SafeParseResult<TradeAllocationGrossAmount, SDKValidationError>;
/** @internal */
export declare const TradeAllocationIdentifierType$inboundSchema: z.ZodType<TradeAllocationIdentifierTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TradeAllocationIdentifierType$outboundSchema: z.ZodType<TradeAllocationIdentifierTypeOpen, z.ZodTypeDef, TradeAllocationIdentifierTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TradeAllocationIdentifierType$ {
    /** @deprecated use `TradeAllocationIdentifierType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TradeAllocationIdentifierTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TradeAllocationIdentifierType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TradeAllocationIdentifierTypeOpen, z.ZodTypeDef, TradeAllocationIdentifierTypeOpen>;
}
/** @internal */
export declare const TradeAllocationPrevailingMarketPrice$inboundSchema: z.ZodType<TradeAllocationPrevailingMarketPrice, z.ZodTypeDef, unknown>;
/** @internal */
export type TradeAllocationPrevailingMarketPrice$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const TradeAllocationPrevailingMarketPrice$outboundSchema: z.ZodType<TradeAllocationPrevailingMarketPrice$Outbound, z.ZodTypeDef, TradeAllocationPrevailingMarketPrice>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TradeAllocationPrevailingMarketPrice$ {
    /** @deprecated use `TradeAllocationPrevailingMarketPrice$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TradeAllocationPrevailingMarketPrice, z.ZodTypeDef, unknown>;
    /** @deprecated use `TradeAllocationPrevailingMarketPrice$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TradeAllocationPrevailingMarketPrice$Outbound, z.ZodTypeDef, TradeAllocationPrevailingMarketPrice>;
    /** @deprecated use `TradeAllocationPrevailingMarketPrice$Outbound` instead. */
    type Outbound = TradeAllocationPrevailingMarketPrice$Outbound;
}
export declare function tradeAllocationPrevailingMarketPriceToJSON(tradeAllocationPrevailingMarketPrice: TradeAllocationPrevailingMarketPrice): string;
export declare function tradeAllocationPrevailingMarketPriceFromJSON(jsonString: string): SafeParseResult<TradeAllocationPrevailingMarketPrice, SDKValidationError>;
/** @internal */
export declare const TradeAllocationPrice$inboundSchema: z.ZodType<TradeAllocationPrice, z.ZodTypeDef, unknown>;
/** @internal */
export type TradeAllocationPrice$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const TradeAllocationPrice$outboundSchema: z.ZodType<TradeAllocationPrice$Outbound, z.ZodTypeDef, TradeAllocationPrice>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TradeAllocationPrice$ {
    /** @deprecated use `TradeAllocationPrice$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TradeAllocationPrice, z.ZodTypeDef, unknown>;
    /** @deprecated use `TradeAllocationPrice$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TradeAllocationPrice$Outbound, z.ZodTypeDef, TradeAllocationPrice>;
    /** @deprecated use `TradeAllocationPrice$Outbound` instead. */
    type Outbound = TradeAllocationPrice$Outbound;
}
export declare function tradeAllocationPriceToJSON(tradeAllocationPrice: TradeAllocationPrice): string;
export declare function tradeAllocationPriceFromJSON(jsonString: string): SafeParseResult<TradeAllocationPrice, SDKValidationError>;
/** @internal */
export declare const TradeAllocationPriceAdjustmentAmount$inboundSchema: z.ZodType<TradeAllocationPriceAdjustmentAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type TradeAllocationPriceAdjustmentAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const TradeAllocationPriceAdjustmentAmount$outboundSchema: z.ZodType<TradeAllocationPriceAdjustmentAmount$Outbound, z.ZodTypeDef, TradeAllocationPriceAdjustmentAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TradeAllocationPriceAdjustmentAmount$ {
    /** @deprecated use `TradeAllocationPriceAdjustmentAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TradeAllocationPriceAdjustmentAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `TradeAllocationPriceAdjustmentAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TradeAllocationPriceAdjustmentAmount$Outbound, z.ZodTypeDef, TradeAllocationPriceAdjustmentAmount>;
    /** @deprecated use `TradeAllocationPriceAdjustmentAmount$Outbound` instead. */
    type Outbound = TradeAllocationPriceAdjustmentAmount$Outbound;
}
export declare function tradeAllocationPriceAdjustmentAmountToJSON(tradeAllocationPriceAdjustmentAmount: TradeAllocationPriceAdjustmentAmount): string;
export declare function tradeAllocationPriceAdjustmentAmountFromJSON(jsonString: string): SafeParseResult<TradeAllocationPriceAdjustmentAmount, SDKValidationError>;
/** @internal */
export declare const TradeAllocationPriceAdjustmentType$inboundSchema: z.ZodType<TradeAllocationPriceAdjustmentTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TradeAllocationPriceAdjustmentType$outboundSchema: z.ZodType<TradeAllocationPriceAdjustmentTypeOpen, z.ZodTypeDef, TradeAllocationPriceAdjustmentTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TradeAllocationPriceAdjustmentType$ {
    /** @deprecated use `TradeAllocationPriceAdjustmentType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TradeAllocationPriceAdjustmentTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TradeAllocationPriceAdjustmentType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TradeAllocationPriceAdjustmentTypeOpen, z.ZodTypeDef, TradeAllocationPriceAdjustmentTypeOpen>;
}
/** @internal */
export declare const TradeAllocationPriceAdjustment$inboundSchema: z.ZodType<TradeAllocationPriceAdjustment, z.ZodTypeDef, unknown>;
/** @internal */
export type TradeAllocationPriceAdjustment$Outbound = {
    price_adjustment_amount?: TradeAllocationPriceAdjustmentAmount$Outbound | null | undefined;
    price_adjustment_type?: string | undefined;
};
/** @internal */
export declare const TradeAllocationPriceAdjustment$outboundSchema: z.ZodType<TradeAllocationPriceAdjustment$Outbound, z.ZodTypeDef, TradeAllocationPriceAdjustment>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TradeAllocationPriceAdjustment$ {
    /** @deprecated use `TradeAllocationPriceAdjustment$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TradeAllocationPriceAdjustment, z.ZodTypeDef, unknown>;
    /** @deprecated use `TradeAllocationPriceAdjustment$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TradeAllocationPriceAdjustment$Outbound, z.ZodTypeDef, TradeAllocationPriceAdjustment>;
    /** @deprecated use `TradeAllocationPriceAdjustment$Outbound` instead. */
    type Outbound = TradeAllocationPriceAdjustment$Outbound;
}
export declare function tradeAllocationPriceAdjustmentToJSON(tradeAllocationPriceAdjustment: TradeAllocationPriceAdjustment): string;
export declare function tradeAllocationPriceAdjustmentFromJSON(jsonString: string): SafeParseResult<TradeAllocationPriceAdjustment, SDKValidationError>;
/** @internal */
export declare const TradeAllocationQuantity$inboundSchema: z.ZodType<TradeAllocationQuantity, z.ZodTypeDef, unknown>;
/** @internal */
export type TradeAllocationQuantity$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const TradeAllocationQuantity$outboundSchema: z.ZodType<TradeAllocationQuantity$Outbound, z.ZodTypeDef, TradeAllocationQuantity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TradeAllocationQuantity$ {
    /** @deprecated use `TradeAllocationQuantity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TradeAllocationQuantity, z.ZodTypeDef, unknown>;
    /** @deprecated use `TradeAllocationQuantity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TradeAllocationQuantity$Outbound, z.ZodTypeDef, TradeAllocationQuantity>;
    /** @deprecated use `TradeAllocationQuantity$Outbound` instead. */
    type Outbound = TradeAllocationQuantity$Outbound;
}
export declare function tradeAllocationQuantityToJSON(tradeAllocationQuantity: TradeAllocationQuantity): string;
export declare function tradeAllocationQuantityFromJSON(jsonString: string): SafeParseResult<TradeAllocationQuantity, SDKValidationError>;
/** @internal */
export declare const TradeAllocationSettlementDate$inboundSchema: z.ZodType<TradeAllocationSettlementDate, z.ZodTypeDef, unknown>;
/** @internal */
export type TradeAllocationSettlementDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const TradeAllocationSettlementDate$outboundSchema: z.ZodType<TradeAllocationSettlementDate$Outbound, z.ZodTypeDef, TradeAllocationSettlementDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TradeAllocationSettlementDate$ {
    /** @deprecated use `TradeAllocationSettlementDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TradeAllocationSettlementDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `TradeAllocationSettlementDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TradeAllocationSettlementDate$Outbound, z.ZodTypeDef, TradeAllocationSettlementDate>;
    /** @deprecated use `TradeAllocationSettlementDate$Outbound` instead. */
    type Outbound = TradeAllocationSettlementDate$Outbound;
}
export declare function tradeAllocationSettlementDateToJSON(tradeAllocationSettlementDate: TradeAllocationSettlementDate): string;
export declare function tradeAllocationSettlementDateFromJSON(jsonString: string): SafeParseResult<TradeAllocationSettlementDate, SDKValidationError>;
/** @internal */
export declare const TradeAllocationSideModifier$inboundSchema: z.ZodType<TradeAllocationSideModifierOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TradeAllocationSideModifier$outboundSchema: z.ZodType<TradeAllocationSideModifierOpen, z.ZodTypeDef, TradeAllocationSideModifierOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TradeAllocationSideModifier$ {
    /** @deprecated use `TradeAllocationSideModifier$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TradeAllocationSideModifierOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TradeAllocationSideModifier$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TradeAllocationSideModifierOpen, z.ZodTypeDef, TradeAllocationSideModifierOpen>;
}
/** @internal */
export declare const TradeAllocationSpecialInstructions$inboundSchema: z.ZodType<TradeAllocationSpecialInstructionsOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TradeAllocationSpecialInstructions$outboundSchema: z.ZodType<TradeAllocationSpecialInstructionsOpen, z.ZodTypeDef, TradeAllocationSpecialInstructionsOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TradeAllocationSpecialInstructions$ {
    /** @deprecated use `TradeAllocationSpecialInstructions$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TradeAllocationSpecialInstructionsOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TradeAllocationSpecialInstructions$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TradeAllocationSpecialInstructionsOpen, z.ZodTypeDef, TradeAllocationSpecialInstructionsOpen>;
}
/** @internal */
export declare const TradeAllocationState$inboundSchema: z.ZodType<TradeAllocationStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TradeAllocationState$outboundSchema: z.ZodType<TradeAllocationStateOpen, z.ZodTypeDef, TradeAllocationStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TradeAllocationState$ {
    /** @deprecated use `TradeAllocationState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TradeAllocationStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TradeAllocationState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TradeAllocationStateOpen, z.ZodTypeDef, TradeAllocationStateOpen>;
}
/** @internal */
export declare const TradeAllocationToSide$inboundSchema: z.ZodType<TradeAllocationToSideOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TradeAllocationToSide$outboundSchema: z.ZodType<TradeAllocationToSideOpen, z.ZodTypeDef, TradeAllocationToSideOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TradeAllocationToSide$ {
    /** @deprecated use `TradeAllocationToSide$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TradeAllocationToSideOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TradeAllocationToSide$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TradeAllocationToSideOpen, z.ZodTypeDef, TradeAllocationToSideOpen>;
}
/** @internal */
export declare const TradeAllocationWhenIssued$inboundSchema: z.ZodType<TradeAllocationWhenIssuedOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TradeAllocationWhenIssued$outboundSchema: z.ZodType<TradeAllocationWhenIssuedOpen, z.ZodTypeDef, TradeAllocationWhenIssuedOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TradeAllocationWhenIssued$ {
    /** @deprecated use `TradeAllocationWhenIssued$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TradeAllocationWhenIssuedOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TradeAllocationWhenIssued$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TradeAllocationWhenIssuedOpen, z.ZodTypeDef, TradeAllocationWhenIssuedOpen>;
}
/** @internal */
export declare const TradeAllocation$inboundSchema: z.ZodType<TradeAllocation, z.ZodTypeDef, unknown>;
/** @internal */
export type TradeAllocation$Outbound = {
    accrued_interest_amount?: TradeAllocationAccruedInterestAmount$Outbound | null | undefined;
    additional_instructions?: string | undefined;
    asset_type?: string | undefined;
    bond_yield?: Array<BondYield$Outbound> | undefined;
    broker_capacity?: string | undefined;
    client_order_id?: string | undefined;
    commission_amount?: TradeAllocationCommissionAmount$Outbound | null | undefined;
    execution_time?: string | null | undefined;
    fees?: Array<BookingFee$Outbound> | undefined;
    from_account_id?: string | undefined;
    from_activity_id?: string | undefined;
    gross_amount?: TradeAllocationGrossAmount$Outbound | null | undefined;
    identifier?: string | undefined;
    identifier_type?: string | undefined;
    issuing_region_code?: string | undefined;
    lot_matching_instructions?: Array<BookingLot$Outbound> | undefined;
    memo?: string | undefined;
    name?: string | undefined;
    prevailing_market_price?: TradeAllocationPrevailingMarketPrice$Outbound | null | undefined;
    price?: TradeAllocationPrice$Outbound | null | undefined;
    price_adjustment?: TradeAllocationPriceAdjustment$Outbound | null | undefined;
    quantity?: TradeAllocationQuantity$Outbound | null | undefined;
    settlement_date?: TradeAllocationSettlementDate$Outbound | null | undefined;
    side_modifier?: string | undefined;
    source_application?: string | undefined;
    special_instructions?: Array<string> | undefined;
    state?: string | undefined;
    to_account_id?: string | undefined;
    to_activity_id?: string | undefined;
    to_side?: string | undefined;
    trade_allocation_id?: string | undefined;
    when_issued?: string | undefined;
};
/** @internal */
export declare const TradeAllocation$outboundSchema: z.ZodType<TradeAllocation$Outbound, z.ZodTypeDef, TradeAllocation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TradeAllocation$ {
    /** @deprecated use `TradeAllocation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TradeAllocation, z.ZodTypeDef, unknown>;
    /** @deprecated use `TradeAllocation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TradeAllocation$Outbound, z.ZodTypeDef, TradeAllocation>;
    /** @deprecated use `TradeAllocation$Outbound` instead. */
    type Outbound = TradeAllocation$Outbound;
}
export declare function tradeAllocationToJSON(tradeAllocation: TradeAllocation): string;
export declare function tradeAllocationFromJSON(jsonString: string): SafeParseResult<TradeAllocation, SDKValidationError>;
//# sourceMappingURL=tradeallocation.d.ts.map