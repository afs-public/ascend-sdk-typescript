# Note

A note attached to an account.

## Example Usage

```typescript
import { Note } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: Note = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `content`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | The content of the note.                                                                      | Customer requested account review                                                             |
| `createTime`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The time the note was created.                                                                | 2024-01-15T10:30:00Z                                                                          |
| `creator`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the user who created the note.                                                      | 01HMVMCQW2VHT80RW42P7RSTVS                                                                    |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The resource name of the note. Format: accounts/{account}/notes/{note}                        | accounts/01HC3MAQ4DR9QN1V8MJ4CN1HMK/notes/8096110d-fb55-4f9d-b883-b84f0b70d3ea                |
| `noteId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | A system-generated unique identifier for the note.                                            | 8096110d-fb55-4f9d-b883-b84f0b70d3ea                                                          |