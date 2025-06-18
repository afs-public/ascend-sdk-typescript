import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { DecimalCreate, DecimalCreate$Outbound } from "./decimalcreate.js";
/**
 * The type of commission value being specified. Only the type of "AMOUNT" is supported.
 */
export declare enum CommissionCreateType {
    CommissionTypeUnspecified = "COMMISSION_TYPE_UNSPECIFIED",
    Amount = "AMOUNT"
}
/**
 * The type of commission value being specified. Only the type of "AMOUNT" is supported.
 */
export type CommissionCreateTypeOpen = OpenEnum<typeof CommissionCreateType>;
/**
 * A custom commission applied to an order
 */
export type CommissionCreate = {
    /**
     * The type of commission value being specified. Only the type of "AMOUNT" is supported.
     */
    type: CommissionCreateTypeOpen;
    /**
     * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal][] or Python's [decimal.Decimal][].
     *
     * @remarks
     *
     *  [BigDecimal]:
     *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
     *  [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
     */
    value: DecimalCreate;
};
/** @internal */
export declare const CommissionCreateType$inboundSchema: z.ZodType<CommissionCreateTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CommissionCreateType$outboundSchema: z.ZodType<CommissionCreateTypeOpen, z.ZodTypeDef, CommissionCreateTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CommissionCreateType$ {
    /** @deprecated use `CommissionCreateType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CommissionCreateTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `CommissionCreateType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CommissionCreateTypeOpen, z.ZodTypeDef, CommissionCreateTypeOpen>;
}
/** @internal */
export declare const CommissionCreate$inboundSchema: z.ZodType<CommissionCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type CommissionCreate$Outbound = {
    type: string;
    value: DecimalCreate$Outbound;
};
/** @internal */
export declare const CommissionCreate$outboundSchema: z.ZodType<CommissionCreate$Outbound, z.ZodTypeDef, CommissionCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CommissionCreate$ {
    /** @deprecated use `CommissionCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CommissionCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `CommissionCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CommissionCreate$Outbound, z.ZodTypeDef, CommissionCreate>;
    /** @deprecated use `CommissionCreate$Outbound` instead. */
    type Outbound = CommissionCreate$Outbound;
}
//# sourceMappingURL=commissioncreate.d.ts.map