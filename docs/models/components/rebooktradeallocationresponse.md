# RebookTradeAllocationResponse

Rebooking a trade allocation will always return a new resource that contains the rebooked trade allocation.

## Example Usage

```typescript
import { RebookTradeAllocationResponse } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: RebookTradeAllocationResponse = {};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `newTradeAllocation`                                                                     | [components.NewTradeAllocation](../../models/components/newtradeallocation.md)           | :heavy_minus_sign:                                                                       | The new trade allocation that is booked.                                                 |
| `originalTradeAllocation`                                                                | [components.OriginalTradeAllocation](../../models/components/originaltradeallocation.md) | :heavy_minus_sign:                                                                       | The original trade allocation that was rebooked.                                         |