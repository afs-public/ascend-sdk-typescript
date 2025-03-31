# Equity

Equity specific asset details

## Example Usage

```typescript
import { Equity } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: Equity = {};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `fractionable`                                                                                           | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | Indicates whether the symbol is eligible for fractional or notional execution for orders at Apex         | true                                                                                                     |
| `liquidate`                                                                                              | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | Indicates whether the symbol is designated as “Liquidate Only,” and, if so, the system rejects purchases | true                                                                                                     |
| `type`                                                                                                   | [components.AssetEquityType](../../models/components/assetequitytype.md)                                 | :heavy_minus_sign:                                                                                       | the code indicating the type of associated security.                                                     | COMMON_STOCK                                                                                             |