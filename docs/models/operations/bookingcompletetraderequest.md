# BookingCompleteTradeRequest

## Example Usage

```typescript
import { BookingCompleteTradeRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: BookingCompleteTradeRequest = {
  accountId: "02HASWB2DTMRT3DAM45P56J2T2",
  tradeId: "01J0XX2KDN3M9QKFKRE2HYSCQM",
  completeTradeRequestCreate: {
    name:
      "accounts/02HASWB2DTMRT3DAM45P56J2T2/trades/01J0XX2KDN3M9QKFKRE2HYSCQM",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `accountId`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | The account id.                                                                                | 02HASWB2DTMRT3DAM45P56J2T2                                                                     |
| `tradeId`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | The trade id.                                                                                  | 01J0XX2KDN3M9QKFKRE2HYSCQM                                                                     |
| `completeTradeRequestCreate`                                                                   | [components.CompleteTradeRequestCreate](../../models/components/completetraderequestcreate.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |