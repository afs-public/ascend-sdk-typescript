# OrderCostPreviewResponseIdentifierType

The identifier type of the asset used for price calculations. This will be the same value as what was sent on the request.

## Example Usage

```typescript
import { OrderCostPreviewResponseIdentifierType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OrderCostPreviewResponseIdentifierType =
  OrderCostPreviewResponseIdentifierType.Cusip;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `AssetId`              | ASSET_ID               |
| `Cusip`                | CUSIP                  |
| `Isin`                 | ISIN                   |
| -                      | `Unrecognized<string>` |