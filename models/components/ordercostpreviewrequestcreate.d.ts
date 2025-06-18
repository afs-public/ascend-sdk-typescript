import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { DecimalCreate, DecimalCreate$Outbound } from "./decimalcreate.js";
import { LimitPriceCreate, LimitPriceCreate$Outbound } from "./limitpricecreate.js";
/**
 * The type of asset being evaluated in cost calculations.
 */
export declare enum OrderCostPreviewRequestCreateAssetType {
    FixedIncome = "FIXED_INCOME"
}
/**
 * The type of asset being evaluated in cost calculations.
 */
export type OrderCostPreviewRequestCreateAssetTypeOpen = OpenEnum<typeof OrderCostPreviewRequestCreateAssetType>;
/**
 * Capacity used in determining the order cost. Defaults to "AGENCY" if no value specified.
 */
export declare enum OrderCostPreviewRequestCreateBrokerCapacity {
    BrokerCapacityUnspecified = "BROKER_CAPACITY_UNSPECIFIED",
    Agency = "AGENCY",
    Principal = "PRINCIPAL"
}
/**
 * Capacity used in determining the order cost. Defaults to "AGENCY" if no value specified.
 */
export type OrderCostPreviewRequestCreateBrokerCapacityOpen = OpenEnum<typeof OrderCostPreviewRequestCreateBrokerCapacity>;
/**
 * The identifier type of the asset being sought
 */
export declare enum OrderCostPreviewRequestCreateIdentifierType {
    AssetId = "ASSET_ID",
    Cusip = "CUSIP",
    Isin = "ISIN"
}
/**
 * The identifier type of the asset being sought
 */
export type OrderCostPreviewRequestCreateIdentifierTypeOpen = OpenEnum<typeof OrderCostPreviewRequestCreateIdentifierType>;
/**
 * Request object for retrieving fixed income costs
 */
export type OrderCostPreviewRequestCreate = {
    /**
     * The type of asset being evaluated in cost calculations.
     */
    assetType: OrderCostPreviewRequestCreateAssetTypeOpen;
    /**
     * Capacity used in determining the order cost. Defaults to "AGENCY" if no value specified.
     */
    brokerCapacity?: OrderCostPreviewRequestCreateBrokerCapacityOpen | undefined;
    /**
     * Identifier of the asset (of the type specified in `identifier_type`).
     */
    identifier: string;
    /**
     * The identifier type of the asset being sought
     */
    identifierType: OrderCostPreviewRequestCreateIdentifierTypeOpen;
    /**
     * A limit price definition
     */
    limitPrice: LimitPriceCreate;
    /**
     * The parent resource where this order will be created. Format: accounts/{account_id}
     */
    parent: string;
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
};
/** @internal */
export declare const OrderCostPreviewRequestCreateAssetType$inboundSchema: z.ZodType<OrderCostPreviewRequestCreateAssetTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const OrderCostPreviewRequestCreateAssetType$outboundSchema: z.ZodType<OrderCostPreviewRequestCreateAssetTypeOpen, z.ZodTypeDef, OrderCostPreviewRequestCreateAssetTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderCostPreviewRequestCreateAssetType$ {
    /** @deprecated use `OrderCostPreviewRequestCreateAssetType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderCostPreviewRequestCreateAssetTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderCostPreviewRequestCreateAssetType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderCostPreviewRequestCreateAssetTypeOpen, z.ZodTypeDef, OrderCostPreviewRequestCreateAssetTypeOpen>;
}
/** @internal */
export declare const OrderCostPreviewRequestCreateBrokerCapacity$inboundSchema: z.ZodType<OrderCostPreviewRequestCreateBrokerCapacityOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const OrderCostPreviewRequestCreateBrokerCapacity$outboundSchema: z.ZodType<OrderCostPreviewRequestCreateBrokerCapacityOpen, z.ZodTypeDef, OrderCostPreviewRequestCreateBrokerCapacityOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderCostPreviewRequestCreateBrokerCapacity$ {
    /** @deprecated use `OrderCostPreviewRequestCreateBrokerCapacity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderCostPreviewRequestCreateBrokerCapacityOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderCostPreviewRequestCreateBrokerCapacity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderCostPreviewRequestCreateBrokerCapacityOpen, z.ZodTypeDef, OrderCostPreviewRequestCreateBrokerCapacityOpen>;
}
/** @internal */
export declare const OrderCostPreviewRequestCreateIdentifierType$inboundSchema: z.ZodType<OrderCostPreviewRequestCreateIdentifierTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const OrderCostPreviewRequestCreateIdentifierType$outboundSchema: z.ZodType<OrderCostPreviewRequestCreateIdentifierTypeOpen, z.ZodTypeDef, OrderCostPreviewRequestCreateIdentifierTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderCostPreviewRequestCreateIdentifierType$ {
    /** @deprecated use `OrderCostPreviewRequestCreateIdentifierType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderCostPreviewRequestCreateIdentifierTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderCostPreviewRequestCreateIdentifierType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderCostPreviewRequestCreateIdentifierTypeOpen, z.ZodTypeDef, OrderCostPreviewRequestCreateIdentifierTypeOpen>;
}
/** @internal */
export declare const OrderCostPreviewRequestCreate$inboundSchema: z.ZodType<OrderCostPreviewRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type OrderCostPreviewRequestCreate$Outbound = {
    asset_type: string;
    broker_capacity?: string | undefined;
    identifier: string;
    identifier_type: string;
    limit_price: LimitPriceCreate$Outbound;
    parent: string;
    quantity: DecimalCreate$Outbound;
};
/** @internal */
export declare const OrderCostPreviewRequestCreate$outboundSchema: z.ZodType<OrderCostPreviewRequestCreate$Outbound, z.ZodTypeDef, OrderCostPreviewRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrderCostPreviewRequestCreate$ {
    /** @deprecated use `OrderCostPreviewRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrderCostPreviewRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrderCostPreviewRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrderCostPreviewRequestCreate$Outbound, z.ZodTypeDef, OrderCostPreviewRequestCreate>;
    /** @deprecated use `OrderCostPreviewRequestCreate$Outbound` instead. */
    type Outbound = OrderCostPreviewRequestCreate$Outbound;
}
//# sourceMappingURL=ordercostpreviewrequestcreate.d.ts.map