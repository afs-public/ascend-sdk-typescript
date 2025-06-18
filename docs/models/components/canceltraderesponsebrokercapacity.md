# CancelTradeResponseBrokerCapacity

Broker capacity for the trade.

## Example Usage

```typescript
import { CancelTradeResponseBrokerCapacity } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CancelTradeResponseBrokerCapacity =
  CancelTradeResponseBrokerCapacity.Agency;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `CapacityUnspecified`  | CAPACITY_UNSPECIFIED   |
| `Agency`               | AGENCY                 |
| `Principal`            | PRINCIPAL              |
| `Mixed`                | MIXED                  |
| -                      | `Unrecognized<string>` |