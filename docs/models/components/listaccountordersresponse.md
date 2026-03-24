# ListAccountOrdersResponse

The response message containing a list of orders for an account

## Example Usage

```typescript
import { ListAccountOrdersResponse } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ListAccountOrdersResponse = {};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      | Example                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `nextPageToken`                                                                                                                                  | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | The token that must be provided on the next List request to retrieve the next page of data. This field will be empty if there are no more pages. | CiAKGjBpNDd2Nmp2Zml2cXRwYjBpOXA                                                                                                                  |
| `orders`                                                                                                                                         | [components.Order](../../models/components/order.md)[]                                                                                           | :heavy_minus_sign:                                                                                                                               | The orders belonging to the requested account, and which match the filter criteria.                                                              |                                                                                                                                                  |