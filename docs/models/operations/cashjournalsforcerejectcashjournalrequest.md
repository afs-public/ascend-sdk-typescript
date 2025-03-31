# CashJournalsForceRejectCashJournalRequest

## Example Usage

```typescript
import { CashJournalsForceRejectCashJournalRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: CashJournalsForceRejectCashJournalRequest = {
  cashJournalId: "20230817000319",
  forceRejectCashJournalRequestCreate: {
    name: "cashJournals/20230817000319",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `cashJournalId`                                                                                                  | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The cashJournal id.                                                                                              | 20230817000319                                                                                                   |
| `forceRejectCashJournalRequestCreate`                                                                            | [components.ForceRejectCashJournalRequestCreate](../../models/components/forcerejectcashjournalrequestcreate.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |                                                                                                                  |