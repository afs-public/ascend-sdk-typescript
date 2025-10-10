# ListCorrespondentOrdersResponse

The response message containing a list of orders

## Example Usage

```typescript
import { ListCorrespondentOrdersResponse } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ListCorrespondentOrdersResponse = {};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      | Example                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `nextPageToken`                                                                                                                                  | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | The token that must be provided on the next List request to retrieve the next page of data. This field will be empty if there are no more pages. | CiAKGjBpNDd2Nmp2Zml2cXRwYjBpOXA                                                                                                                  |
| `orders`                                                                                                                                         | [components.Order](../../models/components/order.md)[]                                                                                           | :heavy_minus_sign:                                                                                                                               | The orders belonging to the requested parent resource, and which match the filter criteria.                                                      |                                                                                                                                                  |