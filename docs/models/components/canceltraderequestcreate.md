# CancelTradeRequestCreate

A request for canceling all executions underneath a trade.

## Example Usage

```typescript
import { CancelTradeRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CancelTradeRequestCreate = {
  name:
    "accounts/01FAKEACCOUNT1TYKWEYRH8S2K/trades/01FAKETRADEIDPROVIDEDFROMCREATETRADE",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `name`                                                                          | *string*                                                                        | :heavy_check_mark:                                                              | The name of the trade to cancel.                                                | accounts/01FAKEACCOUNT1TYKWEYRH8S2K/trades/01FAKETRADEIDPROVIDEDFROMCREATETRADE |