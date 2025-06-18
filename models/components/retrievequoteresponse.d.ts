import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { BidAskPrice, BidAskPrice$Outbound } from "./bidaskprice.js";
/**
 * The best ask minimum quantity. This will be absent if no ask information is available
 */
export type AskMinimumQuantity = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The best ask quantity. This will be absent if no ask information is available
 */
export type AskQuantity = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The type of asset referenced by the security identifier
 */
export declare enum RetrieveQuoteResponseAssetType {
    AssetTypeUnspecified = "ASSET_TYPE_UNSPECIFIED",
    Equity = "EQUITY",
    FixedIncome = "FIXED_INCOME",
    MutualFund = "MUTUAL_FUND",
    Option = "OPTION"
}
/**
 * The type of asset referenced by the security identifier
 */
export type RetrieveQuoteResponseAssetTypeOpen = OpenEnum<typeof RetrieveQuoteResponseAssetType>;
/**
 * The best bid minimum quantity. This will be absent if no bid information is available
 */
export type BidMinimumQuantity = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The best bid quantity. This will be absent if no bid information is available
 */
export type BidQuantity = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Capacity used in determining bid and ask prices. Defaults to "AGENCY" if no value specified.
 */
export declare enum RetrieveQuoteResponseBrokerCapacity {
    BrokerCapacityUnspecified = "BROKER_CAPACITY_UNSPECIFIED",
    Agency = "AGENCY",
    Principal = "PRINCIPAL"
}
/**
 * Capacity used in determining bid and ask prices. Defaults to "AGENCY" if no value specified.
 */
export type RetrieveQuoteResponseBrokerCapacityOpen = OpenEnum<typeof RetrieveQuoteResponseBrokerCapacity>;
/**
 * The identifier type of the asset for which the best bid and offer is returned. This will be the same value as what was sent on the request.
 */
export declare enum RetrieveQuoteResponseIdentifierType {
    AssetId = "ASSET_ID",
    Cusip = "CUSIP",
    Isin = "ISIN"
}
/**
 * The identifier type of the asset for which the best bid and offer is returned. This will be the same value as what was sent on the request.
 */
export type RetrieveQuoteResponseIdentifierTypeOpen = OpenEnum<typeof RetrieveQuoteResponseIdentifierType>;
/**
 * The minimum quantity specified in the request (if any). For Fixed Income: Expressed in the par (face-value) amount and may not exceed two decimal places for USD-based currencies.
 */
export type MinimumQuantity = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The current best bid and offer for a specified security
 */
export type RetrieveQuoteResponse = {
    /**
     * The account id used in calculating order costs
     */
    accountId?: string | undefined;
    /**
     * The best ask minimum quantity. This will be absent if no ask information is available
     */
    askMinimumQuantity?: AskMinimumQuantity | null | undefined;
    /**
     * The price information of the best ask matching the request criteria. If no ask information is available at all, this will be empty. If yield information is not available, then this will only contain a PERCENTAGE_OF_PAR-typed price.
     */
    askPrices?: Array<BidAskPrice> | undefined;
    /**
     * The best ask quantity. This will be absent if no ask information is available
     */
    askQuantity?: AskQuantity | null | undefined;
    /**
     * Apex Asset ID for this asset.
     */
    assetId?: string | undefined;
    /**
     * The type of asset referenced by the security identifier
     */
    assetType?: RetrieveQuoteResponseAssetTypeOpen | undefined;
    /**
     * The best bid minimum quantity. This will be absent if no bid information is available
     */
    bidMinimumQuantity?: BidMinimumQuantity | null | undefined;
    /**
     * The price information of the best bid matching the request criteria. If no bid information is available at all, this will be empty. If yield information is not available, then this will only contain a PERCENTAGE_OF_PAR-typed price.
     */
    bidPrices?: Array<BidAskPrice> | undefined;
    /**
     * The best bid quantity. This will be absent if no bid information is available
     */
    bidQuantity?: BidQuantity | null | undefined;
    /**
     * Capacity used in determining bid and ask prices. Defaults to "AGENCY" if no value specified.
     */
    brokerCapacity?: RetrieveQuoteResponseBrokerCapacityOpen | undefined;
    /**
     * Identifier of the asset (of the type specified in `identifier_type`).
     */
    identifier?: string | undefined;
    /**
     * The identifier type of the asset for which the best bid and offer is returned. This will be the same value as what was sent on the request.
     */
    identifierType?: RetrieveQuoteResponseIdentifierTypeOpen | undefined;
    /**
     * The minimum quantity specified in the request (if any). For Fixed Income: Expressed in the par (face-value) amount and may not exceed two decimal places for USD-based currencies.
     */
    minimumQuantity?: MinimumQuantity | null | undefined;
    /**
     * The time the response was generated by the system
     */
    responseGenerationTime?: Date | null | undefined;
};
/** @internal */
export declare const AskMinimumQuantity$inboundSchema: z.ZodType<AskMinimumQuantity, z.ZodTypeDef, unknown>;
/** @internal */
export type AskMinimumQuantity$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const AskMinimumQuantity$outboundSchema: z.ZodType<AskMinimumQuantity$Outbound, z.ZodTypeDef, AskMinimumQuantity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AskMinimumQuantity$ {
    /** @deprecated use `AskMinimumQuantity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AskMinimumQuantity, z.ZodTypeDef, unknown>;
    /** @deprecated use `AskMinimumQuantity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AskMinimumQuantity$Outbound, z.ZodTypeDef, AskMinimumQuantity>;
    /** @deprecated use `AskMinimumQuantity$Outbound` instead. */
    type Outbound = AskMinimumQuantity$Outbound;
}
/** @internal */
export declare const AskQuantity$inboundSchema: z.ZodType<AskQuantity, z.ZodTypeDef, unknown>;
/** @internal */
export type AskQuantity$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const AskQuantity$outboundSchema: z.ZodType<AskQuantity$Outbound, z.ZodTypeDef, AskQuantity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AskQuantity$ {
    /** @deprecated use `AskQuantity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AskQuantity, z.ZodTypeDef, unknown>;
    /** @deprecated use `AskQuantity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AskQuantity$Outbound, z.ZodTypeDef, AskQuantity>;
    /** @deprecated use `AskQuantity$Outbound` instead. */
    type Outbound = AskQuantity$Outbound;
}
/** @internal */
export declare const RetrieveQuoteResponseAssetType$inboundSchema: z.ZodType<RetrieveQuoteResponseAssetTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RetrieveQuoteResponseAssetType$outboundSchema: z.ZodType<RetrieveQuoteResponseAssetTypeOpen, z.ZodTypeDef, RetrieveQuoteResponseAssetTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RetrieveQuoteResponseAssetType$ {
    /** @deprecated use `RetrieveQuoteResponseAssetType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RetrieveQuoteResponseAssetTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RetrieveQuoteResponseAssetType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RetrieveQuoteResponseAssetTypeOpen, z.ZodTypeDef, RetrieveQuoteResponseAssetTypeOpen>;
}
/** @internal */
export declare const BidMinimumQuantity$inboundSchema: z.ZodType<BidMinimumQuantity, z.ZodTypeDef, unknown>;
/** @internal */
export type BidMinimumQuantity$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const BidMinimumQuantity$outboundSchema: z.ZodType<BidMinimumQuantity$Outbound, z.ZodTypeDef, BidMinimumQuantity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BidMinimumQuantity$ {
    /** @deprecated use `BidMinimumQuantity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BidMinimumQuantity, z.ZodTypeDef, unknown>;
    /** @deprecated use `BidMinimumQuantity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BidMinimumQuantity$Outbound, z.ZodTypeDef, BidMinimumQuantity>;
    /** @deprecated use `BidMinimumQuantity$Outbound` instead. */
    type Outbound = BidMinimumQuantity$Outbound;
}
/** @internal */
export declare const BidQuantity$inboundSchema: z.ZodType<BidQuantity, z.ZodTypeDef, unknown>;
/** @internal */
export type BidQuantity$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const BidQuantity$outboundSchema: z.ZodType<BidQuantity$Outbound, z.ZodTypeDef, BidQuantity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BidQuantity$ {
    /** @deprecated use `BidQuantity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BidQuantity, z.ZodTypeDef, unknown>;
    /** @deprecated use `BidQuantity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BidQuantity$Outbound, z.ZodTypeDef, BidQuantity>;
    /** @deprecated use `BidQuantity$Outbound` instead. */
    type Outbound = BidQuantity$Outbound;
}
/** @internal */
export declare const RetrieveQuoteResponseBrokerCapacity$inboundSchema: z.ZodType<RetrieveQuoteResponseBrokerCapacityOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RetrieveQuoteResponseBrokerCapacity$outboundSchema: z.ZodType<RetrieveQuoteResponseBrokerCapacityOpen, z.ZodTypeDef, RetrieveQuoteResponseBrokerCapacityOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RetrieveQuoteResponseBrokerCapacity$ {
    /** @deprecated use `RetrieveQuoteResponseBrokerCapacity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RetrieveQuoteResponseBrokerCapacityOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RetrieveQuoteResponseBrokerCapacity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RetrieveQuoteResponseBrokerCapacityOpen, z.ZodTypeDef, RetrieveQuoteResponseBrokerCapacityOpen>;
}
/** @internal */
export declare const RetrieveQuoteResponseIdentifierType$inboundSchema: z.ZodType<RetrieveQuoteResponseIdentifierTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const RetrieveQuoteResponseIdentifierType$outboundSchema: z.ZodType<RetrieveQuoteResponseIdentifierTypeOpen, z.ZodTypeDef, RetrieveQuoteResponseIdentifierTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RetrieveQuoteResponseIdentifierType$ {
    /** @deprecated use `RetrieveQuoteResponseIdentifierType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RetrieveQuoteResponseIdentifierTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `RetrieveQuoteResponseIdentifierType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RetrieveQuoteResponseIdentifierTypeOpen, z.ZodTypeDef, RetrieveQuoteResponseIdentifierTypeOpen>;
}
/** @internal */
export declare const MinimumQuantity$inboundSchema: z.ZodType<MinimumQuantity, z.ZodTypeDef, unknown>;
/** @internal */
export type MinimumQuantity$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const MinimumQuantity$outboundSchema: z.ZodType<MinimumQuantity$Outbound, z.ZodTypeDef, MinimumQuantity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MinimumQuantity$ {
    /** @deprecated use `MinimumQuantity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<MinimumQuantity, z.ZodTypeDef, unknown>;
    /** @deprecated use `MinimumQuantity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<MinimumQuantity$Outbound, z.ZodTypeDef, MinimumQuantity>;
    /** @deprecated use `MinimumQuantity$Outbound` instead. */
    type Outbound = MinimumQuantity$Outbound;
}
/** @internal */
export declare const RetrieveQuoteResponse$inboundSchema: z.ZodType<RetrieveQuoteResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type RetrieveQuoteResponse$Outbound = {
    account_id?: string | undefined;
    ask_minimum_quantity?: AskMinimumQuantity$Outbound | null | undefined;
    ask_prices?: Array<BidAskPrice$Outbound> | undefined;
    ask_quantity?: AskQuantity$Outbound | null | undefined;
    asset_id?: string | undefined;
    asset_type?: string | undefined;
    bid_minimum_quantity?: BidMinimumQuantity$Outbound | null | undefined;
    bid_prices?: Array<BidAskPrice$Outbound> | undefined;
    bid_quantity?: BidQuantity$Outbound | null | undefined;
    broker_capacity?: string | undefined;
    identifier?: string | undefined;
    identifier_type?: string | undefined;
    minimum_quantity?: MinimumQuantity$Outbound | null | undefined;
    response_generation_time?: string | null | undefined;
};
/** @internal */
export declare const RetrieveQuoteResponse$outboundSchema: z.ZodType<RetrieveQuoteResponse$Outbound, z.ZodTypeDef, RetrieveQuoteResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RetrieveQuoteResponse$ {
    /** @deprecated use `RetrieveQuoteResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RetrieveQuoteResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `RetrieveQuoteResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RetrieveQuoteResponse$Outbound, z.ZodTypeDef, RetrieveQuoteResponse>;
    /** @deprecated use `RetrieveQuoteResponse$Outbound` instead. */
    type Outbound = RetrieveQuoteResponse$Outbound;
}
//# sourceMappingURL=retrievequoteresponse.d.ts.map