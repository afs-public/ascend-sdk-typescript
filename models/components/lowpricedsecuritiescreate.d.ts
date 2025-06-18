import * as z from "zod";
import { DecimalCreate, DecimalCreate$Outbound } from "./decimalcreate.js";
/**
 * Low priced securities
 */
export type LowPricedSecuritiesCreate = {
    /**
     * The account anticipates trading in securities trading for less than $5 per share and are typically traded over-the-counter (OTC) or through pink sheets
     */
    lowPricedSecurities: boolean;
    /**
     * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal][] or Python's [decimal.Decimal][].
     *
     * @remarks
     *
     *  [BigDecimal]:
     *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
     *  [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
     */
    lowPricedSecuritiesPercentage?: DecimalCreate | undefined;
};
/** @internal */
export declare const LowPricedSecuritiesCreate$inboundSchema: z.ZodType<LowPricedSecuritiesCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type LowPricedSecuritiesCreate$Outbound = {
    low_priced_securities: boolean;
    low_priced_securities_percentage?: DecimalCreate$Outbound | undefined;
};
/** @internal */
export declare const LowPricedSecuritiesCreate$outboundSchema: z.ZodType<LowPricedSecuritiesCreate$Outbound, z.ZodTypeDef, LowPricedSecuritiesCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LowPricedSecuritiesCreate$ {
    /** @deprecated use `LowPricedSecuritiesCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LowPricedSecuritiesCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `LowPricedSecuritiesCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LowPricedSecuritiesCreate$Outbound, z.ZodTypeDef, LowPricedSecuritiesCreate>;
    /** @deprecated use `LowPricedSecuritiesCreate$Outbound` instead. */
    type Outbound = LowPricedSecuritiesCreate$Outbound;
}
//# sourceMappingURL=lowpricedsecuritiescreate.d.ts.map