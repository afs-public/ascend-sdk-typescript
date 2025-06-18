import * as z from "zod";
import { DecimalCreate, DecimalCreate$Outbound } from "./decimalcreate.js";
/**
 * Foreign bond trading detail
 */
export type ForeignBondTradingDetailCreate = {
    /**
     * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal][] or Python's [decimal.Decimal][].
     *
     * @remarks
     *
     *  [BigDecimal]:
     *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
     *  [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
     */
    percentage: DecimalCreate;
    /**
     * The region where the foreign bond trading activity is taking place. Must be a two-character CLDR code.
     */
    regionCode: string;
};
/** @internal */
export declare const ForeignBondTradingDetailCreate$inboundSchema: z.ZodType<ForeignBondTradingDetailCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type ForeignBondTradingDetailCreate$Outbound = {
    percentage: DecimalCreate$Outbound;
    region_code: string;
};
/** @internal */
export declare const ForeignBondTradingDetailCreate$outboundSchema: z.ZodType<ForeignBondTradingDetailCreate$Outbound, z.ZodTypeDef, ForeignBondTradingDetailCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForeignBondTradingDetailCreate$ {
    /** @deprecated use `ForeignBondTradingDetailCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ForeignBondTradingDetailCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `ForeignBondTradingDetailCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ForeignBondTradingDetailCreate$Outbound, z.ZodTypeDef, ForeignBondTradingDetailCreate>;
    /** @deprecated use `ForeignBondTradingDetailCreate$Outbound` instead. */
    type Outbound = ForeignBondTradingDetailCreate$Outbound;
}
//# sourceMappingURL=foreignbondtradingdetailcreate.d.ts.map