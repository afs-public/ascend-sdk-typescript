# EventContractSettlement

Used to record the settlement/payout of event contracts based on real-world event outcomes

## Example Usage

```typescript
import { EventContractSettlement } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EventContractSettlement = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `exchange`                                               | *string*                                                 | :heavy_minus_sign:                                       | The exchange that issued the event contract              | KALSHI                                                   |
| `outcome`                                                | [components.Outcome](../../models/components/outcome.md) | :heavy_minus_sign:                                       | The determined outcome of the event                      | FAVORABLE                                                |