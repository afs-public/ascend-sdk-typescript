import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DecimalCreate, DecimalCreate$Outbound } from "./decimalcreate.js";
/**
 * The type of this price, which must PRICE_PER_UNIT for equity orders. (Fixed income and mutual fund assets do not support stop orders.)
 */
export declare enum StopPriceCreateType {
    StopPriceTypeUnspecified = "STOP_PRICE_TYPE_UNSPECIFIED",
    PricePerUnit = "PRICE_PER_UNIT"
}
/**
 * The type of this price, which must PRICE_PER_UNIT for equity orders. (Fixed income and mutual fund assets do not support stop orders.)
 */
export type StopPriceCreateTypeOpen = OpenEnum<typeof StopPriceCreateType>;
/**
 * A stop price definition
 */
export type StopPriceCreate = {
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
     * The type of this price, which must PRICE_PER_UNIT for equity orders. (Fixed income and mutual fund assets do not support stop orders.)
     */
    type: StopPriceCreateTypeOpen;
};
/** @internal */
export declare const StopPriceCreateType$inboundSchema: z.ZodType<StopPriceCreateTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const StopPriceCreateType$outboundSchema: z.ZodType<StopPriceCreateTypeOpen, z.ZodTypeDef, StopPriceCreateTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace StopPriceCreateType$ {
    /** @deprecated use `StopPriceCreateType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<StopPriceCreateTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `StopPriceCreateType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<StopPriceCreateTypeOpen, z.ZodTypeDef, StopPriceCreateTypeOpen>;
}
/** @internal */
export declare const StopPriceCreate$inboundSchema: z.ZodType<StopPriceCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type StopPriceCreate$Outbound = {
    price: DecimalCreate$Outbound;
    type: string;
};
/** @internal */
export declare const StopPriceCreate$outboundSchema: z.ZodType<StopPriceCreate$Outbound, z.ZodTypeDef, StopPriceCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace StopPriceCreate$ {
    /** @deprecated use `StopPriceCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<StopPriceCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `StopPriceCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<StopPriceCreate$Outbound, z.ZodTypeDef, StopPriceCreate>;
    /** @deprecated use `StopPriceCreate$Outbound` instead. */
    type Outbound = StopPriceCreate$Outbound;
}
export declare function stopPriceCreateToJSON(stopPriceCreate: StopPriceCreate): string;
export declare function stopPriceCreateFromJSON(jsonString: string): SafeParseResult<StopPriceCreate, SDKValidationError>;
//# sourceMappingURL=stoppricecreate.d.ts.map