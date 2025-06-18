import * as z from "zod";
import { DecimalCreate, DecimalCreate$Outbound } from "./decimalcreate.js";
/**
 * The initial amount of money placed into the account by the entity upon or after the account's establishment.
 */
export type DepositedFundsCreate = {
    /**
     * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal][] or Python's [decimal.Decimal][].
     *
     * @remarks
     *
     *  [BigDecimal]:
     *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
     *  [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
     */
    initialDepositAmount: DecimalCreate;
    /**
     * The source of the initial deposit
     */
    initialDepositSource: string;
};
/** @internal */
export declare const DepositedFundsCreate$inboundSchema: z.ZodType<DepositedFundsCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type DepositedFundsCreate$Outbound = {
    initial_deposit_amount: DecimalCreate$Outbound;
    initial_deposit_source: string;
};
/** @internal */
export declare const DepositedFundsCreate$outboundSchema: z.ZodType<DepositedFundsCreate$Outbound, z.ZodTypeDef, DepositedFundsCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DepositedFundsCreate$ {
    /** @deprecated use `DepositedFundsCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DepositedFundsCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `DepositedFundsCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DepositedFundsCreate$Outbound, z.ZodTypeDef, DepositedFundsCreate>;
    /** @deprecated use `DepositedFundsCreate$Outbound` instead. */
    type Outbound = DepositedFundsCreate$Outbound;
}
//# sourceMappingURL=depositedfundscreate.d.ts.map