# ListLegalEntitiesResponse

The response to list Legal Entities.

## Example Usage

```typescript
import { ListLegalEntitiesResponse } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ListLegalEntitiesResponse = {};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `legalEntities`                                                                                                                | [components.LegalEntity](../../models/components/legalentity.md)[]                                                             | :heavy_minus_sign:                                                                                                             | The list of available legal entities                                                                                           |                                                                                                                                |
| `nextPageToken`                                                                                                                | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. | AbTYnwAkMjIyZDNjYTAtZmVjZS00N2Q5LTgyMDctNzI3MDdkMjFiZ3hh                                                                       |