# OptionAdjustment

Object containing metadata for option adjustments

## Example Usage

```typescript
import { OptionAdjustment } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OptionAdjustment = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `disbursedAssetId`                                                         | *string*                                                                   | :heavy_minus_sign:                                                         | Asset Id of the new security after the option adjustment was processed     | 1001                                                                       |
| `disbursedSymbol`                                                          | *string*                                                                   | :heavy_minus_sign:                                                         | Symbol of the new security after the option adjustment was processed       | AAPL210416C00120000                                                        |
| `targetAssetId`                                                            | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        | 1000                                                                       |
| `targetSymbol`                                                             | *string*                                                                   | :heavy_minus_sign:                                                         | Symbol of the existing security before the option adjustment was processed | AAPL210416C00120000                                                        |