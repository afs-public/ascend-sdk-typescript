# CashJournalsCancelCashJournalRequest

## Example Usage

```typescript
import { CashJournalsCancelCashJournalRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: CashJournalsCancelCashJournalRequest = {
  cashJournalId: "20240717000319",
  cancelCashJournalRequestCreate: {
    name: "cashJournals/20240717000319",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `cashJournalId`                                                                                        | *string*                                                                                               | :heavy_check_mark:                                                                                     | The cashJournal id.                                                                                    | 20240717000319                                                                                         |
| `cancelCashJournalRequestCreate`                                                                       | [components.CancelCashJournalRequestCreate](../../models/components/cancelcashjournalrequestcreate.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |                                                                                                        |