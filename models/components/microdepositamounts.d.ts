import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The amount of one of the micro deposits.
 */
export type Amount1 = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The amount of the other micro deposit.
 */
export type Amount2 = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The micro deposits sent to verify a pending bank relationship. FOR TESTING ONLY!
 */
export type MicroDepositAmounts = {
    /**
     * The amount of one of the micro deposits.
     */
    amount1?: Amount1 | null | undefined;
    /**
     * The amount of the other micro deposit.
     */
    amount2?: Amount2 | null | undefined;
};
/** @internal */
export declare const Amount1$inboundSchema: z.ZodType<Amount1, z.ZodTypeDef, unknown>;
/** @internal */
export type Amount1$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const Amount1$outboundSchema: z.ZodType<Amount1$Outbound, z.ZodTypeDef, Amount1>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Amount1$ {
    /** @deprecated use `Amount1$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Amount1, z.ZodTypeDef, unknown>;
    /** @deprecated use `Amount1$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Amount1$Outbound, z.ZodTypeDef, Amount1>;
    /** @deprecated use `Amount1$Outbound` instead. */
    type Outbound = Amount1$Outbound;
}
export declare function amount1ToJSON(amount1: Amount1): string;
export declare function amount1FromJSON(jsonString: string): SafeParseResult<Amount1, SDKValidationError>;
/** @internal */
export declare const Amount2$inboundSchema: z.ZodType<Amount2, z.ZodTypeDef, unknown>;
/** @internal */
export type Amount2$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const Amount2$outboundSchema: z.ZodType<Amount2$Outbound, z.ZodTypeDef, Amount2>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Amount2$ {
    /** @deprecated use `Amount2$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Amount2, z.ZodTypeDef, unknown>;
    /** @deprecated use `Amount2$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Amount2$Outbound, z.ZodTypeDef, Amount2>;
    /** @deprecated use `Amount2$Outbound` instead. */
    type Outbound = Amount2$Outbound;
}
export declare function amount2ToJSON(amount2: Amount2): string;
export declare function amount2FromJSON(jsonString: string): SafeParseResult<Amount2, SDKValidationError>;
/** @internal */
export declare const MicroDepositAmounts$inboundSchema: z.ZodType<MicroDepositAmounts, z.ZodTypeDef, unknown>;
/** @internal */
export type MicroDepositAmounts$Outbound = {
    amount1?: Amount1$Outbound | null | undefined;
    amount2?: Amount2$Outbound | null | undefined;
};
/** @internal */
export declare const MicroDepositAmounts$outboundSchema: z.ZodType<MicroDepositAmounts$Outbound, z.ZodTypeDef, MicroDepositAmounts>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MicroDepositAmounts$ {
    /** @deprecated use `MicroDepositAmounts$inboundSchema` instead. */
    const inboundSchema: z.ZodType<MicroDepositAmounts, z.ZodTypeDef, unknown>;
    /** @deprecated use `MicroDepositAmounts$outboundSchema` instead. */
    const outboundSchema: z.ZodType<MicroDepositAmounts$Outbound, z.ZodTypeDef, MicroDepositAmounts>;
    /** @deprecated use `MicroDepositAmounts$Outbound` instead. */
    type Outbound = MicroDepositAmounts$Outbound;
}
export declare function microDepositAmountsToJSON(microDepositAmounts: MicroDepositAmounts): string;
export declare function microDepositAmountsFromJSON(jsonString: string): SafeParseResult<MicroDepositAmounts, SDKValidationError>;
//# sourceMappingURL=microdepositamounts.d.ts.map