import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The net amount of the trade in USD. This value is always positive.
 */
export type NetAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * A summary of a trade.
 */
export type CalculateCashBalanceResponseTradeSummary = {
    /**
     * The ledger activity for the trade.
     */
    activity?: string | undefined;
    /**
     * The asset that was traded.
     */
    asset?: string | undefined;
    /**
     * The net amount of the trade in USD. This value is always positive.
     */
    netAmount?: NetAmount | null | undefined;
};
/** @internal */
export declare const NetAmount$inboundSchema: z.ZodType<NetAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type NetAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const NetAmount$outboundSchema: z.ZodType<NetAmount$Outbound, z.ZodTypeDef, NetAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace NetAmount$ {
    /** @deprecated use `NetAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<NetAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `NetAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<NetAmount$Outbound, z.ZodTypeDef, NetAmount>;
    /** @deprecated use `NetAmount$Outbound` instead. */
    type Outbound = NetAmount$Outbound;
}
export declare function netAmountToJSON(netAmount: NetAmount): string;
export declare function netAmountFromJSON(jsonString: string): SafeParseResult<NetAmount, SDKValidationError>;
/** @internal */
export declare const CalculateCashBalanceResponseTradeSummary$inboundSchema: z.ZodType<CalculateCashBalanceResponseTradeSummary, z.ZodTypeDef, unknown>;
/** @internal */
export type CalculateCashBalanceResponseTradeSummary$Outbound = {
    activity?: string | undefined;
    asset?: string | undefined;
    net_amount?: NetAmount$Outbound | null | undefined;
};
/** @internal */
export declare const CalculateCashBalanceResponseTradeSummary$outboundSchema: z.ZodType<CalculateCashBalanceResponseTradeSummary$Outbound, z.ZodTypeDef, CalculateCashBalanceResponseTradeSummary>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CalculateCashBalanceResponseTradeSummary$ {
    /** @deprecated use `CalculateCashBalanceResponseTradeSummary$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CalculateCashBalanceResponseTradeSummary, z.ZodTypeDef, unknown>;
    /** @deprecated use `CalculateCashBalanceResponseTradeSummary$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CalculateCashBalanceResponseTradeSummary$Outbound, z.ZodTypeDef, CalculateCashBalanceResponseTradeSummary>;
    /** @deprecated use `CalculateCashBalanceResponseTradeSummary$Outbound` instead. */
    type Outbound = CalculateCashBalanceResponseTradeSummary$Outbound;
}
export declare function calculateCashBalanceResponseTradeSummaryToJSON(calculateCashBalanceResponseTradeSummary: CalculateCashBalanceResponseTradeSummary): string;
export declare function calculateCashBalanceResponseTradeSummaryFromJSON(jsonString: string): SafeParseResult<CalculateCashBalanceResponseTradeSummary, SDKValidationError>;
//# sourceMappingURL=calculatecashbalanceresponsetradesummary.d.ts.map