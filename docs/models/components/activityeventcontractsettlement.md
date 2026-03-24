# ActivityEventContractSettlement

Used to record the settlement/payout of event contracts based on real-world event outcomes

## Example Usage

```typescript
import { ActivityEventContractSettlement } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ActivityEventContractSettlement = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `exchange`                                                               | *string*                                                                 | :heavy_minus_sign:                                                       | The exchange that issued the event contract                              | KALSHI                                                                   |
| `outcome`                                                                | [components.ActivityOutcome](../../models/components/activityoutcome.md) | :heavy_minus_sign:                                                       | The determined outcome of the event                                      | FAVORABLE                                                                |