import * as z from "zod";
import { DecimalCreate, DecimalCreate$Outbound } from "./decimalcreate.js";
/**
 * The position or amount of the asset
 */
export type PositionCreate = {
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
export declare const PositionCreate$inboundSchema: z.ZodType<PositionCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type PositionCreate$Outbound = {
    quantity: DecimalCreate$Outbound;
};
/** @internal */
export declare const PositionCreate$outboundSchema: z.ZodType<PositionCreate$Outbound, z.ZodTypeDef, PositionCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PositionCreate$ {
    /** @deprecated use `PositionCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PositionCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `PositionCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PositionCreate$Outbound, z.ZodTypeDef, PositionCreate>;
    /** @deprecated use `PositionCreate$Outbound` instead. */
    type Outbound = PositionCreate$Outbound;
}
//# sourceMappingURL=positioncreate.d.ts.map