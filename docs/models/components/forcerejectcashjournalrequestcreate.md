# ForceRejectCashJournalRequestCreate

Request to force reject a pending cash journal

## Example Usage

```typescript
import { ForceRejectCashJournalRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ForceRejectCashJournalRequestCreate = {
  name: "cashJournals/20230817000319",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `name`                                                 | *string*                                               | :heavy_check_mark:                                     | The name of the cash journal to force reject           | cashJournals/20230817000319                            |
| `reason`                                               | *string*                                               | :heavy_minus_sign:                                     | The optional reason for force rejecting a cash journal | Forced rejection test                                  |