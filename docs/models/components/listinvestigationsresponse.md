# ListInvestigationsResponse

ListInvestigationStatesResponse

## Example Usage

```typescript
import { ListInvestigationsResponse } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ListInvestigationsResponse = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `investigations`                                                                       | [components.Investigation](../../models/components/investigation.md)[]                 | :heavy_minus_sign:                                                                     | List of investigations matching request search criteria                                |                                                                                        |
| `nextPageToken`                                                                        | *string*                                                                               | :heavy_minus_sign:                                                                     | The next pagination token in the Search response; an empty value means no more results | ZXhhbXBsZQo                                                                            |