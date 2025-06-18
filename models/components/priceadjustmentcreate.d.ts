import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { DecimalCreate, DecimalCreate$Outbound } from "./decimalcreate.js";
/**
 * The type of price adjustment being applied by the broker to the net price of the security.
 */
export declare enum PriceAdjustmentType {
    PriceAdjustmentTypeUnspecified = "PRICE_ADJUSTMENT_TYPE_UNSPECIFIED",
    Markup = "MARKUP",
    Markdown = "MARKDOWN",
    GrossCredit = "GROSS_CREDIT"
}
/**
 * The type of price adjustment being applied by the broker to the net price of the security.
 */
export type PriceAdjustmentTypeOpen = OpenEnum<typeof PriceAdjustmentType>;
/**
 * Price adjustment that will be applied to the net price of the security.
 */
export type PriceAdjustmentCreate = {
    /**
     * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal][] or Python's [decimal.Decimal][].
     *
     * @remarks
     *
     *  [BigDecimal]:
     *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
     *  [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
     */
    priceAdjustmentAmount: DecimalCreate;
    /**
     * The type of price adjustment being applied by the broker to the net price of the security.
     */
    priceAdjustmentType: PriceAdjustmentTypeOpen;
};
/** @internal */
export declare const PriceAdjustmentType$inboundSchema: z.ZodType<PriceAdjustmentTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PriceAdjustmentType$outboundSchema: z.ZodType<PriceAdjustmentTypeOpen, z.ZodTypeDef, PriceAdjustmentTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PriceAdjustmentType$ {
    /** @deprecated use `PriceAdjustmentType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PriceAdjustmentTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `PriceAdjustmentType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PriceAdjustmentTypeOpen, z.ZodTypeDef, PriceAdjustmentTypeOpen>;
}
/** @internal */
export declare const PriceAdjustmentCreate$inboundSchema: z.ZodType<PriceAdjustmentCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type PriceAdjustmentCreate$Outbound = {
    price_adjustment_amount: DecimalCreate$Outbound;
    price_adjustment_type: string;
};
/** @internal */
export declare const PriceAdjustmentCreate$outboundSchema: z.ZodType<PriceAdjustmentCreate$Outbound, z.ZodTypeDef, PriceAdjustmentCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PriceAdjustmentCreate$ {
    /** @deprecated use `PriceAdjustmentCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PriceAdjustmentCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `PriceAdjustmentCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PriceAdjustmentCreate$Outbound, z.ZodTypeDef, PriceAdjustmentCreate>;
    /** @deprecated use `PriceAdjustmentCreate$Outbound` instead. */
    type Outbound = PriceAdjustmentCreate$Outbound;
}
//# sourceMappingURL=priceadjustmentcreate.d.ts.map