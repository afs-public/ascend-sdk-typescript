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

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `name`                                                                                | *string*                                                                              | :heavy_check_mark:                                                                    | Format: correspondents/{correspondent}/baskets/{basket}                               | correspondents/01HPMZZM6RKMVZA1JQ63RQKJRP/baskets/fffd326-72fa-4d2b-bd1f-45384fe5d521 |