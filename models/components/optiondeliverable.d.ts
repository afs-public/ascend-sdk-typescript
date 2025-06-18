import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * The percentage used to determine the proportion of the deliverable asset(s) or cash assigned to each option contract in a settlement or corporate action scenario.
 */
export type AllocationPercentage = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The cash amount of the deliverable
 */
export type CashAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The cash type of the deliverable
 */
export declare enum CashType {
    CashTypeUnspecified = "CASH_TYPE_UNSPECIFIED",
    CashDifferential = "CASH_DIFFERENTIAL",
    CashFixed = "CASH_FIXED"
}
/**
 * The cash type of the deliverable
 */
export type CashTypeOpen = OpenEnum<typeof CashType>;
/**
 * The quantity of the deliverable
 */
export type OptionDeliverableQuantity = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Specifies the timeline for settling a transaction
 */
export declare enum SettlementConvention {
    SettlementConventionUnspecified = "SETTLEMENT_CONVENTION_UNSPECIFIED",
    TPlus0 = "T_PLUS_0",
    TPlus1 = "T_PLUS_1"
}
/**
 * Specifies the timeline for settling a transaction
 */
export type SettlementConventionOpen = OpenEnum<typeof SettlementConvention>;
/**
 * Indicates the current status of the settlement process for the deliverable asset(s) tied to an option, such as regular settlement or delayed.
 */
export declare enum SettlementStatus {
    SettlementStatusUnspecified = "SETTLEMENT_STATUS_UNSPECIFIED",
    Regular = "REGULAR",
    Delayed = "DELAYED"
}
/**
 * Indicates the current status of the settlement process for the deliverable asset(s) tied to an option, such as regular settlement or delayed.
 */
export type SettlementStatusOpen = OpenEnum<typeof SettlementStatus>;
/**
 * OptionDeliverable
 */
export type OptionDeliverable = {
    /**
     * The percentage used to determine the proportion of the deliverable asset(s) or cash assigned to each option contract in a settlement or corporate action scenario.
     */
    allocationPercentage?: AllocationPercentage | null | undefined;
    /**
     * The Ascend asset id associated with this deliverable, populated when we are able to find an asset with a matching cusip in the US
     */
    assetId?: string | undefined;
    /**
     * The cash amount of the deliverable
     */
    cashAmount?: CashAmount | null | undefined;
    /**
     * The cash type of the deliverable
     */
    cashType?: CashTypeOpen | undefined;
    /**
     * The cusip of the deliverable, if provided by OCC
     */
    cusip?: string | undefined;
    /**
     * When a deliverable is pending a NameChange or SymbolChange, the pending_cusip field may be populated with the new cusip
     */
    pendingCusip?: string | undefined;
    /**
     * The quantity of the deliverable
     */
    quantity?: OptionDeliverableQuantity | null | undefined;
    /**
     * Specifies the timeline for settling a transaction
     */
    settlementConvention?: SettlementConventionOpen | undefined;
    /**
     * Indicates the current status of the settlement process for the deliverable asset(s) tied to an option, such as regular settlement or delayed.
     */
    settlementStatus?: SettlementStatusOpen | undefined;
};
/** @internal */
export declare const AllocationPercentage$inboundSchema: z.ZodType<AllocationPercentage, z.ZodTypeDef, unknown>;
/** @internal */
export type AllocationPercentage$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const AllocationPercentage$outboundSchema: z.ZodType<AllocationPercentage$Outbound, z.ZodTypeDef, AllocationPercentage>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AllocationPercentage$ {
    /** @deprecated use `AllocationPercentage$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AllocationPercentage, z.ZodTypeDef, unknown>;
    /** @deprecated use `AllocationPercentage$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AllocationPercentage$Outbound, z.ZodTypeDef, AllocationPercentage>;
    /** @deprecated use `AllocationPercentage$Outbound` instead. */
    type Outbound = AllocationPercentage$Outbound;
}
/** @internal */
export declare const CashAmount$inboundSchema: z.ZodType<CashAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type CashAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const CashAmount$outboundSchema: z.ZodType<CashAmount$Outbound, z.ZodTypeDef, CashAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CashAmount$ {
    /** @deprecated use `CashAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CashAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `CashAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CashAmount$Outbound, z.ZodTypeDef, CashAmount>;
    /** @deprecated use `CashAmount$Outbound` instead. */
    type Outbound = CashAmount$Outbound;
}
/** @internal */
export declare const CashType$inboundSchema: z.ZodType<CashTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CashType$outboundSchema: z.ZodType<CashTypeOpen, z.ZodTypeDef, CashTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CashType$ {
    /** @deprecated use `CashType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CashTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CashType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CashTypeOpen, z.ZodTypeDef, CashTypeOpen>;
}
/** @internal */
export declare const OptionDeliverableQuantity$inboundSchema: z.ZodType<OptionDeliverableQuantity, z.ZodTypeDef, unknown>;
/** @internal */
export type OptionDeliverableQuantity$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const OptionDeliverableQuantity$outboundSchema: z.ZodType<OptionDeliverableQuantity$Outbound, z.ZodTypeDef, OptionDeliverableQuantity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OptionDeliverableQuantity$ {
    /** @deprecated use `OptionDeliverableQuantity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OptionDeliverableQuantity, z.ZodTypeDef, unknown>;
    /** @deprecated use `OptionDeliverableQuantity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OptionDeliverableQuantity$Outbound, z.ZodTypeDef, OptionDeliverableQuantity>;
    /** @deprecated use `OptionDeliverableQuantity$Outbound` instead. */
    type Outbound = OptionDeliverableQuantity$Outbound;
}
/** @internal */
export declare const SettlementConvention$inboundSchema: z.ZodType<SettlementConventionOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const SettlementConvention$outboundSchema: z.ZodType<SettlementConventionOpen, z.ZodTypeDef, SettlementConventionOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SettlementConvention$ {
    /** @deprecated use `SettlementConvention$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SettlementConventionOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `SettlementConvention$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SettlementConventionOpen, z.ZodTypeDef, SettlementConventionOpen>;
}
/** @internal */
export declare const SettlementStatus$inboundSchema: z.ZodType<SettlementStatusOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const SettlementStatus$outboundSchema: z.ZodType<SettlementStatusOpen, z.ZodTypeDef, SettlementStatusOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SettlementStatus$ {
    /** @deprecated use `SettlementStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SettlementStatusOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `SettlementStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SettlementStatusOpen, z.ZodTypeDef, SettlementStatusOpen>;
}
/** @internal */
export declare const OptionDeliverable$inboundSchema: z.ZodType<OptionDeliverable, z.ZodTypeDef, unknown>;
/** @internal */
export type OptionDeliverable$Outbound = {
    allocation_percentage?: AllocationPercentage$Outbound | null | undefined;
    asset_id?: string | undefined;
    cash_amount?: CashAmount$Outbound | null | undefined;
    cash_type?: string | undefined;
    cusip?: string | undefined;
    pending_cusip?: string | undefined;
    quantity?: OptionDeliverableQuantity$Outbound | null | undefined;
    settlement_convention?: string | undefined;
    settlement_status?: string | undefined;
};
/** @internal */
export declare const OptionDeliverable$outboundSchema: z.ZodType<OptionDeliverable$Outbound, z.ZodTypeDef, OptionDeliverable>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OptionDeliverable$ {
    /** @deprecated use `OptionDeliverable$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OptionDeliverable, z.ZodTypeDef, unknown>;
    /** @deprecated use `OptionDeliverable$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OptionDeliverable$Outbound, z.ZodTypeDef, OptionDeliverable>;
    /** @deprecated use `OptionDeliverable$Outbound` instead. */
    type Outbound = OptionDeliverable$Outbound;
}
//# sourceMappingURL=optiondeliverable.d.ts.map