# RebookTradeResponseOriginalTradeRouteType

Route type for the trade.

## Example Usage

```typescript
import { RebookTradeResponseOriginalTradeRouteType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: RebookTradeResponseOriginalTradeRouteType =
  RebookTradeResponseOriginalTradeRouteType.Mngd;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `RouteTypeUnspecified` | ROUTE_TYPE_UNSPECIFIED |
| `Dma`                  | DMA                    |
| `Mngd`                 | MNGD                   |
| `Quik`                 | QUIK                   |
| `Algo`                 | ALGO                   |
| `Away`                 | AWAY                   |
| `Corr`                 | CORR                   |
| `Boats`                | BOATS                  |
| -                      | `Unrecognized<string>` |