# ActivityExpiration

Used to record the removal of positions in options assets that have reached or passed their expiration date and expired worthless

## Example Usage

```typescript
import { ActivityExpiration } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ActivityExpiration = {};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `doNotExercise`                                                                                                | *boolean*                                                                                                      | :heavy_minus_sign:                                                                                             | Indicates that instructions were received by Apex to not exercise an option contract that expired in the money | true                                                                                                           |
| `moneyness`                                                                                                    | [components.ActivityMoneyness](../../models/components/activitymoneyness.md)                                   | :heavy_minus_sign:                                                                                             | Indicates whether the price of the underlying was above or below the strike price of the option                | IN_THE_MONEY                                                                                                   |