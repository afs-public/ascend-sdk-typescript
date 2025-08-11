import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DecimalCreate, DecimalCreate$Outbound } from "./decimalcreate.js";
/**
 * The type of this price, which must be PRICE_PER_UNIT for equity orders, or PERCENTAGE_OF_PAR for fixed income orders.
 */
export declare enum LimitPriceCreateType {
    LimitPriceTypeUnspecified = "LIMIT_PRICE_TYPE_UNSPECIFIED",
    PricePerUnit = "PRICE_PER_UNIT",
    PercentageOfPar = "PERCENTAGE_OF_PAR"
}
/**
 * The type of this price, which must be PRICE_PER_UNIT for equity orders, or PERCENTAGE_OF_PAR for fixed income orders.
 */
export type LimitPriceCreateTypeOpen = OpenEnum<typeof LimitPriceCreateType>;
/**
 * A limit price definition
 */
export type LimitPriceCreate = {
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
     * The type of this price, which must be PRICE_PER_UNIT for equity orders, or PERCENTAGE_OF_PAR for fixed income orders.
     */
    type: LimitPriceCreateTypeOpen;
};
/** @internal */
export declare const LimitPriceCreateType$inboundSchema: z.ZodType<LimitPriceCreateTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const LimitPriceCreateType$outboundSchema: z.ZodType<LimitPriceCreateTypeOpen, z.ZodTypeDef, LimitPriceCreateTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LimitPriceCreateType$ {
    /** @deprecated use `LimitPriceCreateType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LimitPriceCreateTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `LimitPriceCreateType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LimitPriceCreateTypeOpen, z.ZodTypeDef, LimitPriceCreateTypeOpen>;
}
/** @internal */
export declare const LimitPriceCreate$inboundSchema: z.ZodType<LimitPriceCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type LimitPriceCreate$Outbound = {
    price: DecimalCreate$Outbound;
    type: string;
};
/** @internal */
export declare const LimitPriceCreate$outboundSchema: z.ZodType<LimitPriceCreate$Outbound, z.ZodTypeDef, LimitPriceCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LimitPriceCreate$ {
    /** @deprecated use `LimitPriceCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LimitPriceCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `LimitPriceCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LimitPriceCreate$Outbound, z.ZodTypeDef, LimitPriceCreate>;
    /** @deprecated use `LimitPriceCreate$Outbound` instead. */
    type Outbound = LimitPriceCreate$Outbound;
}
export declare function limitPriceCreateToJSON(limitPriceCreate: LimitPriceCreate): string;
export declare function limitPriceCreateFromJSON(jsonString: string): SafeParseResult<LimitPriceCreate, SDKValidationError>;
//# sourceMappingURL=limitpricecreate.d.ts.map