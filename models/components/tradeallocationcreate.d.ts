import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { BondYieldCreate, BondYieldCreate$Outbound } from "./bondyieldcreate.js";
import { BookingFeeCreate, BookingFeeCreate$Outbound } from "./bookingfeecreate.js";
import { DateCreate, DateCreate$Outbound } from "./datecreate.js";
import { DecimalCreate, DecimalCreate$Outbound } from "./decimalcreate.js";
import { LotCreate, LotCreate$Outbound } from "./lotcreate.js";
import { PriceAdjustmentCreate, PriceAdjustmentCreate$Outbound } from "./priceadjustmentcreate.js";
/**
 * Type of the asset being traded.
 */
export declare enum TradeAllocationCreateAssetType {
    AssetTypeUnspecified = "ASSET_TYPE_UNSPECIFIED",
    Equity = "EQUITY",
    FixedIncome = "FIXED_INCOME"
}
/**
 * Type of the asset being traded.
 */
export type TradeAllocationCreateAssetTypeOpen = OpenEnum<typeof TradeAllocationCreateAssetType>;
/**
 * Broker capacity for the trade.
 */
export declare enum TradeAllocationCreateBrokerCapacity {
    CapacityUnspecified = "CAPACITY_UNSPECIFIED",
    Agency = "AGENCY",
    Principal = "PRINCIPAL",
    Mixed = "MIXED"
}
/**
 * Broker capacity for the trade.
 */
export type TradeAllocationCreateBrokerCapacityOpen = OpenEnum<typeof TradeAllocationCreateBrokerCapacity>;
/**
 * Identifier type for the asset being traded.
 */
export declare enum TradeAllocationCreateIdentifierType {
    IdentifierTypeUnspecified = "IDENTIFIER_TYPE_UNSPECIFIED",
    AssetId = "ASSET_ID",
    Symbol = "SYMBOL",
    Cusip = "CUSIP",
    Isin = "ISIN"
}
/**
 * Identifier type for the asset being traded.
 */
export type TradeAllocationCreateIdentifierTypeOpen = OpenEnum<typeof TradeAllocationCreateIdentifierType>;
/**
 * Side modifier for the trade allocation.
 */
export declare enum TradeAllocationCreateSideModifier {
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
export type TradeAllocationCreateSideModifierOpen = OpenEnum<typeof TradeAllocationCreateSideModifier>;
export declare enum TradeAllocationCreateSpecialInstructions {
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
export type TradeAllocationCreateSpecialInstructionsOpen = OpenEnum<typeof TradeAllocationCreateSpecialInstructions>;
/**
 * Denotes the side of the position going into the to_account_id. A to_side of SELL indicates the position will be allocated with a BUY out of the from_account, and a SELL into the to_account.
 */
export declare enum ToSide {
    SideUnspecified = "SIDE_UNSPECIFIED",
    Buy = "BUY",
    Sell = "SELL"
}
/**
 * Denotes the side of the position going into the to_account_id. A to_side of SELL indicates the position will be allocated with a BUY out of the from_account, and a SELL into the to_account.
 */
export type ToSideOpen = OpenEnum<typeof ToSide>;
/**
 * Denotes that this trade allocation was either when_issued or when_distributed.
 */
export declare enum TradeAllocationCreateWhenIssued {
    WhenIssuedTypeUnspecified = "WHEN_ISSUED_TYPE_UNSPECIFIED",
    WhenIssued = "WHEN_ISSUED",
    WhenDistributed = "WHEN_DISTRIBUTED"
}
/**
 * Denotes that this trade allocation was either when_issued or when_distributed.
 */
export type TradeAllocationCreateWhenIssuedOpen = OpenEnum<typeof TradeAllocationCreateWhenIssued>;
/**
 * A TradeAllocation represents the movement of positions between two ascend accounts.
 */
export type TradeAllocationCreate = {
    /**
     * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal][] or Python's [decimal.Decimal][].
     *
     * @remarks
     *
     *  [BigDecimal]:
     *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
     *  [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
     */
    accruedInterestAmount?: DecimalCreate | undefined;
    /**
     * Free form instructions that can be used to provide additional instructions (that are not captured by existing special instructions) and will be put on the trade confirm.
     */
    additionalInstructions?: string | undefined;
    /**
     * Type of the asset being traded.
     */
    assetType: TradeAllocationCreateAssetTypeOpen;
    /**
     * The yield associated with an individual fill of a fixed income trade. Required for FIXED_INCOME trades. Not allowed for trades of other instrument types.
     */
    bondYield?: Array<BondYieldCreate> | undefined;
    /**
     * Broker capacity for the trade.
     */
    brokerCapacity: TradeAllocationCreateBrokerCapacityOpen;
    /**
     * The unique identifier that is associated with an order. This is useful for associating the trade allocation with the original trade. This will be assigned a unique UUID if not provided.
     */
    clientOrderId?: string | undefined;
    /**
     * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal][] or Python's [decimal.Decimal][].
     *
     * @remarks
     *
     *  [BigDecimal]:
     *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
     *  [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
     */
    commissionAmount?: DecimalCreate | undefined;
    /**
     * Timestamp of when the trade allocation took place. If settlement_date is not provided, this field will be converted into Eastern Time and used to calculate settlement_date.
     */
    executionTime: Date | null;
    /**
     * Client calculated fees that will only be applied to the to_account_id. Regulatory fees will be calculated automatically if they are not explicitly overwritten or suppressed.
     */
    fees?: Array<BookingFeeCreate> | undefined;
    /**
     * The ULID formatted account_id that the positions will be moved from.
     */
    fromAccountId: string;
    /**
     * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal][] or Python's [decimal.Decimal][].
     *
     * @remarks
     *
     *  [BigDecimal]:
     *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
     *  [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
     */
    grossAmount?: DecimalCreate | undefined;
    /**
     * Identifier (of the type specified in `identifier_type`). Responses will supply the originally requested identifier.
     */
    identifier: string;
    /**
     * Identifier type for the asset being traded.
     */
    identifierType: TradeAllocationCreateIdentifierTypeOpen;
    /**
     * Unicode CLDR region code. Issuing Region Code is required for some `identifier_type`s, especially CUSIP.
     */
    issuingRegionCode?: string | undefined;
    /**
     * One or many lot matching instructions for the trade allocation.
     */
    lotMatchingInstructions?: Array<LotCreate> | undefined;
    /**
     * Caller provided but can be used for booking-service to note original trade details when booking into the error account or using the error asset.
     */
    memo?: string | undefined;
    /**
     * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal][] or Python's [decimal.Decimal][].
     *
     * @remarks
     *
     *  [BigDecimal]:
     *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
     *  [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
     */
    prevailingMarketPrice?: DecimalCreate | undefined;
    /**
     * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal][] or Python's [decimal.Decimal][].
     *
     * @remarks
     *
     *  [BigDecimal]:
     *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
     *  [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
     */
    price: DecimalCreate;
    /**
     * Price adjustment that will be applied to the net price of the security.
     */
    priceAdjustment?: PriceAdjustmentCreate | undefined;
    /**
     * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal][] or Python's [decimal.Decimal][].
     *
     * @remarks
     *
     *  [BigDecimal]:
     *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
     *  [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
     */
    quantity: DecimalCreate;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following:
     *
     * @remarks
     *
     *  * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date
     *
     *  Related types are [google.type.TimeOfDay][google.type.TimeOfDay] and `google.protobuf.Timestamp`.
     */
    settlementDate?: DateCreate | undefined;
    /**
     * Side modifier for the trade allocation.
     */
    sideModifier?: TradeAllocationCreateSideModifierOpen | undefined;
    /**
     * The source of the submission.
     */
    sourceApplication: string;
    /**
     * An enumerated list of values used to indicate certain attributes about a trade allocation (E.g. BROKER_LIQUIDATION) and/or trigger downstream processing rules (e.g. SUPPRESS_TRACE_REPORTING)
     */
    specialInstructions?: Array<TradeAllocationCreateSpecialInstructionsOpen> | undefined;
    /**
     * The ULID formatted account_id that the positions will be moved to.
     */
    toAccountId: string;
    /**
     * Denotes the side of the position going into the to_account_id. A to_side of SELL indicates the position will be allocated with a BUY out of the from_account, and a SELL into the to_account.
     */
    toSide: ToSideOpen;
    /**
     * Denotes that this trade allocation was either when_issued or when_distributed.
     */
    whenIssued?: TradeAllocationCreateWhenIssuedOpen | undefined;
};
/** @internal */
export declare const TradeAllocationCreateAssetType$inboundSchema: z.ZodType<TradeAllocationCreateAssetTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TradeAllocationCreateAssetType$outboundSchema: z.ZodType<TradeAllocationCreateAssetTypeOpen, z.ZodTypeDef, TradeAllocationCreateAssetTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TradeAllocationCreateAssetType$ {
    /** @deprecated use `TradeAllocationCreateAssetType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TradeAllocationCreateAssetTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TradeAllocationCreateAssetType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TradeAllocationCreateAssetTypeOpen, z.ZodTypeDef, TradeAllocationCreateAssetTypeOpen>;
}
/** @internal */
export declare const TradeAllocationCreateBrokerCapacity$inboundSchema: z.ZodType<TradeAllocationCreateBrokerCapacityOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TradeAllocationCreateBrokerCapacity$outboundSchema: z.ZodType<TradeAllocationCreateBrokerCapacityOpen, z.ZodTypeDef, TradeAllocationCreateBrokerCapacityOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TradeAllocationCreateBrokerCapacity$ {
    /** @deprecated use `TradeAllocationCreateBrokerCapacity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TradeAllocationCreateBrokerCapacityOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TradeAllocationCreateBrokerCapacity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TradeAllocationCreateBrokerCapacityOpen, z.ZodTypeDef, TradeAllocationCreateBrokerCapacityOpen>;
}
/** @internal */
export declare const TradeAllocationCreateIdentifierType$inboundSchema: z.ZodType<TradeAllocationCreateIdentifierTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TradeAllocationCreateIdentifierType$outboundSchema: z.ZodType<TradeAllocationCreateIdentifierTypeOpen, z.ZodTypeDef, TradeAllocationCreateIdentifierTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TradeAllocationCreateIdentifierType$ {
    /** @deprecated use `TradeAllocationCreateIdentifierType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TradeAllocationCreateIdentifierTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TradeAllocationCreateIdentifierType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TradeAllocationCreateIdentifierTypeOpen, z.ZodTypeDef, TradeAllocationCreateIdentifierTypeOpen>;
}
/** @internal */
export declare const TradeAllocationCreateSideModifier$inboundSchema: z.ZodType<TradeAllocationCreateSideModifierOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TradeAllocationCreateSideModifier$outboundSchema: z.ZodType<TradeAllocationCreateSideModifierOpen, z.ZodTypeDef, TradeAllocationCreateSideModifierOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TradeAllocationCreateSideModifier$ {
    /** @deprecated use `TradeAllocationCreateSideModifier$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TradeAllocationCreateSideModifierOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TradeAllocationCreateSideModifier$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TradeAllocationCreateSideModifierOpen, z.ZodTypeDef, TradeAllocationCreateSideModifierOpen>;
}
/** @internal */
export declare const TradeAllocationCreateSpecialInstructions$inboundSchema: z.ZodType<TradeAllocationCreateSpecialInstructionsOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TradeAllocationCreateSpecialInstructions$outboundSchema: z.ZodType<TradeAllocationCreateSpecialInstructionsOpen, z.ZodTypeDef, TradeAllocationCreateSpecialInstructionsOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TradeAllocationCreateSpecialInstructions$ {
    /** @deprecated use `TradeAllocationCreateSpecialInstructions$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TradeAllocationCreateSpecialInstructionsOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TradeAllocationCreateSpecialInstructions$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TradeAllocationCreateSpecialInstructionsOpen, z.ZodTypeDef, TradeAllocationCreateSpecialInstructionsOpen>;
}
/** @internal */
export declare const ToSide$inboundSchema: z.ZodType<ToSideOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const ToSide$outboundSchema: z.ZodType<ToSideOpen, z.ZodTypeDef, ToSideOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ToSide$ {
    /** @deprecated use `ToSide$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ToSideOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `ToSide$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ToSideOpen, z.ZodTypeDef, ToSideOpen>;
}
/** @internal */
export declare const TradeAllocationCreateWhenIssued$inboundSchema: z.ZodType<TradeAllocationCreateWhenIssuedOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TradeAllocationCreateWhenIssued$outboundSchema: z.ZodType<TradeAllocationCreateWhenIssuedOpen, z.ZodTypeDef, TradeAllocationCreateWhenIssuedOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TradeAllocationCreateWhenIssued$ {
    /** @deprecated use `TradeAllocationCreateWhenIssued$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TradeAllocationCreateWhenIssuedOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `TradeAllocationCreateWhenIssued$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TradeAllocationCreateWhenIssuedOpen, z.ZodTypeDef, TradeAllocationCreateWhenIssuedOpen>;
}
/** @internal */
export declare const TradeAllocationCreate$inboundSchema: z.ZodType<TradeAllocationCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type TradeAllocationCreate$Outbound = {
    accrued_interest_amount?: DecimalCreate$Outbound | undefined;
    additional_instructions?: string | undefined;
    asset_type: string;
    bond_yield?: Array<BondYieldCreate$Outbound> | undefined;
    broker_capacity: string;
    client_order_id?: string | undefined;
    commission_amount?: DecimalCreate$Outbound | undefined;
    execution_time: string | null;
    fees?: Array<BookingFeeCreate$Outbound> | undefined;
    from_account_id: string;
    gross_amount?: DecimalCreate$Outbound | undefined;
    identifier: string;
    identifier_type: string;
    issuing_region_code?: string | undefined;
    lot_matching_instructions?: Array<LotCreate$Outbound> | undefined;
    memo?: string | undefined;
    prevailing_market_price?: DecimalCreate$Outbound | undefined;
    price: DecimalCreate$Outbound;
    price_adjustment?: PriceAdjustmentCreate$Outbound | undefined;
    quantity: DecimalCreate$Outbound;
    settlement_date?: DateCreate$Outbound | undefined;
    side_modifier?: string | undefined;
    source_application: string;
    special_instructions?: Array<string> | undefined;
    to_account_id: string;
    to_side: string;
    when_issued?: string | undefined;
};
/** @internal */
export declare const TradeAllocationCreate$outboundSchema: z.ZodType<TradeAllocationCreate$Outbound, z.ZodTypeDef, TradeAllocationCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TradeAllocationCreate$ {
    /** @deprecated use `TradeAllocationCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TradeAllocationCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `TradeAllocationCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TradeAllocationCreate$Outbound, z.ZodTypeDef, TradeAllocationCreate>;
    /** @deprecated use `TradeAllocationCreate$Outbound` instead. */
    type Outbound = TradeAllocationCreate$Outbound;
}
export declare function tradeAllocationCreateToJSON(tradeAllocationCreate: TradeAllocationCreate): string;
export declare function tradeAllocationCreateFromJSON(jsonString: string): SafeParseResult<TradeAllocationCreate, SDKValidationError>;
//# sourceMappingURL=tradeallocationcreate.d.ts.map