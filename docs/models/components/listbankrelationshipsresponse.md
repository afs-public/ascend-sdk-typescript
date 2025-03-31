# ListBankRelationshipsResponse

Returns bank relationships for a parent account.

## Example Usage

```typescript
import { ListBankRelationshipsResponse } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ListBankRelationshipsResponse = {};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `bankRelationships`                                                                                                            | [components.BankRelationship](../../models/components/bankrelationship.md)[]                                                   | :heavy_minus_sign:                                                                                                             | The bank relationships from the specified account.                                                                             |                                                                                                                                |
| `nextPageToken`                                                                                                                | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. | CMFRGgYQup3BhQgaCSkAQCKS7AAAAA==                                                                                               |