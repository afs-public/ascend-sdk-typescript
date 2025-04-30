# RebookTradeAllocationResponseOriginalTradeAllocationToSide

Denotes the side of the position going into the to_account_id. A to_side of SELL indicates the position will be allocated with a BUY out of the from_account, and a SELL into the to_account.

## Example Usage

```typescript
import { RebookTradeAllocationResponseOriginalTradeAllocationToSide } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: RebookTradeAllocationResponseOriginalTradeAllocationToSide =
  RebookTradeAllocationResponseOriginalTradeAllocationToSide.Buy;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `SideUnspecified`      | SIDE_UNSPECIFIED       |
| `Buy`                  | BUY                    |
| `Sell`                 | SELL                   |
| -                      | `Unrecognized<string>` |