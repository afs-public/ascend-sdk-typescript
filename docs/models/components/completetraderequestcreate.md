# CompleteTradeRequestCreate

A request for completing a trade.

## Example Usage

```typescript
import { CompleteTradeRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CompleteTradeRequestCreate = {
  name: "accounts/02HASWB2DTMRT3DAM45P56J2T2/trades/01J0XX2KDN3M9QKFKRE2HYSCQM",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `fees`                                                                       | [components.BookingFeeCreate](../../models/components/bookingfeecreate.md)[] | :heavy_minus_sign:                                                           | Client calculated fees to use while completing an existing trade.            |                                                                              |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | The name of the trade to complete.                                           | accounts/02HASWB2DTMRT3DAM45P56J2T2/trades/01J0XX2KDN3M9QKFKRE2HYSCQM        |