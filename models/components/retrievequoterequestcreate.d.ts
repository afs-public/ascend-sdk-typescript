import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { DecimalCreate, DecimalCreate$Outbound } from "./decimalcreate.js";
/**
 * The type of asset being evaluated in cost calculations
 */
export declare enum RetrieveQuoteRequestCreateAssetType {
    FixedIncome = "FIXED_INCOME"
}
/**
 * The type of asset being evaluated in cost calculations
 */
export type RetrieveQuoteRequestCreateAssetTypeOpen = OpenEnum<typeof RetrieveQuoteRequestCreateAssetType>;
/**
 * Capacity used in determining bid and ask prices. Defaults to "AGENCY" if no value specified.
 */
export declare enum RetrieveQuoteRequestCreateBrokerCapacity {
    BrokerCapacityUnspecified = "BROKER_CAPACITY_UNSPECIFIED",
    Agency = "AGENCY",
    Principal = "PRINCIPAL"
}
/**
 * Capacity used in determining bid and ask prices. Defaults to "AGENCY" if no value specified.
 */
export type RetrieveQuoteRequestCreateBrokerCapacityOpen = OpenEnum<typeof RetrieveQuoteRequestCreateBrokerCapacity>;
/**
 * The identifier type of the asset being sought
 */
export declare enum RetrieveQuoteRequestCreateIdentifierType {
    AssetId = "ASSET_ID",
    Cusip = "CUSIP",
    Isin = "ISIN"
}
/**
 * The identifier type of the asset being sought
 */
export type RetrieveQuoteRequestCreateIdentifierTypeOpen = OpenEnum<typeof RetrieveQuoteRequestCreateIdentifierType>;
/**
 * Request object for retrieving fixed income quotes
 */
export type RetrieveQuoteRequestCreate = {
    /**
     * The type of asset being evaluated in cost calculations
     */
    assetType: RetrieveQuoteRequestCreateAssetTypeOpen;
    /**
     * Capacity used in determining bid and ask prices. Defaults to "AGENCY" if no value specified.
     */
    brokerCapacity?: RetrieveQuoteRequestCreateBrokerCapacityOpen | undefined;
    /**
     * Identifier of the asset (of the type specified in `identifier_type`).
     */
    identifier: string;
    /**
     * The identifier type of the asset being sought
     */
    identifierType: RetrieveQuoteRequestCreateIdentifierTypeOpen;
    /**
     * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal][] or Python's [decimal.Decimal][].
     *
     * @remarks
     *
     *  [BigDecimal]:
     *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
     *  [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
     */
    minimumQuantity?: DecimalCreate | undefined;
    /**
     * The parent resource where this order will be created. Format: accounts/{account_id}
     */
    parent: string;
};
/** @internal */
export declare const RetrieveQuoteRequestCreateAssetType$inboundSchema: z.ZodType<RetrieveQuoteRequestCreateAssetTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RetrieveQuoteRequestCreateAssetType$outboundSchema: z.ZodType<RetrieveQuoteRequestCreateAssetTypeOpen, z.ZodTypeDef, RetrieveQuoteRequestCreateAssetTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RetrieveQuoteRequestCreateAssetType$ {
    /** @deprecated use `RetrieveQuoteRequestCreateAssetType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RetrieveQuoteRequestCreateAssetTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RetrieveQuoteRequestCreateAssetType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RetrieveQuoteRequestCreateAssetTypeOpen, z.ZodTypeDef, RetrieveQuoteRequestCreateAssetTypeOpen>;
}
/** @internal */
export declare const RetrieveQuoteRequestCreateBrokerCapacity$inboundSchema: z.ZodType<RetrieveQuoteRequestCreateBrokerCapacityOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RetrieveQuoteRequestCreateBrokerCapacity$outboundSchema: z.ZodType<RetrieveQuoteRequestCreateBrokerCapacityOpen, z.ZodTypeDef, RetrieveQuoteRequestCreateBrokerCapacityOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RetrieveQuoteRequestCreateBrokerCapacity$ {
    /** @deprecated use `RetrieveQuoteRequestCreateBrokerCapacity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RetrieveQuoteRequestCreateBrokerCapacityOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RetrieveQuoteRequestCreateBrokerCapacity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RetrieveQuoteRequestCreateBrokerCapacityOpen, z.ZodTypeDef, RetrieveQuoteRequestCreateBrokerCapacityOpen>;
}
/** @internal */
export declare const RetrieveQuoteRequestCreateIdentifierType$inboundSchema: z.ZodType<RetrieveQuoteRequestCreateIdentifierTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RetrieveQuoteRequestCreateIdentifierType$outboundSchema: z.ZodType<RetrieveQuoteRequestCreateIdentifierTypeOpen, z.ZodTypeDef, RetrieveQuoteRequestCreateIdentifierTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RetrieveQuoteRequestCreateIdentifierType$ {
    /** @deprecated use `RetrieveQuoteRequestCreateIdentifierType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RetrieveQuoteRequestCreateIdentifierTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RetrieveQuoteRequestCreateIdentifierType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RetrieveQuoteRequestCreateIdentifierTypeOpen, z.ZodTypeDef, RetrieveQuoteRequestCreateIdentifierTypeOpen>;
}
/** @internal */
export declare const RetrieveQuoteRequestCreate$inboundSchema: z.ZodType<RetrieveQuoteRequestCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type RetrieveQuoteRequestCreate$Outbound = {
    asset_type: string;
    broker_capacity?: string | undefined;
    identifier: string;
    identifier_type: string;
    minimum_quantity?: DecimalCreate$Outbound | undefined;
    parent: string;
};
/** @internal */
export declare const RetrieveQuoteRequestCreate$outboundSchema: z.ZodType<RetrieveQuoteRequestCreate$Outbound, z.ZodTypeDef, RetrieveQuoteRequestCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RetrieveQuoteRequestCreate$ {
    /** @deprecated use `RetrieveQuoteRequestCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RetrieveQuoteRequestCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `RetrieveQuoteRequestCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RetrieveQuoteRequestCreate$Outbound, z.ZodTypeDef, RetrieveQuoteRequestCreate>;
    /** @deprecated use `RetrieveQuoteRequestCreate$Outbound` instead. */
    type Outbound = RetrieveQuoteRequestCreate$Outbound;
}
//# sourceMappingURL=retrievequoterequestcreate.d.ts.map