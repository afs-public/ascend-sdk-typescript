# AssetTradability

Indicators to determine what types of orders allowed to be traded

## Example Usage

```typescript
import { AssetTradability } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AssetTradability = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `closeFractionalQuantityEnabled`                                 | *boolean*                                                        | :heavy_minus_sign:                                               | Indicates whether fractional quantities are allowed to be closed | true                                                             |
| `closeNotionalQuantityEnabled`                                   | *boolean*                                                        | :heavy_minus_sign:                                               | Indicates whether notional quantities are allowed to be closed   | true                                                             |
| `closeWholeQuantityEnabled`                                      | *boolean*                                                        | :heavy_minus_sign:                                               | Indicates whether whole quantities are allowed to be closed      | true                                                             |
| `openFractionalQuantityEnabled`                                  | *boolean*                                                        | :heavy_minus_sign:                                               | Indicates whether fractional quantities are allowed to be opened | true                                                             |
| `openNotionalQuantityEnabled`                                    | *boolean*                                                        | :heavy_minus_sign:                                               | Indicates whether notional quantities are allowed to be opened   | true                                                             |
| `openWholeQuantityEnabled`                                       | *boolean*                                                        | :heavy_minus_sign:                                               | Indicates whether whole quantities are allowed to be opened      | true                                                             |