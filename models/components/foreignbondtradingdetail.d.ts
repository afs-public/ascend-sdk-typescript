import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The percentage of the account's trades which will involve foreign bond
 */
export type Percentage = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Foreign bond trading detail
 */
export type ForeignBondTradingDetail = {
    /**
     * The percentage of the account's trades which will involve foreign bond
     */
    percentage?: Percentage | null | undefined;
    /**
     * The region where the foreign bond trading activity is taking place. Must be a two-character CLDR code.
     */
    regionCode?: string | undefined;
};
/** @internal */
export declare const Percentage$inboundSchema: z.ZodType<Percentage, z.ZodTypeDef, unknown>;
/** @internal */
export type Percentage$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const Percentage$outboundSchema: z.ZodType<Percentage$Outbound, z.ZodTypeDef, Percentage>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Percentage$ {
    /** @deprecated use `Percentage$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Percentage, z.ZodTypeDef, unknown>;
    /** @deprecated use `Percentage$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Percentage$Outbound, z.ZodTypeDef, Percentage>;
    /** @deprecated use `Percentage$Outbound` instead. */
    type Outbound = Percentage$Outbound;
}
export declare function percentageToJSON(percentage: Percentage): string;
export declare function percentageFromJSON(jsonString: string): SafeParseResult<Percentage, SDKValidationError>;
/** @internal */
export declare const ForeignBondTradingDetail$inboundSchema: z.ZodType<ForeignBondTradingDetail, z.ZodTypeDef, unknown>;
/** @internal */
export type ForeignBondTradingDetail$Outbound = {
    percentage?: Percentage$Outbound | null | undefined;
    region_code?: string | undefined;
};
/** @internal */
export declare const ForeignBondTradingDetail$outboundSchema: z.ZodType<ForeignBondTradingDetail$Outbound, z.ZodTypeDef, ForeignBondTradingDetail>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForeignBondTradingDetail$ {
    /** @deprecated use `ForeignBondTradingDetail$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ForeignBondTradingDetail, z.ZodTypeDef, unknown>;
    /** @deprecated use `ForeignBondTradingDetail$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ForeignBondTradingDetail$Outbound, z.ZodTypeDef, ForeignBondTradingDetail>;
    /** @deprecated use `ForeignBondTradingDetail$Outbound` instead. */
    type Outbound = ForeignBondTradingDetail$Outbound;
}
export declare function foreignBondTradingDetailToJSON(foreignBondTradingDetail: ForeignBondTradingDetail): string;
export declare function foreignBondTradingDetailFromJSON(jsonString: string): SafeParseResult<ForeignBondTradingDetail, SDKValidationError>;
//# sourceMappingURL=foreignbondtradingdetail.d.ts.map