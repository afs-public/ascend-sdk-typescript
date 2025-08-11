import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The account_equity in USD returned from the request.
 */
export type AccountEquityAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The buying_power of the account in USD returned from the request.
 */
export type BuyingPowerAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The day_trade_buying_power_issued_amount is the day trade buying power of the account in USD, returned from the request. If the is_day_trade_buying_power_allowed boolean is true this will be set from day_trade_buying_power_issued value returned from the margins calculator, or else if it is false it will be set from buying_power_issued value returned from the margins calculator.
 */
export type DayTradeBuyingPowerAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The position_market_value in USD returned from the request.
 */
export type PositionMarketValueAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The total_excess_amount is the total equity in the account minus the requirements in USD, returned from the request.
 */
export type TotalExcessAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * The total_requirements_amount is the total requirement amount for positions held in the account in USD, returned from the request.
 */
export type TotalRequirementsAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Margin Requirements fields returned from the request.
 */
export type Requirements = {
    /**
     * The total_excess_amount is the total equity in the account minus the requirements in USD, returned from the request.
     */
    totalExcessAmount?: TotalExcessAmount | null | undefined;
    /**
     * The total_requirements_amount is the total requirement amount for positions held in the account in USD, returned from the request.
     */
    totalRequirementsAmount?: TotalRequirementsAmount | null | undefined;
};
/**
 * The sma_amount is the special memorandum account amount in USD, returned from the request. This will only be populated for margin accounts and is the margin equity minus the RegT requirements.
 */
export type SmaAmount = {
    /**
     * The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details
     */
    value?: string | undefined;
};
/**
 * Response for GetBuyingPower
 */
export type BuyingPower = {
    /**
     * The account_equity in USD returned from the request.
     */
    accountEquityAmount?: AccountEquityAmount | null | undefined;
    /**
     * The account ID returned from the request.
     */
    accountId?: string | undefined;
    /**
     * The buying_power of the account in USD returned from the request.
     */
    buyingPowerAmount?: BuyingPowerAmount | null | undefined;
    /**
     * The day_trade_buying_power_issued_amount is the day trade buying power of the account in USD, returned from the request. If the is_day_trade_buying_power_allowed boolean is true this will be set from day_trade_buying_power_issued value returned from the margins calculator, or else if it is false it will be set from buying_power_issued value returned from the margins calculator.
     */
    dayTradeBuyingPowerAmount?: DayTradeBuyingPowerAmount | null | undefined;
    /**
     * The is_day_trade_buying_power_allowed boolean will be true if the account is a Margin account, PDT is true and SOD Account equity >= $25,000, otherwise it will be false.
     */
    isDayTradeBuyingPowerAllowed?: boolean | undefined;
    /**
     * The service generated name of the BuyingPower Format: accounts/{account_id}/buyingPower
     */
    name?: string | undefined;
    /**
     * The position_market_value in USD returned from the request.
     */
    positionMarketValueAmount?: PositionMarketValueAmount | null | undefined;
    /**
     * Margin Requirements fields returned from the request.
     */
    requirements?: Requirements | null | undefined;
    /**
     * The sma_amount is the special memorandum account amount in USD, returned from the request. This will only be populated for margin accounts and is the margin equity minus the RegT requirements.
     */
    smaAmount?: SmaAmount | null | undefined;
};
/** @internal */
export declare const AccountEquityAmount$inboundSchema: z.ZodType<AccountEquityAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type AccountEquityAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const AccountEquityAmount$outboundSchema: z.ZodType<AccountEquityAmount$Outbound, z.ZodTypeDef, AccountEquityAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountEquityAmount$ {
    /** @deprecated use `AccountEquityAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountEquityAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountEquityAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountEquityAmount$Outbound, z.ZodTypeDef, AccountEquityAmount>;
    /** @deprecated use `AccountEquityAmount$Outbound` instead. */
    type Outbound = AccountEquityAmount$Outbound;
}
export declare function accountEquityAmountToJSON(accountEquityAmount: AccountEquityAmount): string;
export declare function accountEquityAmountFromJSON(jsonString: string): SafeParseResult<AccountEquityAmount, SDKValidationError>;
/** @internal */
export declare const BuyingPowerAmount$inboundSchema: z.ZodType<BuyingPowerAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type BuyingPowerAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const BuyingPowerAmount$outboundSchema: z.ZodType<BuyingPowerAmount$Outbound, z.ZodTypeDef, BuyingPowerAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BuyingPowerAmount$ {
    /** @deprecated use `BuyingPowerAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BuyingPowerAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `BuyingPowerAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BuyingPowerAmount$Outbound, z.ZodTypeDef, BuyingPowerAmount>;
    /** @deprecated use `BuyingPowerAmount$Outbound` instead. */
    type Outbound = BuyingPowerAmount$Outbound;
}
export declare function buyingPowerAmountToJSON(buyingPowerAmount: BuyingPowerAmount): string;
export declare function buyingPowerAmountFromJSON(jsonString: string): SafeParseResult<BuyingPowerAmount, SDKValidationError>;
/** @internal */
export declare const DayTradeBuyingPowerAmount$inboundSchema: z.ZodType<DayTradeBuyingPowerAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type DayTradeBuyingPowerAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const DayTradeBuyingPowerAmount$outboundSchema: z.ZodType<DayTradeBuyingPowerAmount$Outbound, z.ZodTypeDef, DayTradeBuyingPowerAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DayTradeBuyingPowerAmount$ {
    /** @deprecated use `DayTradeBuyingPowerAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DayTradeBuyingPowerAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `DayTradeBuyingPowerAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DayTradeBuyingPowerAmount$Outbound, z.ZodTypeDef, DayTradeBuyingPowerAmount>;
    /** @deprecated use `DayTradeBuyingPowerAmount$Outbound` instead. */
    type Outbound = DayTradeBuyingPowerAmount$Outbound;
}
export declare function dayTradeBuyingPowerAmountToJSON(dayTradeBuyingPowerAmount: DayTradeBuyingPowerAmount): string;
export declare function dayTradeBuyingPowerAmountFromJSON(jsonString: string): SafeParseResult<DayTradeBuyingPowerAmount, SDKValidationError>;
/** @internal */
export declare const PositionMarketValueAmount$inboundSchema: z.ZodType<PositionMarketValueAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type PositionMarketValueAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const PositionMarketValueAmount$outboundSchema: z.ZodType<PositionMarketValueAmount$Outbound, z.ZodTypeDef, PositionMarketValueAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PositionMarketValueAmount$ {
    /** @deprecated use `PositionMarketValueAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PositionMarketValueAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `PositionMarketValueAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PositionMarketValueAmount$Outbound, z.ZodTypeDef, PositionMarketValueAmount>;
    /** @deprecated use `PositionMarketValueAmount$Outbound` instead. */
    type Outbound = PositionMarketValueAmount$Outbound;
}
export declare function positionMarketValueAmountToJSON(positionMarketValueAmount: PositionMarketValueAmount): string;
export declare function positionMarketValueAmountFromJSON(jsonString: string): SafeParseResult<PositionMarketValueAmount, SDKValidationError>;
/** @internal */
export declare const TotalExcessAmount$inboundSchema: z.ZodType<TotalExcessAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type TotalExcessAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const TotalExcessAmount$outboundSchema: z.ZodType<TotalExcessAmount$Outbound, z.ZodTypeDef, TotalExcessAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TotalExcessAmount$ {
    /** @deprecated use `TotalExcessAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TotalExcessAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `TotalExcessAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TotalExcessAmount$Outbound, z.ZodTypeDef, TotalExcessAmount>;
    /** @deprecated use `TotalExcessAmount$Outbound` instead. */
    type Outbound = TotalExcessAmount$Outbound;
}
export declare function totalExcessAmountToJSON(totalExcessAmount: TotalExcessAmount): string;
export declare function totalExcessAmountFromJSON(jsonString: string): SafeParseResult<TotalExcessAmount, SDKValidationError>;
/** @internal */
export declare const TotalRequirementsAmount$inboundSchema: z.ZodType<TotalRequirementsAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type TotalRequirementsAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const TotalRequirementsAmount$outboundSchema: z.ZodType<TotalRequirementsAmount$Outbound, z.ZodTypeDef, TotalRequirementsAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TotalRequirementsAmount$ {
    /** @deprecated use `TotalRequirementsAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TotalRequirementsAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `TotalRequirementsAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TotalRequirementsAmount$Outbound, z.ZodTypeDef, TotalRequirementsAmount>;
    /** @deprecated use `TotalRequirementsAmount$Outbound` instead. */
    type Outbound = TotalRequirementsAmount$Outbound;
}
export declare function totalRequirementsAmountToJSON(totalRequirementsAmount: TotalRequirementsAmount): string;
export declare function totalRequirementsAmountFromJSON(jsonString: string): SafeParseResult<TotalRequirementsAmount, SDKValidationError>;
/** @internal */
export declare const Requirements$inboundSchema: z.ZodType<Requirements, z.ZodTypeDef, unknown>;
/** @internal */
export type Requirements$Outbound = {
    total_excess_amount?: TotalExcessAmount$Outbound | null | undefined;
    total_requirements_amount?: TotalRequirementsAmount$Outbound | null | undefined;
};
/** @internal */
export declare const Requirements$outboundSchema: z.ZodType<Requirements$Outbound, z.ZodTypeDef, Requirements>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Requirements$ {
    /** @deprecated use `Requirements$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Requirements, z.ZodTypeDef, unknown>;
    /** @deprecated use `Requirements$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Requirements$Outbound, z.ZodTypeDef, Requirements>;
    /** @deprecated use `Requirements$Outbound` instead. */
    type Outbound = Requirements$Outbound;
}
export declare function requirementsToJSON(requirements: Requirements): string;
export declare function requirementsFromJSON(jsonString: string): SafeParseResult<Requirements, SDKValidationError>;
/** @internal */
export declare const SmaAmount$inboundSchema: z.ZodType<SmaAmount, z.ZodTypeDef, unknown>;
/** @internal */
export type SmaAmount$Outbound = {
    value?: string | undefined;
};
/** @internal */
export declare const SmaAmount$outboundSchema: z.ZodType<SmaAmount$Outbound, z.ZodTypeDef, SmaAmount>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SmaAmount$ {
    /** @deprecated use `SmaAmount$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SmaAmount, z.ZodTypeDef, unknown>;
    /** @deprecated use `SmaAmount$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SmaAmount$Outbound, z.ZodTypeDef, SmaAmount>;
    /** @deprecated use `SmaAmount$Outbound` instead. */
    type Outbound = SmaAmount$Outbound;
}
export declare function smaAmountToJSON(smaAmount: SmaAmount): string;
export declare function smaAmountFromJSON(jsonString: string): SafeParseResult<SmaAmount, SDKValidationError>;
/** @internal */
export declare const BuyingPower$inboundSchema: z.ZodType<BuyingPower, z.ZodTypeDef, unknown>;
/** @internal */
export type BuyingPower$Outbound = {
    account_equity_amount?: AccountEquityAmount$Outbound | null | undefined;
    account_id?: string | undefined;
    buying_power_amount?: BuyingPowerAmount$Outbound | null | undefined;
    day_trade_buying_power_amount?: DayTradeBuyingPowerAmount$Outbound | null | undefined;
    is_day_trade_buying_power_allowed?: boolean | undefined;
    name?: string | undefined;
    position_market_value_amount?: PositionMarketValueAmount$Outbound | null | undefined;
    requirements?: Requirements$Outbound | null | undefined;
    sma_amount?: SmaAmount$Outbound | null | undefined;
};
/** @internal */
export declare const BuyingPower$outboundSchema: z.ZodType<BuyingPower$Outbound, z.ZodTypeDef, BuyingPower>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BuyingPower$ {
    /** @deprecated use `BuyingPower$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BuyingPower, z.ZodTypeDef, unknown>;
    /** @deprecated use `BuyingPower$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BuyingPower$Outbound, z.ZodTypeDef, BuyingPower>;
    /** @deprecated use `BuyingPower$Outbound` instead. */
    type Outbound = BuyingPower$Outbound;
}
export declare function buyingPowerToJSON(buyingPower: BuyingPower): string;
export declare function buyingPowerFromJSON(jsonString: string): SafeParseResult<BuyingPower, SDKValidationError>;
//# sourceMappingURL=buyingpower.d.ts.map