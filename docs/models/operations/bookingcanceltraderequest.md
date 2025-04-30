# BookingCancelTradeRequest

## Example Usage

```typescript
import { BookingCancelTradeRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: BookingCancelTradeRequest = {
  accountId: "01FAKEACCOUNT1TYKWEYRH8S2K",
  tradeId: "01FAKETRADEIDPROVIDEDFROMCREATETRADE",
  cancelTradeRequestCreate: {
    name:
      "accounts/01FAKEACCOUNT1TYKWEYRH8S2K/trades/01FAKETRADEIDPROVIDEDFROMCREATETRADE",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `accountId`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | The account id.                                                                            | 01FAKEACCOUNT1TYKWEYRH8S2K                                                                 |
| `tradeId`                                                                                  | *string*                                                                                   | :heavy_check_mark:                                                                         | The trade id.                                                                              | 01FAKETRADEIDPROVIDEDFROMCREATETRADE                                                       |
| `cancelTradeRequestCreate`                                                                 | [components.CancelTradeRequestCreate](../../models/components/canceltraderequestcreate.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |