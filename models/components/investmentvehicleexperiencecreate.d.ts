import * as z from "zod";
/**
 * Investment vehicle experience
 */
export type InvestmentVehicleExperienceCreate = {
    /**
     * The number of average annual trades of commodities
     */
    commoditiesAverageAnnualTradeCount: number;
    /**
     * The number of average annual trades of corporate bonds
     */
    corporateBondsAverageAnnualTradeCount: number;
    /**
     * The number of average annual trades of funds
     */
    fundsAverageAnnualTradeCount: number;
    /**
     * The number of average annual trades of government bonds
     */
    governmentBondsAverageAnnualTradeCount: number;
    /**
     * The number of average annual trades in margin accounts
     */
    marginAverageAnnualTradeCount: number;
    /**
     * The number of average annual trades of municipal bonds
     */
    municipalBondsAverageAnnualTradeCount: number;
    /**
     * The number of average annual trades of options
     */
    optionsAverageAnnualTradeCount: number;
    /**
     * The number of average annual trades of stocks
     */
    stocksAverageAnnualTradeCount: number;
    /**
     * The number of average annual trades in tax sheltered accounts
     */
    taxSheltersAverageAnnualTradeCount: number;
};
/** @internal */
export declare const InvestmentVehicleExperienceCreate$inboundSchema: z.ZodType<InvestmentVehicleExperienceCreate, z.ZodTypeDef, unknown>;
/** @internal */
export type InvestmentVehicleExperienceCreate$Outbound = {
    commodities_average_annual_trade_count: number;
    corporate_bonds_average_annual_trade_count: number;
    funds_average_annual_trade_count: number;
    government_bonds_average_annual_trade_count: number;
    margin_average_annual_trade_count: number;
    municipal_bonds_average_annual_trade_count: number;
    options_average_annual_trade_count: number;
    stocks_average_annual_trade_count: number;
    tax_shelters_average_annual_trade_count: number;
};
/** @internal */
export declare const InvestmentVehicleExperienceCreate$outboundSchema: z.ZodType<InvestmentVehicleExperienceCreate$Outbound, z.ZodTypeDef, InvestmentVehicleExperienceCreate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace InvestmentVehicleExperienceCreate$ {
    /** @deprecated use `InvestmentVehicleExperienceCreate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<InvestmentVehicleExperienceCreate, z.ZodTypeDef, unknown>;
    /** @deprecated use `InvestmentVehicleExperienceCreate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<InvestmentVehicleExperienceCreate$Outbound, z.ZodTypeDef, InvestmentVehicleExperienceCreate>;
    /** @deprecated use `InvestmentVehicleExperienceCreate$Outbound` instead. */
    type Outbound = InvestmentVehicleExperienceCreate$Outbound;
}
//# sourceMappingURL=investmentvehicleexperiencecreate.d.ts.map