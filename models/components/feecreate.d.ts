import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DecimalCreate, DecimalCreate$Outbound } from "./decimalcreate.js";
/**
 * The type of fee being specified. Only the type of "BROKER_FEE" is supported.
 */
export declare enum FeeCreateType {
    FeeTypeUnspecified = "FEE_TYPE_UNSPECIFIED",
    BrokerFee = "BROKER_FEE",
    ContractFee = "CONTRACT_FEE"
}
/**
 * The type of fee being specified. Only the type of "BROKER_FEE" is supported.
 */
export type FeeCreateTypeOpen = OpenEnum<typeof FeeCreateType>;
/**
 * A fee that applies to an order
 */
export type FeeCreate = {
    /**
     * A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's [BigDecimal][] or Python's [decimal.Decimal][].
     *
     * @remarks
     *
     *  [BigDecimal]:
     *  https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html
     *  [decimal.Decimal]: https://docs.python.org/3/library/decimal.html
     */
    amount: DecimalCreate;
    /**
     * The type of fee being specified. Only the type of "BROKER_FEE" is supported.
     */
    type: FeeCreateTypeOpen;
};
/** @internal */
export declare const FeeCreateType$inboundSchema: z.ZodType<FeeCreateTypeOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const FeeCreateType$outboundSchema: z.ZodType<FeeCreateTypeOpen, z.ZodTypeDef, FeeCreateTypeOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FeeCreateType$ {
    /** @deprecated use `FeeCreateType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FeeCreateTypeOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `FeeCreateType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FeeCreateTypeOpen, z.ZodTypeDef, FeeCreateTypeOpen>;
}
/** @internal */
export declare const FeeCreate$inboundSchema: z.ZodType<FeeCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type FeeCreate$Outbound = {
    amount: DecimalCreate$Outbound;
    type: string;
};
/** @internal */
export declare const FeeCreate$outboundSchema: z.ZodType<FeeCreate$Outbound, z.ZodTypeDef, FeeCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FeeCreate$ {
    /** @deprecated use `FeeCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FeeCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `FeeCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FeeCreate$Outbound, z.ZodTypeDef, FeeCreate>;
    /** @deprecated use `FeeCreate$Outbound` instead. */
    type Outbound = FeeCreate$Outbound;
}
export declare function feeCreateToJSON(feeCreate: FeeCreate): string;
export declare function feeCreateFromJSON(jsonString: string): SafeParseResult<FeeCreate, SDKValidationError>;
//# sourceMappingURL=feecreate.d.ts.map