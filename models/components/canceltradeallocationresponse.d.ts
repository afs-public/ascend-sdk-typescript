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
export type CancelTradeAllocationResponseAccruedInterestAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Type of the asset being traded. Required for SYMBOL and CUSIP.
 */
export declare enum CancelTradeAllocationResponseAssetType {
    AssetTypeUnspecified = "ASSET_TYPE_UNSPECIFIED",
    Equity = "EQUITY",
    FixedIncome = "FIXED_INCOME"
}
/**
 * Type of the asset being traded. Required for SYMBOL and CUSIP.
 */
export type CancelTradeAllocationResponseAssetTypeOpen = OpenEnum<typeof CancelTradeAllocationResponseAssetType>;
/**
 * Broker capacity for the trade.
 */
export declare enum CancelTradeAllocationResponseBrokerCapacity {
    CapacityUnspecified = "CAPACITY_UNSPECIFIED",
    Agency = "AGENCY",
    Principal = "PRINCIPAL",
    Mixed = "MIXED"
}
/**
 * Broker capacity for the trade.
 */
export type CancelTradeAllocationResponseBrokerCapacityOpen = OpenEnum<typeof CancelTradeAllocationResponseBrokerCapacity>;
/**
 * Commission amount of the trade allocation that will only be applied to the to_account_id.
 */
export type CancelTradeAllocationResponseCommissionAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Gross amount is calculated by the Booking service by multiplying price and quantity and fixing it to 2 fractional precision. Optionally specifiable. If present, will override the gross_amount calculated above.
 */
export type CancelTradeAllocationResponseGrossAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Identifier type for the asset being traded.
 */
export declare enum CancelTradeAllocationResponseIdentifierType {
    IdentifierTypeUnspecified = "IDENTIFIER_TYPE_UNSPECIFIED",
    AssetId = "ASSET_ID",
    Symbol = "SYMBOL",
    Cusip = "CUSIP",
    Isin = "ISIN"
}
/**
 * Identifier type for the asset being traded.
 */
export type CancelTradeAllocationResponseIdentifierTypeOpen = OpenEnum<typeof CancelTradeAllocationResponseIdentifierType>;
/**
 * The price for the instrument that is prevailing in the market. Required for FIXED_INCOME trade allocations when the broker_capacity is PRINCIPAL.
 */
export type CancelTradeAllocationResponsePrevailingMarketPrice = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Price with requirement of 8 or less integral number and 8 or less fractional precision.
 */
export type CancelTradeAllocationResponsePrice = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Total monetary value of the price_adjustment
 */
export type CancelTradeAllocationResponsePriceAdjustmentAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The type of price adjustment being applied by the broker to the net price of the security.
 */
export declare enum CancelTradeAllocationResponsePriceAdjustmentType {
    PriceAdjustmentTypeUnspecified = "PRICE_ADJUSTMENT_TYPE_UNSPECIFIED",
    Markup = "MARKUP",
    Markdown = "MARKDOWN",
    GrossCredit = "GROSS_CREDIT"
}
/**
 * The type of price adjustment being applied by the broker to the net price of the security.
 */
export type CancelTradeAllocationResponsePriceAdjustmentTypeOpen = OpenEnum<typeof CancelTradeAllocationResponsePriceAdjustmentType>;
/**
 * Price adjustment that will be applied to the net price of the security.
 */
export type CancelTradeAllocationResponsePriceAdjustment = {
    /**
     * Total monetary value of the price_adjustment
     */
    priceAdjustmentAmount?: CancelTradeAllocationResponsePriceAdjustmentAmount | null | undefined;
    /**
     * The type of price adjustment being applied by the broker to the net price of the security.
     */
    priceAdjustmentType?: CancelTradeAllocationResponsePriceAdjustmentTypeOpen | undefined;
};
/**
 * Quantity with requirement of 12 or less integral number and 5 or less fractional precision.
 */
export type CancelTradeAllocationResponseQuantity = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Defaults to T+1 for equities if this is not provided. Calculated using the execution_time field in Eastern Time.
 */
export type CancelTradeAllocationResponseSettlementDate = {
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
export declare enum CancelTradeAllocationResponseSideModifier {
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
export type CancelTradeAllocationResponseSideModifierOpen = OpenEnum<typeof CancelTradeAllocationResponseSideModifier>;
export declare enum CancelTradeAllocationResponseSpecialInstructions {
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
export type CancelTradeAllocationResponseSpecialInstructionsOpen = OpenEnum<typeof CancelTradeAllocationResponseSpecialInstructions>;
/**
 * The state that the trade allocation is in.
 */
export declare enum CancelTradeAllocationResponseState {
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
export type CancelTradeAllocationResponseStateOpen = OpenEnum<typeof CancelTradeAllocationResponseState>;
/**
 * Denotes the side of the position going into the to_account_id. A to_side of SELL indicates the position will be allocated with a BUY out of the from_account, and a SELL into the to_account.
 */
export declare enum CancelTradeAllocationResponseToSide {
    SideUnspecified = "SIDE_UNSPECIFIED",
    Buy = "BUY",
    Sell = "SELL"
}
/**
 * Denotes the side of the position going into the to_account_id. A to_side of SELL indicates the position will be allocated with a BUY out of the from_account, and a SELL into the to_account.
 */
export type CancelTradeAllocationResponseToSideOpen = OpenEnum<typeof CancelTradeAllocationResponseToSide>;
/**
 * Denotes that this trade allocation was either when_issued or when_distributed.
 */
export declare enum CancelTradeAllocationResponseWhenIssued {
    WhenIssuedTypeUnspecified = "WHEN_ISSUED_TYPE_UNSPECIFIED",
    WhenIssued = "WHEN_ISSUED",
    WhenDistributed = "WHEN_DISTRIBUTED"
}
/**
 * Denotes that this trade allocation was either when_issued or when_distributed.
 */
export type CancelTradeAllocationResponseWhenIssuedOpen = OpenEnum<typeof CancelTradeAllocationResponseWhenIssued>;
/**
 * The trade allocation that was canceled.
 */
export type CancelTradeAllocationResponseTradeAllocation = {
    /**
     * The amount of interest that has been accrued in the issuing currency for a single instrument.
     */
    accruedInterestAmount?: CancelTradeAllocationResponseAccruedInterestAmount | null | undefined;
    /**
     * Free form instructions that can be used to provide additional instructions (that are not captured by existing special instructions) and will be put on the trade confirm.
     */
    additionalInstructions?: string | undefined;
    /**
     * Type of the asset being traded. Required for SYMBOL and CUSIP.
     */
    assetType?: CancelTradeAllocationResponseAssetTypeOpen | undefined;
    /**
     * The yield associated with an individual fill of a fixed income trade. Required for FIXED_INCOME trades. Not allowed for trades of other instrument types.
     */
    bondYield?: Array<BondYield> | undefined;
    /**
     * Broker capacity for the trade.
     */
    brokerCapacity?: CancelTradeAllocationResponseBrokerCapacityOpen | undefined;
    /**
     * The unique identifier that is associated with an order. This is useful for associating the trade allocation with the original trade. This will be assigned a unique UUID if not provided.
     */
    clientOrderId?: string | undefined;
    /**
     * Commission amount of the trade allocation that will only be applied to the to_account_id.
     */
    commissionAmount?: CancelTradeAllocationResponseCommissionAmount | null | undefined;
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
    grossAmount?: CancelTradeAllocationResponseGrossAmount | null | undefined;
    /**
     * Identifier (of the type specified in `identifier_type`). Responses will supply the originally requested identifier.
     */
    identifier?: string | undefined;
    /**
     * Identifier type for the asset being traded.
     */
    identifierType?: CancelTradeAllocationResponseIdentifierTypeOpen | undefined;
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
    prevailingMarketPrice?: CancelTradeAllocationResponsePrevailingMarketPrice | null | undefined;
    /**
     * Price with requirement of 8 or less integral number and 8 or less fractional precision.
     */
    price?: CancelTradeAllocationResponsePrice | null | undefined;
    /**
     * Price adjustment that will be applied to the net price of the security.
     */
    priceAdjustment?: CancelTradeAllocationResponsePriceAdjustment | null | undefined;
    /**
     * Quantity with requirement of 12 or less integral number and 5 or less fractional precision.
     */
    quantity?: CancelTradeAllocationResponseQuantity | null | undefined;
    /**
     * Defaults to T+1 for equities if this is not provided. Calculated using the execution_time field in Eastern Time.
     */
    settlementDate?: CancelTradeAllocationResponseSettlementDate | null | undefined;
    /**
     * Side modifier for the trade allocation.
     */
    sideModifier?: CancelTradeAllocationResponseSideModifierOpen | undefined;
    /**
     * The source of the submission.
     */
    sourceApplication?: string | undefined;
    /**
     * An enumerated list of values used to indicate certain attributes about a trade allocation (E.g. BROKER_LIQUIDATION) and/or trigger downstream processing rules (e.g. SUPPRESS_TRACE_REPORTING)
     */
    specialInstructions?: Array<CancelTradeAllocationResponseSpecialInstructionsOpen> | undefined;
    /**
     * The state that the trade allocation is in.
     */
    state?: CancelTradeAllocationResponseStateOpen | undefined;
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
    toSide?: CancelTradeAllocationResponseToSideOpen | undefined;
    /**
     * A ULID to uniquely identify the trade allocation globally.
     */
    tradeAllocationId?: string | undefined;
    /**
     * Denotes that this trade allocation was either when_issued or when_distributed.
     */
    whenIssued?: CancelTradeAllocationResponseWhenIssuedOpen | undefined;
};
/**
 * A response for the cancel trade allocation method.
 */
export type CancelTradeAllocationResponse = {
    /**
     * The trade allocation that was canceled.
     */
    tradeAllocation?: CancelTradeAllocationResponseTradeAllocation | null | undefined;
};
/** @internal */
export declare const CancelTradeAllocationResponseAccruedInterestAmount$inboundSchema: z.ZodType<CancelTradeAllocationResponseAccruedInterestAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelTradeAllocationResponseAccruedInterestAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const CancelTradeAllocationResponseAccruedInterestAmount$outboundSchema: z.ZodType<CancelTradeAllocationResponseAccruedInterestAmount$Outbound, z.ZodTypeDef, CancelTradeAllocationResponseAccruedInterestAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelTradeAllocationResponseAccruedInterestAmount$ {
    /** @deprecated use `CancelTradeAllocationResponseAccruedInterestAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelTradeAllocationResponseAccruedInterestAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelTradeAllocationResponseAccruedInterestAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelTradeAllocationResponseAccruedInterestAmount$Outbound, z.ZodTypeDef, CancelTradeAllocationResponseAccruedInterestAmount>;
    /** @deprecated use `CancelTradeAllocationResponseAccruedInterestAmount$Outbound` instead. */
    type Outbound = CancelTradeAllocationResponseAccruedInterestAmount$Outbound;
}
export declare function cancelTradeAllocationResponseAccruedInterestAmountToJSON(cancelTradeAllocationResponseAccruedInterestAmount: CancelTradeAllocationResponseAccruedInterestAmount): string;
export declare function cancelTradeAllocationResponseAccruedInterestAmountFromJSON(jsonString: string): SafeParseResult<CancelTradeAllocationResponseAccruedInterestAmount, SDKValidationError>;
/** @internal */
export declare const CancelTradeAllocationResponseAssetType$inboundSchema: z.ZodType<CancelTradeAllocationResponseAssetTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CancelTradeAllocationResponseAssetType$outboundSchema: z.ZodType<CancelTradeAllocationResponseAssetTypeOpen, z.ZodTypeDef, CancelTradeAllocationResponseAssetTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelTradeAllocationResponseAssetType$ {
    /** @deprecated use `CancelTradeAllocationResponseAssetType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelTradeAllocationResponseAssetTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelTradeAllocationResponseAssetType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelTradeAllocationResponseAssetTypeOpen, z.ZodTypeDef, CancelTradeAllocationResponseAssetTypeOpen>;
}
/** @internal */
export declare const CancelTradeAllocationResponseBrokerCapacity$inboundSchema: z.ZodType<CancelTradeAllocationResponseBrokerCapacityOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CancelTradeAllocationResponseBrokerCapacity$outboundSchema: z.ZodType<CancelTradeAllocationResponseBrokerCapacityOpen, z.ZodTypeDef, CancelTradeAllocationResponseBrokerCapacityOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelTradeAllocationResponseBrokerCapacity$ {
    /** @deprecated use `CancelTradeAllocationResponseBrokerCapacity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelTradeAllocationResponseBrokerCapacityOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelTradeAllocationResponseBrokerCapacity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelTradeAllocationResponseBrokerCapacityOpen, z.ZodTypeDef, CancelTradeAllocationResponseBrokerCapacityOpen>;
}
/** @internal */
export declare const CancelTradeAllocationResponseCommissionAmount$inboundSchema: z.ZodType<CancelTradeAllocationResponseCommissionAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelTradeAllocationResponseCommissionAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const CancelTradeAllocationResponseCommissionAmount$outboundSchema: z.ZodType<CancelTradeAllocationResponseCommissionAmount$Outbound, z.ZodTypeDef, CancelTradeAllocationResponseCommissionAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelTradeAllocationResponseCommissionAmount$ {
    /** @deprecated use `CancelTradeAllocationResponseCommissionAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelTradeAllocationResponseCommissionAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelTradeAllocationResponseCommissionAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelTradeAllocationResponseCommissionAmount$Outbound, z.ZodTypeDef, CancelTradeAllocationResponseCommissionAmount>;
    /** @deprecated use `CancelTradeAllocationResponseCommissionAmount$Outbound` instead. */
    type Outbound = CancelTradeAllocationResponseCommissionAmount$Outbound;
}
export declare function cancelTradeAllocationResponseCommissionAmountToJSON(cancelTradeAllocationResponseCommissionAmount: CancelTradeAllocationResponseCommissionAmount): string;
export declare function cancelTradeAllocationResponseCommissionAmountFromJSON(jsonString: string): SafeParseResult<CancelTradeAllocationResponseCommissionAmount, SDKValidationError>;
/** @internal */
export declare const CancelTradeAllocationResponseGrossAmount$inboundSchema: z.ZodType<CancelTradeAllocationResponseGrossAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelTradeAllocationResponseGrossAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const CancelTradeAllocationResponseGrossAmount$outboundSchema: z.ZodType<CancelTradeAllocationResponseGrossAmount$Outbound, z.ZodTypeDef, CancelTradeAllocationResponseGrossAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelTradeAllocationResponseGrossAmount$ {
    /** @deprecated use `CancelTradeAllocationResponseGrossAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelTradeAllocationResponseGrossAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelTradeAllocationResponseGrossAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelTradeAllocationResponseGrossAmount$Outbound, z.ZodTypeDef, CancelTradeAllocationResponseGrossAmount>;
    /** @deprecated use `CancelTradeAllocationResponseGrossAmount$Outbound` instead. */
    type Outbound = CancelTradeAllocationResponseGrossAmount$Outbound;
}
export declare function cancelTradeAllocationResponseGrossAmountToJSON(cancelTradeAllocationResponseGrossAmount: CancelTradeAllocationResponseGrossAmount): string;
export declare function cancelTradeAllocationResponseGrossAmountFromJSON(jsonString: string): SafeParseResult<CancelTradeAllocationResponseGrossAmount, SDKValidationError>;
/** @internal */
export declare const CancelTradeAllocationResponseIdentifierType$inboundSchema: z.ZodType<CancelTradeAllocationResponseIdentifierTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CancelTradeAllocationResponseIdentifierType$outboundSchema: z.ZodType<CancelTradeAllocationResponseIdentifierTypeOpen, z.ZodTypeDef, CancelTradeAllocationResponseIdentifierTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelTradeAllocationResponseIdentifierType$ {
    /** @deprecated use `CancelTradeAllocationResponseIdentifierType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelTradeAllocationResponseIdentifierTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelTradeAllocationResponseIdentifierType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelTradeAllocationResponseIdentifierTypeOpen, z.ZodTypeDef, CancelTradeAllocationResponseIdentifierTypeOpen>;
}
/** @internal */
export declare const CancelTradeAllocationResponsePrevailingMarketPrice$inboundSchema: z.ZodType<CancelTradeAllocationResponsePrevailingMarketPrice, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelTradeAllocationResponsePrevailingMarketPrice$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const CancelTradeAllocationResponsePrevailingMarketPrice$outboundSchema: z.ZodType<CancelTradeAllocationResponsePrevailingMarketPrice$Outbound, z.ZodTypeDef, CancelTradeAllocationResponsePrevailingMarketPrice>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelTradeAllocationResponsePrevailingMarketPrice$ {
    /** @deprecated use `CancelTradeAllocationResponsePrevailingMarketPrice$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelTradeAllocationResponsePrevailingMarketPrice, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelTradeAllocationResponsePrevailingMarketPrice$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelTradeAllocationResponsePrevailingMarketPrice$Outbound, z.ZodTypeDef, CancelTradeAllocationResponsePrevailingMarketPrice>;
    /** @deprecated use `CancelTradeAllocationResponsePrevailingMarketPrice$Outbound` instead. */
    type Outbound = CancelTradeAllocationResponsePrevailingMarketPrice$Outbound;
}
export declare function cancelTradeAllocationResponsePrevailingMarketPriceToJSON(cancelTradeAllocationResponsePrevailingMarketPrice: CancelTradeAllocationResponsePrevailingMarketPrice): string;
export declare function cancelTradeAllocationResponsePrevailingMarketPriceFromJSON(jsonString: string): SafeParseResult<CancelTradeAllocationResponsePrevailingMarketPrice, SDKValidationError>;
/** @internal */
export declare const CancelTradeAllocationResponsePrice$inboundSchema: z.ZodType<CancelTradeAllocationResponsePrice, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelTradeAllocationResponsePrice$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const CancelTradeAllocationResponsePrice$outboundSchema: z.ZodType<CancelTradeAllocationResponsePrice$Outbound, z.ZodTypeDef, CancelTradeAllocationResponsePrice>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelTradeAllocationResponsePrice$ {
    /** @deprecated use `CancelTradeAllocationResponsePrice$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelTradeAllocationResponsePrice, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelTradeAllocationResponsePrice$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelTradeAllocationResponsePrice$Outbound, z.ZodTypeDef, CancelTradeAllocationResponsePrice>;
    /** @deprecated use `CancelTradeAllocationResponsePrice$Outbound` instead. */
    type Outbound = CancelTradeAllocationResponsePrice$Outbound;
}
export declare function cancelTradeAllocationResponsePriceToJSON(cancelTradeAllocationResponsePrice: CancelTradeAllocationResponsePrice): string;
export declare function cancelTradeAllocationResponsePriceFromJSON(jsonString: string): SafeParseResult<CancelTradeAllocationResponsePrice, SDKValidationError>;
/** @internal */
export declare const CancelTradeAllocationResponsePriceAdjustmentAmount$inboundSchema: z.ZodType<CancelTradeAllocationResponsePriceAdjustmentAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelTradeAllocationResponsePriceAdjustmentAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const CancelTradeAllocationResponsePriceAdjustmentAmount$outboundSchema: z.ZodType<CancelTradeAllocationResponsePriceAdjustmentAmount$Outbound, z.ZodTypeDef, CancelTradeAllocationResponsePriceAdjustmentAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelTradeAllocationResponsePriceAdjustmentAmount$ {
    /** @deprecated use `CancelTradeAllocationResponsePriceAdjustmentAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelTradeAllocationResponsePriceAdjustmentAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelTradeAllocationResponsePriceAdjustmentAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelTradeAllocationResponsePriceAdjustmentAmount$Outbound, z.ZodTypeDef, CancelTradeAllocationResponsePriceAdjustmentAmount>;
    /** @deprecated use `CancelTradeAllocationResponsePriceAdjustmentAmount$Outbound` instead. */
    type Outbound = CancelTradeAllocationResponsePriceAdjustmentAmount$Outbound;
}
export declare function cancelTradeAllocationResponsePriceAdjustmentAmountToJSON(cancelTradeAllocationResponsePriceAdjustmentAmount: CancelTradeAllocationResponsePriceAdjustmentAmount): string;
export declare function cancelTradeAllocationResponsePriceAdjustmentAmountFromJSON(jsonString: string): SafeParseResult<CancelTradeAllocationResponsePriceAdjustmentAmount, SDKValidationError>;
/** @internal */
export declare const CancelTradeAllocationResponsePriceAdjustmentType$inboundSchema: z.ZodType<CancelTradeAllocationResponsePriceAdjustmentTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CancelTradeAllocationResponsePriceAdjustmentType$outboundSchema: z.ZodType<CancelTradeAllocationResponsePriceAdjustmentTypeOpen, z.ZodTypeDef, CancelTradeAllocationResponsePriceAdjustmentTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelTradeAllocationResponsePriceAdjustmentType$ {
    /** @deprecated use `CancelTradeAllocationResponsePriceAdjustmentType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelTradeAllocationResponsePriceAdjustmentTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelTradeAllocationResponsePriceAdjustmentType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelTradeAllocationResponsePriceAdjustmentTypeOpen, z.ZodTypeDef, CancelTradeAllocationResponsePriceAdjustmentTypeOpen>;
}
/** @internal */
export declare const CancelTradeAllocationResponsePriceAdjustment$inboundSchema: z.ZodType<CancelTradeAllocationResponsePriceAdjustment, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelTradeAllocationResponsePriceAdjustment$Outbound = {
    price_adjustment_amount?: CancelTradeAllocationResponsePriceAdjustmentAmount$Outbound | null | undefined;
    price_adjustment_type?: string | undefined;
};
/** @internal */
export declare const CancelTradeAllocationResponsePriceAdjustment$outboundSchema: z.ZodType<CancelTradeAllocationResponsePriceAdjustment$Outbound, z.ZodTypeDef, CancelTradeAllocationResponsePriceAdjustment>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelTradeAllocationResponsePriceAdjustment$ {
    /** @deprecated use `CancelTradeAllocationResponsePriceAdjustment$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelTradeAllocationResponsePriceAdjustment, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelTradeAllocationResponsePriceAdjustment$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelTradeAllocationResponsePriceAdjustment$Outbound, z.ZodTypeDef, CancelTradeAllocationResponsePriceAdjustment>;
    /** @deprecated use `CancelTradeAllocationResponsePriceAdjustment$Outbound` instead. */
    type Outbound = CancelTradeAllocationResponsePriceAdjustment$Outbound;
}
export declare function cancelTradeAllocationResponsePriceAdjustmentToJSON(cancelTradeAllocationResponsePriceAdjustment: CancelTradeAllocationResponsePriceAdjustment): string;
export declare function cancelTradeAllocationResponsePriceAdjustmentFromJSON(jsonString: string): SafeParseResult<CancelTradeAllocationResponsePriceAdjustment, SDKValidationError>;
/** @internal */
export declare const CancelTradeAllocationResponseQuantity$inboundSchema: z.ZodType<CancelTradeAllocationResponseQuantity, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelTradeAllocationResponseQuantity$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const CancelTradeAllocationResponseQuantity$outboundSchema: z.ZodType<CancelTradeAllocationResponseQuantity$Outbound, z.ZodTypeDef, CancelTradeAllocationResponseQuantity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelTradeAllocationResponseQuantity$ {
    /** @deprecated use `CancelTradeAllocationResponseQuantity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelTradeAllocationResponseQuantity, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelTradeAllocationResponseQuantity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelTradeAllocationResponseQuantity$Outbound, z.ZodTypeDef, CancelTradeAllocationResponseQuantity>;
    /** @deprecated use `CancelTradeAllocationResponseQuantity$Outbound` instead. */
    type Outbound = CancelTradeAllocationResponseQuantity$Outbound;
}
export declare function cancelTradeAllocationResponseQuantityToJSON(cancelTradeAllocationResponseQuantity: CancelTradeAllocationResponseQuantity): string;
export declare function cancelTradeAllocationResponseQuantityFromJSON(jsonString: string): SafeParseResult<CancelTradeAllocationResponseQuantity, SDKValidationError>;
/** @internal */
export declare const CancelTradeAllocationResponseSettlementDate$inboundSchema: z.ZodType<CancelTradeAllocationResponseSettlementDate, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelTradeAllocationResponseSettlementDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const CancelTradeAllocationResponseSettlementDate$outboundSchema: z.ZodType<CancelTradeAllocationResponseSettlementDate$Outbound, z.ZodTypeDef, CancelTradeAllocationResponseSettlementDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelTradeAllocationResponseSettlementDate$ {
    /** @deprecated use `CancelTradeAllocationResponseSettlementDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelTradeAllocationResponseSettlementDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelTradeAllocationResponseSettlementDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelTradeAllocationResponseSettlementDate$Outbound, z.ZodTypeDef, CancelTradeAllocationResponseSettlementDate>;
    /** @deprecated use `CancelTradeAllocationResponseSettlementDate$Outbound` instead. */
    type Outbound = CancelTradeAllocationResponseSettlementDate$Outbound;
}
export declare function cancelTradeAllocationResponseSettlementDateToJSON(cancelTradeAllocationResponseSettlementDate: CancelTradeAllocationResponseSettlementDate): string;
export declare function cancelTradeAllocationResponseSettlementDateFromJSON(jsonString: string): SafeParseResult<CancelTradeAllocationResponseSettlementDate, SDKValidationError>;
/** @internal */
export declare const CancelTradeAllocationResponseSideModifier$inboundSchema: z.ZodType<CancelTradeAllocationResponseSideModifierOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CancelTradeAllocationResponseSideModifier$outboundSchema: z.ZodType<CancelTradeAllocationResponseSideModifierOpen, z.ZodTypeDef, CancelTradeAllocationResponseSideModifierOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelTradeAllocationResponseSideModifier$ {
    /** @deprecated use `CancelTradeAllocationResponseSideModifier$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelTradeAllocationResponseSideModifierOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelTradeAllocationResponseSideModifier$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelTradeAllocationResponseSideModifierOpen, z.ZodTypeDef, CancelTradeAllocationResponseSideModifierOpen>;
}
/** @internal */
export declare const CancelTradeAllocationResponseSpecialInstructions$inboundSchema: z.ZodType<CancelTradeAllocationResponseSpecialInstructionsOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CancelTradeAllocationResponseSpecialInstructions$outboundSchema: z.ZodType<CancelTradeAllocationResponseSpecialInstructionsOpen, z.ZodTypeDef, CancelTradeAllocationResponseSpecialInstructionsOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelTradeAllocationResponseSpecialInstructions$ {
    /** @deprecated use `CancelTradeAllocationResponseSpecialInstructions$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelTradeAllocationResponseSpecialInstructionsOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelTradeAllocationResponseSpecialInstructions$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelTradeAllocationResponseSpecialInstructionsOpen, z.ZodTypeDef, CancelTradeAllocationResponseSpecialInstructionsOpen>;
}
/** @internal */
export declare const CancelTradeAllocationResponseState$inboundSchema: z.ZodType<CancelTradeAllocationResponseStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CancelTradeAllocationResponseState$outboundSchema: z.ZodType<CancelTradeAllocationResponseStateOpen, z.ZodTypeDef, CancelTradeAllocationResponseStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelTradeAllocationResponseState$ {
    /** @deprecated use `CancelTradeAllocationResponseState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelTradeAllocationResponseStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelTradeAllocationResponseState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelTradeAllocationResponseStateOpen, z.ZodTypeDef, CancelTradeAllocationResponseStateOpen>;
}
/** @internal */
export declare const CancelTradeAllocationResponseToSide$inboundSchema: z.ZodType<CancelTradeAllocationResponseToSideOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CancelTradeAllocationResponseToSide$outboundSchema: z.ZodType<CancelTradeAllocationResponseToSideOpen, z.ZodTypeDef, CancelTradeAllocationResponseToSideOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelTradeAllocationResponseToSide$ {
    /** @deprecated use `CancelTradeAllocationResponseToSide$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelTradeAllocationResponseToSideOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelTradeAllocationResponseToSide$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelTradeAllocationResponseToSideOpen, z.ZodTypeDef, CancelTradeAllocationResponseToSideOpen>;
}
/** @internal */
export declare const CancelTradeAllocationResponseWhenIssued$inboundSchema: z.ZodType<CancelTradeAllocationResponseWhenIssuedOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CancelTradeAllocationResponseWhenIssued$outboundSchema: z.ZodType<CancelTradeAllocationResponseWhenIssuedOpen, z.ZodTypeDef, CancelTradeAllocationResponseWhenIssuedOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelTradeAllocationResponseWhenIssued$ {
    /** @deprecated use `CancelTradeAllocationResponseWhenIssued$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelTradeAllocationResponseWhenIssuedOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelTradeAllocationResponseWhenIssued$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelTradeAllocationResponseWhenIssuedOpen, z.ZodTypeDef, CancelTradeAllocationResponseWhenIssuedOpen>;
}
/** @internal */
export declare const CancelTradeAllocationResponseTradeAllocation$inboundSchema: z.ZodType<CancelTradeAllocationResponseTradeAllocation, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelTradeAllocationResponseTradeAllocation$Outbound = {
    accrued_interest_amount?: CancelTradeAllocationResponseAccruedInterestAmount$Outbound | null | undefined;
    additional_instructions?: string | undefined;
    asset_type?: string | undefined;
    bond_yield?: Array<BondYield$Outbound> | undefined;
    broker_capacity?: string | undefined;
    client_order_id?: string | undefined;
    commission_amount?: CancelTradeAllocationResponseCommissionAmount$Outbound | null | undefined;
    execution_time?: string | null | undefined;
    fees?: Array<BookingFee$Outbound> | undefined;
    from_account_id?: string | undefined;
    from_activity_id?: string | undefined;
    gross_amount?: CancelTradeAllocationResponseGrossAmount$Outbound | null | undefined;
    identifier?: string | undefined;
    identifier_type?: string | undefined;
    issuing_region_code?: string | undefined;
    lot_matching_instructions?: Array<BookingLot$Outbound> | undefined;
    memo?: string | undefined;
    name?: string | undefined;
    prevailing_market_price?: CancelTradeAllocationResponsePrevailingMarketPrice$Outbound | null | undefined;
    price?: CancelTradeAllocationResponsePrice$Outbound | null | undefined;
    price_adjustment?: CancelTradeAllocationResponsePriceAdjustment$Outbound | null | undefined;
    quantity?: CancelTradeAllocationResponseQuantity$Outbound | null | undefined;
    settlement_date?: CancelTradeAllocationResponseSettlementDate$Outbound | null | undefined;
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
export declare const CancelTradeAllocationResponseTradeAllocation$outboundSchema: z.ZodType<CancelTradeAllocationResponseTradeAllocation$Outbound, z.ZodTypeDef, CancelTradeAllocationResponseTradeAllocation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelTradeAllocationResponseTradeAllocation$ {
    /** @deprecated use `CancelTradeAllocationResponseTradeAllocation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelTradeAllocationResponseTradeAllocation, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelTradeAllocationResponseTradeAllocation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelTradeAllocationResponseTradeAllocation$Outbound, z.ZodTypeDef, CancelTradeAllocationResponseTradeAllocation>;
    /** @deprecated use `CancelTradeAllocationResponseTradeAllocation$Outbound` instead. */
    type Outbound = CancelTradeAllocationResponseTradeAllocation$Outbound;
}
export declare function cancelTradeAllocationResponseTradeAllocationToJSON(cancelTradeAllocationResponseTradeAllocation: CancelTradeAllocationResponseTradeAllocation): string;
export declare function cancelTradeAllocationResponseTradeAllocationFromJSON(jsonString: string): SafeParseResult<CancelTradeAllocationResponseTradeAllocation, SDKValidationError>;
/** @internal */
export declare const CancelTradeAllocationResponse$inboundSchema: z.ZodType<CancelTradeAllocationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelTradeAllocationResponse$Outbound = {
    trade_allocation?: CancelTradeAllocationResponseTradeAllocation$Outbound | null | undefined;
};
/** @internal */
export declare const CancelTradeAllocationResponse$outboundSchema: z.ZodType<CancelTradeAllocationResponse$Outbound, z.ZodTypeDef, CancelTradeAllocationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelTradeAllocationResponse$ {
    /** @deprecated use `CancelTradeAllocationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelTradeAllocationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelTradeAllocationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelTradeAllocationResponse$Outbound, z.ZodTypeDef, CancelTradeAllocationResponse>;
    /** @deprecated use `CancelTradeAllocationResponse$Outbound` instead. */
    type Outbound = CancelTradeAllocationResponse$Outbound;
}
export declare function cancelTradeAllocationResponseToJSON(cancelTradeAllocationResponse: CancelTradeAllocationResponse): string;
export declare function cancelTradeAllocationResponseFromJSON(jsonString: string): SafeParseResult<CancelTradeAllocationResponse, SDKValidationError>;
//# sourceMappingURL=canceltradeallocationresponse.d.ts.map