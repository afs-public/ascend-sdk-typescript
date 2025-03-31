# RightsOfAccumulation

Rights of Accumulation (ROA). An ROA allows an investor to aggregate their own fund shares with the holdings of certain related parties toward achieving the investment thresholds at which sales charge discounts become available.

## Example Usage

```typescript
import { RightsOfAccumulation } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: RightsOfAccumulation = {};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                         | [components.OrderRightsOfAccumulationAmount](../../models/components/orderrightsofaccumulationamount.md)         | :heavy_minus_sign:                                                                                               | The amount of the ROA. This is a monetary value in the same currency as the order. Only 9999999.99 is supported. | {<br/>"value": "9999999.99"<br/>}                                                                                |