# ListLegalNaturalPersonsResponse

The response to list Legal Natural Persons.

## Example Usage

```typescript
import { ListLegalNaturalPersonsResponse } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ListLegalNaturalPersonsResponse = {};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `legalNaturalPersons`                                                                                                          | [components.LegalNaturalPerson](../../models/components/legalnaturalperson.md)[]                                               | :heavy_minus_sign:                                                                                                             | The list of available legal natural persons                                                                                    |                                                                                                                                |
| `nextPageToken`                                                                                                                | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. | AbTYnwAkMjIyZDNjYTAtZmVjZS00N2Q5LTgyMDctNzI3MDdkMjFiZ3hh                                                                       |