# InvestmentVehicleExperience

This captures a user's experience with investment vehicles. It includes details such as the user's average annual trade count for various investment vehicles

## Example Usage

```typescript
import { InvestmentVehicleExperience } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: InvestmentVehicleExperience = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `commoditiesAverageAnnualTradeCount`                          | *number*                                                      | :heavy_minus_sign:                                            | The number of average annual trades of commodities            | 500                                                           |
| `corporateBondsAverageAnnualTradeCount`                       | *number*                                                      | :heavy_minus_sign:                                            | The number of average annual trades of corporate bonds        | 500                                                           |
| `fundsAverageAnnualTradeCount`                                | *number*                                                      | :heavy_minus_sign:                                            | The number of average annual trades of funds                  | 500                                                           |
| `governmentBondsAverageAnnualTradeCount`                      | *number*                                                      | :heavy_minus_sign:                                            | The number of average annual trades of government bonds       | 500                                                           |
| `marginAverageAnnualTradeCount`                               | *number*                                                      | :heavy_minus_sign:                                            | The number of average annual trades in margin accounts        | 500                                                           |
| `municipalBondsAverageAnnualTradeCount`                       | *number*                                                      | :heavy_minus_sign:                                            | The number of average annual trades of municipal bonds        | 0                                                             |
| `optionsAverageAnnualTradeCount`                              | *number*                                                      | :heavy_minus_sign:                                            | The number of average annual trades of options                | 500                                                           |
| `stocksAverageAnnualTradeCount`                               | *number*                                                      | :heavy_minus_sign:                                            | The number of average annual trades of stocks                 | 0                                                             |
| `taxSheltersAverageAnnualTradeCount`                          | *number*                                                      | :heavy_minus_sign:                                            | The number of average annual trades in tax sheltered accounts | 500                                                           |