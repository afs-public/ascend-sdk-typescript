import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { BondYield, BondYield$Outbound } from "./bondyield.js";
/**
 * The amount of interest that has been accrued in the issuing currency for a single instrument. Requirement of 15 or less integral number and 2 or less fractional precision. Required for FIXED_INCOME trades. Not allowed for trades of other instrument types.
 */
export type CancelExecutionResponseAccruedInterestAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Commission amount of the execution. Requirement of 11 or less integral number and 2 or less fractional precision.
 */
export type CancelExecutionResponseCommissionAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Gross amount is calculated by the Booking service by multiplying price and quantity and fixing it to 2 fractional precision. Requirement of 11 or less integral number and 2 or less fractional precision. Optionally specifiable. If present, will override the gross_amount calculated above.
 */
export type CancelExecutionResponseGrossAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The price for the instrument that is prevailing in the market. Requirement of 8 or less integral number and 8 or less fractional precision. Required for FIXED_INCOME trades when the broker_capacity is PRINCIPAL.
 */
export type CancelExecutionResponsePrevailingMarketPrice = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Price with requirement of 8 or less integral number and 8 or less fractional precision.
 */
export type CancelExecutionResponsePrice = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Total monetary value of the price_adjustment
 */
export type CancelExecutionResponsePriceAdjustmentAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The type of price adjustment being applied by the broker to the net price of the security.
 */
export declare enum CancelExecutionResponsePriceAdjustmentType {
    PriceAdjustmentTypeUnspecified = "PRICE_ADJUSTMENT_TYPE_UNSPECIFIED",
    Markup = "MARKUP",
    Markdown = "MARKDOWN",
    GrossCredit = "GROSS_CREDIT"
}
/**
 * The type of price adjustment being applied by the broker to the net price of the security.
 */
export type CancelExecutionResponsePriceAdjustmentTypeOpen = OpenEnum<typeof CancelExecutionResponsePriceAdjustmentType>;
/**
 * Price adjustment that will be applied to the net price of the security.
 */
export type CancelExecutionResponsePriceAdjustment = {
    /**
     * Total monetary value of the price_adjustment
     */
    priceAdjustmentAmount?: CancelExecutionResponsePriceAdjustmentAmount | null | undefined;
    /**
     * The type of price adjustment being applied by the broker to the net price of the security.
     */
    priceAdjustmentType?: CancelExecutionResponsePriceAdjustmentTypeOpen | undefined;
};
/**
 * Quantity with requirement of 12 or less integral number and 5 or less fractional precision.
 */
export type CancelExecutionResponseQuantity = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The state that the trade is in.
 */
export declare enum CancelExecutionResponseState {
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
export type CancelExecutionResponseStateOpen = OpenEnum<typeof CancelExecutionResponseState>;
/**
 * The execution that was canceled.
 */
export type CancelExecutionResponseExecution = {
    /**
     * The amount of interest that has been accrued in the issuing currency for a single instrument. Requirement of 15 or less integral number and 2 or less fractional precision. Required for FIXED_INCOME trades. Not allowed for trades of other instrument types.
     */
    accruedInterestAmount?: CancelExecutionResponseAccruedInterestAmount | null | undefined;
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
    commissionAmount?: CancelExecutionResponseCommissionAmount | null | undefined;
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
    grossAmount?: CancelExecutionResponseGrossAmount | null | undefined;
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
    prevailingMarketPrice?: CancelExecutionResponsePrevailingMarketPrice | null | undefined;
    /**
     * Price with requirement of 8 or less integral number and 8 or less fractional precision.
     */
    price?: CancelExecutionResponsePrice | null | undefined;
    /**
     * Price adjustment that will be applied to the net price of the security.
     */
    priceAdjustment?: CancelExecutionResponsePriceAdjustment | null | undefined;
    /**
     * Quantity with requirement of 12 or less integral number and 5 or less fractional precision.
     */
    quantity?: CancelExecutionResponseQuantity | null | undefined;
    /**
     * The state that the trade is in.
     */
    state?: CancelExecutionResponseStateOpen | undefined;
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
 * A response for the cancel execution method.
 */
export type CancelExecutionResponse = {
    /**
     * The execution that was canceled.
     */
    execution?: CancelExecutionResponseExecution | null | undefined;
};
/** @internal */
export declare const CancelExecutionResponseAccruedInterestAmount$inboundSchema: z.ZodType<CancelExecutionResponseAccruedInterestAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelExecutionResponseAccruedInterestAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const CancelExecutionResponseAccruedInterestAmount$outboundSchema: z.ZodType<CancelExecutionResponseAccruedInterestAmount$Outbound, z.ZodTypeDef, CancelExecutionResponseAccruedInterestAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelExecutionResponseAccruedInterestAmount$ {
    /** @deprecated use `CancelExecutionResponseAccruedInterestAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelExecutionResponseAccruedInterestAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelExecutionResponseAccruedInterestAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelExecutionResponseAccruedInterestAmount$Outbound, z.ZodTypeDef, CancelExecutionResponseAccruedInterestAmount>;
    /** @deprecated use `CancelExecutionResponseAccruedInterestAmount$Outbound` instead. */
    type Outbound = CancelExecutionResponseAccruedInterestAmount$Outbound;
}
/** @internal */
export declare const CancelExecutionResponseCommissionAmount$inboundSchema: z.ZodType<CancelExecutionResponseCommissionAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelExecutionResponseCommissionAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const CancelExecutionResponseCommissionAmount$outboundSchema: z.ZodType<CancelExecutionResponseCommissionAmount$Outbound, z.ZodTypeDef, CancelExecutionResponseCommissionAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelExecutionResponseCommissionAmount$ {
    /** @deprecated use `CancelExecutionResponseCommissionAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelExecutionResponseCommissionAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelExecutionResponseCommissionAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelExecutionResponseCommissionAmount$Outbound, z.ZodTypeDef, CancelExecutionResponseCommissionAmount>;
    /** @deprecated use `CancelExecutionResponseCommissionAmount$Outbound` instead. */
    type Outbound = CancelExecutionResponseCommissionAmount$Outbound;
}
/** @internal */
export declare const CancelExecutionResponseGrossAmount$inboundSchema: z.ZodType<CancelExecutionResponseGrossAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelExecutionResponseGrossAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const CancelExecutionResponseGrossAmount$outboundSchema: z.ZodType<CancelExecutionResponseGrossAmount$Outbound, z.ZodTypeDef, CancelExecutionResponseGrossAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelExecutionResponseGrossAmount$ {
    /** @deprecated use `CancelExecutionResponseGrossAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelExecutionResponseGrossAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelExecutionResponseGrossAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelExecutionResponseGrossAmount$Outbound, z.ZodTypeDef, CancelExecutionResponseGrossAmount>;
    /** @deprecated use `CancelExecutionResponseGrossAmount$Outbound` instead. */
    type Outbound = CancelExecutionResponseGrossAmount$Outbound;
}
/** @internal */
export declare const CancelExecutionResponsePrevailingMarketPrice$inboundSchema: z.ZodType<CancelExecutionResponsePrevailingMarketPrice, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelExecutionResponsePrevailingMarketPrice$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const CancelExecutionResponsePrevailingMarketPrice$outboundSchema: z.ZodType<CancelExecutionResponsePrevailingMarketPrice$Outbound, z.ZodTypeDef, CancelExecutionResponsePrevailingMarketPrice>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelExecutionResponsePrevailingMarketPrice$ {
    /** @deprecated use `CancelExecutionResponsePrevailingMarketPrice$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelExecutionResponsePrevailingMarketPrice, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelExecutionResponsePrevailingMarketPrice$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelExecutionResponsePrevailingMarketPrice$Outbound, z.ZodTypeDef, CancelExecutionResponsePrevailingMarketPrice>;
    /** @deprecated use `CancelExecutionResponsePrevailingMarketPrice$Outbound` instead. */
    type Outbound = CancelExecutionResponsePrevailingMarketPrice$Outbound;
}
/** @internal */
export declare const CancelExecutionResponsePrice$inboundSchema: z.ZodType<CancelExecutionResponsePrice, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelExecutionResponsePrice$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const CancelExecutionResponsePrice$outboundSchema: z.ZodType<CancelExecutionResponsePrice$Outbound, z.ZodTypeDef, CancelExecutionResponsePrice>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelExecutionResponsePrice$ {
    /** @deprecated use `CancelExecutionResponsePrice$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelExecutionResponsePrice, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelExecutionResponsePrice$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelExecutionResponsePrice$Outbound, z.ZodTypeDef, CancelExecutionResponsePrice>;
    /** @deprecated use `CancelExecutionResponsePrice$Outbound` instead. */
    type Outbound = CancelExecutionResponsePrice$Outbound;
}
/** @internal */
export declare const CancelExecutionResponsePriceAdjustmentAmount$inboundSchema: z.ZodType<CancelExecutionResponsePriceAdjustmentAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelExecutionResponsePriceAdjustmentAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const CancelExecutionResponsePriceAdjustmentAmount$outboundSchema: z.ZodType<CancelExecutionResponsePriceAdjustmentAmount$Outbound, z.ZodTypeDef, CancelExecutionResponsePriceAdjustmentAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelExecutionResponsePriceAdjustmentAmount$ {
    /** @deprecated use `CancelExecutionResponsePriceAdjustmentAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelExecutionResponsePriceAdjustmentAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelExecutionResponsePriceAdjustmentAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelExecutionResponsePriceAdjustmentAmount$Outbound, z.ZodTypeDef, CancelExecutionResponsePriceAdjustmentAmount>;
    /** @deprecated use `CancelExecutionResponsePriceAdjustmentAmount$Outbound` instead. */
    type Outbound = CancelExecutionResponsePriceAdjustmentAmount$Outbound;
}
/** @internal */
export declare const CancelExecutionResponsePriceAdjustmentType$inboundSchema: z.ZodType<CancelExecutionResponsePriceAdjustmentTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CancelExecutionResponsePriceAdjustmentType$outboundSchema: z.ZodType<CancelExecutionResponsePriceAdjustmentTypeOpen, z.ZodTypeDef, CancelExecutionResponsePriceAdjustmentTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelExecutionResponsePriceAdjustmentType$ {
    /** @deprecated use `CancelExecutionResponsePriceAdjustmentType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelExecutionResponsePriceAdjustmentTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelExecutionResponsePriceAdjustmentType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelExecutionResponsePriceAdjustmentTypeOpen, z.ZodTypeDef, CancelExecutionResponsePriceAdjustmentTypeOpen>;
}
/** @internal */
export declare const CancelExecutionResponsePriceAdjustment$inboundSchema: z.ZodType<CancelExecutionResponsePriceAdjustment, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelExecutionResponsePriceAdjustment$Outbound = {
    price_adjustment_amount?: CancelExecutionResponsePriceAdjustmentAmount$Outbound | null | undefined;
    price_adjustment_type?: string | undefined;
};
/** @internal */
export declare const CancelExecutionResponsePriceAdjustment$outboundSchema: z.ZodType<CancelExecutionResponsePriceAdjustment$Outbound, z.ZodTypeDef, CancelExecutionResponsePriceAdjustment>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelExecutionResponsePriceAdjustment$ {
    /** @deprecated use `CancelExecutionResponsePriceAdjustment$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelExecutionResponsePriceAdjustment, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelExecutionResponsePriceAdjustment$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelExecutionResponsePriceAdjustment$Outbound, z.ZodTypeDef, CancelExecutionResponsePriceAdjustment>;
    /** @deprecated use `CancelExecutionResponsePriceAdjustment$Outbound` instead. */
    type Outbound = CancelExecutionResponsePriceAdjustment$Outbound;
}
/** @internal */
export declare const CancelExecutionResponseQuantity$inboundSchema: z.ZodType<CancelExecutionResponseQuantity, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelExecutionResponseQuantity$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const CancelExecutionResponseQuantity$outboundSchema: z.ZodType<CancelExecutionResponseQuantity$Outbound, z.ZodTypeDef, CancelExecutionResponseQuantity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelExecutionResponseQuantity$ {
    /** @deprecated use `CancelExecutionResponseQuantity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelExecutionResponseQuantity, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelExecutionResponseQuantity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelExecutionResponseQuantity$Outbound, z.ZodTypeDef, CancelExecutionResponseQuantity>;
    /** @deprecated use `CancelExecutionResponseQuantity$Outbound` instead. */
    type Outbound = CancelExecutionResponseQuantity$Outbound;
}
/** @internal */
export declare const CancelExecutionResponseState$inboundSchema: z.ZodType<CancelExecutionResponseStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CancelExecutionResponseState$outboundSchema: z.ZodType<CancelExecutionResponseStateOpen, z.ZodTypeDef, CancelExecutionResponseStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelExecutionResponseState$ {
    /** @deprecated use `CancelExecutionResponseState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelExecutionResponseStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelExecutionResponseState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelExecutionResponseStateOpen, z.ZodTypeDef, CancelExecutionResponseStateOpen>;
}
/** @internal */
export declare const CancelExecutionResponseExecution$inboundSchema: z.ZodType<CancelExecutionResponseExecution, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelExecutionResponseExecution$Outbound = {
    accrued_interest_amount?: CancelExecutionResponseAccruedInterestAmount$Outbound | null | undefined;
    activity_id?: string | undefined;
    bond_yield?: Array<BondYield$Outbound> | undefined;
    commission_amount?: CancelExecutionResponseCommissionAmount$Outbound | null | undefined;
    execution_id?: string | undefined;
    execution_time?: string | null | undefined;
    external_id?: string | undefined;
    gross_amount?: CancelExecutionResponseGrossAmount$Outbound | null | undefined;
    memo?: string | undefined;
    name?: string | undefined;
    prevailing_market_price?: CancelExecutionResponsePrevailingMarketPrice$Outbound | null | undefined;
    price?: CancelExecutionResponsePrice$Outbound | null | undefined;
    price_adjustment?: CancelExecutionResponsePriceAdjustment$Outbound | null | undefined;
    quantity?: CancelExecutionResponseQuantity$Outbound | null | undefined;
    state?: string | undefined;
    street_execution_id?: string | undefined;
    trade_id?: string | undefined;
};
/** @internal */
export declare const CancelExecutionResponseExecution$outboundSchema: z.ZodType<CancelExecutionResponseExecution$Outbound, z.ZodTypeDef, CancelExecutionResponseExecution>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelExecutionResponseExecution$ {
    /** @deprecated use `CancelExecutionResponseExecution$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelExecutionResponseExecution, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelExecutionResponseExecution$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelExecutionResponseExecution$Outbound, z.ZodTypeDef, CancelExecutionResponseExecution>;
    /** @deprecated use `CancelExecutionResponseExecution$Outbound` instead. */
    type Outbound = CancelExecutionResponseExecution$Outbound;
}
/** @internal */
export declare const CancelExecutionResponse$inboundSchema: z.ZodType<CancelExecutionResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CancelExecutionResponse$Outbound = {
    execution?: CancelExecutionResponseExecution$Outbound | null | undefined;
};
/** @internal */
export declare const CancelExecutionResponse$outboundSchema: z.ZodType<CancelExecutionResponse$Outbound, z.ZodTypeDef, CancelExecutionResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CancelExecutionResponse$ {
    /** @deprecated use `CancelExecutionResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CancelExecutionResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CancelExecutionResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CancelExecutionResponse$Outbound, z.ZodTypeDef, CancelExecutionResponse>;
    /** @deprecated use `CancelExecutionResponse$Outbound` instead. */
    type Outbound = CancelExecutionResponse$Outbound;
}
//# sourceMappingURL=cancelexecutionresponse.d.ts.map