# CashJournalsForceApproveCashJournalRequest

## Example Usage

```typescript
import { CashJournalsForceApproveCashJournalRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: CashJournalsForceApproveCashJournalRequest = {
  cashJournalId: "20230817000319",
  forceApproveCashJournalRequestCreate: {
    name: "cashJournals/20230817000319",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `cashJournalId`                                                                                                    | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The cashJournal id.                                                                                                | 20230817000319                                                                                                     |
| `forceApproveCashJournalRequestCreate`                                                                             | [components.ForceApproveCashJournalRequestCreate](../../models/components/forceapprovecashjournalrequestcreate.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |                                                                                                                    |