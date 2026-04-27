# AccountsCreateNoteRequest

## Example Usage

```typescript
import { AccountsCreateNoteRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: AccountsCreateNoteRequest = {
  accountId: "01HC3MAQ4DR9QN1V8MJ4CN1HMK",
  noteCreate: {
    content: "Customer requested account review",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `accountId`                                                    | *string*                                                       | :heavy_check_mark:                                             | The account id.                                                | 01HC3MAQ4DR9QN1V8MJ4CN1HMK                                     |
| `noteCreate`                                                   | [components.NoteCreate](../../models/components/notecreate.md) | :heavy_check_mark:                                             | N/A                                                            |                                                                |