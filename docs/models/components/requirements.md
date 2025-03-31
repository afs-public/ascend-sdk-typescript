# Requirements

Margin Requirements fields returned from the request.

## Example Usage

```typescript
import { Requirements } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: Requirements = {};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `totalExcessAmount`                                                                                                                | [components.TotalExcessAmount](../../models/components/totalexcessamount.md)                                                       | :heavy_minus_sign:                                                                                                                 | The total_excess_amount is the total equity in the account minus the requirements in USD, returned from the request.               | {<br/>"value": "100.00"<br/>}                                                                                                      |
| `totalRequirementsAmount`                                                                                                          | [components.TotalRequirementsAmount](../../models/components/totalrequirementsamount.md)                                           | :heavy_minus_sign:                                                                                                                 | The total_requirements_amount is the total requirement amount for positions held in the account in USD, returned from the request. | {<br/>"value": "100.00"<br/>}                                                                                                      |