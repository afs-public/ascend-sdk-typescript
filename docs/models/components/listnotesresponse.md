# ListNotesResponse

The response for listing Notes.

## Example Usage

```typescript
import { ListNotesResponse } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ListNotesResponse = {};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `nextPageToken`                                                                                                                | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | A token to retrieve the next page of results. Pass this value in the `page_token` field in the subsequent call to `ListNotes`. | eyJvZmZzZXQiOjEwMH0=                                                                                                           |
| `notes`                                                                                                                        | [components.Note](../../models/components/note.md)[]                                                                           | :heavy_minus_sign:                                                                                                             | The notes for the specified parent.                                                                                            |                                                                                                                                |