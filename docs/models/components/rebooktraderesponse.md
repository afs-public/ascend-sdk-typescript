# RebookTradeResponse

A response for the rebook trade method.

## Example Usage

```typescript
import { RebookTradeResponse } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: RebookTradeResponse = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `newTrade`                                                           | [components.NewTrade](../../models/components/newtrade.md)           | :heavy_minus_sign:                                                   | The new trade that is booked.                                        |
| `originalTrade`                                                      | [components.OriginalTrade](../../models/components/originaltrade.md) | :heavy_minus_sign:                                                   | The original trade that was rebooked.                                |