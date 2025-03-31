# ForceApproveCashJournalRequestCreate

Request to force approve a pending cash journal

## Example Usage

```typescript
import { ForceApproveCashJournalRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ForceApproveCashJournalRequestCreate = {
  name: "cashJournals/20230817000319",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   | Example                                       |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `name`                                        | *string*                                      | :heavy_check_mark:                            | The name of the cash journal to force approve | cashJournals/20230817000319                   |