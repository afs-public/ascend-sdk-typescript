# ActivityOptionAdjustment

Used to record the adjustment of an options position. Usually these adjustments are due to a corporate action event in the underlying asset, though in rare cases, the OCC may make adjustments for other reasons

## Example Usage

```typescript
import { ActivityOptionAdjustment } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ActivityOptionAdjustment = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `disbursedAssetId`                                                           | *string*                                                                     | :heavy_minus_sign:                                                           | Asset Id of the new security after the option adjustment was processed       | 1001                                                                         |
| `disbursedSymbol`                                                            | *string*                                                                     | :heavy_minus_sign:                                                           | Symbol of the new security after the option adjustment was processed         | AAPL210416C00120000                                                          |
| `targetAssetId`                                                              | *string*                                                                     | :heavy_minus_sign:                                                           | Asset Id of the existing security before the option adjustment was processed | 1000                                                                         |
| `targetSymbol`                                                               | *string*                                                                     | :heavy_minus_sign:                                                           | Symbol of the existing security before the option adjustment was processed   | AAPL210416C00120000                                                          |