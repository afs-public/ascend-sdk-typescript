# AssetBuyingPowerRequirements

Margin Requirements fields returned from the request.

## Example Usage

```typescript
import { AssetBuyingPowerRequirements } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AssetBuyingPowerRequirements = {};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `totalExcessAmount`                                                                                                                | [components.AssetBuyingPowerTotalExcessAmount](../../models/components/assetbuyingpowertotalexcessamount.md)                       | :heavy_minus_sign:                                                                                                                 | The total_excess_amount is the total equity in the account minus the requirements in USD, returned from the request.               | {<br/>"value": "100.00"<br/>}                                                                                                      |
| `totalRequirementsAmount`                                                                                                          | [components.AssetBuyingPowerTotalRequirementsAmount](../../models/components/assetbuyingpowertotalrequirementsamount.md)           | :heavy_minus_sign:                                                                                                                 | The total_requirements_amount is the total requirement amount for positions held in the account in USD, returned from the request. | {<br/>"value": "100.00"<br/>}                                                                                                      |