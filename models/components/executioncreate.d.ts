import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { BondYieldCreate, BondYieldCreate$Outbound } from "./bondyieldcreate.js";
import { DecimalCreate, DecimalCreate$Outbound } from "./decimalcreate.js";
import { PriceAdjustmentCreate, PriceAdjustmentCreate$Outbound } from "./priceadjustmentcreate.js";
/**
 * An execution represents a partial-fill or a fill that is part of an order. Executions are children to a Trade, which collectively represents an entire order made by a client.
 */
export type ExecutionCreate = {
    /**
     * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal][] or Python's [decimal.Decimal][].
     *
     * @remarks
     *
     *  [BigDecimal]:
     *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
     *  [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
     */
    accruedInterestAmount?: DecimalCreate | undefined;
    /**
     * The yield associated with an individual fill of a fixed income trade. Required for FIXED_INCOME trades. Not allowed for trades of other instrument types.
     */
    bondYield?: Array<BondYieldCreate> | undefined;
    /**
     * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal][] or Python's [decimal.Decimal][].
     *
     * @remarks
     *
     *  [BigDecimal]:
     *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
     *  [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
     */
    commissionAmount?: DecimalCreate | undefined;
    /**
     * Timestamp of when the execution took place. If settlement_date is not provided, this field will be converted into Eastern Time and used to calculate settlement_date.
     */
    executionTime: Date | null;
    /**
     * Used to generate execution_id, should be unique on the day for each source_application caller.
     */
    externalId: string;
    /**
     * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal][] or Python's [decimal.Decimal][].
     *
     * @remarks
     *
     *  [BigDecimal]:
     *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
     *  [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
     */
    grossAmount?: DecimalCreate | undefined;
    /**
     * Caller provided but can be used for booking-service to note original trade details when booking into the error account or using the error asset.
     */
    memo?: string | undefined;
    /**
     * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal][] or Python's [decimal.Decimal][].
     *
     * @remarks
     *
     *  [BigDecimal]:
     *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
     *  [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
     */
    prevailingMarketPrice?: DecimalCreate | undefined;
    /**
     * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal][] or Python's [decimal.Decimal][].
     *
     * @remarks
     *
     *  [BigDecimal]:
     *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
     *  [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
     */
    price: DecimalCreate;
    /**
     * Price adjustment that will be applied to the net price of the security.
     */
    priceAdjustment?: PriceAdjustmentCreate | undefined;
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
    /**
     * Street-level execution id, unique by day per execution venue.
     */
    streetExecutionId?: string | undefined;
};
/** @internal */
export declare const ExecutionCreate$inboundSchema: z.ZodType<ExecutionCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type ExecutionCreate$Outbound = {
    accrued_interest_amount?: DecimalCreate$Outbound | undefined;
    bond_yield?: Array<BondYieldCreate$Outbound> | undefined;
    commission_amount?: DecimalCreate$Outbound | undefined;
    execution_time: string | null;
    external_id: string;
    gross_amount?: DecimalCreate$Outbound | undefined;
    memo?: string | undefined;
    prevailing_market_price?: DecimalCreate$Outbound | undefined;
    price: DecimalCreate$Outbound;
    price_adjustment?: PriceAdjustmentCreate$Outbound | undefined;
    quantity: DecimalCreate$Outbound;
    street_execution_id?: string | undefined;
};
/** @internal */
export declare const ExecutionCreate$outboundSchema: z.ZodType<ExecutionCreate$Outbound, z.ZodTypeDef, ExecutionCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExecutionCreate$ {
    /** @deprecated use `ExecutionCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExecutionCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExecutionCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExecutionCreate$Outbound, z.ZodTypeDef, ExecutionCreate>;
    /** @deprecated use `ExecutionCreate$Outbound` instead. */
    type Outbound = ExecutionCreate$Outbound;
}
export declare function executionCreateToJSON(executionCreate: ExecutionCreate): string;
export declare function executionCreateFromJSON(jsonString: string): SafeParseResult<ExecutionCreate, SDKValidationError>;
//# sourceMappingURL=executioncreate.d.ts.map