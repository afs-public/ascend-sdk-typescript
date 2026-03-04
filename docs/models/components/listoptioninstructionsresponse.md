# ListOptionInstructionsResponse

Response containing a paginated list of option instructions

## Example Usage

```typescript
import { ListOptionInstructionsResponse } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ListOptionInstructionsResponse = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `instructions`                                                                                   | [components.OptionInstruction](../../models/components/optioninstruction.md)[]                   | :heavy_minus_sign:                                                                               | The list of instruction resources matching the request.                                          |                                                                                                  |
| `nextPageToken`                                                                                  | *string*                                                                                         | :heavy_minus_sign:                                                                               | A token to retrieve the next page of results, or empty if there are no more results in the list. | eyJvZmZzZXQiOjEwMH0=                                                                             |