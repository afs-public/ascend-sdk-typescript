import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { InvestmentVehicleExperienceCreate, InvestmentVehicleExperienceCreate$Outbound } from "./investmentvehicleexperiencecreate.js";
/**
 * Requested options level
 */
export declare enum OptionsLevel {
    OptionsLevelUnspecified = "OPTIONS_LEVEL_UNSPECIFIED",
    OptionsLevel2LongOptions = "OPTIONS_LEVEL_2_LONG_OPTIONS"
}
/**
 * Requested options level
 */
export type OptionsLevelOpen = OpenEnum<typeof OptionsLevel>;
/**
 * Enrollment metadata for the ORDERS_OPTIONS_TRADING enrollment type
 */
export type OrdersOptionsTradingEnrollmentMetadataCreate = {
    /**
     * Investment vehicle experience
     */
    investmentVehicleExperience: InvestmentVehicleExperienceCreate;
    /**
     * Requested options level
     */
    optionsLevel: OptionsLevelOpen;
    /**
     * Total years of options trading experience
     */
    totalYearsOptionsTradingExperience: number;
};
/** @internal */
export declare const OptionsLevel$inboundSchema: z.ZodType<OptionsLevelOpen, z.ZodTypeDef, unknown>;
/** @internal */
export declare const OptionsLevel$outboundSchema: z.ZodType<OptionsLevelOpen, z.ZodTypeDef, OptionsLevelOpen>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OptionsLevel$ {
    /** @deprecated use `OptionsLevel$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OptionsLevelOpen, z.ZodTypeDef, unknown>;
    /** @deprecated use `OptionsLevel$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OptionsLevelOpen, z.ZodTypeDef, OptionsLevelOpen>;
}
/** @internal */
export declare const OrdersOptionsTradingEnrollmentMetadataCreate$inboundSchema: z.ZodType<OrdersOptionsTradingEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type OrdersOptionsTradingEnrollmentMetadataCreate$Outbound = {
    investment_vehicle_experience: InvestmentVehicleExperienceCreate$Outbound;
    options_level: string;
    total_years_options_trading_experience: number;
};
/** @internal */
export declare const OrdersOptionsTradingEnrollmentMetadataCreate$outboundSchema: z.ZodType<OrdersOptionsTradingEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, OrdersOptionsTradingEnrollmentMetadataCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrdersOptionsTradingEnrollmentMetadataCreate$ {
    /** @deprecated use `OrdersOptionsTradingEnrollmentMetadataCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrdersOptionsTradingEnrollmentMetadataCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrdersOptionsTradingEnrollmentMetadataCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrdersOptionsTradingEnrollmentMetadataCreate$Outbound, z.ZodTypeDef, OrdersOptionsTradingEnrollmentMetadataCreate>;
    /** @deprecated use `OrdersOptionsTradingEnrollmentMetadataCreate$Outbound` instead. */
    type Outbound = OrdersOptionsTradingEnrollmentMetadataCreate$Outbound;
}
export declare function ordersOptionsTradingEnrollmentMetadataCreateToJSON(ordersOptionsTradingEnrollmentMetadataCreate: OrdersOptionsTradingEnrollmentMetadataCreate): string;
export declare function ordersOptionsTradingEnrollmentMetadataCreateFromJSON(jsonString: string): SafeParseResult<OrdersOptionsTradingEnrollmentMetadataCreate, SDKValidationError>;
//# sourceMappingURL=ordersoptionstradingenrollmentmetadatacreate.d.ts.map