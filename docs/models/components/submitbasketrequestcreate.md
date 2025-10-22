# SubmitBasketRequestCreate

The message to submit a basket for execution in the market

## Example Usage

```typescript
import { SubmitBasketRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: SubmitBasketRequestCreate = {
  name:
    "correspondents/01HPMZZM6RKMVZA1JQ63RQKJRP/baskets/fffd326-72fa-4d2b-bd1f-45384fe5d521",
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        | Example                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `clientBasketSubmitTime`                                                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                      | :heavy_minus_sign:                                                                                                                                                 | Time the basket submission request was sent by the client. This is a required field for clients that we report on behalf of, and it will be validated accordingly. | 2006-01-02T15:04:05Z07:00                                                                                                                                          |
| `name`                                                                                                                                                             | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | Format: correspondents/{correspondent}/baskets/{basket}                                                                                                            | correspondents/01HPMZZM6RKMVZA1JQ63RQKJRP/baskets/fffd326-72fa-4d2b-bd1f-45384fe5d521                                                                              |