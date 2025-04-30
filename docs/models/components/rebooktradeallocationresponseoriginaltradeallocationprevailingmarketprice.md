# RebookTradeAllocationResponseOriginalTradeAllocationPrevailingMarketPrice

The price for the instrument that is prevailing in the market. Required for FIXED_INCOME trade allocations when the broker_capacity is PRINCIPAL.

## Example Usage

```typescript
import { RebookTradeAllocationResponseOriginalTradeAllocationPrevailingMarketPrice } from "@apexfintechsolutions/ascend-sdk/models/components";

let value:
  RebookTradeAllocationResponseOriginalTradeAllocationPrevailingMarketPrice =
    {};
```

## Fields

| Field                                                                                                                                                                                                              | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                 | The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details |