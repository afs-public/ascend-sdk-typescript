import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
/**
 * The processing status of the basket
 */
export declare enum BasketState {
    StateUnspecified = "STATE_UNSPECIFIED",
    New = "NEW",
    Submitted = "SUBMITTED",
    Executing = "EXECUTING",
    Allocating = "ALLOCATING",
    Done = "DONE",
    Rejected = "REJECTED",
    PartiallyFilled = "PARTIALLY_FILLED"
}
/**
 * The processing status of the basket
 */
export type BasketStateOpen = OpenEnum<typeof BasketState>;
/**
 * The message describing a basket
 */
export type Basket = {
    /**
     * System generated unique id for the basket
     */
    basketId?: string | undefined;
    /**
     * Number of orders in the basket
     */
    basketOrderCount?: string | undefined;
    /**
     * The processing status of the basket
     */
    basketState?: BasketStateOpen | undefined;
    /**
     * User-supplied unique basket ID. Cannot be more than 40 characters long.
     */
    clientBasketId?: string | undefined;
    /**
     * Time the basket was completed
     */
    completeTime?: Date | null | undefined;
    /**
     * Number of compressed orders in the basket that will go to market. This number is calculated after basket submission.
     */
    compressedOrderCount?: string | undefined;
    /**
     * The unique id for the correspondent for the basket
     */
    correspondentId?: string | undefined;
    /**
     * Time of the basket creation
     */
    createTime?: Date | null | undefined;
    /**
     * Number of distinct accounts in the basket.
     */
    distinctAccountCount?: string | undefined;
    /**
     * Time of the last basket update
     */
    lastUpdateTime?: Date | null | undefined;
    /**
     * System generated name of the basket
     */
    name?: string | undefined;
    /**
     * Number of accounts that did not pass risk checks and their orders were rejected.
     */
    rejectedAccountCount?: string | undefined;
    /**
     * Time the basket was submitted
     */
    submitTime?: Date | null | undefined;
};
/** @internal */
export declare const BasketState$inboundSchema: z.ZodType<BasketStateOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BasketState$outboundSchema: z.ZodType<BasketStateOpen, z.ZodTypeDef, BasketStateOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketState$ {
    /** @deprecated use `BasketState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketStateOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketStateOpen, z.ZodTypeDef, BasketStateOpen>;
}
/** @internal */
export declare const Basket$inboundSchema: z.ZodType<Basket, z.ZodTypeDef, unknown>;
/** @internal */
export type Basket$Outbound = {
    basket_id?: string | undefined;
    basket_order_count?: string | undefined;
    basket_state?: string | undefined;
    client_basket_id?: string | undefined;
    complete_time?: string | null | undefined;
    compressed_order_count?: string | undefined;
    correspondent_id?: string | undefined;
    create_time?: string | null | undefined;
    distinct_account_count?: string | undefined;
    last_update_time?: string | null | undefined;
    name?: string | undefined;
    rejected_account_count?: string | undefined;
    submit_time?: string | null | undefined;
};
/** @internal */
export declare const Basket$outboundSchema: z.ZodType<Basket$Outbound, z.ZodTypeDef, Basket>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Basket$ {
    /** @deprecated use `Basket$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Basket, z.ZodTypeDef, unknown>;
    /** @deprecated use `Basket$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Basket$Outbound, z.ZodTypeDef, Basket>;
    /** @deprecated use `Basket$Outbound` instead. */
    type Outbound = Basket$Outbound;
}
//# sourceMappingURL=basket.d.ts.map