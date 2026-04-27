# AccountsListNotesRequest

## Example Usage

```typescript
import { AccountsListNotesRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: AccountsListNotesRequest = {
  accountId: "01HC3MAQ4DR9QN1V8MJ4CN1HMK",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `accountId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | The account id.                                                                      | 01HC3MAQ4DR9QN1V8MJ4CN1HMK                                                           |
| `pageSize`                                                                           | *number*                                                                             | :heavy_minus_sign:                                                                   | The maximum number of notes to return. The service may return fewer than this value. |                                                                                      |
| `pageToken`                                                                          | *string*                                                                             | :heavy_minus_sign:                                                                   | A page token, received from a previous `ListNotes` call.                             |                                                                                      |
| `orderBy`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | The order in which notes are listed. Supported fields: `create_time`.                |                                                                                      |