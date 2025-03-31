# Withholding

## Example Usage

```typescript
import { Withholding } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: Withholding = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `amount`                                                                     | [components.WithholdingAmount](../../models/components/withholdingamount.md) | :heavy_minus_sign:                                                           | Monetary amount associated with the withholding                              | {<br/>"value": "0.25"<br/>}                                                  |
| `rate`                                                                       | [components.WithholdingRate](../../models/components/withholdingrate.md)     | :heavy_minus_sign:                                                           | The rate at which monies were withheld                                       | {<br/>"value": "0.25"<br/>}                                                  |
| `state`                                                                      | [components.WithholdingState](../../models/components/withholdingstate.md)   | :heavy_minus_sign:                                                           | N/A                                                                          | WA                                                                           |
| `taxYear`                                                                    | *number*                                                                     | :heavy_minus_sign:                                                           | The tax year associated with the withholding                                 | 2024                                                                         |
| `type`                                                                       | [components.WithholdingType1](../../models/components/withholdingtype1.md)   | :heavy_minus_sign:                                                           | Describes the type of the withholding (Federal, State, etc.)                 | FEDERAL                                                                      |