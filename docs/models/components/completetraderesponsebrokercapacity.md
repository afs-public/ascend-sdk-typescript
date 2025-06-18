# CompleteTradeResponseBrokerCapacity

Broker capacity for the trade.

## Example Usage

```typescript
import { CompleteTradeResponseBrokerCapacity } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CompleteTradeResponseBrokerCapacity =
  CompleteTradeResponseBrokerCapacity.Agency;
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