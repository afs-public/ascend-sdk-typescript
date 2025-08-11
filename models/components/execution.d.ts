import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { BondYield, BondYield$Outbound } from "./bondyield.js";
/**
 * The amount of interest that has been accrued in the issuing currency for a single instrument. Requirement of 15 or less integral number and 2 or less fractional precision. Required for FIXED_INCOME trades. Not allowed for trades of other instrument types.
 */
export type ExecutionAccruedInterestAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Commission amount of the execution. Requirement of 11 or less integral number and 2 or less fractional precision.
 */
export type CommissionAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Gross amount is calculated by the Booking service by multiplying price and quantity and fixing it to 2 fractional precision. Requirement of 11 or less integral number and 2 or less fractional precision. Optionally specifiable. If present, will override the gross_amount calculated above.
 */
export type GrossAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The price for the instrument that is prevailing in the market. Requirement of 8 or less integral number and 8 or less fractional precision. Required for FIXED_INCOME trades when the broker_capacity is PRINCIPAL.
 */
export type ExecutionPrevailingMarketPrice = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Price with requirement of 8 or less integral number and 8 or less fractional precision.
 */
export type ExecutionPrice = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Total monetary value of the price_adjustment
 */
export type PriceAdjustmentAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The type of price adjustment being applied by the broker to the net price of the security.
 */
export declare enum ExecutionPriceAdjustmentType {
    PriceAdjustmentTypeUnspecified = "PRICE_ADJUSTMENT_TYPE_UNSPECIFIED",
    Markup = "MARKUP",
    Markdown = "MARKDOWN",
    GrossCredit = "GROSS_CREDIT"
}
/**
 * The type of price adjustment being applied by the broker to the net price of the security.
 */
export type ExecutionPriceAdjustmentTypeOpen = OpenEnum<typeof ExecutionPriceAdjustmentType>;
/**
 * Price adjustment that will be applied to the net price of the security.
 */
export type PriceAdjustment = {
    /**
     * Total monetary value of the price_adjustment
     */
    priceAdjustmentAmount?: PriceAdjustmentAmount | null | undefined;
    /**
     * The type of price adjustment being applied by the broker to the net price of the security.
     */
    priceAdjustmentType?: ExecutionPriceAdjustmentTypeOpen | undefined;
};
/**
 * Quantity with requirement of 12 or less integral number and 5 or less fractional precision.
 */
export type ExecutionQuantity = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The state that the trade is in.
 */
export declare enum ExecutionState {
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
export type ExecutionStateOpen = OpenEnum<typeof ExecutionState>;
/**
 * An execution represents a partial-fill or a fill that is part of an order. Executions are children to a Trade, which collectively represents an entire order made by a client.
 */
export type Execution = {
    /**
     * The amount of interest that has been accrued in the issuing currency for a single instrument. Requirement of 15 or less integral number and 2 or less fractional precision. Required for FIXED_INCOME trades. Not allowed for trades of other instrument types.
     */
    accruedInterestAmount?: ExecutionAccruedInterestAmount | null | undefined;
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
    commissionAmount?: CommissionAmount | null | undefined;
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
    grossAmount?: GrossAmount | null | undefined;
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
    prevailingMarketPrice?: ExecutionPrevailingMarketPrice | null | undefined;
    /**
     * Price with requirement of 8 or less integral number and 8 or less fractional precision.
     */
    price?: ExecutionPrice | null | undefined;
    /**
     * Price adjustment that will be applied to the net price of the security.
     */
    priceAdjustment?: PriceAdjustment | null | undefined;
    /**
     * Quantity with requirement of 12 or less integral number and 5 or less fractional precision.
     */
    quantity?: ExecutionQuantity | null | undefined;
    /**
     * The state that the trade is in.
     */
    state?: ExecutionStateOpen | undefined;
    /**
     * Street-level execution id, unique by day per execution venue.
     */
    streetExecutionId?: string | undefined;
    /**
     * The unique identifier of the trade this execution belongs to.
     */
    tradeId?: string | undefined;
};
/** @internal */
export declare const ExecutionAccruedInterestAmount$inboundSchema: z.ZodType<ExecutionAccruedInterestAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type ExecutionAccruedInterestAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const ExecutionAccruedInterestAmount$outboundSchema: z.ZodType<ExecutionAccruedInterestAmount$Outbound, z.ZodTypeDef, ExecutionAccruedInterestAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExecutionAccruedInterestAmount$ {
    /** @deprecated use `ExecutionAccruedInterestAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExecutionAccruedInterestAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExecutionAccruedInterestAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExecutionAccruedInterestAmount$Outbound, z.ZodTypeDef, ExecutionAccruedInterestAmount>;
    /** @deprecated use `ExecutionAccruedInterestAmount$Outbound` instead. */
    type Outbound = ExecutionAccruedInterestAmount$Outbound;
}
export declare function executionAccruedInterestAmountToJSON(executionAccruedInterestAmount: ExecutionAccruedInterestAmount): string;
export declare function executionAccruedInterestAmountFromJSON(jsonString: string): SafeParseResult<ExecutionAccruedInterestAmount, SDKValidationError>;
/** @internal */
export declare const CommissionAmount$inboundSchema: z.ZodType<CommissionAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type CommissionAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const CommissionAmount$outboundSchema: z.ZodType<CommissionAmount$Outbound, z.ZodTypeDef, CommissionAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CommissionAmount$ {
    /** @deprecated use `CommissionAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CommissionAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `CommissionAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CommissionAmount$Outbound, z.ZodTypeDef, CommissionAmount>;
    /** @deprecated use `CommissionAmount$Outbound` instead. */
    type Outbound = CommissionAmount$Outbound;
}
export declare function commissionAmountToJSON(commissionAmount: CommissionAmount): string;
export declare function commissionAmountFromJSON(jsonString: string): SafeParseResult<CommissionAmount, SDKValidationError>;
/** @internal */
export declare const GrossAmount$inboundSchema: z.ZodType<GrossAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type GrossAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const GrossAmount$outboundSchema: z.ZodType<GrossAmount$Outbound, z.ZodTypeDef, GrossAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GrossAmount$ {
    /** @deprecated use `GrossAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GrossAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `GrossAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GrossAmount$Outbound, z.ZodTypeDef, GrossAmount>;
    /** @deprecated use `GrossAmount$Outbound` instead. */
    type Outbound = GrossAmount$Outbound;
}
export declare function grossAmountToJSON(grossAmount: GrossAmount): string;
export declare function grossAmountFromJSON(jsonString: string): SafeParseResult<GrossAmount, SDKValidationError>;
/** @internal */
export declare const ExecutionPrevailingMarketPrice$inboundSchema: z.ZodType<ExecutionPrevailingMarketPrice, z.ZodTypeDef, unknown>;
/** @internal */
export type ExecutionPrevailingMarketPrice$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const ExecutionPrevailingMarketPrice$outboundSchema: z.ZodType<ExecutionPrevailingMarketPrice$Outbound, z.ZodTypeDef, ExecutionPrevailingMarketPrice>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExecutionPrevailingMarketPrice$ {
    /** @deprecated use `ExecutionPrevailingMarketPrice$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExecutionPrevailingMarketPrice, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExecutionPrevailingMarketPrice$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExecutionPrevailingMarketPrice$Outbound, z.ZodTypeDef, ExecutionPrevailingMarketPrice>;
    /** @deprecated use `ExecutionPrevailingMarketPrice$Outbound` instead. */
    type Outbound = ExecutionPrevailingMarketPrice$Outbound;
}
export declare function executionPrevailingMarketPriceToJSON(executionPrevailingMarketPrice: ExecutionPrevailingMarketPrice): string;
export declare function executionPrevailingMarketPriceFromJSON(jsonString: string): SafeParseResult<ExecutionPrevailingMarketPrice, SDKValidationError>;
/** @internal */
export declare const ExecutionPrice$inboundSchema: z.ZodType<ExecutionPrice, z.ZodTypeDef, unknown>;
/** @internal */
export type ExecutionPrice$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const ExecutionPrice$outboundSchema: z.ZodType<ExecutionPrice$Outbound, z.ZodTypeDef, ExecutionPrice>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExecutionPrice$ {
    /** @deprecated use `ExecutionPrice$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExecutionPrice, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExecutionPrice$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExecutionPrice$Outbound, z.ZodTypeDef, ExecutionPrice>;
    /** @deprecated use `ExecutionPrice$Outbound` instead. */
    type Outbound = ExecutionPrice$Outbound;
}
export declare function executionPriceToJSON(executionPrice: ExecutionPrice): string;
export declare function executionPriceFromJSON(jsonString: string): SafeParseResult<ExecutionPrice, SDKValidationError>;
/** @internal */
export declare const PriceAdjustmentAmount$inboundSchema: z.ZodType<PriceAdjustmentAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type PriceAdjustmentAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const PriceAdjustmentAmount$outboundSchema: z.ZodType<PriceAdjustmentAmount$Outbound, z.ZodTypeDef, PriceAdjustmentAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PriceAdjustmentAmount$ {
    /** @deprecated use `PriceAdjustmentAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PriceAdjustmentAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `PriceAdjustmentAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PriceAdjustmentAmount$Outbound, z.ZodTypeDef, PriceAdjustmentAmount>;
    /** @deprecated use `PriceAdjustmentAmount$Outbound` instead. */
    type Outbound = PriceAdjustmentAmount$Outbound;
}
export declare function priceAdjustmentAmountToJSON(priceAdjustmentAmount: PriceAdjustmentAmount): string;
export declare function priceAdjustmentAmountFromJSON(jsonString: string): SafeParseResult<PriceAdjustmentAmount, SDKValidationError>;
/** @internal */
export declare const ExecutionPriceAdjustmentType$inboundSchema: z.ZodType<ExecutionPriceAdjustmentTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const ExecutionPriceAdjustmentType$outboundSchema: z.ZodType<ExecutionPriceAdjustmentTypeOpen, z.ZodTypeDef, ExecutionPriceAdjustmentTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExecutionPriceAdjustmentType$ {
    /** @deprecated use `ExecutionPriceAdjustmentType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExecutionPriceAdjustmentTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExecutionPriceAdjustmentType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExecutionPriceAdjustmentTypeOpen, z.ZodTypeDef, ExecutionPriceAdjustmentTypeOpen>;
}
/** @internal */
export declare const PriceAdjustment$inboundSchema: z.ZodType<PriceAdjustment, z.ZodTypeDef, unknown>;
/** @internal */
export type PriceAdjustment$Outbound = {
    price_adjustment_amount?: PriceAdjustmentAmount$Outbound | null | undefined;
    price_adjustment_type?: string | undefined;
};
/** @internal */
export declare const PriceAdjustment$outboundSchema: z.ZodType<PriceAdjustment$Outbound, z.ZodTypeDef, PriceAdjustment>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PriceAdjustment$ {
    /** @deprecated use `PriceAdjustment$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PriceAdjustment, z.ZodTypeDef, unknown>;
    /** @deprecated use `PriceAdjustment$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PriceAdjustment$Outbound, z.ZodTypeDef, PriceAdjustment>;
    /** @deprecated use `PriceAdjustment$Outbound` instead. */
    type Outbound = PriceAdjustment$Outbound;
}
export declare function priceAdjustmentToJSON(priceAdjustment: PriceAdjustment): string;
export declare function priceAdjustmentFromJSON(jsonString: string): SafeParseResult<PriceAdjustment, SDKValidationError>;
/** @internal */
export declare const ExecutionQuantity$inboundSchema: z.ZodType<ExecutionQuantity, z.ZodTypeDef, unknown>;
/** @internal */
export type ExecutionQuantity$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const ExecutionQuantity$outboundSchema: z.ZodType<ExecutionQuantity$Outbound, z.ZodTypeDef, ExecutionQuantity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExecutionQuantity$ {
    /** @deprecated use `ExecutionQuantity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExecutionQuantity, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExecutionQuantity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExecutionQuantity$Outbound, z.ZodTypeDef, ExecutionQuantity>;
    /** @deprecated use `ExecutionQuantity$Outbound` instead. */
    type Outbound = ExecutionQuantity$Outbound;
}
export declare function executionQuantityToJSON(executionQuantity: ExecutionQuantity): string;
export declare function executionQuantityFromJSON(jsonString: string): SafeParseResult<ExecutionQuantity, SDKValidationError>;
/** @internal */
export declare const ExecutionState$inboundSchema: z.ZodType<ExecutionStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const ExecutionState$outboundSchema: z.ZodType<ExecutionStateOpen, z.ZodTypeDef, ExecutionStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExecutionState$ {
    /** @deprecated use `ExecutionState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExecutionStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExecutionState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExecutionStateOpen, z.ZodTypeDef, ExecutionStateOpen>;
}
/** @internal */
export declare const Execution$inboundSchema: z.ZodType<Execution, z.ZodTypeDef, unknown>;
/** @internal */
export type Execution$Outbound = {
    accrued_interest_amount?: ExecutionAccruedInterestAmount$Outbound | null | undefined;
    activity_id?: string | undefined;
    bond_yield?: Array<BondYield$Outbound> | undefined;
    commission_amount?: CommissionAmount$Outbound | null | undefined;
    execution_id?: string | undefined;
    execution_time?: string | null | undefined;
    external_id?: string | undefined;
    gross_amount?: GrossAmount$Outbound | null | undefined;
    memo?: string | undefined;
    name?: string | undefined;
    prevailing_market_price?: ExecutionPrevailingMarketPrice$Outbound | null | undefined;
    price?: ExecutionPrice$Outbound | null | undefined;
    price_adjustment?: PriceAdjustment$Outbound | null | undefined;
    quantity?: ExecutionQuantity$Outbound | null | undefined;
    state?: string | undefined;
    street_execution_id?: string | undefined;
    trade_id?: string | undefined;
};
/** @internal */
export declare const Execution$outboundSchema: z.ZodType<Execution$Outbound, z.ZodTypeDef, Execution>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Execution$ {
    /** @deprecated use `Execution$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Execution, z.ZodTypeDef, unknown>;
    /** @deprecated use `Execution$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Execution$Outbound, z.ZodTypeDef, Execution>;
    /** @deprecated use `Execution$Outbound` instead. */
    type Outbound = Execution$Outbound;
}
export declare function executionToJSON(execution: Execution): string;
export declare function executionFromJSON(jsonString: string): SafeParseResult<Execution, SDKValidationError>;
//# sourceMappingURL=execution.d.ts.map