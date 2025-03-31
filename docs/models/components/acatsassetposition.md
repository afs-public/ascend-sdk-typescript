# AcatsAssetPosition

The position or amount of the asset

## Example Usage

```typescript
import { AcatsAssetPosition } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AcatsAssetPosition = {};
```

## Fields

| Field                                                                                                                                                                                      | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                | Example                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `quantity`                                                                                                                                                                                 | [components.AcatsAssetQuantity](../../models/components/acatsassetquantity.md)                                                                                                             | :heavy_minus_sign:                                                                                                                                                                         | The quantity of the asset, or the amount if the asset is cash; negative quantity denotes short position or a DEBIT cash balance. Fractional amounts only supported for certain asset types | {<br/>"value": "1.00"<br/>}                                                                                                                                                                |