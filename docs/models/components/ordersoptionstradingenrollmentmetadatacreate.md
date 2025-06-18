# OrdersOptionsTradingEnrollmentMetadataCreate

Enrollment metadata for the ORDERS_OPTIONS_TRADING enrollment type

## Example Usage

```typescript
import { OptionsLevel, OrdersOptionsTradingEnrollmentMetadataCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OrdersOptionsTradingEnrollmentMetadataCreate = {
  investmentVehicleExperience: {
    commoditiesAverageAnnualTradeCount: 500,
    corporateBondsAverageAnnualTradeCount: 500,
    fundsAverageAnnualTradeCount: 500,
    governmentBondsAverageAnnualTradeCount: 500,
    marginAverageAnnualTradeCount: 500,
    municipalBondsAverageAnnualTradeCount: 0,
    optionsAverageAnnualTradeCount: 500,
    stocksAverageAnnualTradeCount: 0,
    taxSheltersAverageAnnualTradeCount: 500,
  },
  optionsLevel: OptionsLevel.OptionsLevel2LongOptions,
  totalYearsOptionsTradingExperience: 0,
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `investmentVehicleExperience`                                                                                | [components.InvestmentVehicleExperienceCreate](../../models/components/investmentvehicleexperiencecreate.md) | :heavy_check_mark:                                                                                           | Investment vehicle experience                                                                                |                                                                                                              |
| `optionsLevel`                                                                                               | [components.OptionsLevel](../../models/components/optionslevel.md)                                           | :heavy_check_mark:                                                                                           | Requested options level                                                                                      | OPTIONS_LEVEL_2_LONG_OPTIONS                                                                                 |
| `totalYearsOptionsTradingExperience`                                                                         | *number*                                                                                                     | :heavy_check_mark:                                                                                           | Total years of options trading experience                                                                    | 0                                                                                                            |