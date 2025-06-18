import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * The type of asset referenced by the security identifier
 */
export declare enum OrderCostPreviewResponseAssetType {
    AssetTypeUnspecified = "ASSET_TYPE_UNSPECIFIED",
    Equity = "EQUITY",
    FixedIncome = "FIXED_INCOME",
    MutualFund = "MUTUAL_FUND",
    Option = "OPTION"
}
/**
 * The type of asset referenced by the security identifier
 */
export type OrderCostPreviewResponseAssetTypeOpen = OpenEnum<typeof OrderCostPreviewResponseAssetType>;
/**
 * Capacity used in determining the order cost. Defaults to "AGENCY" if no value specified.
 */
export declare enum OrderCostPreviewResponseBrokerCapacity {
    BrokerCapacityUnspecified = "BROKER_CAPACITY_UNSPECIFIED",
    Agency = "AGENCY",
    Principal = "PRINCIPAL"
}
/**
 * Capacity used in determining the order cost. Defaults to "AGENCY" if no value specified.
 */
export type OrderCostPreviewResponseBrokerCapacityOpen = OpenEnum<typeof OrderCostPreviewResponseBrokerCapacity>;
/**
 * The estimated total of accrued interest that would be exchanged in an order of the given quantity
 */
export type EstimatedAccruedInterest = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The principal amount involved, which is the notional value of the underlying assets that would be exchanged for the given quantity
 */
export type EstimatedGrossAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Customer disclosure of the estimated gross credit (fee / markup) amount retained by broker based given the price adjustment schedule configured for orders executed in a principal capacity for a given quantity, and limit price. This amount is priced into the estimated_gross_credit_amount and is not separately charged explicitly.
 */
export type EstimatedGrossCreditAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The estimated net notional amount involved in an order of the given quantity, capacity, and limit price. This will be the sum of the estimated gross amount and accrued interest, rounded to two decimal places. (For orders in the principal capacity, this total will include mark-up/mark-down price adjustments.)
 */
export type EstimatedNetAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The identifier type of the asset used for price calculations. This will be the same value as what was sent on the request.
 */
export declare enum OrderCostPreviewResponseIdentifierType {
    AssetId = "ASSET_ID",
    Cusip = "CUSIP",
    Isin = "ISIN"
}
/**
 * The identifier type of the asset used for price calculations. This will be the same value as what was sent on the request.
 */
export type OrderCostPreviewResponseIdentifierTypeOpen = OpenEnum<typeof OrderCostPreviewResponseIdentifierType>;
/**
 * The limit price which must be greater than zero if provided. For equity orders in the USD currency, up to 2 decimal places are allowed for prices above $1 and up to 4 decimal places for prices at or below $1. For fixed income orders this is expressed as a percentage of par, which allows up to 4 decimal places in the USD currency.
 */
export type OrderCostPreviewResponsePrice = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The type of this price, which must be PRICE_PER_UNIT for equity orders, or PERCENTAGE_OF_PAR for fixed income orders.
 */
export declare enum OrderCostPreviewResponseType {
    LimitPriceTypeUnspecified = "LIMIT_PRICE_TYPE_UNSPECIFIED",
    PricePerUnit = "PRICE_PER_UNIT",
    PercentageOfPar = "PERCENTAGE_OF_PAR"
}
/**
 * The type of this price, which must be PRICE_PER_UNIT for equity orders, or PERCENTAGE_OF_PAR for fixed income orders.
 */
export type OrderCostPreviewResponseTypeOpen = OpenEnum<typeof OrderCostPreviewResponseType>;
/**
 * The limit price to use in calculating costs. Only PERCENTAGE_OF_PAR will be accepted and returned.
 */
export type OrderCostPreviewResponseLimitPrice = {
    /**
     * The limit price which must be greater than zero if provided. For equity orders in the USD currency, up to 2 decimal places are allowed for prices above $1 and up to 4 decimal places for prices at or below $1. For fixed income orders this is expressed as a percentage of par, which allows up to 4 decimal places in the USD currency.
     */
    price?: OrderCostPreviewResponsePrice | null | undefined;
    /**
     * The type of this price, which must be PRICE_PER_UNIT for equity orders, or PERCENTAGE_OF_PAR for fixed income orders.
     */
    type?: OrderCostPreviewResponseTypeOpen | undefined;
};
/**
 * The quantity of the designated asset that would be ordered. For Fixed Income: Expressed in the par (face-value) amount and may not exceed two decimal places for USD-based currencies.
 */
export type OrderCostPreviewResponseQuantity = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Preview of estimated costs for a chosen quantity, asset, capacity, and limit price
 */
export type OrderCostPreviewResponse = {
    /**
     * The account id used in calculating order costs
     */
    accountId?: string | undefined;
    /**
     * Apex Asset ID for this asset.
     */
    assetId?: string | undefined;
    /**
     * The type of asset referenced by the security identifier
     */
    assetType?: OrderCostPreviewResponseAssetTypeOpen | undefined;
    /**
     * Capacity used in determining the order cost. Defaults to "AGENCY" if no value specified.
     */
    brokerCapacity?: OrderCostPreviewResponseBrokerCapacityOpen | undefined;
    /**
     * The estimated total of accrued interest that would be exchanged in an order of the given quantity
     */
    estimatedAccruedInterest?: EstimatedAccruedInterest | null | undefined;
    /**
     * The principal amount involved, which is the notional value of the underlying assets that would be exchanged for the given quantity
     */
    estimatedGrossAmount?: EstimatedGrossAmount | null | undefined;
    /**
     * Customer disclosure of the estimated gross credit (fee / markup) amount retained by broker based given the price adjustment schedule configured for orders executed in a principal capacity for a given quantity, and limit price. This amount is priced into the estimated_gross_credit_amount and is not separately charged explicitly.
     */
    estimatedGrossCreditAmount?: EstimatedGrossCreditAmount | null | undefined;
    /**
     * The estimated net notional amount involved in an order of the given quantity, capacity, and limit price. This will be the sum of the estimated gross amount and accrued interest, rounded to two decimal places. (For orders in the principal capacity, this total will include mark-up/mark-down price adjustments.)
     */
    estimatedNetAmount?: EstimatedNetAmount | null | undefined;
    /**
     * Identifier of the asset (of the type specified in `identifier_type`).
     */
    identifier?: string | undefined;
    /**
     * The identifier type of the asset used for price calculations. This will be the same value as what was sent on the request.
     */
    identifierType?: OrderCostPreviewResponseIdentifierTypeOpen | undefined;
    /**
     * The limit price to use in calculating costs. Only PERCENTAGE_OF_PAR will be accepted and returned.
     */
    limitPrice?: OrderCostPreviewResponseLimitPrice | null | undefined;
    /**
     * The quantity of the designated asset that would be ordered. For Fixed Income: Expressed in the par (face-value) amount and may not exceed two decimal places for USD-based currencies.
     */
    quantity?: OrderCostPreviewResponseQuantity | null | undefined;
    /**
     * The time the response was generated by the system
     */
    responseGenerationTime?: Date | null | undefined;
};
/** @internal */
export declare const OrderCostPreviewResponseAssetType$inboundSchema: z.ZodType<OrderCostPreviewResponseAssetTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const OrderCostPreviewResponseAssetType$outboundSchema: z.ZodType<OrderCostPreviewResponseAssetTypeOpen, z.ZodTypeDef, OrderCostPreviewResponseAssetTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderCostPreviewResponseAssetType$ {
    /** @deprecated use `OrderCostPreviewResponseAssetType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderCostPreviewResponseAssetTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderCostPreviewResponseAssetType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderCostPreviewResponseAssetTypeOpen, z.ZodTypeDef, OrderCostPreviewResponseAssetTypeOpen>;
}
/** @internal */
export declare const OrderCostPreviewResponseBrokerCapacity$inboundSchema: z.ZodType<OrderCostPreviewResponseBrokerCapacityOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const OrderCostPreviewResponseBrokerCapacity$outboundSchema: z.ZodType<OrderCostPreviewResponseBrokerCapacityOpen, z.ZodTypeDef, OrderCostPreviewResponseBrokerCapacityOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderCostPreviewResponseBrokerCapacity$ {
    /** @deprecated use `OrderCostPreviewResponseBrokerCapacity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderCostPreviewResponseBrokerCapacityOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderCostPreviewResponseBrokerCapacity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderCostPreviewResponseBrokerCapacityOpen, z.ZodTypeDef, OrderCostPreviewResponseBrokerCapacityOpen>;
}
/** @internal */
export declare const EstimatedAccruedInterest$inboundSchema: z.ZodType<EstimatedAccruedInterest, z.ZodTypeDef, unknown>;
/** @internal */
export type EstimatedAccruedInterest$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EstimatedAccruedInterest$outboundSchema: z.ZodType<EstimatedAccruedInterest$Outbound, z.ZodTypeDef, EstimatedAccruedInterest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EstimatedAccruedInterest$ {
    /** @deprecated use `EstimatedAccruedInterest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EstimatedAccruedInterest, z.ZodTypeDef, unknown>;
    /** @deprecated use `EstimatedAccruedInterest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EstimatedAccruedInterest$Outbound, z.ZodTypeDef, EstimatedAccruedInterest>;
    /** @deprecated use `EstimatedAccruedInterest$Outbound` instead. */
    type Outbound = EstimatedAccruedInterest$Outbound;
}
/** @internal */
export declare const EstimatedGrossAmount$inboundSchema: z.ZodType<EstimatedGrossAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type EstimatedGrossAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EstimatedGrossAmount$outboundSchema: z.ZodType<EstimatedGrossAmount$Outbound, z.ZodTypeDef, EstimatedGrossAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EstimatedGrossAmount$ {
    /** @deprecated use `EstimatedGrossAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EstimatedGrossAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `EstimatedGrossAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EstimatedGrossAmount$Outbound, z.ZodTypeDef, EstimatedGrossAmount>;
    /** @deprecated use `EstimatedGrossAmount$Outbound` instead. */
    type Outbound = EstimatedGrossAmount$Outbound;
}
/** @internal */
export declare const EstimatedGrossCreditAmount$inboundSchema: z.ZodType<EstimatedGrossCreditAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type EstimatedGrossCreditAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EstimatedGrossCreditAmount$outboundSchema: z.ZodType<EstimatedGrossCreditAmount$Outbound, z.ZodTypeDef, EstimatedGrossCreditAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EstimatedGrossCreditAmount$ {
    /** @deprecated use `EstimatedGrossCreditAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EstimatedGrossCreditAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `EstimatedGrossCreditAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EstimatedGrossCreditAmount$Outbound, z.ZodTypeDef, EstimatedGrossCreditAmount>;
    /** @deprecated use `EstimatedGrossCreditAmount$Outbound` instead. */
    type Outbound = EstimatedGrossCreditAmount$Outbound;
}
/** @internal */
export declare const EstimatedNetAmount$inboundSchema: z.ZodType<EstimatedNetAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type EstimatedNetAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const EstimatedNetAmount$outboundSchema: z.ZodType<EstimatedNetAmount$Outbound, z.ZodTypeDef, EstimatedNetAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EstimatedNetAmount$ {
    /** @deprecated use `EstimatedNetAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EstimatedNetAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `EstimatedNetAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EstimatedNetAmount$Outbound, z.ZodTypeDef, EstimatedNetAmount>;
    /** @deprecated use `EstimatedNetAmount$Outbound` instead. */
    type Outbound = EstimatedNetAmount$Outbound;
}
/** @internal */
export declare const OrderCostPreviewResponseIdentifierType$inboundSchema: z.ZodType<OrderCostPreviewResponseIdentifierTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const OrderCostPreviewResponseIdentifierType$outboundSchema: z.ZodType<OrderCostPreviewResponseIdentifierTypeOpen, z.ZodTypeDef, OrderCostPreviewResponseIdentifierTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderCostPreviewResponseIdentifierType$ {
    /** @deprecated use `OrderCostPreviewResponseIdentifierType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderCostPreviewResponseIdentifierTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderCostPreviewResponseIdentifierType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderCostPreviewResponseIdentifierTypeOpen, z.ZodTypeDef, OrderCostPreviewResponseIdentifierTypeOpen>;
}
/** @internal */
export declare const OrderCostPreviewResponsePrice$inboundSchema: z.ZodType<OrderCostPreviewResponsePrice, z.ZodTypeDef, unknown>;
/** @internal */
export type OrderCostPreviewResponsePrice$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const OrderCostPreviewResponsePrice$outboundSchema: z.ZodType<OrderCostPreviewResponsePrice$Outbound, z.ZodTypeDef, OrderCostPreviewResponsePrice>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderCostPreviewResponsePrice$ {
    /** @deprecated use `OrderCostPreviewResponsePrice$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderCostPreviewResponsePrice, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderCostPreviewResponsePrice$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderCostPreviewResponsePrice$Outbound, z.ZodTypeDef, OrderCostPreviewResponsePrice>;
    /** @deprecated use `OrderCostPreviewResponsePrice$Outbound` instead. */
    type Outbound = OrderCostPreviewResponsePrice$Outbound;
}
/** @internal */
export declare const OrderCostPreviewResponseType$inboundSchema: z.ZodType<OrderCostPreviewResponseTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const OrderCostPreviewResponseType$outboundSchema: z.ZodType<OrderCostPreviewResponseTypeOpen, z.ZodTypeDef, OrderCostPreviewResponseTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderCostPreviewResponseType$ {
    /** @deprecated use `OrderCostPreviewResponseType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderCostPreviewResponseTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderCostPreviewResponseType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderCostPreviewResponseTypeOpen, z.ZodTypeDef, OrderCostPreviewResponseTypeOpen>;
}
/** @internal */
export declare const OrderCostPreviewResponseLimitPrice$inboundSchema: z.ZodType<OrderCostPreviewResponseLimitPrice, z.ZodTypeDef, unknown>;
/** @internal */
export type OrderCostPreviewResponseLimitPrice$Outbound = {
    price?: OrderCostPreviewResponsePrice$Outbound | null | undefined;
    type?: string | undefined;
};
/** @internal */
export declare const OrderCostPreviewResponseLimitPrice$outboundSchema: z.ZodType<OrderCostPreviewResponseLimitPrice$Outbound, z.ZodTypeDef, OrderCostPreviewResponseLimitPrice>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderCostPreviewResponseLimitPrice$ {
    /** @deprecated use `OrderCostPreviewResponseLimitPrice$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderCostPreviewResponseLimitPrice, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderCostPreviewResponseLimitPrice$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderCostPreviewResponseLimitPrice$Outbound, z.ZodTypeDef, OrderCostPreviewResponseLimitPrice>;
    /** @deprecated use `OrderCostPreviewResponseLimitPrice$Outbound` instead. */
    type Outbound = OrderCostPreviewResponseLimitPrice$Outbound;
}
/** @internal */
export declare const OrderCostPreviewResponseQuantity$inboundSchema: z.ZodType<OrderCostPreviewResponseQuantity, z.ZodTypeDef, unknown>;
/** @internal */
export type OrderCostPreviewResponseQuantity$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const OrderCostPreviewResponseQuantity$outboundSchema: z.ZodType<OrderCostPreviewResponseQuantity$Outbound, z.ZodTypeDef, OrderCostPreviewResponseQuantity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderCostPreviewResponseQuantity$ {
    /** @deprecated use `OrderCostPreviewResponseQuantity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderCostPreviewResponseQuantity, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderCostPreviewResponseQuantity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderCostPreviewResponseQuantity$Outbound, z.ZodTypeDef, OrderCostPreviewResponseQuantity>;
    /** @deprecated use `OrderCostPreviewResponseQuantity$Outbound` instead. */
    type Outbound = OrderCostPreviewResponseQuantity$Outbound;
}
/** @internal */
export declare const OrderCostPreviewResponse$inboundSchema: z.ZodType<OrderCostPreviewResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type OrderCostPreviewResponse$Outbound = {
    account_id?: string | undefined;
    asset_id?: string | undefined;
    asset_type?: string | undefined;
    broker_capacity?: string | undefined;
    estimated_accrued_interest?: EstimatedAccruedInterest$Outbound | null | undefined;
    estimated_gross_amount?: EstimatedGrossAmount$Outbound | null | undefined;
    estimated_gross_credit_amount?: EstimatedGrossCreditAmount$Outbound | null | undefined;
    estimated_net_amount?: EstimatedNetAmount$Outbound | null | undefined;
    identifier?: string | undefined;
    identifier_type?: string | undefined;
    limit_price?: OrderCostPreviewResponseLimitPrice$Outbound | null | undefined;
    quantity?: OrderCostPreviewResponseQuantity$Outbound | null | undefined;
    response_generation_time?: string | null | undefined;
};
/** @internal */
export declare const OrderCostPreviewResponse$outboundSchema: z.ZodType<OrderCostPreviewResponse$Outbound, z.ZodTypeDef, OrderCostPreviewResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderCostPreviewResponse$ {
    /** @deprecated use `OrderCostPreviewResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderCostPreviewResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderCostPreviewResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderCostPreviewResponse$Outbound, z.ZodTypeDef, OrderCostPreviewResponse>;
    /** @deprecated use `OrderCostPreviewResponse$Outbound` instead. */
    type Outbound = OrderCostPreviewResponse$Outbound;
}
//# sourceMappingURL=ordercostpreviewresponse.d.ts.map