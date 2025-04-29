# InvestmentVehicleExperienceCreate

Investment vehicle experience

## Example Usage

```typescript
import { InvestmentVehicleExperienceCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: InvestmentVehicleExperienceCreate = {
  commoditiesAverageAnnualTradeCount: 500,
  corporateBondsAverageAnnualTradeCount: 500,
  fundsAverageAnnualTradeCount: 500,
  governmentBondsAverageAnnualTradeCount: 500,
  marginAverageAnnualTradeCount: 500,
  municipalBondsAverageAnnualTradeCount: 0,
  optionsAverageAnnualTradeCount: 500,
  stocksAverageAnnualTradeCount: 0,
  taxSheltersAverageAnnualTradeCount: 500,
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `commoditiesAverageAnnualTradeCount`                          | *number*                                                      | :heavy_check_mark:                                            | The number of average annual trades of commodities            | 500                                                           |
| `corporateBondsAverageAnnualTradeCount`                       | *number*                                                      | :heavy_check_mark:                                            | The number of average annual trades of corporate bonds        | 500                                                           |
| `fundsAverageAnnualTradeCount`                                | *number*                                                      | :heavy_check_mark:                                            | The number of average annual trades of funds                  | 500                                                           |
| `governmentBondsAverageAnnualTradeCount`                      | *number*                                                      | :heavy_check_mark:                                            | The number of average annual trades of government bonds       | 500                                                           |
| `marginAverageAnnualTradeCount`                               | *number*                                                      | :heavy_check_mark:                                            | The number of average annual trades in margin accounts        | 500                                                           |
| `municipalBondsAverageAnnualTradeCount`                       | *number*                                                      | :heavy_check_mark:                                            | The number of average annual trades of municipal bonds        | 0                                                             |
| `optionsAverageAnnualTradeCount`                              | *number*                                                      | :heavy_check_mark:                                            | The number of average annual trades of options                | 500                                                           |
| `stocksAverageAnnualTradeCount`                               | *number*                                                      | :heavy_check_mark:                                            | The number of average annual trades of stocks                 | 0                                                             |
| `taxSheltersAverageAnnualTradeCount`                          | *number*                                                      | :heavy_check_mark:                                            | The number of average annual trades in tax sheltered accounts | 500                                                           |