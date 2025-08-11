import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { BasketTradingExecutedPrice, BasketTradingExecutedPrice$Outbound } from "./baskettradingexecutedprice.js";
/**
 * The quantity of the order. For Equities: measured in shares. For Fixed Income assets: measured in the face value of the currency of the order.
 */
export type BasketTradingExecutionsQuantity = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Details of an individual execution within an order
 */
export type BasketTradingExecutions = {
    /**
     * The prices at which the order was executed. For Equities: there will be one price measured in PRICE_PER_UNIT (using the order currency). For Fixed Income assets: there will always be an entry measured in the PERCENTAGE_OF_PAR (100 X cost / total par value), and there may be additional entries measured in yield.
     */
    executedPrices?: Array<BasketTradingExecutedPrice> | undefined;
    /**
     * The timestamp that this fill was transacted at the market
     */
    executedTime?: Date | null | undefined;
    /**
     * The quantity of the order. For Equities: measured in shares. For Fixed Income assets: measured in the face value of the currency of the order.
     */
    quantity?: BasketTradingExecutionsQuantity | null | undefined;
};
/** @internal */
export declare const BasketTradingExecutionsQuantity$inboundSchema: z.ZodType<BasketTradingExecutionsQuantity, z.ZodTypeDef, unknown>;
/** @internal */
export type BasketTradingExecutionsQuantity$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const BasketTradingExecutionsQuantity$outboundSchema: z.ZodType<BasketTradingExecutionsQuantity$Outbound, z.ZodTypeDef, BasketTradingExecutionsQuantity>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketTradingExecutionsQuantity$ {
    /** @deprecated use `BasketTradingExecutionsQuantity$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketTradingExecutionsQuantity, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketTradingExecutionsQuantity$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketTradingExecutionsQuantity$Outbound, z.ZodTypeDef, BasketTradingExecutionsQuantity>;
    /** @deprecated use `BasketTradingExecutionsQuantity$Outbound` instead. */
    type Outbound = BasketTradingExecutionsQuantity$Outbound;
}
export declare function basketTradingExecutionsQuantityToJSON(basketTradingExecutionsQuantity: BasketTradingExecutionsQuantity): string;
export declare function basketTradingExecutionsQuantityFromJSON(jsonString: string): SafeParseResult<BasketTradingExecutionsQuantity, SDKValidationError>;
/** @internal */
export declare const BasketTradingExecutions$inboundSchema: z.ZodType<BasketTradingExecutions, z.ZodTypeDef, unknown>;
/** @internal */
export type BasketTradingExecutions$Outbound = {
    executed_prices?: Array<BasketTradingExecutedPrice$Outbound> | undefined;
    executed_time?: string | null | undefined;
    quantity?: BasketTradingExecutionsQuantity$Outbound | null | undefined;
};
/** @internal */
export declare const BasketTradingExecutions$outboundSchema: z.ZodType<BasketTradingExecutions$Outbound, z.ZodTypeDef, BasketTradingExecutions>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BasketTradingExecutions$ {
    /** @deprecated use `BasketTradingExecutions$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BasketTradingExecutions, z.ZodTypeDef, unknown>;
    /** @deprecated use `BasketTradingExecutions$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BasketTradingExecutions$Outbound, z.ZodTypeDef, BasketTradingExecutions>;
    /** @deprecated use `BasketTradingExecutions$Outbound` instead. */
    type Outbound = BasketTradingExecutions$Outbound;
}
export declare function basketTradingExecutionsToJSON(basketTradingExecutions: BasketTradingExecutions): string;
export declare function basketTradingExecutionsFromJSON(jsonString: string): SafeParseResult<BasketTradingExecutions, SDKValidationError>;
//# sourceMappingURL=baskettradingexecutions.d.ts.map