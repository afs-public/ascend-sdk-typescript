import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { BondYield, BondYield$Outbound } from "./bondyield.js";
/**
 * The amount of interest that has been accrued in the issuing currency for a single instrument. Requirement of 15 or less integral number and 2 or less fractional precision. Required for FIXED_INCOME trades. Not allowed for trades of other instrument types.
 */
export type RebookExecutionResponseAccruedInterestAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Commission amount of the execution. Requirement of 11 or less integral number and 2 or less fractional precision.
 */
export type RebookExecutionResponseCommissionAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Gross amount is calculated by the Booking service by multiplying price and quantity and fixing it to 2 fractional precision. Requirement of 11 or less integral number and 2 or less fractional precision. Optionally specifiable. If present, will override the gross_amount calculated above.
 */
export type RebookExecutionResponseGrossAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The price for the instrument that is prevailing in the market. Requirement of 8 or less integral number and 8 or less fractional precision. Required for FIXED_INCOME trades when the broker_capacity is PRINCIPAL.
 */
export type RebookExecutionResponsePrevailingMarketPrice = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Price with requirement of 8 or less integral number and 8 or less fractional precision.
 */
export type RebookExecutionResponsePrice = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Total monetary value of the price_adjustment
 */
export type RebookExecutionResponsePriceAdjustmentAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The type of price adjustment being applied by the broker to the net price of the security.
 */
export declare enum RebookExecutionResponsePriceAdjustmentType {
    PriceAdjustmentTypeUnspecified = "PRICE_ADJUSTMENT_TYPE_UNSPECIFIED",
    Markup = "MARKUP",
    Markdown = "MARKDOWN",
    GrossCredit = "GROSS_CREDIT"
}
/**
 * The type of price adjustment being applied by the broker to the net price of the security.
 */
export type RebookExecutionResponsePriceAdjustmentTypeOpen = OpenEnum<typeof RebookExecutionResponsePriceAdjustmentType>;
/**
 * Price adjustment that will be applied to the net price of the security.
 */
export type RebookExecutionResponsePriceAdjustment = {
    /**
     * Total monetary value of the price_adjustment
     */
    priceAdjustmentAmount?: RebookExecutionResponsePriceAdjustmentAmount | null | undefined;
    /**
     * The type of price adjustment being applied by the broker to the net price of the security.
     */
    priceAdjustmentType?: RebookExecutionResponsePriceAdjustmentTypeOpen | undefined;
};
/**
 * Quantity with requirement of 12 or less integral number and 5 or less fractional precision.
 */
export type RebookExecutionResponseQuantity = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The state that the trade is in.
 */
export declare enum RebookExecutionResponseState {
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
 * The state that the trade is in.
 */
export type RebookExecutionResponseStateOpen = OpenEnum<typeof RebookExecutionResponseState>;
/**
 * The new execution that was rebooked.
 */
export type RebookExecutionResponseExecution = {
    /**
     * The amount of interest that has been accrued in the issuing currency for a single instrument. Requirement of 15 or less integral number and 2 or less fractional precision. Required for FIXED_INCOME trades. Not allowed for trades of other instrument types.
     */
    accruedInterestAmount?: RebookExecutionResponseAccruedInterestAmount | null | undefined;
    /**
     * The id of the activity in the Ledger that represents this trade.
     */
    activityId?: string | undefined;
    /**
     * The yield associated with an individual fill of a fixed income trade. Required for FIXED_INCOME trades. Not allowed for trades of other instrument types.
     */
    bondYield?: Array<BondYield> | undefined;
    /**
     * Commission amount of the execution. Requirement of 11 or less integral number and 2 or less fractional precision.
     */
    commissionAmount?: RebookExecutionResponseCommissionAmount | null | undefined;
    /**
     * A ULID that uniquely identifies the execution.
     */
    executionId?: string | undefined;
    /**
     * Timestamp of when the execution took place. If settlement_date is not provided, this field will be converted into Eastern Time and used to calculate settlement_date.
     */
    executionTime?: Date | null | undefined;
    /**
     * Used to generate execution_id, should be unique on the day for each source_application caller.
     */
    externalId?: string | undefined;
    /**
     * Gross amount is calculated by the Booking service by multiplying price and quantity and fixing it to 2 fractional precision. Requirement of 11 or less integral number and 2 or less fractional precision. Optionally specifiable. If present, will override the gross_amount calculated above.
     */
    grossAmount?: RebookExecutionResponseGrossAmount | null | undefined;
    /**
     * Caller provided but can be used for booking-service to note original trade details when booking into the error account or using the error asset.
     */
    memo?: string | undefined;
    /**
     * The resource name of the execution.
     */
    name?: string | undefined;
    /**
     * The price for the instrument that is prevailing in the market. Requirement of 8 or less integral number and 8 or less fractional precision. Required for FIXED_INCOME trades when the broker_capacity is PRINCIPAL.
     */
    prevailingMarketPrice?: RebookExecutionResponsePrevailingMarketPrice | null | undefined;
    /**
     * Price with requirement of 8 or less integral number and 8 or less fractional precision.
     */
    price?: RebookExecutionResponsePrice | null | undefined;
    /**
     * Price adjustment that will be applied to the net price of the security.
     */
    priceAdjustment?: RebookExecutionResponsePriceAdjustment | null | undefined;
    /**
     * Quantity with requirement of 12 or less integral number and 5 or less fractional precision.
     */
    quantity?: RebookExecutionResponseQuantity | null | undefined;
    /**
     * The state that the trade is in.
     */
    state?: RebookExecutionResponseStateOpen | undefined;
    /**
     * Street-level execution id, unique by day per execution venue.
     */
    streetExecutionId?: string | undefined;
    /**
     * The unique identifier of the trade this execution belongs to.
     */
    tradeId?: string | undefined;
};
/**
 * A response to the Rebook Execution method.
 */
export type RebookExecutionResponse = {
    /**
     * The new execution that was rebooked.
     */
    execution?: RebookExecutionResponseExecution | null | undefined;
};
/** @internal */
export declare const RebookExecutionResponseAccruedInterestAmount$inboundSchema: z.ZodType<RebookExecutionResponseAccruedInterestAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type RebookExecutionResponseAccruedInterestAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const RebookExecutionResponseAccruedInterestAmount$outboundSchema: z.ZodType<RebookExecutionResponseAccruedInterestAmount$Outbound, z.ZodTypeDef, RebookExecutionResponseAccruedInterestAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookExecutionResponseAccruedInterestAmount$ {
    /** @deprecated use `RebookExecutionResponseAccruedInterestAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookExecutionResponseAccruedInterestAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookExecutionResponseAccruedInterestAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookExecutionResponseAccruedInterestAmount$Outbound, z.ZodTypeDef, RebookExecutionResponseAccruedInterestAmount>;
    /** @deprecated use `RebookExecutionResponseAccruedInterestAmount$Outbound` instead. */
    type Outbound = RebookExecutionResponseAccruedInterestAmount$Outbound;
}
/** @internal */
export declare const RebookExecutionResponseCommissionAmount$inboundSchema: z.ZodType<RebookExecutionResponseCommissionAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type RebookExecutionResponseCommissionAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const RebookExecutionResponseCommissionAmount$outboundSchema: z.ZodType<RebookExecutionResponseCommissionAmount$Outbound, z.ZodTypeDef, RebookExecutionResponseCommissionAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookExecutionResponseCommissionAmount$ {
    /** @deprecated use `RebookExecutionResponseCommissionAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookExecutionResponseCommissionAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookExecutionResponseCommissionAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookExecutionResponseCommissionAmount$Outbound, z.ZodTypeDef, RebookExecutionResponseCommissionAmount>;
    /** @deprecated use `RebookExecutionResponseCommissionAmount$Outbound` instead. */
    type Outbound = RebookExecutionResponseCommissionAmount$Outbound;
}
/** @internal */
export declare const RebookExecutionResponseGrossAmount$inboundSchema: z.ZodType<RebookExecutionResponseGrossAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type RebookExecutionResponseGrossAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const RebookExecutionResponseGrossAmount$outboundSchema: z.ZodType<RebookExecutionResponseGrossAmount$Outbound, z.ZodTypeDef, RebookExecutionResponseGrossAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookExecutionResponseGrossAmount$ {
    /** @deprecated use `RebookExecutionResponseGrossAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookExecutionResponseGrossAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookExecutionResponseGrossAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookExecutionResponseGrossAmount$Outbound, z.ZodTypeDef, RebookExecutionResponseGrossAmount>;
    /** @deprecated use `RebookExecutionResponseGrossAmount$Outbound` instead. */
    type Outbound = RebookExecutionResponseGrossAmount$Outbound;
}
/** @internal */
export declare const RebookExecutionResponsePrevailingMarketPrice$inboundSchema: z.ZodType<RebookExecutionResponsePrevailingMarketPrice, z.ZodTypeDef, unknown>;
/** @internal */
export type RebookExecutionResponsePrevailingMarketPrice$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const RebookExecutionResponsePrevailingMarketPrice$outboundSchema: z.ZodType<RebookExecutionResponsePrevailingMarketPrice$Outbound, z.ZodTypeDef, RebookExecutionResponsePrevailingMarketPrice>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookExecutionResponsePrevailingMarketPrice$ {
    /** @deprecated use `RebookExecutionResponsePrevailingMarketPrice$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookExecutionResponsePrevailingMarketPrice, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookExecutionResponsePrevailingMarketPrice$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookExecutionResponsePrevailingMarketPrice$Outbound, z.ZodTypeDef, RebookExecutionResponsePrevailingMarketPrice>;
    /** @deprecated use `RebookExecutionResponsePrevailingMarketPrice$Outbound` instead. */
    type Outbound = RebookExecutionResponsePrevailingMarketPrice$Outbound;
}
/** @internal */
export declare const RebookExecutionResponsePrice$inboundSchema: z.ZodType<RebookExecutionResponsePrice, z.ZodTypeDef, unknown>;
/** @internal */
export type RebookExecutionResponsePrice$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const RebookExecutionResponsePrice$outboundSchema: z.ZodType<RebookExecutionResponsePrice$Outbound, z.ZodTypeDef, RebookExecutionResponsePrice>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookExecutionResponsePrice$ {
    /** @deprecated use `RebookExecutionResponsePrice$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookExecutionResponsePrice, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookExecutionResponsePrice$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookExecutionResponsePrice$Outbound, z.ZodTypeDef, RebookExecutionResponsePrice>;
    /** @deprecated use `RebookExecutionResponsePrice$Outbound` instead. */
    type Outbound = RebookExecutionResponsePrice$Outbound;
}
/** @internal */
export declare const RebookExecutionResponsePriceAdjustmentAmount$inboundSchema: z.ZodType<RebookExecutionResponsePriceAdjustmentAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type RebookExecutionResponsePriceAdjustmentAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const RebookExecutionResponsePriceAdjustmentAmount$outboundSchema: z.ZodType<RebookExecutionResponsePriceAdjustmentAmount$Outbound, z.ZodTypeDef, RebookExecutionResponsePriceAdjustmentAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookExecutionResponsePriceAdjustmentAmount$ {
    /** @deprecated use `RebookExecutionResponsePriceAdjustmentAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookExecutionResponsePriceAdjustmentAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookExecutionResponsePriceAdjustmentAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookExecutionResponsePriceAdjustmentAmount$Outbound, z.ZodTypeDef, RebookExecutionResponsePriceAdjustmentAmount>;
    /** @deprecated use `RebookExecutionResponsePriceAdjustmentAmount$Outbound` instead. */
    type Outbound = RebookExecutionResponsePriceAdjustmentAmount$Outbound;
}
/** @internal */
export declare const RebookExecutionResponsePriceAdjustmentType$inboundSchema: z.ZodType<RebookExecutionResponsePriceAdjustmentTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RebookExecutionResponsePriceAdjustmentType$outboundSchema: z.ZodType<RebookExecutionResponsePriceAdjustmentTypeOpen, z.ZodTypeDef, RebookExecutionResponsePriceAdjustmentTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookExecutionResponsePriceAdjustmentType$ {
    /** @deprecated use `RebookExecutionResponsePriceAdjustmentType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookExecutionResponsePriceAdjustmentTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookExecutionResponsePriceAdjustmentType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookExecutionResponsePriceAdjustmentTypeOpen, z.ZodTypeDef, RebookExecutionResponsePriceAdjustmentTypeOpen>;
}
/** @internal */
export declare const RebookExecutionResponsePriceAdjustment$inboundSchema: z.ZodType<RebookExecutionResponsePriceAdjustment, z.ZodTypeDef, unknown>;
/** @internal */
export type RebookExecutionResponsePriceAdjustment$Outbound = {
    price_adjustment_amount?: RebookExecutionResponsePriceAdjustmentAmount$Outbound | null | undefined;
    price_adjustment_type?: string | undefined;
};
/** @internal */
export declare const RebookExecutionResponsePriceAdjustment$outboundSchema: z.ZodType<RebookExecutionResponsePriceAdjustment$Outbound, z.ZodTypeDef, RebookExecutionResponsePriceAdjustment>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookExecutionResponsePriceAdjustment$ {
    /** @deprecated use `RebookExecutionResponsePriceAdjustment$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookExecutionResponsePriceAdjustment, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookExecutionResponsePriceAdjustment$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookExecutionResponsePriceAdjustment$Outbound, z.ZodTypeDef, RebookExecutionResponsePriceAdjustment>;
    /** @deprecated use `RebookExecutionResponsePriceAdjustment$Outbound` instead. */
    type Outbound = RebookExecutionResponsePriceAdjustment$Outbound;
}
/** @internal */
export declare const RebookExecutionResponseQuantity$inboundSchema: z.ZodType<RebookExecutionResponseQuantity, z.ZodTypeDef, unknown>;
/** @internal */
export type RebookExecutionResponseQuantity$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const RebookExecutionResponseQuantity$outboundSchema: z.ZodType<RebookExecutionResponseQuantity$Outbound, z.ZodTypeDef, RebookExecutionResponseQuantity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookExecutionResponseQuantity$ {
    /** @deprecated use `RebookExecutionResponseQuantity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookExecutionResponseQuantity, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookExecutionResponseQuantity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookExecutionResponseQuantity$Outbound, z.ZodTypeDef, RebookExecutionResponseQuantity>;
    /** @deprecated use `RebookExecutionResponseQuantity$Outbound` instead. */
    type Outbound = RebookExecutionResponseQuantity$Outbound;
}
/** @internal */
export declare const RebookExecutionResponseState$inboundSchema: z.ZodType<RebookExecutionResponseStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RebookExecutionResponseState$outboundSchema: z.ZodType<RebookExecutionResponseStateOpen, z.ZodTypeDef, RebookExecutionResponseStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookExecutionResponseState$ {
    /** @deprecated use `RebookExecutionResponseState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookExecutionResponseStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookExecutionResponseState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookExecutionResponseStateOpen, z.ZodTypeDef, RebookExecutionResponseStateOpen>;
}
/** @internal */
export declare const RebookExecutionResponseExecution$inboundSchema: z.ZodType<RebookExecutionResponseExecution, z.ZodTypeDef, unknown>;
/** @internal */
export type RebookExecutionResponseExecution$Outbound = {
    accrued_interest_amount?: RebookExecutionResponseAccruedInterestAmount$Outbound | null | undefined;
    activity_id?: string | undefined;
    bond_yield?: Array<BondYield$Outbound> | undefined;
    commission_amount?: RebookExecutionResponseCommissionAmount$Outbound | null | undefined;
    execution_id?: string | undefined;
    execution_time?: string | null | undefined;
    external_id?: string | undefined;
    gross_amount?: RebookExecutionResponseGrossAmount$Outbound | null | undefined;
    memo?: string | undefined;
    name?: string | undefined;
    prevailing_market_price?: RebookExecutionResponsePrevailingMarketPrice$Outbound | null | undefined;
    price?: RebookExecutionResponsePrice$Outbound | null | undefined;
    price_adjustment?: RebookExecutionResponsePriceAdjustment$Outbound | null | undefined;
    quantity?: RebookExecutionResponseQuantity$Outbound | null | undefined;
    state?: string | undefined;
    street_execution_id?: string | undefined;
    trade_id?: string | undefined;
};
/** @internal */
export declare const RebookExecutionResponseExecution$outboundSchema: z.ZodType<RebookExecutionResponseExecution$Outbound, z.ZodTypeDef, RebookExecutionResponseExecution>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookExecutionResponseExecution$ {
    /** @deprecated use `RebookExecutionResponseExecution$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookExecutionResponseExecution, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookExecutionResponseExecution$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookExecutionResponseExecution$Outbound, z.ZodTypeDef, RebookExecutionResponseExecution>;
    /** @deprecated use `RebookExecutionResponseExecution$Outbound` instead. */
    type Outbound = RebookExecutionResponseExecution$Outbound;
}
/** @internal */
export declare const RebookExecutionResponse$inboundSchema: z.ZodType<RebookExecutionResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type RebookExecutionResponse$Outbound = {
    execution?: RebookExecutionResponseExecution$Outbound | null | undefined;
};
/** @internal */
export declare const RebookExecutionResponse$outboundSchema: z.ZodType<RebookExecutionResponse$Outbound, z.ZodTypeDef, RebookExecutionResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RebookExecutionResponse$ {
    /** @deprecated use `RebookExecutionResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RebookExecutionResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `RebookExecutionResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RebookExecutionResponse$Outbound, z.ZodTypeDef, RebookExecutionResponse>;
    /** @deprecated use `RebookExecutionResponse$Outbound` instead. */
    type Outbound = RebookExecutionResponse$Outbound;
}
//# sourceMappingURL=rebookexecutionresponse.d.ts.map