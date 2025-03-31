# ListEnrollmentsResponse

The response to list Enrollments on an Account.

## Example Usage

```typescript
import { ListEnrollmentsResponse } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ListEnrollmentsResponse = {};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `enrollments`                                                                                                                  | [components.Enrollment](../../models/components/enrollment.md)[]                                                               | :heavy_minus_sign:                                                                                                             | The list of available enrollments                                                                                              |                                                                                                                                |
| `nextPageToken`                                                                                                                | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. | 4ZHd3wAaMD1IQ0ZKS2BKV0FSRVdLW4VLWkY1R1B3MU4                                                                                    |