# ListEntitlementsResponse

The response to list Entitlements on an Account.

## Example Usage

```typescript
import { ListEntitlementsResponse } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ListEntitlementsResponse = {};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `entitlements`                                                                                                                 | [components.Entitlement](../../models/components/entitlement.md)[]                                                             | :heavy_minus_sign:                                                                                                             | The list of Entitlements on an Account                                                                                         |                                                                                                                                |
| `nextPageToken`                                                                                                                | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. | 4ZHd3wAaMD1IQ0ZKS2BKV0FSRVdLW4VLWkY1R1B3MU4                                                                                    |