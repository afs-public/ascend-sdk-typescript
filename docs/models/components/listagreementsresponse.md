# ListAgreementsResponse

The response to list Agreements on an Account.

## Example Usage

```typescript
import { ListAgreementsResponse } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ListAgreementsResponse = {};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `agreements`                                                                                                                   | [components.Agreement](../../models/components/agreement.md)[]                                                                 | :heavy_minus_sign:                                                                                                             | The list of Agreements on an Account                                                                                           |                                                                                                                                |
| `nextPageToken`                                                                                                                | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. | 4ZHd3wAaMD1IQ0ZKS2BKV0FSRVdLW4VLWkY1R1B3MU4                                                                                    |