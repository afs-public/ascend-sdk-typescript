# CompressedOrderRightsOfAccumulation

Rights of Accumulation (ROA). An ROA allows an investor to aggregate their own fund shares with the holdings of certain related parties toward achieving the investment thresholds at which sales charge discounts become available. Either ROA or LOI may be specified, but not both.

## Example Usage

```typescript
import { CompressedOrderRightsOfAccumulation } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CompressedOrderRightsOfAccumulation = {};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                                     | [components.CompressedOrderRightsOfAccumulationAmount](../../models/components/compressedorderrightsofaccumulationamount.md) | :heavy_minus_sign:                                                                                                           | The amount of the ROA. This is a monetary value in the same currency as the order. Only 9999999.99 is supported.             | {<br/>"value": "9999999.99"<br/>}                                                                                            |