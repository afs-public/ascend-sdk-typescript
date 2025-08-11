import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The date on which the trader meets or exceeds the large trader reporting threshold, which is defined by the U.S. Securities and Exchange Commission (SEC) as trades of 2 million shares or $20 million in a single day or 20 million shares or $200 million during a calendar month
 */
export type EffectiveDate = {
    /**
     * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     */
    day?: number | undefined;
    /**
     * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     */
    month?: number | undefined;
    /**
     * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     */
    year?: number | undefined;
};
/**
 * A large trader.
 */
export type LargeTrader = {
    /**
     * The date on which the trader meets or exceeds the large trader reporting threshold, which is defined by the U.S. Securities and Exchange Commission (SEC) as trades of 2 million shares or $20 million in a single day or 20 million shares or $200 million during a calendar month
     */
    effectiveDate?: EffectiveDate | null | undefined;
    /**
     * SEC-issued ID signifying the person/entity as a large trader; Required for CAIS regulatory reporting.
     */
    largeTraderId?: string | undefined;
};
/** @internal */
export declare const EffectiveDate$inboundSchema: z.ZodType<EffectiveDate, z.ZodTypeDef, unknown>;
/** @internal */
export type EffectiveDate$Outbound = {
    day?: number | undefined;
    month?: number | undefined;
    year?: number | undefined;
};
/** @internal */
export declare const EffectiveDate$outboundSchema: z.ZodType<EffectiveDate$Outbound, z.ZodTypeDef, EffectiveDate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EffectiveDate$ {
    /** @deprecated use `EffectiveDate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EffectiveDate, z.ZodTypeDef, unknown>;
    /** @deprecated use `EffectiveDate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EffectiveDate$Outbound, z.ZodTypeDef, EffectiveDate>;
    /** @deprecated use `EffectiveDate$Outbound` instead. */
    type Outbound = EffectiveDate$Outbound;
}
export declare function effectiveDateToJSON(effectiveDate: EffectiveDate): string;
export declare function effectiveDateFromJSON(jsonString: string): SafeParseResult<EffectiveDate, SDKValidationError>;
/** @internal */
export declare const LargeTrader$inboundSchema: z.ZodType<LargeTrader, z.ZodTypeDef, unknown>;
/** @internal */
export type LargeTrader$Outbound = {
    effective_date?: EffectiveDate$Outbound | null | undefined;
    large_trader_id?: string | undefined;
};
/** @internal */
export declare const LargeTrader$outboundSchema: z.ZodType<LargeTrader$Outbound, z.ZodTypeDef, LargeTrader>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace LargeTrader$ {
    /** @deprecated use `LargeTrader$inboundSchema` instead. */
    const inboundSchema: z.ZodType<LargeTrader, z.ZodTypeDef, unknown>;
    /** @deprecated use `LargeTrader$outboundSchema` instead. */
    const outboundSchema: z.ZodType<LargeTrader$Outbound, z.ZodTypeDef, LargeTrader>;
    /** @deprecated use `LargeTrader$Outbound` instead. */
    type Outbound = LargeTrader$Outbound;
}
export declare function largeTraderToJSON(largeTrader: LargeTrader): string;
export declare function largeTraderFromJSON(jsonString: string): SafeParseResult<LargeTrader, SDKValidationError>;
//# sourceMappingURL=largetrader.d.ts.map